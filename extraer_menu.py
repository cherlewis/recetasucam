import streamlit as st
import pdfplumber
import json
import re

st.set_page_config(page_title="Extractor de Menús", page_icon="🥦", layout="centered")

st.title("🥦 Extractor de Menús a JS")
st.write("Extractor ultra-preciso basado en el mapa de columnas (Lunes=Col 2, Domingo=Col 8).")

nombre_menu = st.text_input("Nombre del Menú (ej: Menú 8 - María Salud)", "Menú Nuevo")
archivo_pdf = st.file_uploader("Sube el PDF del menú semanal", type=["pdf"])

def extraer_menu_pdf(pdf_file, nombre):
    dias_semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    
    semana = []
    for dia in dias_semana:
        semana.append({
            "dia": dia,
            "comidas": {
                "desayuno": [],
                "segundoDesayuno": [],
                "almuerzo": [],
                "merienda": [],
                "cena": []
            }
        })
        
    objetivos = []
    
    mapa_comidas = {
        "segundo desayuno": "segundoDesayuno",
        "desayuno": "desayuno",
        "almuerzo": "almuerzo",
        "merienda": "merienda",
        "cena": "cena"
    }
    
    comida_actual = None

    with pdfplumber.open(pdf_file) as pdf:
        for pagina in pdf.pages:
            tablas = pagina.extract_tables()
            for tabla in tablas:
                for fila in tabla:
                    celdas = [str(c).strip() if c else "" for c in fila]
                    
                    # Rellenamos con vacíos para asegurar que SIEMPRE haya 8 columnas (Cabecera + 7 días)
                    while len(celdas) < 8:
                        celdas.append("")
                        
                    # Comprobamos si la fila está totalmente vacía
                    if not any(celdas): 
                        continue
                        
                    # Leemos la primera columna para saber en qué comida estamos
                    col_0 = celdas[0].lower()
                    
                    # Ignorar las filas de los títulos de los días
                    if "lunes" in col_0 or "lunes" in celdas[1].lower():
                        continue
                    
                    # Detectar cambio de comida
                    for clave_pdf, clave_js in mapa_comidas.items():
                        if clave_pdf in col_0:
                            comida_actual = clave_js
                            break
                            
                    # TU PISTA DE ORO: Si ya sabemos la comida, leemos de la columna 2 a la 8
                    if comida_actual:
                        # celdas[1:8] coge exactamente del Lunes (índice 1) al Domingo (índice 7)
                        dias_textos = celdas[1:8] 
                        
                        for idx_dia, texto_celda in enumerate(dias_textos):
                            if not texto_celda: 
                                continue
                            
                            lineas = texto_celda.split('\n')
                            
                            for linea in lineas:
                                linea = linea.strip()
                                # Limpiar símbolos raros de inicio
                                linea = re.sub(r'^[-•%*]\s*', '', linea)
                                if not linea: 
                                    continue
                                
                                # Evitar añadir el título de la comida como plato
                                if comida_actual.lower() in linea.lower() and len(linea) < 20:
                                    continue
                                
                                lista_comida = semana[idx_dia]["comidas"][comida_actual]
                                
                                # LOGICA DE UNIÓN DE TEXTOS:
                                # Si empieza por MAYÚSCULA o NÚMERO -> Es un plato nuevo
                                if re.match(r'^[A-ZÁÉÍÓÚÑ0-9]', linea) or not lista_comida:
                                    lista_comida.append(linea)
                                else:
                                    # Si empieza por minúscula o símbolo (ej. paréntesis) -> Se une al plato anterior
                                    lista_comida[-1] += " " + linea

        # 2. Extraer Objetivos de la página de comentarios
        for pagina in pdf.pages:
            texto = pagina.extract_text()
            if texto and "OBJETIVOS:" in texto:
                lineas = texto.split('\n')
                capturando = False
                for linea in lineas:
                    linea = linea.strip()
                    if "OBJETIVOS:" in linea:
                        capturando = True
                        continue
                    if capturando:
                        if linea.startswith('-'):
                            objetivos.append(linea[1:].strip())
                        elif linea and objetivos:
                            objetivos[-1] += " " + linea

    # 3. Limpieza: Eliminar las comidas que no tengan ningún plato asignado
    for dia_data in semana:
        comidas_limpias = {}
        for comida, platos in dia_data["comidas"].items():
            if platos:
                comidas_limpias[comida] = platos
        dia_data["comidas"] = comidas_limpias

    return {"nombre": nombre, "activa": False, "objetivo": objetivos, "semana": semana}

# --- BOTÓN DE PROCESAR ---
if archivo_pdf is not None:
    if st.button("🚀 Extraer Menú", type="primary"):
        with st.spinner("Mapeando columnas y extrayendo platos..."):
            try:
                datos = extraer_menu_pdf(archivo_pdf, nombre_menu)
                
                json_str = json.dumps(datos, ensure_ascii=False, indent=4)
                codigo_js = re.sub(r'"(\w+)":', r'\1:', json_str) 
                
                st.success("¡Extracción completada! 🎉")
                st.write("### Código generado (Cópialo y pégalo en menus.js):")
                st.code(codigo_js + ",", language="javascript")
                
            except Exception as e:
                st.error(f"Hubo un error al leer el PDF: {e}")
