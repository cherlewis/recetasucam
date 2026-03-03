import streamlit as st
import pdfplumber
import json
import re

# --- CONFIGURACIÓN DE LA PÁGINA ---
st.set_page_config(page_title="Extractor de Menús", page_icon="🥦", layout="centered")

st.title("🥦 Extractor de Menús a JS")
st.write("Sube tu PDF de ICNS Health Software. Soporta 4 o 5 comidas dinámicamente.")

# --- INTERFAZ ---
nombre_menu = st.text_input("Nombre del Menú (ej: Menú 8 - María Salud)", "Menú Nuevo")
archivo_pdf = st.file_uploader("Sube el PDF del menú semanal", type=["pdf"])

# --- FUNCIÓN EXTRACTORA ---
def extraer_menu_pdf(pdf_file, nombre):
    dias_semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    
    # Preparamos el molde con las 5 comidas posibles
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
    
    # IMPORTANTE: "segundo desayuno" debe comprobarse ANTES que "desayuno"
    mapa_comidas = {
        "segundo desayuno": "segundoDesayuno",
        "desayuno": "desayuno",
        "almuerzo": "almuerzo",
        "merienda": "merienda",
        "cena": "cena"
    }
    
    comida_actual = None

    with pdfplumber.open(pdf_file) as pdf:
        # 1. Extraer Platos (Tabla)
        for pagina in pdf.pages:
            tablas = pagina.extract_tables()
            for tabla in tablas:
                for fila in tabla:
                    # Filtro para ignorar tablas pequeñas (como las de comentarios)
                    if len(fila) < 7:
                        continue
                        
                    # Limpiar celdas 
                    celdas = [str(c).strip() if c else "" for c in fila]
                    
                    # Rellenar con vacíos si hay menos de 8 columnas
                    while len(celdas) < 8:
                        celdas.append("")
                        
                    if not any(celdas): 
                        continue
                        
                    col_0 = celdas[0].lower()
                    
                    # Evitar procesar la fila de cabecera de los días
                    if "lunes" in col_0 or "lunes" in celdas[1].lower():
                        comida_actual = None
                        continue
                    
                    # Detectar si estamos cambiando de tipo de comida
                    for clave_pdf, clave_js in mapa_comidas.items():
                        if clave_pdf in col_0:
                            comida_actual = clave_js
                            break
                            
                    # Si ya estamos en una comida, leemos de Lunes(1) a Domingo(7)
                    if comida_actual:
                        for idx_dia in range(1, 8):
                            texto_celda = celdas[idx_dia]
                            if not texto_celda: 
                                continue
                            
                            lineas = texto_celda.split('\n')
                            
                            for linea in lineas:
                                linea = linea.strip()
                                if not linea: continue
                                
                                # Quitar viñetas o símbolos raros al inicio
                                linea = re.sub(r'^[-•%*]\s*', '', linea)
                                
                                lista_comida = semana[idx_dia-1]["comidas"][comida_actual]
                                
                                # LÓGICA INTELIGENTE: Mayúscula/Número = Plato nuevo
                                if re.match(r'^[A-ZÁÉÍÓÚÑ0-9]', linea) or not lista_comida:
                                    # Evitar meter el nombre de la comida por error
                                    if len(linea) > 2 and comida_actual.lower() not in linea.lower():
                                        lista_comida.append(linea)
                                else:
                                    # Minúscula/símbolo = Continuación del plato de arriba
                                    if lista_comida:
                                        lista_comida[-1] += " " + linea
                                    else:
                                        if len(linea) > 2:
                                            lista_comida.append(linea)

        # 2. Extraer Objetivos
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

    # 3. LIMPIEZA MÁGICA: Quita las comidas que estén vacías (ej: si no hay desayuno)
    for dia_data in semana:
        comidas_limpias = {}
        for comida, platos in dia_data["comidas"].items():
            if platos: # Solo guarda la comida si tiene platos dentro
                comidas_limpias[comida] = platos
        dia_data["comidas"] = comidas_limpias

    resultado = {
        "nombre": nombre,
        "activa": False,
        "objetivo": objetivos,
        "semana": semana
    }
    
    return resultado

# --- BOTÓN DE PROCESAR ---
if archivo_pdf is not None:
    if st.button("🚀 Extraer Menú", type="primary"):
        with st.spinner("Leyendo y organizando la semana..."):
            try:
                datos = extraer_menu_pdf(archivo_pdf, nombre_menu)
                
                # Generar el código JS
                json_str = json.dumps(datos, ensure_ascii=False, indent=4)
                codigo_js = re.sub(r'"(\w+)":', r'\1:', json_str) 
                
                st.success("¡Extracción completada! 👩‍🍳")
                st.write("### Código generado (Cópialo y pégalo en menus.js):")
                st.code(codigo_js + ",", language="javascript")
                
            except Exception as e:
                st.error(f"Hubo un error al leer el PDF: {e}")
