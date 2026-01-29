const listaRecetas = [
    {
        id: 1,
        titulo: "Ensalada estilo césar",
        tiempo: "10",
        categoria: ["Almuerzo"],
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
        categoria: ["Almuerzo"],
        imagen: "https://images.unsplash.com/photo-1612874742237-6526221588e3",
        ingredientes: ["Pasta", "Huevo", "Guanciale", "Pimienta"],
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
        categoria: ["Desayuno"],
        imagen: "https://images.unsplash.com/photo-1588137372308-15f75323ca8d",
        ingredientes: ["Pan", "Aguacate", "Aceite", "Sal"]
    },

    // Puedes copiar y pegar este bloque {} tantas veces como recetas tengas
    {
        id: 4,
        titulo: "Arroz salteado estilo chino",
        tiempo: "10 min",
        categoria: ["Almuerzo"],
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
        categoria: ["Almuerzo"],
        imagen: "https://images.unsplash.com/photo-1588137372308-15f75323ca8d",
        ingredientes: ["1 Vasito arroz integral", "1 Huevo", "Aceite", "Sal"],
        pasos: [
            "Elabora una ensalada variada a tu gusto.",
            "Base: lechuga, espinaca fresca, rúcula, canónigos o mezcla de brotes tiernos.",
            "Añadir el chorizo y dejar cocinar a fuego lento 30 min."
        ]
        
    },


    // --- DESAYUNOS Y MEDIA MAÑANA ---
    {
        id: 101,
        titulo: "Bocadillo de jamón york",
        tiempo: "10 min",
        categoria: ["Desayuno", "Media Mañana"],
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
        categoria: ["Desayuno", "Merienda"],
        imagen: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "25g harina de avena",
            "1 huevo",
            "20g yogur natural",
            "1 plátano pequeño",
            "Canela y levadura en polvo"
        ],
        pasos: [
            "Machacar el plátano hasta hacerlo puré. Añadir huevo y yogur.",
            "Añadir harina, canela y levadura. Mezclar suavemente.",
            "En sartén con poco aceite, cocinar tortitas pequeñas.",
            "Dar la vuelta cuando estén doradas."
        ]
    },
    {
        id: 103,
        titulo: "Tostada de hummus con aguacate",
        tiempo: "10 min",
        categoria: ["Desayuno"],
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
        categoria: ["Media Mañana", "Cena"],
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

    // --- ALMUERZOS ---
    {
        id: 201,
        titulo: "Pasta de lenteja roja con atún",
        tiempo: "10 min",
        categoria: ["Almuerzo"],
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
        titulo: "Gazpacho andaluz",
        tiempo: "15 min",
        categoria: ["Almuerzo", "Entrante"],
        imagen: "https://images.unsplash.com/photo-1594966635294-8451c8909477?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "2 tomates maduros",
            "1/3 pimiento verde",
            "1/3 pepino",
            "Ajo, aceite, vinagre y sal"
        ],
        pasos: [
            "Pelar tomates (escaldar si es necesario).",
            "Triturar todo en batidora hasta que quede fino.",
            "Servir bien frío."
        ]
    },
    {
        id: 203,
        titulo: "Tortilla de patata",
        tiempo: "30 min",
        categoria: ["Almuerzo", "Cena"],
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
        categoria: ["Almuerzo"],
        imagen: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "1 pechuga de pollo",
            "Zanahoria y puerro",
            "Fideos gruesos",
            "Agua y laurel"
        ],
        pasos: [
            "Dorar pollo y reservar.",
            "Sofreír verduras. Añadir agua, pollo y cocer 30 min.",
            "Añadir fideos y cocer 10 min más."
        ]
    },
    {
        id: 205,
        titulo: "Salmón al horno",
        tiempo: "30 min",
        categoria: ["Almuerzo", "Cena"],
        imagen: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "150g salmón fresco",
            "Aceite de oliva",
            "Especias al gusto"
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
        categoria: ["Almuerzo"],
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
        categoria: ["Almuerzo"],
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
        categoria: ["Almuerzo"],
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

    // --- CENAS ---
    {
        id: 301,
        titulo: "Ensalada con queso fresco y jamón",
        tiempo: "10 min",
        categoria: ["Cena"],
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
        categoria: ["Cena", "Almuerzo"],
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
        titulo: "Ensalada con salmón ahumado",
        tiempo: "10 min",
        categoria: ["Cena"],
        imagen: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
        ingredientes: [
            "Mezclum",
            "Salmón ahumado",
            "Queso cottage",
            "Zanahoria baby y cherrys"
        ],
        pasos: [
            "Disponer ensalada y verduras.",
            "Añadir tiras de salmón y montoncitos de queso.",
            "Aliñar con cebollino y aceite."
        ]
    },
    {
        id: 304,
        titulo: "Hamburguesa casera",
        tiempo: "10 min",
        categoria: ["Cena"],
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
        categoria: ["Cena"],
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
        categoria: ["Cena"],
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
        categoria: ["Cena"],
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
    
    // --- GUARNICIONES Y OTROS ---
    {
        id: 401,
        titulo: "Ensalada variada de verduras",
        tiempo: "5 min",
        categoria: ["Guarnición"],
        imagen: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        ingredientes: ["Lechuga, tomate, pepino, maíz... al gusto"],
        pasos: ["Mezclar ingredientes y aliñar."]
    },
    {
        id: 402,
        titulo: "Boniatos al horno especiados",
        tiempo: "30 min",
        categoria: ["Guarnición"],
        imagen: "https://images.unsplash.com/photo-1605494236306-037372d82947?auto=format&fit=crop&w=800&q=80",
        ingredientes: ["1 boniato", "Pimienta, sal, aceite"],
        pasos: ["Cortar en sticks.", "Hornear 20-25 min a 220ºC."]
    },
    {
        id: 403,
        titulo: "Infusión de jengibre y limón",
        tiempo: "10 min",
        categoria: ["Bebida"],
        imagen: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
        ingredientes: ["Jengibre fresco", "Agua", "Limón"],
        pasos: ["Hervir jengibre 15 min.", "Reposar 10 min y colar.", "Añadir limón."]
    },
    {
        id: 404,
        titulo: "Brócoli al horno o vapor",
        tiempo: "10 min",
        categoria: ["Guarnición"],
        imagen: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80",
        ingredientes: ["150g brócoli", "Especias"],
        pasos: ["Vapor: 5-7 min.", "Horno: 15-20 min a 200ºC con especias."]
    },
    
    {
	    "id": 3148,
    	"titulo": "Galletas de Navidad",
    	"tiempo": "60 minutos",
    	"categoria": ["Merienda"],
    	"imagen": "https://unsplash.com/es/fotos/galletas-marrones-en-plato-de-ceramica-blanca-3DrCZblTGoQ",
    	"ingredientes": [
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
    	"pasos": [
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
        categoria: ["Cena"],
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
        categoria: ["Cena"],
        ingredientes: [
            "120 gramos de ensalada mezclum",
            "40 gramos de aguacate",
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
        categoria: ["Almuerzo"],
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
        categoria: ["Cena"],
        ingredientes: [
            "65 gramos de patatas",
            "15 gramos de cebolla",
            "20 gramos de puerro",
            "40 gramos de calabacín",
            "20 gramos de zanahorias",
            "1 cucharadita de aceite de oliva (4.5 gr.)"
        ],
        pasos: [
            "ELIGE LAS VERDURAS QUE TE GUSTEN Y TENGAS DISPONIBLES.",
            "Lavar y pelar las verduras (si se desea). Trocearlas en piezas medianas.",
            "En una olla, calentar el aceite y rehogar el puerro y la zanahoria durante 3–4 minutos.",
            "Añadir el calabacín y la patata, cubrir con el caldo o agua y sazonar.",
            "Cocer a fuego medio durante 20 minutos, hasta que las verduras estén tiernas.",
            "Triturar con batidora hasta obtener una textura cremosa y homogénea.",
            "Ajustar de sal, pimienta y especias al gusto.",
            "Servir caliente, con un chorrito de aceite de oliva o semillas por encima (opcional)."
        ]
    },
    {
        id: 606,
        titulo: "Ensalada de atún y queso fresco",
        tiempo: "10 min",
        categoria: ["Cena"],
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
        categoria: ["Cena"],
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
        categoria: ["Almuerzo"],
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
        categoria: ["Cena"],
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
        categoria: ["Almuerzo"],
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
        titulo: "Ensalada Waldorf",
        tiempo: "10 min",
        categoria: ["Cena"],
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
        categoria: ["Cena"],
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
        categoria: ["Almuerzo"],
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
        categoria: ["Almuerzo"],
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
    }
	
];