import streamlit as st
import pdfplumber
import json
import re

# --- CONFIGURACIÓN DE LA PÁGINA ---
st.set_page_config(page_title="Extractor de Menús", page_icon="🥦", layout="centered")

st.title("🥦 Extractor de Menús a JS")
st.write("Sube tu PDF de ICNS Health Software y conviértelo en código para tu web.")

# --- INTERFAZ ---
nombre_menu = st.text_input("Nombre del Menú (ej: Menú 8 - María Salud)", "Menú Nuevo")
archivo_pdf = st.file_uploader("Sube el PDF del menú semanal", type=["pdf"])

# --- FUNCIÓN EXTRACTORA ---
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
        "desayuno": "desayuno",
        "segundo desayuno": "segundoDesayuno",
        "almuerzo": "almuerzo",
        "merienda": "merienda",
        "cena": "cena"
    }
    
    comida_actual = None

    # pdfplumber lee directamente el archivo subido en Streamlit
    with pdfplumber.open(pdf_file) as pdf:
        # 1. Extraer Platos
        for pagina in pdf.pages:
            tablas = pagina.extract_tables()
            for tabla in tablas:
                for fila in tabla:
                    fila_limpia = [str(celda).strip().replace('\n', ' ') if celda else "" for celda in fila]
                    if not any(fila_limpia): continue
                        
                    columna_0 = fila_limpia[0].lower()
                    
                    for clave_pdf, clave_js in mapa_comidas.items():
                        if clave_pdf in columna_0:
                            comida_actual = clave_js
                            break
                            
                    if comida_actual:
                        for idx_dia in range(1, min(8, len(fila_limpia))):
                            plato = fila_limpia[idx_dia]
                            if plato and len(plato) > 2 and comida_actual.lower() not in plato.lower():
                                plato = re.sub(r'^[-•%]\s*', '', plato)
                                semana[idx_dia-1]["comidas"][comida_actual].append(plato.strip())

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
                            # AQUÍ ESTABA EL ERROR: Decía 'line' en lugar de 'linea'
                            objetivos.append(linea[1:].strip())
                        elif linea and objetivos:
                            objetivos[-1] += " " + linea

    # 3. Limpiar comidas vacías
    for dia_data in semana:
        comidas_limpias = {}
        for comida, platos in dia_data["comidas"].items():
            if platos:
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
        with st.spinner("Procesando PDF..."):
            try:
                datos = extraer_menu_pdf(archivo_pdf, nombre_menu)
                
                # Generar el código JS bonito
                codigo_js = f"    {{\n        nombre: \"{nombre_menu}\",\n        activa: false,\n        objetivo: {json.dumps(datos['objetivo'], ensure_ascii=False, indent=4)},\n        semana: {json.dumps(datos['semana'], ensure_ascii=False, indent=4)}\n    }}"
                codigo_js = re.sub(r'"(\w+)":', r'\1:', codigo_js) # Quitar comillas a las claves JS
                
                st.success("¡Extracción completada con éxito!")
                
                st.write("### Código generado (Cópialo y pégalo en menus.js):")
                st.code(codigo_js + ",", language="javascript")
                
            except Exception as e:
                st.error(f"Hubo un error al leer el PDF: {e}")
