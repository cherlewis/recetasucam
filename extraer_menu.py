import streamlit as st
import google.generativeai as genai
import json
import re

st.set_page_config(page_title="Extractor IA de Menús", page_icon="🤖", layout="centered")

st.title("🤖 Extractor con Inteligencia Artificial")
st.write("Sube el PDF y deja que la IA lo lea y ordene por ti.")

# Caja para que pongas tu contraseña de Google
api_key = st.text_input("🔑 Pega tu API Key de Google aquí:", type="password")

nombre_menu = st.text_input("Nombre del Menú (ej: Menú 8 - María Salud)", "Menú Nuevo")
archivo_pdf = st.file_uploader("Sube el PDF del menú semanal", type=["pdf"])

if st.button("🚀 Extraer Menú con IA", type="primary"):
    if not api_key:
        st.warning("⚠️ Necesitas poner tu API Key de Google primero.")
    elif not archivo_pdf:
        st.warning("⚠️ Sube un PDF.")
    else:
        with st.spinner("La IA está leyendo y comprendiendo el menú... (tarda unos 15 segundos)"):
            try:
                # 1. Encendemos el cerebro de Google
                genai.configure(api_key=api_key)
                
                # LA SOLUCIÓN ESTÁ AQUÍ: Usamos el nombre oficial y estable del modelo Pro
                modelo = genai.GenerativeModel('gemini-1.5-pro')
                
                # 2. Preparamos el PDF
                documento = {
                    "mime_type": "application/pdf",
                    "data": archivo_pdf.getvalue()
                }
                
                # 3. Le damos las instrucciones de cómo queremos los datos
                prompt = f"""
                Eres un asistente experto en nutrición. Extrae el menú semanal y los objetivos de este PDF.
                Devuelve ÚNICAMENTE un JSON válido con esta estructura exacta, sin texto adicional ni explicaciones:
                {{
                    "nombre": "{nombre_menu}",
                    "activa": false,
                    "objetivo": ["objetivo 1", "objetivo 2"],
                    "semana": [
                        {{
                            "dia": "Lunes",
                            "comidas": {{
                                "desayuno": ["plato 1"],
                                "segundoDesayuno": ["plato 1", "plato 2"],
                                "almuerzo": ["plato 1"],
                                "merienda": ["plato 1"],
                                "cena": ["plato 1"]
                            }}
                        }}
                    ]
                }}
                Reglas obligatorias:
                1. Hay días de Lunes a Domingo.
                2. Si el menú no tiene "Desayuno", deja la lista vacía []. Lo mismo para cualquier otra comida que falte.
                3. Une inteligentemente las frases cortadas (ej: "1 Unidad de" y "yogur natural" lo pones junto).
                4. No inventes platos, copia el texto real del PDF.
                5. Los objetivos sácalos de la sección "Comentarios" o de las últimas páginas.
                6. Devuelve SÓLO el JSON limpio, sin formato de código markdown alrededor.
                """
                
                # 4. Enviamos la orden
                respuesta = modelo.generate_content([prompt, documento])
                texto_respuesta = respuesta.text.strip()
                
                # 5. Limpiamos por si la IA añade cositas extra (```json)
                if texto_respuesta.startswith("```"):
                    texto_respuesta = re.sub(r'^```(json)?|```$', '', texto_respuesta, flags=re.MULTILINE).strip()
                
                # 6. Lo convertimos en código JS perfecto para tu web
                datos_json = json.loads(texto_respuesta)
                json_str = json.dumps(datos_json, ensure_ascii=False, indent=4)
                codigo_js = re.sub(r'"(\w+)":', r'\1:', json_str)
                
                st.success("¡Extracción perfecta conseguida por la Inteligencia Artificial! 🎉")
                st.code(codigo_js + ",", language="javascript")
                
            except Exception as e:
                st.error("Hubo un error al procesar el PDF con la IA.")
                st.write(f"Detalle técnico: {e}")
