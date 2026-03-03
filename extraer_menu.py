import pdfplumber
import json
import re

def extraer_menu_pdf(ruta_pdf, nombre_menu):
    dias_semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    
    # Estructura base de nuestra semana
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
    
    # Diccionario para mapear los textos del PDF a nuestras variables JS
    mapa_comidas = {
        "desayuno": "desayuno",
        "segundo desayuno": "segundoDesayuno",
        "almuerzo": "almuerzo",
        "merienda": "merienda",
        "cena": "cena"
    }
    
    comida_actual = None

    print(f"📄 Procesando: {ruta_pdf}...")

    with pdfplumber.open(ruta_pdf) as pdf:
        # 1. EXTRAER LA TABLA DE PLATOS (Primeras páginas)
        # Buscamos en las páginas buscando tablas
        for pagina in pdf.pages:
            tablas = pagina.extract_tables()
            
            for tabla in tablas:
                for fila in tabla:
                    # Limpiamos saltos de línea extraños y nulos
                    fila_limpia = [str(celda).strip().replace('\n', ' ') if celda else "" for celda in fila]
                    
                    if not any(fila_limpia):
                        continue # Fila vacía, la saltamos
                        
                    columna_0 = fila_limpia[0].lower()
                    
                    # ¿Es una fila que indica el tipo de comida? (Ej: "Almuerzo")
                    for clave_pdf, clave_js in mapa_comidas.items():
                        if clave_pdf in columna_0:
                            comida_actual = clave_js
                            break
                            
                    # Si ya sabemos en qué comida estamos, leemos los días (columnas 1 a 7)
                    if comida_actual:
                        # Asegurarnos de no salirnos del rango si la tabla se cortó mal
                        for idx_dia in range(1, min(8, len(fila_limpia))):
                            plato = fila_limpia[idx_dia]
                            # Si hay texto y no es el propio título de la comida repetido
                            if plato and len(plato) > 2 and comida_actual.lower() not in plato.lower():
                                # Eliminar guiones iniciales o caracteres raros si los hay
                                plato = re.sub(r'^[-•%]\s*', '', plato)
                                semana[idx_dia-1]["comidas"][comida_actual].append(plato.strip())

        # 2. EXTRAER LOS OBJETIVOS (Suelen estar al final)
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
                        # Si empieza por guion, es un objetivo
                        if linea.startswith('-'):
                            objetivos.append(line[1:].strip())
                        # Si no empieza por guion pero tiene texto, a veces es la continuación de la línea anterior
                        elif linea and objetivos:
                            objetivos[-1] += " " + linea

    # 3. LIMPIAR DATOS (Quitar comidas vacías)
    for dia_data in semana:
        comidas_limpias = {}
        for comida, platos in dia_data["comidas"].items():
            if platos: # Solo lo añadimos si la lista tiene algo
                comidas_limpias[comida] = platos
        dia_data["comidas"] = comidas_limpias

    # 4. CREAR EL OBJETO FINAL
    resultado = {
        "nombre": nombre_menu,
        "activa": False,
        "objetivo": objetivos,
        "semana": semana
    }
    
    return resultado

# --- EJECUCIÓN DEL PROGRAMA ---
if __name__ == "__main__":
    # Cambia estos nombres por los de tus PDFs reales
    archivo_pdf = "2026-02-26 Maria Salud Menu 8.pdf" 
    nombre_del_menu = "Menú 8 - María Salud"
    
    try:
        datos_extraidos = extraer_menu_pdf(archivo_pdf, nombre_del_menu)
        
        # Convertir a formato JS (JSON con indentación bonita)
        json_str = json.dumps(datos_extraidos, ensure_ascii=False, indent=4)
        
        # Limpiar las comillas de las claves para que sea un objeto JS puro (opcional pero queda más limpio)
        json_str = re.sub(r'"(\w+)":', r'\1:', json_str)
        
        # Generar el bloque final de código
        codigo_js = f"    {{\n        nombre: \"{nombre_del_menu}\",\n        activa: false,\n        objetivo: {json.dumps(datos_extraidos['objetivo'], ensure_ascii=False, indent=4)},\n        semana: {json.dumps(datos_extraidos['semana'], ensure_ascii=False, indent=4)}\n    }}"
        codigo_js = re.sub(r'"(\w+)":', r'\1:', codigo_js) # Limpieza final de claves
        
        # Guardarlo en un archivo de texto para que lo copies fácilmente
        with open("menu_generado.txt", "w", encoding="utf-8") as f:
            f.write(codigo_js + ",\n")
            
        print("✅ ¡Extracción completada! Revisa el archivo 'menu_generado.txt'.")
        
    except Exception as e:
        print(f"❌ Ocurrió un error: {e}")
