import streamlit as st
import pdfplumber
import json
import re

# --- CONFIGURACIÓN DE LA PÁGINA ---
st.set_page_config(page_title="Extractor de Menús", page_icon="🥦", layout="centered")

st.title("🥦 Extractor de Menús a JS")
st.write("Sube tu PDF de ICNS Health Software y extrae los platos de forma inteligente.")

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

    with pdfplumber.open(pdf_file) as pdf:
        # 1. Extraer Platos (Tabla)
        for pagina in pdf.pages:
            tablas = pagina.extract_tables()
            for tabla in tablas:
                for fila in tabla:
                    if not any(fila): continue # Fila vacía
                        
                    col_0_texto = str(fila[0]).lower().strip() if fila[0] else ""
                    
                    # Detectar en qué comida estamos
                    if col_0_texto:
                        encontrado = False
                        for clave_pdf, clave_js in mapa_comidas.items():
                            if clave_pdf in col_0_texto:
                                comida_actual = clave_js
                                encontrado = True
                                break
                        if not encontrado:
                            comida_actual = None # Es una cabecera u otra cosa
                            
                    # Extraer los platos de Lunes a Domingo
                    if comida_actual:
                        for idx_dia in range(1, min(8, len(fila))):
                            celda = fila[idx_dia]
                            if not celda: continue
                            
                            # Separar por saltos de línea físicos del PDF
                            lineas = str(celda).split('\n')
                            plato_actual = ""
                            
                            for linea in lineas:
                                linea = linea.strip()
                                if not linea: continue
                                
                                # Quitar viñetas iniciales por si acaso
                                linea_limpia = re.sub(r'^[-•%]\s*', '', linea)
                                
                                # LOGICA INTELIGENTE:
                                # ¿Empieza por Mayúscula o Número? -> Es un nuevo plato
                                if re.match(r'^[A-ZÁÉÍÓÚÑ0-9]', linea_limpia) or not plato_actual:
                                    if plato_actual:
                                        # Guardamos el plato anterior antes de empezar el nuevo
                                        if plato_actual.lower() != comida_actual.lower():
                                            semana[idx_dia-1]["comidas"][comida_actual].append(plato_actual)
                                    plato_actual = linea_limpia
                                else:
                                    # Empieza por minúscula o símbolo -> Es continuación del plato de arriba
                                    plato_actual += " " + linea_limpia
                                    
                            # Guardar el último plato procesado de esa celda
                            if plato_actual:
                                if plato_actual.lower() != comida_actual.lower():
                                    semana[idx_dia-1]["comidas"][comida_actual].append(plato_actual)

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

    # 3. Limpiar comidas vacías para que quede bonito
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
        with st.spinner("Leyendo y organizando los platos..."):
            try:
                datos = extraer_menu_pdf(archivo_pdf, nombre_menu)
                
                # Generar el código JS bonito
                json_str = json.dumps(datos, ensure_ascii=False, indent=4)
                codigo_js = re.sub(r'"(\w+)":', r'\1:', json_str) # Quitar comillas a las claves JS
                
                st.success("¡Extracción completada con éxito!")
                st.write("### Código generado (Cópialo y pégalo en menus.js):")
                st.code(codigo_js + ",", language="javascript")
                
            except Exception as e:
                st.error(f"Hubo un error al leer el PDF: {e}")
