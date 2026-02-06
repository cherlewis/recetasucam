const listaRecetas = [
    {
        id: 1,
        titulo: "Ensalada estilo césar",
        tiempo: "10",
        categoria: [
            "Almuerzo"
        ],
        imagen: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        ingredientes: [
            "100 gramos de lechuga (romana o similar)",
            "20 gramos de zanahorias",
            "4 tomates cherry (60 gr.)",
            "120 gramos de pechuga de pollo",
            "2 Unidades de pan de fibra y sésamo hacendado (19.2 gr.)",
            "1 loncha de queso parmesano (28.4 gr.)",
            "10 gramos de salsa césar hacendado"
        ],
        pasos: [
            "Lavar y trocear la lechuga romana, colocarla como base en un bol o plato grande.",
            "Lavar y cortar los tomates cherry a la mitad. Pelar y rallar la zanahoria. Añadir ambos a la lechuga.",
            "Cocinar la pechuga de pollo a la plancha con un poco de sal y pimienta dejar enfriar unos minutos y cortar en tiras o dados.",
            "Trocear una o dos rebanadas de pan tipo Wasa en pequeños cuadrados para usarlos como “picatostes”.",
            "Incorporar el pollo, el pan y el queso parmesano rallado o en lascas a la ensalada.",
            "Aliñar con la salsa César comercial justo antes de servir y mezclar suavemente."
        ]
    },
    {
        id: 2,
        titulo: "Pasta Carbonara",
        tiempo: "15 min",
        categoria: [
            "Almuerzo"
        ],
        imagen: "https://images.unsplash.com/photo-1612874742237-6526221588e3",
        ingredientes: [
            "Pasta",
            "Huevo",
            "Guanciale",
            "Pimienta"
        ],
        pasos: [
            "Poner las lentejas en remojo la noche anterior.",
            "Cocer las lentejas con las verduras troceadas.",
            "Añadir el chorizo y dejar cocinar a fuego lento 30 min."
        ]
    },
    {
        id: 3,
        titulo: "Tostada de Aguacate",
        tiempo: "5 min",
        categoria: [
            "Desayuno"
        ],
        imagen: "https://images.unsplash.com/photo-1588137372308-15f75323ca8d",
        ingredientes: [
            "Pan",
            "Aguacate",
            "Aceite",
            "Sal"
        ]
    },
    {
        id: 4,
        titulo: "Arroz salteado estilo chino",
        tiempo: "10 min",
        categoria: [
            "Almuerzo"
        ],
        imagen: "https://images.unsplash.com/photo-1588137372308-15f75323ca8d",
        ingredientes: [
            "1 Vasito de vasito arroz integral (microondas) (125 gr.)",
            "1 huevo L (70 gr.)",
            "20 gramos de guisantes verdes congelados",
            "40 gramos de zanahorias",
            "25 gramos de germinados de soja",
            "1 cucharada de salsa de soja a base de soja y trigo (shoyu) (16 gr.)",
            "1 cucharada mediana de aceite de oliva (10 gr.)",
            "4 langostinos cocidos (pelados) (40 gr.)"
        ],
        pasos: [
            "Calentar el vasito de arroz integral en el microondas según las instrucciones del envase. Reservar.",
            "Pelar y picar la zanahoria en dados pequeños. Cocerla con los guisantes durante unos minutos o saltearlos directamente si se desea más textura.",
            "En una sartén o wok, calentar el aceite y saltear las gambas 2–3 minutos, hasta que estén rosadas y cocidas. Retirar y reservar.",
            "En la misma sartén, añadir la zanahoria, los guisantes y los brotes de soja. Saltear a fuegomedio-alto durante 3–4 minutos.",
            "Incorporar el arroz integral y las gambas. Añadir la salsa de soja y saltear todo junto 1–2 minutos para integrar sabores.",
            "Si se desea, agregar un huevo batido y cocinar removiendo para que se mezcle tipo “revuelto”.",
            "Servir caliente."
        ]
    },
    {
        id: 5,
        titulo: "Ensalada variada de verduras",
        tiempo: "10 min",
        categoria: [
            "Almuerzo"
        ],
        imagen: "https://images.unsplash.com/photo-1588137372308-15f75323ca8d",
        ingredientes: [
            "1 Vasito arroz integral",
            "1 Huevo",
            "Aceite De Oliva",
            "Sal"
        ],
        pasos: [
            "Elabora una ensalada variada a tu gusto.",
            "Base: lechuga, espinaca fresca, rúcula, canónigos o mezcla de brotes tiernos.",
            "Añadir el chorizo y dejar cocinar a fuego lento 30 min."
        ]
    },
    {
        id: 101,
        titulo: "Bocadillo de jamón york",
        tiempo: "10 min",
        categoria: [
            "Desayuno",
            "Media Mañana"
        ],
        imagen: "https://images.unsplash.com/photo-1559466273-d95e72debaf8?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "2 rebanadas grandes de pan (60 gr.)",
            "2 lonchas de jamón cocido (56 gr.)",
            "1 hoja de lechuga",
            "2 rodajas finas de tomate",
            "1 loncha de queso light tierno 0%",
            "1 cucharada de aceite de oliva"
        ],
        pasos: [
            "Lavar la lechuga y el tomate; cortar este último en rodajas.",
            "Abrir el pan y tostarlo ligeramente si se desea.",
            "Colocar en la base la lechuga, el tomate y el queso.",
            "Añadir el jamón york, tapar y servir."
        ]
    },
    {
        id: 102,
        titulo: "Tortitas de avena y plátano",
        tiempo: "25 min",
        categoria: [
            "Desayuno",
            "Merienda"
        ],
        ingredientes: [
            "25g harina de avena",
            "1 huevo",
            "20g yogur natural",
            "1 plátano pequeño (101 gr)",
            "1 pizca de canela en polvo (0.3 gr.)",
            "1 gramos de levadura en polvo"
        ],
        pasos: [
            "En un bol grande machacar el plátano hasta que quede como un puré. Añadir el huevo y una cucharada de yogur.",
            "Añadir la harina de avena junto a la canela y mezclar bien. Añadir la levadura y mezclar de manera suave para no romper el aire que se va creando en la mezcla.",
            "En una sartén grande poner un poco de aceite a fuego medio y cuando esté caliente añadir dos montoncitos para hacer las tortitas (vigilar que queden separados). Cuando esté dorada la parte inferior dar la vuelta. Repetir hasta terminar la mezcla."
        ]
    },
    {
        id: 103,
        titulo: "Tostada de hummus con aguacate",
        tiempo: "10 min",
        categoria: [
            "Desayuno"
        ],
        imagen: "https://images.unsplash.com/photo-1541519527329-df1b2ad88363?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "60g pan integral",
            "50g hummus",
            "40g aguacate"
        ],
        pasos: [
            "Tostar el pan.",
            "Untar capa generosa de hummus.",
            "Colocar el aguacate laminado encima.",
            "Opcional: añadir chorrito de limón o sésamo."
        ]
    },
    {
        id: 104,
        titulo: "Bocadillo de pechuga de pollo",
        tiempo: "10 min",
        categoria: [
            "Media Mañana",
            "Cena"
        ],
        imagen: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "60g pan",
            "100g pechuga de pollo",
            "Lechuga, tomate y queso light",
            "Aceite de oliva"
        ],
        pasos: [
            "Cocinar la pechuga a la plancha.",
            "Montar el bocadillo con la base de vegetales y queso.",
            "Añadir el pollo caliente para fundir el queso."
        ]
    },
    {
        id: 201,
        titulo: "Pasta de lenteja roja con atún",
        tiempo: "10 min",
        categoria: [
            "Almuerzo"
        ],
        imagen: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "60g hélices de lenteja roja",
            "50g cebolla y 50g zanahoria",
            "1 lata de atún (o carne picada pollo según receta)",
            "60g salsa de tomate"
        ],
        pasos: [
            "Cocer la pasta según fabricante.",
            "Sofreír cebolla, ajo y zanahoria.",
            "Añadir atún/pollo y tomate. Cocinar 10 min.",
            "Mezclar con la pasta."
        ]
    },
    {
        id: 202,
        titulo: "Gazpacho andaluz (sin pan)",
        tiempo: "15 min",
        categoria: [
            "Almuerzo",
            "Entrante"
        ],
        ingredientes: [
            "2 tomates maduros",
            "1/3 pimiento verde",
            "1/3 pepino",
            "1 cucharadita de aceite de oliva (4.5 gr.)",
            "1/2 cucharada de vinagre de vino (7.5 gr.)",
            "1 pizca de sal (0.4 gr.)"
        ],
        pasos: [
            "Pelar los tomates, se pueden escaldar (hervir unos segundos) previamente para que sea más fácil.",
            "Triturar con el resto de ingredientes."
        ]
    },
    {
        id: 203,
        titulo: "Tortilla de patata",
        tiempo: "30 min",
        categoria: [
            "Almuerzo",
            "Cena"
        ],
        imagen: "https://images.unsplash.com/photo-1662486989736-d8df98056262?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "2 huevos pequeños",
            "1 patata pequeña (170g)",
            "1/2 cebolla",
            "Aceite de oliva"
        ],
        pasos: [
            "Pochar patata y cebolla en aceite hasta que estén tiernas.",
            "Batir huevos. Escurrir patatas del aceite y mezclar.",
            "Cuajar en sartén por ambos lados al gusto."
        ]
    },
    {
        id: 204,
        titulo: "Sopa de pollo con fideos",
        tiempo: "50 min",
        categoria: [
            "Almuerzo"
        ],
        ingredientes: [
            "1 porción de pechuga de pollo (98 gr.)",
            "1 zanahoria (61 gr.)",
            "0.6 puerro (53.4 gr.)",
            "1.2 vasos de fideos gruesos (156 gr.)",
            "1 hoja de laurel (2 gr.)",
            "14 gramos de aceite de oliva",
            "1 cucharadita de sal (6 gr.)",
            "1 litro de agua (1000 gr.)"
        ],
        pasos: [
            "Dorar el pollo en la sartén brevemente y reservar.",
            "Pelar la patata y la zanahoria y cortarlas a cubos pequeños. Cortar el puerro a rodajas finas.",
            "Calentar un poco de aceite en una cazuela y dorar el puerro unos minutos. Añadir la zanahoria y mezclar bien. Añadir el agua, la hoja de laurel y sal al gusto.",
            "Llevar a ebullición, reducir el fuego, añadir el pollo y cocinar a fuego lento durante unos 30 minutos o hasta que las patatas y las zanahorias estén suaves.",
            "Agregar los fideos y continuar cocinando durante unos 10 minutos más, o hasta que los fideos estén cocidos. Si queremos podemos deshilachar el pollo.",
            "Retirar las hojas de laurel y servir caliente.",
            "Ingredientes para 2 personas"
        ]
    },
    {
        id: 205,
        titulo: "Salmón al horno",
        tiempo: "30",
        categoria: [
            "Almuerzo",
            "Cena"
        ],
        ingredientes: [
            "150 gramos de salmón fresco",
            "1 cucharada mediana de aceite de oliva (10 gr.)"
        ],
        pasos: [
            "Precalentar horno 180ºC.",
            "Cuando haya alcanzado 180 grados, mete los filetes del pescado ya sazonado y añádele un chorrito de AOVE por encima. Déjalo hasta que se dore, aproximadamente 20 minutos (dependiendo del tamaño del filete)."
        ]
    },
    {
        id: 206,
        titulo: "Paella de marisco",
        tiempo: "1h",
        categoria: [
            "Almuerzo"
        ],
        imagen: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "Arroz grano corto",
            "Langostinos, mejillones, almejas, sepia",
            "Cebolla, tomate, pimiento",
            "Caldo de pescado"
        ],
        pasos: [
            "Hacer caldo con cáscaras de langostino.",
            "Sofreír verduras y sepia.",
            "Añadir arroz y caldo. Cocinar 18 min.",
            "Añadir marisco en los últimos 5 min."
        ]
    },
    {
        id: 207,
        titulo: "Lentejas con verduras y jamón",
        tiempo: "45 min",
        categoria: [
            "Almuerzo"
        ],
        imagen: "https://images.unsplash.com/photo-1594967399388-12d83395c026?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "110g lentejas",
            "Jamón serrano magro",
            "Zanahoria, puerro, pimiento, tomate",
            "Laurel y pimentón"
        ],
        pasos: [
            "Sofreír verduras.",
            "Añadir lentejas, jamón y cubrir con agua.",
            "Cocer 35-45 min hasta tiernas."
        ]
    },
    {
        id: 208,
        titulo: "Pollo asado con verduras",
        tiempo: "1h 15min",
        categoria: [
            "Almuerzo"
        ],
        imagen: "https://images.unsplash.com/photo-1598103442097-8b74072756b1?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "120g Pollo",
            "Patata, zanahoria, cebolla, calabacín",
            "Vino blanco y especias"
        ],
        pasos: [
            "Cama de verduras en bandeja.",
            "Pollo encima sazonado.",
            "Hornear a 200ºC durante 45-60 min."
        ]
    },
    {
        id: 301,
        titulo: "Ensalada con queso fresco y jamón",
        tiempo: "10 min",
        categoria: [
            "Cena"
        ],
        imagen: "https://images.unsplash.com/photo-1529312266912-b33cf6227e2f?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "Mezclum de lechuga",
            "Taquitos de jamón york",
            "Queso fresco tipo Burgos",
            "Maíz y tomate",
            "Vinagre balsámico"
        ],
        pasos: [
            "Mezclar base verde con tomate y maíz.",
            "Añadir dados de queso y jamón.",
            "Aliñar al gusto."
        ]
    },
    {
        id: 302,
        titulo: "Ensalada de patata con huevo y atún",
        tiempo: "30 min",
        categoria: [
            "Cena",
            "Almuerzo"
        ],
        imagen: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "200g patata cocida",
            "1 huevo duro",
            "1 lata atún",
            "Pimiento rojo, aceitunas, cebolla"
        ],
        pasos: [
            "Cocer patata y huevo.",
            "Trocear y mezclar en bol con atún y verduras.",
            "Aliñar y servir fría."
        ]
    },
    {
        id: 303,
        titulo: "Ensalada con salmón ahumado y queso fresco",
        tiempo: "10 min",
        categoria: [
            "Cena"
        ],
        ingredientes: [
            "150 gramos de ensalada mezclum",
            "1 porción de queso cottage (113 gr.)",
            "4 lonchas de salmón ahumado (68 gr.)",
            "5 zanahorias baby (50 gr.)",
            "6 tomates cherry (90 gr.)",
            "1 cucharada mediana de",
            "aceite de oliva (10 gr.)",
            "3 cucharadas de cebollino picado (9 gr.)"
        ],
        pasos: [
            "Para elaborarla, su base (es decir, la ensalada mezclum), deberá lavarse y colocarse en un",
            "bol o plato grandes. Luego, procederemos a preparar las verduras, para lo que emplearemos",
            "una tabla de cortar y cortaremos los tomates cherrys por la mitad una vez hayan sido lavados, y las zanahorias babys también se pueden cortar en rodajas finas para que se integren mejor en esta ensalada, después de añadirlas al mezclum, sacaremos el salmón ahumado de su envase y cortaremos las lonchas grandes en tiras más pequeñas, distribuyéndolo así de forma homogénea con el resto de la ensalada, después añadiremos el",
            "queso cottage con una cuchara en pequeños montones alrededor de la ensalada, y antes de servirla, la aliñaremos con especias al gusto, la cantidad de cebollino que veamos conveniente y una cucharada de aceite de oliva, también se le puede añadir pimienta negra e incluso limón o más cebollino para que así tenga mayor sabor."
        ]
    },
    {
        id: 304,
        titulo: "Hamburguesa casera",
        tiempo: "10 min",
        categoria: [
            "Cena"
        ],
        imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "1 pan hamburguesa",
            "1 hamburguesa carne blanca",
            "Tomate, cebolla, pepinillo",
            "Queso light"
        ],
        pasos: [
            "Cocinar carne a la plancha.",
            "Fundir queso encima al final.",
            "Montar en el pan tostado con vegetales."
        ]
    },
    {
        id: 305,
        titulo: "Lubina a la plancha",
        tiempo: "10 min",
        categoria: [
            "Cena"
        ],
        imagen: "https://images.unsplash.com/photo-1615141982880-1313d41bc6e3?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "1 filete lubina (150g)",
            "Aceite de oliva",
            "Ajo y perejil (opcional)"
        ],
        pasos: [
            "Cocinar en plancha 2-3 min por lado (primero piel).",
            "Opcional: hacer en Airfryer 8-10 min a 180ºC."
        ]
    },
    {
        id: 306,
        titulo: "Jamón serrano con pan con tomate",
        tiempo: "10 min",
        categoria: [
            "Cena"
        ],
        imagen: "https://images.unsplash.com/photo-1518596696144-8cb5d5a639b7?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "60g pan",
            "30g jamón serrano magro",
            "Tomate maduro y ajo",
            "Aceite de oliva"
        ],
        pasos: [
            "Tostar pan.",
            "Restregar ajo y tomate.",
            "Añadir aceite y el jamón."
        ]
    },
    {
        id: 307,
        titulo: "Merluza a la plancha",
        tiempo: "10 min",
        categoria: [
            "Cena"
        ],
        imagen: "https://images.unsplash.com/photo-1549488497-62886f34bb4e?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "120g merluza",
            "Aceite de oliva"
        ],
        pasos: [
            "Plancha: 2-3 min por lado.",
            "Servir con limón o ajo/perejil."
        ]
    },
    {
        id: 401,
        titulo: "Ensalada variada de verduras",
        tiempo: "5 min",
        categoria: [
            "Guarnición"
        ],
        imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "Lechuga, tomate, pepino, maíz... al gusto"
        ],
        pasos: [
            "Mezclar ingredientes y aliñar."
        ]
    },
    {
        id: 402,
        titulo: "Boniatos al horno especiados",
        tiempo: "30 min",
        categoria: [
            "Guarnición"
        ],
        ingredientes: [
            "1 boniato",
            "Pimienta, sal, aceite"
        ],
        pasos: [
            "Cortar en sticks.",
            "Hornear 20-25 min a 220ºC."
        ]
    },
    {
        id: 403,
        titulo: "Infusión de jengibre y limón",
        tiempo: "10 min",
        categoria: [
            "Bebida"
        ],
        imagen: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "Jengibre fresco",
            "Agua",
            "Limón"
        ],
        pasos: [
            "Hervir jengibre 15 min.",
            "Reposar 10 min y colar.",
            "Añadir limón."
        ]
    },
    {
        id: 404,
        titulo: "Brócoli al horno o vapor",
        tiempo: "10 min",
        categoria: [
            "Guarnición"
        ],
        imagen: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "150g brócoli",
            "Especias"
        ],
        pasos: [
            "Vapor: 5-7 min.",
            "Horno: 15-20 min a 200ºC con especias."
        ]
    },
    {
        id: 3148,
        titulo: "Galletas de Navidad",
        tiempo: "60 minutos",
        categoria: [
            "Merienda"
        ],
        imagen: "https://unsplash.com/es/fotos/galletas-marrones-en-plato-de-ceramica-blanca-3DrCZblTGoQ",
        ingredientes: [
            "* Para la masa:",
            "120 g de azúcar glas",
            "400 g de harina de repostería",
            "240 g de mantequilla a temperatura ambiente, en trozos pequeños",
            "1 huevo",
            "* Para la decoración:",
            "1 clara de huevo",
            "200 g de azúcar glas",
            "1 chorrito de zumo de limón",
            "bolitas de colores, azúcar de colores, …"
        ],
        pasos: [
            "Echamos todos los ingredientes de la masa en el vaso de la Thermomix y programamos 20 segundos, a velocidad 6.",
            "Retiramos la masa del vaso y hacemos una bola, la envolvemos en papel film y reservamos en el frigorífico durante ½ hora.",
            "Cortamos la masa en 3 porciones y reservamos 2 horas en el frigorífico.",
            "En la encimera, extendemos un buen trozo de papel film, colocamos encima el trozo de masa y sobre ésta colocamos otros trozo de papel film (de este modo podemos amasarla sin que se pegue a la encimera, ni al rodillo), con el rodillo la extendemos hasta dejarla con un grosor de 0,5 cm.",
            "Precalentamos el horno a 180º y colocamos papel vegetal sobre una bandeja de horno.",
            "Hacemos formas con cortapastas y las colocamos en la bandeja, sobre el papel vegetal. Horneamos durante 10-12 minutos, a 180º (el tiempo depende del tamaño de las galletas).",
            "Hacemos lo mismo con las otros 2 porciones de masa reservadas en el frigorífico.",
            "* Mientras se enfrían, vamos preparando la glasa:",
            "En el vaso, ponemos la clara de huevo, el azúcar glas y el chorrito de limón. Programamos 20 segundos, a velocidad 6.",
            "Vertemos la glasa en un manga pastelera con una boquilla con agujero fino.",
            "Decoramos las galletas (una vez que estén completamente frías) como más nos gusten y colocamos las bolitas de colores o el azúcar de colores sobre la glasa."
        ]
    },
    {
        id: 602,
        titulo: "Quinoa con gambas",
        tiempo: "10 min",
        categoria: [
            "Cena"
        ],
        ingredientes: [
            "1 vaso de quinoa cocida (185 gr.)",
            "10 gambas pequeñas peladas de langostinos cocidos pelados (gambas, camarones) (70 gr.)",
            "1 cucharada mediana de aceite de oliva (10 gr.)",
            "20 gramos de calabacín",
            "15 gramos de cebolla",
            "30 gramos de champiñones blancos",
            "1 lata pequeña de atún al natural (50 gr.)",
            "Opcional: 2 cucharadas de cebollino fresco"
        ],
        pasos: [
            "Preparar la quinoa: Como ya está cocida, solo tienes que decidir cómo te apetece tomarla. Si prefieres el plato calentito, puedes calentarla durante aprox. 1 minuto en el microondas o pasarla brevemente por la sartén para que coja temperatura.",
            "Saltear los langostinos :aunque estos ya vienen cocidos, merece la pena darles un pequeño toque de calor. Para ello, añade 1 cucharada de aceite de oliva a una sartén y ponla a fuego medio. Incorpora los langostinos y saltéalos durante 1 o 2 minutos. Este paso hará que estén más sabrosos y que el aceite tenga un aroma más intenso.",
            "Integrar los ingredientes: una vez listos los langostinos, añade la quinoa a la sartén y mezcla todo de forma suave. Esto también puede hacerse en un bol más grande, si se prefiere. La idea es que el aceite de oliva se reparta bien por toda la quinoa, actuando como un aliño ligero y agradable.",
            "Añadir el toque fresco: por último, incorpora las 2 cucharadas de cebollino fresco picado y mezcla con cuidado. El cebollino aportará 1 color verde atractivo al plato y un sabor fresco y algo picante que combina muy bien con los langostinos"
        ]
    },
    {
        id: 603,
        titulo: "Ensalada de aguacate y huevo",
        tiempo: "10 min",
        categoria: [
            "Cena"
        ],
        ingredientes: [
            "120 gramos de ensalada mezclum",
            "40 gramos aguacate",
            "2 huevos duros (100 gr.)",
            "2 tomates pera (124 gr.)",
            "60 gramos de maíz dulce crudo",
            "2 cucharadas de vinagre balsámico (32 gr.)",
            "4 zanahorias baby (40 gr.)",
            "1 cucharada mediana de aceite de oliva (10 gr.)"
        ],
        pasos: [
            "Lavar y escurrir bien la mezcla de lechugas para luego colocarla como base en un plato o ensaladera.",
            "Después de esto, pelar el aguacate, cortarlo en láminas/cubos y distribuirlo uniformemente en la ensalada, pelar los 2 huevos duros después de haberlos cocido, cortándolos en rodajas/cuartos y luego añadirlos por encima de la mezcla.",
            "Luego lavaremos los tomates y los cortaremos en rodajas para colocarlos en la ensalada, haremos lo mismo con las zanahorias y la añadiremos troceaditas a la ensalada",
            "Como penúltimo paso, escurriremos el maíz dulce para luego repartirlo sobre el resto de ingredientes",
            "Para terminar vertiremos el aceite y el vinagre sobre la mezcla que luego moveremos de forma suave y constante hasta que esta quede homogénea."
        ]
    },
    {
        id: 604,
        titulo: "Pasta de garbanzos estilo boloñesa",
        tiempo: "10 min",
        categoria: [
            "Almuerzo"
        ],
        ingredientes: [
            "60 gramos de pasta de garbanzos",
            "110 gramos de carne picada de cerdo",
            "125 gramos de salsa de tomate",
            "50 gramos de cebolla",
            "50 gramos de zanahorias",
            "2 grmos de ajo",
            "1 cucharadita de aceite de oliva (4.5 gr.)",
            "1 cucharadita de orégano seco (1 gr.)"
        ],
        pasos: [
            "Cocer la pasta de garbanzos en abundante agua siguiendo las instrucciones del envase. Escurrir y reservar.",
            "En una sartén con aceite, sofreír la cebolla, el ajo y la zanahoria picados finamente.",
            "Añadir la carne picada, salpimentar y cocinar hasta dorar.",
            "Incorporar el tomate y las especias. Cocinar a fuego medio 10-15 minutos.",
            "Servir la pasta cubierta con la salsa boloñesa."
        ]
    },
    {
        id: 605,
        titulo: "Puré de verduras al gusto",
        tiempo: "25 min",
        categoria: [
            "Cena"
        ],
        ingredientes: [
            "65 gramos de patatas",
            "15 gramos de cebolla",
            "20 gramos de puerro",
            "40 gramos de calabacín",
            "20 gramos de zanahorias",
            "1 cucharadita de aceite de oliva (4.5 gr.)",
            "200 gramos de agua"
        ],
        pasos: [
            "ELIGE LAS VERDURAS QUE TE GUSTEN Y TENGAS DISPONIBLES.",
            "Lavar y pelar las verduras (si se desea). Trocearlas en piezas medianas.",
            "En una olla, calentar el aceite y rehogar el puerro y la zanahoria durante 3–4 minutos.",
            "Añadir el calabacín y la patata, cubrir con el caldo o agua y sazonar.",
            "Cocer a fuego medio durante 20 minutos, hasta que las verduras estén tiernas.",
            "Triturar con batidora hasta obtener una textura cremosa y homogénea.",
            "Ajustar de sal, pimienta y especias al gusto.",
            "Servir caliente, con un chorrito de aceite de oliva o semillas por encima (opcional).",
            "Receta en Thermomix:",
            "- Troceado",
            "Pon en el vaso la zanahoria, calabacín, patata, puerro y cebolla. Programar: 5 segundos / Velocidad 4. Baja los restos de las paredes con la espátula.",
            "- Cocción",
            "Añade el agua (unos 200 g). Programar: 20 minutos / 100°C / Velocidad 1.",
            "- Triturado",
            "Espera a que baje un poco la temperatura. Programar: 30 segundos / Velocidad progresiva 5-10. Comprueba la textura. Si te gusta más líquido, añade un poco más de agua y mezcla 10 segundos más.",
            "- Servir. Sirve en dos boles y reparte el aceite de oliva en crudo (una cucharadita por ración) justo antes de comer.",
            "He echado 500 gramos de agua, sale muy líquida, la próxima vez echar 400"
        ]
    },
    {
        id: 606,
        titulo: "Ensalada de atún y queso fresco",
        tiempo: "10 min",
        categoria: [
            "Cena"
        ],
        ingredientes: [
            "140 gramos de espinacas frescas",
            "1 lata pequeña de atún al natural",
            "80 gramos de queso fresco 0%",
            "80 gramos de cebolla dulce",
            "4 tomates cherry",
            "1 cucharada mediana de aceite de oliva (10 gr.)",
            "2 cucharadas de vinagre balsámico (32 gr.)"
        ],
        pasos: [
            "Coger las espinacas frescas para ensalada, lavarlas con mucha agua potable y escurrirlas de forma adecuada para eliminar el exceso de humedad. Ponerlas como base en el plato o bol que vayamos a usar en la ensalada",
            "Abrir la lata de atún al natural, escurrir completamente el líquido que lo conserva y distribuirlo encima de las espinacas",
            "Trocear el queso fresco en dados de más o menos el mismo tamaño, para añadirlos posteriormente a las espinacas junto con el atún.",
            "CPelar la cebolla dulce, cortarla en rodajas finas y añadirla al conjunto para aportar sabor y textura.",
            "Lavar los tomates cherry, cortarlos por la mitad e incorporarlos a la ensalada de forma repartida.",
            "Por último y después de todo esto, aliñar toda la mezcla con aceite, vinagre y sal y las especias que se deseen."
        ]
    },
    {
        id: 607,
        titulo: "Pan pizza con jamón",
        tiempo: "15 min",
        categoria: [
            "Cena"
        ],
        ingredientes: [
            "60 gramos de pan (rebanada)",
            "20 gramos de salsa de tomate",
            "2 lonchas de jamón cocido (jamón york) (56 gr.)",
            "2 champiñones blancos (36 gr.)",
            "2 lonchas de queso light tierno 0% (50 gr.)",
            "Orégano"
        ],
        pasos: [
            "Precalentar el horno a 180 grados.",
            "Colocar la rebanada de pan en una bandeja de horno cubierta con papel vegetal.",
            "Untar el pan con el tomate.",
            "Distribuir el queso rallado por encima.",
            "Añadir el jamón york en tiras y los champiñones laminados.",
            "Espolvorear con orégano u otra hierba al gusto.",
            "Hornear durante 8–10 minutos, hasta que el queso se funda y quede dorado.",
            "Servir caliente."
        ]
    },
    {
        id: 608,
        titulo: "Berenjena rellena de atún, champiñones y queso",
        tiempo: "20",
        categoria: [
            "Almuerzo"
        ],
        imagen: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        ingredientes: [
            "230 gramos de berenjena",
            "1.5 latas pequeñas de atún al natural (75 gr.)",
            "90 gramos de champiñones blancos",
            "1 cucharada de cebolla picada (10 gr.)",
            "1/2 cucharadita de aceite de oliva (2.3 gr.)",
            "2 pizcas de sal (0.8 gr.)",
            "1 cucharadita de orégano seco (1 gr.)",
            "1 pizca de pimienta negra molida (0.1 gr.)",
            "1/2 cucharadita de pimentón dulce (1.2 gr.)",
            "2 cucharadas de tomate en conserva (o tomate triturado) (30 gr.)",
            "1.5 lonchas de queso cheddar (bajo en grasa) (42 gr.)"
        ],
        pasos: [
            "Abrir la berenjena por la mitad a lo largo y ponerlas en el microondas unos 8 minutos.",
            "También mientras se cocinan las berenjenas, hacer un sofrito con la cebolla a daditos, añadiendo el champiñón. Dejar sofreír todo unos cinco minutos.",
            "Cuando las berenjenas estén listas (si veis que la berenjena queda demasiado dura al sacarla del microondas, introducir unos minutos más) y templadas, vaciarlas con una cuchara, con cuidado de no romper la piel.",
            "Añadir su carne a la sartén del sofrito, dar unas vueltas para que se integre y rectificar de sazón. Añadir salsa de tomate, el atún, las especias y mezclar todo.",
            "Volver a rellenar las berenjenas, cubrirlas con el queso y gratinar unos minutos, hasta que esté dorado y huela bien. Emplatar con un poco de perejil picado (si se quiere).",
            "Servir inmediatamente."
        ]
    },
    {
        id: 609,
        titulo: "Ensalada caprese",
        tiempo: "5 min",
        categoria: [
            "Cena"
        ],
        ingredientes: [
            "60 gramos de mozzarella fresca",
            "2 tomates pera",
            "1 vaso de hojas enteras de albahaca fresca (6 gr.)",
            "1/2 cucharadita de aceite de oliva (2.3 gr.)",
            "1 pizca de pimienta negra molida (0.1 gr.)",
            "1 pizca de sal (0.4 gr.)"
        ],
        pasos: [
            "Lavar los tomates y cortarlos a rodajas.",
            "Cortar a rodajas la mozzarella.",
            "Servir el tomate y la mozzarella con hojas de albahaca fresca, pimienta negra recién molida al gusto, sal y aceite de oliva."
        ]
    },
    {
        id: 610,
        titulo: "Dorada al horno con pimientos",
        tiempo: "50 min",
        categoria: [
            "Almuerzo"
        ],
        ingredientes: [
            "160 gramos de dorada",
            "1 pimiento verde",
            "Cebolla y tomate en rodajas",
            "Patatas para la base",
            "Ajo, perejil, vino blanco y limón"
        ],
        pasos: [
            "En bandeja de horno: cama de patatas, pimientos, cebolla y tomate. Salar y echar un poco de aceite.",
            "Hornear la verdura 30 min a 200ºC.",
            "Hacer una picada con ajo, perejil, vino y aceite.",
            "Poner la dorada sobre la verdura (con rodajas de limón dentro).",
            "Hornear todo junto 20 min a 180ºC hasta que el ojo de la dorada esté blanco."
        ]
    },
    {
        id: 611,
        titulo: "Ensalada waldorf (con manzana y nueces)",
        tiempo: "10 min",
        categoria: [
            "Cena"
        ],
        ingredientes: [
            "100 gramos de espinacas para ensalada (primeros brotes)",
            "100g manzana",
            "40g queso fresco",
            "1 nuez (5 gr.)",
            "1 cucharada de pasas (10 gr.)",
            "1 cucharada de vinagre balsámico (16 gr.)",
            "1 cucharadita de aceite de oliva (4.5 gr.)"
        ],
        pasos: [
            "Lavar y escurrir los brotes tiernos o la lechuga, colocándolos como base en un bol.",
            "Cortar la manzana en láminas finas o dados (se puede añadir un chorrito de limón para que no se oxide).",
            "Añadir la manzana (tipo Fuji, Gala o verde) sobre la lechuga junto con las nueces y, si se desea, las pasas.",
            "Incorporar el queso fresco o de cabra si se usa.",
            "Aliñar con aceite de oliva, vinagre balsámico o limón, sal y pimienta.",
            "Mezclar suavemente y servir."
        ]
    },
    {
        id: 9236,
        titulo: "Tostada de pan integral con jamón cocido",
        tiempo: "10",
        categoria: [
            "Cena"
        ],
        imagen: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        ingredientes: [
            "70 gramos de pan integral de centeno",
            "3 rodajas de tomate (60 gr.)",
            "2.5 lonchas de jamón cocido (jamón york) (70 gr.)",
            "1/2 cucharadita de aceite de oliva (2.3 gr.)"
        ],
        pasos: [
            "Tostar el pan.",
            "Rallar el tomate y aliñar con aceite de oliva virgen o virgen extra y sal.",
            "Untar el tomate sobre el pan.",
            "Colocar el jamón cocido encima y servir.",
            "Utilizar jamón cocido calidad extra (contenido de carne superior al 90%)"
        ]
    },
    {
        id: 1216,
        titulo: "Dorada al horno con pimientos",
        tiempo: "45",
        categoria: [
            "Almuerzo"
        ],
        imagen: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        ingredientes: [
            "160 gramos de dorada",
            "1 pimiento verde (119 gr.)",
            "2 aros de cebolla (36 gr.)",
            "3 rodajas de tomate (60 gr.)",
            "1 diente de ajo (3 gr.)",
            "1 cucharada de perejil picado (3.8 gr.)",
            "1/2 cucharada mediana de aceite de oliva (5 gr.)",
            "2 pizcas de sal (0.8 gr.)",
            "1/2 copa de vino blanco (70 gr.)",
            "2 rodajas de limón (14 gr.)"
        ],
        pasos: [
            "Limpia las vísceras de la dorada o pide en la pescadería que lo hagan por ti.",
            "Pela las patatas en rodajas de medio centímetro.",
            "Cortar la cebolla en rodajas, cortar los pimientos en rodajas.",
            "Hacer una picada con los ajos, perejil, un chorrito de vino blanco y aceite de oliva.",
            "En una bandeja de horno, echar un poco de aceite en la base para que no se pegue, colocar las patatas, espolvorear sal y colocar encima los pimientos, las cebollas y los tomates en rodajas (bien lavados).",
            "Espolvorear un poco más de sal, echar unas cucharadas de la mezcla anterior y meter en el horno. Dejar que se cocine la guarnición durante 30 min 200 grados arriba y abajo.",
            "Una vez que la verdura haya dorado, corta unas rodajas de limón, mételas dentro de la dorada y coloca el pescado sobre la guarnición horneada.",
            "Deja que se cocine la dorada hasta que se le pongan los ojos blancos unos 20 min 180 grados."
        ]
    },
    {
        id: 5846,
        titulo: "Pechuga de pollo o pavo a la plancha",
        tiempo: "10",
        categoria: [
            "Almuerzo"
        ],
        imagen: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        ingredientes: [
            "120 gramos de pechuga de pollo",
            "1 cucharada mediana de aceite de oliva (10 gr.)"
        ],
        pasos: [
            "Posibles condimentos y variaciones:",
            "Especias: pimienta negra, pimentón dulce o picante, curry, cúrcuma, comino.",
            "Hierbas aromáticas: romero, tomillo, orégano, albahaca, perejil.",
            "Cítricos: zumo o ralladura de limón o lima.",
            "Ajo: en polvo o fresco laminado.",
            "Toque fresco: unas gotas de salsa de soja baja en sal o mostaza suave."
        ]
    },
    {
        id: 292,
        titulo: "Sopa Mama",
        tiempo: "45",
        categoria: [
            "Almuerzo",
            "Cena"
        ],
        ingredientes: [
            "Pollo. Muslo y contra muslo y que le hagan 2 cortes",
            "1 Apio",
            "1 Zanahoria cortada en 2/3 veces",
            "2 Judías",
            "1 Puerro",
            "1 Patata"
        ],
        pasos: [
            "Vamos poniendo todas las verduras y el pollo en la cestilla de la olla grande ",
            "Cortar las puntas de las judías y lavarlas",
            "Lavar y pelar la zanahoria",
            "La carne cortarla en trozos en 3 por completo ",
            "Lavar el apio y el puerro. El apio hay que lavarlo bien bien",
            "Lavar y cortar la patata",
            "Echar sal y azafrán o colorante",
            "Llenar con agua hasta un dedo menos del 2/3 de la olla",
            "Poner al fuego maximo y tapar",
            "Cuando suban los 3 aros, tardan unos 8/9 minutos, bajar al 4.5 y dejar unos 20 minutos.",
            "Hasta aquí tardamos 30 minutos",
            "En bajar los aros tarda aproximadamente 20 minutos si no tocamos nada o más",
            "Han salido 840 gramos por dos veces se separan. Uno se congela y el otro para los fideos",
            "Se preparan los fideos",
            "90 gramos de fideos de sopa para 2 personas, cuatro puñados",
            "Luego se verá si es mucho o poco"
        ]
    },
    {
        id: 293,
        titulo: "Tomate partido",
        tiempo: "5",
        categoria: [
            "Almuerzo"
        ],
        ingredientes: [
            "1 tomate (123 gr.)",
            "20 gramos de cebolla",
            "1 cucharadita de aceite de oliva (4.5 gr.)"
        ],
        pasos: [
            "Puedes acompañar la ensalada de tomate de:",
            "Cebolla morada en aros finos",
            "Pimiento asado en tiras",
            "Pepino en rodajas",
            "Zanahoria rallada",
            "Encurtidos: alcaparras, tápenas, tallos, pepinillos, cebolletas"
        ]
    },
    {
        id: 612,
        titulo: "Pasta garbanzos con atún",
        tiempo: "45",
        categoria: [
            "Almuerzo"
        ],
        ingredientes: [
            "50 gramos de pasta de garbanzos",
            "1 lata pequeña de atún al natural (50 gr.)",
            "1 cucharada colmada de queso en polvo (10 gr.)",
            "1 zanahoria (61 gr.)",
            "1/2 pimiento verde pequeño (37 gr.)",
            "1 vaso de salsa de tomate (245 gr.)",
            "1 cebolla (110 gr.)",
            "1 diente de ajo (3 gr.)",
            "1 cucharada de orégano seco (1.8 gr.)",
            "1 cucharada de perejil picado (3.8 gr.)",
            "1 cucharadita de sal (6 gr.)",
            "1 cucharada de aceite de oliva (13 gr.)"
        ],
        pasos: [
            "Paso 1: Troceado (El corte perfecto)",
            "\t1. Pon en el vaso el diente de ajo, la cebolla (en cuartos) y el pimiento verde (en trozos grandes).",
            "\t2. Programación: 5 segundos / Velocidad 4.",
            "\t3. Baja los restos de las paredes con la espátula.",
            "\t4. Añade la zanahoria (en trozos medianos) si quieres picarla, o añádela ya rallada si prefieres esa textura. Si la quieres picar: 2 segundos / Velocidad 5. Voy a meterla rallada y mezclar",
            "Paso 2: El Sofrito",
            "1. Añade el aceite de oliva.",
            "2. Programación: 7 minutos / 120°C (o Varoma en modelos antiguos) / Velocidad Cuchara / Giro Inverso. Si está muy líquido añadir 1-2 minutos más",
            "3. Nota: No ponemos el cubilete para que evapore el agua de la verdura y se \"fría\" mejor. Puedes poner el cestillo encima para evitar salpicaduras.",
            "Paso 3: La Salsa",
            "\t1. Añade la salsa de tomate, el orégano y la sal",
            "\t2. Programación: 10 minutos / 100°C / Velocidad Cuchara / Giro Inverso.",
            "\t3. Cuando queden 2 minutos añadir el atún por el bocal",
            "\t4. Prueba y rectifica de sal/pimienta.",
            "Paso 4: La Pasta",
            "Opción A (Recomendada): Hierve la pasta en una olla aparte mientras la Thermomix hace la salsa (siguiendo el paso 1 de la receta tradicional). Es más rápido y controlas mejor la textura de esta pasta tan delicada.",
            "El Consejo del Chef para esta receta 👨‍🍳",
            "La pasta de garbanzos es más seca que la normal. Guarda 3 cucharadas del agua de cocción de la pasta antes de escurrirla. Cuando mezcles la pasta con la salsa, añade esa agua. El almidón hará que la salsa se pegue mejor a los garbanzos y quede mucho más cremosa y menos \"pastosa\" en boca."
        ]
    },
    {
        id: 613,
        titulo: "Fajitas con pollo",
        tiempo: "30",
        categoria: [
            "Almuerzo",
            "Cena"
        ],
        ingredientes: [
            "2 Tortillas de trigo de tortilla de trigo integral hacendado (72 gr.)",
            "140 gramos de pechuga de pollo",
            "30 gramos de pimiento rojo",
            "30 gramos de pimiento verde",
            "30 gramos de pimiento amarillo",
            "30 gramos de cebolla",
            "1 cucharadita de aceite de oliva (4.5 gr.)",
            "2 lonchas de queso light tierno 0% (50 gr.)"
        ],
        pasos: [
            "Cortar el pollo en tiras y salpimentar. Añadir las especias al gusto.",
            "Lavar y cortar los pimientos y la cebolla en tiras finas.",
            "En una sartén caliente con un poco de aceite, saltear el pollo hasta que esté dorado y hecho",
            "por dentro. Retirar.",
            "En la misma sartén, añadir los pimientos (y la cebolla, si se usa) y saltear a fuego medio-alto",
            "hasta que estén tiernos pero aún crujientes.",
            "MÁS FACIL: usa la fritada de pisto de hacendado",
            "Incorporar de nuevo el pollo a la sartén, mezclar bien con las verduras y ajustar de especias.",
            "Calentar las tortillas en una sartén limpia o al microondas unos segundos.",
            "Rellenar las tortillas con la mezcla de pollo y pimientos, puedes añadir un poco de sazonador",
            "o gratinar queso light"
        ]
    },
    {
        id: 614,
        titulo: "Sepia a la plancha",
        tiempo: "30",
        categoria: [
            "Almuerzo"
        ],
        ingredientes: [
            "150 gramos de sepia",
            "1 cucharadita de aceite de oliva (4.5 gr.)"
        ],
        pasos: [
            "Lavar y secar bien la sepia con papel de cocina.",
            "Calentar una plancha o sartén antiadherente a fuego alto con unas gotas de aceite.",
            "Cocinar la sepia 2–3 minutos por cada lado, hasta que esté dorada por fuera y tierna por dentro.",
            "Servir caliente y añadir el aliño elegido.",
            "Opciones de aliño y condimentos:",
            "Clásico mediterráneo: ajo picado, perejil fresco y un chorrito de limón.",
            "Especiado suave: orégano, tomillo o albahaca seca con un poco de pimienta negra.",
            "Toque ahumado: pimentón dulce o picante y un hilo de aceite de oliva virgen extra.",
            "Estilo cítrico: ralladura y zumo de limón o lima con cilantro fresco.",
            "Oriental: salsa de soja ligera, jengibre rallado y semillas de sésamo.",
            "Picante: guindilla fresca o cayena molida junto con ajo y perejil."
        ]
    },
    {
        id: 615,
        titulo: "Caballa al horno con verduras y patatas",
        tiempo: "",
        categoria: [
            "Almuerzo"
        ],
        ingredientes: [
            "140 gramos de caballa fresca",
            "100 gramos de patatas (peladas)",
            "1 pimiento verde pequeño (74 gr.)",
            "2 aros de cebolla (36 gr.)",
            "1 tomate pera (62 gr.)",
            "1 diente de ajo (3 gr.)",
            "1 cucharada de perejil picado (3.8 gr.)",
            "1 cucharada de aceite de oliva (13 gr.)",
            "1 pizca de sal (0.4 gr.)",
            "2 rodajas de limón (14 gr.)"
        ],
        pasos: [
            "Limpia las vísceras de la caballa o pide en la pescadería que lo hagan por ti.",
            "Pela las patatas en rodajas de medio centímetro.",
            "Cortar la cebolla en rodajas, cortar los pimientos en rodajas.",
            "Hacer una picada con los ajos, perejil y aceite de oliva.",
            "En una bandeja de horno, echar un poco de aceite en la base para que no se pegue, colocar las patatas, espolvorear sal y colocar encima los pimientos, las cebollas y los tomates en rodajas (bien lavados).",
            "Espolvorear un poco más de sal, echar unas cucharadas de la mezcla anterior y meter en el horno. Dejar que se cocine la guarnición durante 30 min 200 grados arriba y abajo.",
            "Una vez que la verdura haya dorado, corta unas rodajas de limón, mételas dentro de la caballa y coloca el pescado sobre la guarnición horneada. Deja que se cocine la dorada hasta que se le pongan los ojos blancos unos 20 min 180 grados."
        ]
    },
    {
        id: 616,
        titulo: "Ensalada de pasta integral con pollo",
        tiempo: "30",
        categoria: [
            "Cena"
        ],
        ingredientes: [
            "60 gramos de pasta integral",
            "140 gramos de pechuga de pollo",
            "40 gramos de tomate",
            "20 gramos de zanahorias, en conserva",
            "15 gramos de maíz dulce en conserva (maíz amarillo)",
            "2 Cucharadas de salsa de yogurt hacendado (30 gr.)",
            "1 cucharadita de aceite de oliva (4.5 gr.)"
        ],
        pasos: [
            "Cocer la pasta integral en abundante agua con sal, escurrir y dejar enfriar.",
            "Cocinar la pechuga de pollo a la plancha con un poco de sal y pimienta cortarla en dados o",
            "tiras.",
            "Lavar y preparar las verduras.",
            "En un bol grande, mezclar la pasta, el pollo y las verduras.",
            "Aliñar con la salsa de yogur justo antes de servir."
        ]
    },
    {
        id: 617,
        titulo: "Ensalada murciana",
        tiempo: "30",
        categoria: [
            "Cena"
        ],
        ingredientes: [
            "2 tomates (246 gr.)",
            "2 huevos duros (100 gr.)",
            "1/2 cebolleta pequeña (2.5 gr.)",
            "2 cucharadas de aceitunas (16.8 gr.)",
            "1 lata pequeña de atún al natural (50 gr.)",
            "1 cucharada de aceite de oliva (13 gr.)",
            "1 pizca de sal (0.4 gr.)"
        ],
        pasos: [
            "Pon a cocer el huevo en agua hirviendo durante 10 minutos para que quede duro. Enfríalo con agua fría y pélalo.",
            "Pela la media cebolleta y córtala en juliana (tiras finitas).",
            "Saca los tomates enteros de la lata y trocéalo a tamaño mediano.",
            "Escurre el atún del jugo de la lata.",
            "En un plato o bol mezcla todos los ingredientes incluidos el aceite y la sal. Listo para comer"
        ]
    },
    {
        id: 618,
        titulo: "Batido de proteína con bebida vegetal",
        tiempo: "20",
        categoria: [
            "Merienda"
        ],
        ingredientes: [
            "1 scoop de aislado de proteína de suero de leche, 80% whey neutra (30 gr.)",
            "100 gramos de leche de soja sin edulcorar (enriquecida)"
        ],
        pasos: []
    },
    {
        id: 620,
        titulo: "Fruta rica en vitamina C",
        tiempo: "5",
        categoria: [
            "Almuerzo",
            "Merienda",
            "Cena"
        ],
        ingredientes: [
            "1 pieza de fruta (genérico) (150 gr.)",
            "Naranja y mandarina",
            "Kiwi",
            "Fresas",
            "Piña",
            "Papaya",
            "Mango"
        ],
        pasos: [
            "Cuando consumimos legumbres (lentejas, garbanzos, alubias…), aportamos hierro de origen",
            "vegetal.",
            "Sin embargo, este hierro no se absorbe con tanta facilidad como el hierro de origen animal.",
            "Para mejorar su aprovechamiento, un truco sencillo y eficaz es acompañar el plato con una fruta rica en vitamina C.",
            "La vitamina C actúa como un potenciador natural de la absorción de hierro.",
            "Entre las frutas más ricas en vitamina C destacan:",
            "Naranja y mandarina",
            "Kiwi",
            "Fresas",
            "Piña",
            "Papaya",
            "Mango",
            "Frutas del bosque (moras, arándanos, frambuesas)",
            "** Evita consumir yogures, leche, queso o café después de consumir legumbres ya que",
            "dificulta la absorción de hierro."
        ]
    },
    {
        id: 621,
        titulo: "Sandwich al gusto",
        tiempo: "",
        categoria: [
            "Segundo Desayuno"
        ],
        ingredientes: [
            "2 rebanadas de pan de molde (54 gr.)",
            "50 gramos de jamón cocido (jamón york)",
            "1 cucharadita de aceite de oliva (4.5 gr.)"
        ],
        pasos: [
            "Dos rebanadas de pan de molde integral y elige 1 opción de proteina:",
            "Lomo embuchado 30–35 g",
            "Jamón serrano 35–40 g",
            "Queso en lonchas (tierno/semicurado) 45–50 g",
            "Atún al natural (escurrido) 1 lata",
            "Jamón cocido extra 50–55 g",
            "Añade aceite de oliva virgen o virgen extra.",
            "Opcional: puedes añadir tomate, aguacate, lechuga, pimiento"
        ]
    },
    {
        id: 622,
        titulo: "Salteado de verduras",
        tiempo: "15",
        categoria: [
            "Cena"
        ],
        ingredientes: [
            "60 gramos de calabacín",
            "50 gramos de pimiento rojo",
            "50 gramos de champiñones blancos",
            "40 gramos de cebolla",
            "50 gramos de brócoli",
            "1 cucharada mediana de aceite de oliva (10 gr.)",
            "1 cucharadita de pimienta negra molida (0.8 gr.)",
            "1 pizca de sal (0.4 gr.)"
        ],
        pasos: [
            "Cortar todos los ingredientes en trozos grandes.",
            "Se agrega el aceite a la sartén y todos los ingredientes juntos.",
            "Se saltea todo junto hasta que los ingredientes logren una textura cocida media (aprox. por 10-15 minutos a fuego medio)."
        ]
    },
    {
        id: 623,
        titulo: "Hamburguesa a la plancha",
        tiempo: "20",
        categoria: [
            "Cena"
        ],
        ingredientes: [
            "1 hamburguesa de carne blanca (113 gr.)",
            "1 cucharadita de aceite de oliva (4.5 gr.)"
        ],
        pasos: [
            "Condimentos y acompañamientos opcionales (sin pan):",
            "Verduras frescas: rodajas de tomate, lechuga, rúcula, cebolla, pepino.",
            "Verduras cocinadas: cebolla caramelizada, champiñones salteados, pimientos asados,",
            "calabacín o berenjena a la plancha.",
            "Quesos: loncha de queso, mozzarella, queso curado rallado.",
            "Salsas caseras o ligeras: cucharada de ketchup o mayonesa light, mostaza o guacamole"
        ]
    },
    {
        id: 624,
        titulo: "Ensalada de pimientos con sardinillas",
        tiempo: "10",
        categoria: [
            "Cena"
        ],
        ingredientes: [
            "150 gramos de pimiento rojo (pimientos rojos asados EN CONSERVA)",
            "1 lata de sardinas con aceite (peso escurrido) (80",
            "gr.)",
            "4 aros de cebolla (72 gr.)",
            "3 aceitunas (11.7 gr.)",
            "1 cucharadita de aceite de oliva (4.5 gr.)",
            "1/2 diente de ajo (1.5 gr.)"
        ],
        pasos: [
            "Cortar los pimientos asados en tiras y colocarlos en un bol o plato.",
            "Puedes usar pimientos rojos asados EN CONSERVA.",
            "Escurrir bien el aceite de las sardinillas. Puedes utilizar papel de cocina para secarlas bien.",
            "Añadir las sardinillas por encima, enteras o en trozos.",
            "Aliñar con aceite de oliva virgen o virgen extra, ajo picado (si se desea), sal y pimienta.",
            "Servir a temperatura ambiente o ligeramente fresca."
        ]
    }
];