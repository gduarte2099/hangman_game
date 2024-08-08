const wordList = [
  {
    "word": "guitarra",
    "hint": "Un instrumento musical con cuerdas."
  },
  {
    "word": "oxígeno",
    "hint": "Un gas incoloro e inodoro esencial para la vida."
  },
  {
    "word": "montaña",
    "hint": "Una gran elevación natural de la superficie de la Tierra."
  },
  {
    "word": "pintura",
    "hint": "Una forma de arte que utiliza colores en una superficie para crear imágenes o expresiones."
  },
  {
    "word": "astronomía",
    "hint": "El estudio científico de los objetos y fenómenos celestiales."
  },
  {
    "word": "fútbol",
    "hint": "Un deporte popular jugado con una pelota esférica."
  },
  {
    "word": "chocolate",
    "hint": "Un dulce hecho de granos de cacao."
  },
  {
    "word": "mariposa",
    "hint": "Un insecto con alas coloridas y un cuerpo delgado."
  },
  {
    "word": "historia",
    "hint": "El estudio de eventos pasados y la civilización humana."
  },
  {
    "word": "pizza",
    "hint": "Un plato salado que consiste en una base redonda y plana con ingredientes encima."
  },
  {
    "word": "jazz",
    "hint": "Un género de música caracterizado por la improvisación y la sincopación."
  },
  {
    "word": "cámara",
    "hint": "Un dispositivo utilizado para capturar y grabar imágenes o videos."
  },
  {
    "word": "diamante",
    "hint": "Una piedra preciosa conocida por su brillo y dureza."
  },
  {
    "word": "aventura",
    "hint": "Una experiencia emocionante o atrevida."
  },
  {
    "word": "ciencia",
    "hint": "El estudio sistemático de la estructura y el comportamiento del mundo físico y natural."
  },
  {
    "word": "bicicleta",
    "hint": "Un vehículo impulsado por humanos con dos ruedas."
  },
  {
    "word": "atardecer",
    "hint": "La desaparición diaria del sol por debajo del horizonte."
  },
  {
    "word": "café",
    "hint": "Una bebida popular con cafeína hecha de granos de café tostados."
  },
  {
    "word": "baile",
    "hint": "Un movimiento rítmico del cuerpo, a menudo realizado con música."
  },
  {
    "word": "galaxia",
    "hint": "Un vasto sistema de estrellas, gas y polvo mantenido unido por la gravedad."
  },
  {
    "word": "orquesta",
    "hint": "Un gran conjunto de músicos que tocan varios instrumentos."
  },
  {
    "word": "migraña",
    "hint": "Es un tipo de dolor de cabeza que puede ocurrir con síntomas como náuseas, vómitos o sensibilidad a la luz y al sonido"
  },
  {
    "word": "volcán",
    "hint": "Una montaña o colina con un conducto por el cual se expulsan lava, fragmentos de roca, vapor caliente y gas."
  },
  {
    "word": "novela",
    "hint": "Una obra larga de ficción, típicamente con una trama y personajes complejos."
  },
  {
    "word": "escultura",
    "hint": "Una forma de arte tridimensional creada moldeando o combinando materiales."
  },
  {
    "word": "sinfonía",
    "hint": "Una composición musical larga para una orquesta completa, típicamente en varios movimientos."
  },
  {
    "word": "arquitectura",
    "hint": "El arte y la ciencia de diseñar y construir edificios."
  },
  {
    "word": "ballet",
    "hint": "Una forma de danza clásica caracterizada por movimientos precisos y gráciles."
  },
  {
    "word": "astronauta",
    "hint": "Una persona entrenada para viajar y trabajar en el espacio."
  },
  {
    "word": "cascada",
    "hint": "Una caída de agua desde una altura."
  },
  {
    "word": "tecnología",
    "hint": "La aplicación del conocimiento científico para fines prácticos."
  },
  {
    "word": "arcoíris",
    "hint": "Un fenómeno meteorológico causado por la reflexión, refracción y dispersión de la luz."
  },
  {
    "word": "universo",
    "hint": "Toda la materia, el espacio y el tiempo existentes en su conjunto."
  },
  {
    "word": "piano",
    "hint": "Un instrumento musical que se toca presionando teclas que hacen que los martillos golpeen cuerdas."
  },
  {
    "word": "vacaciones",
    "hint": "Un período de tiempo dedicado al placer, descanso o relajación."
  },
  {
    "word": "selva",
    "hint": "Un bosque denso caracterizado por altas precipitaciones y biodiversidad."
  },
  {
    "word": "teatro",
    "hint": "Un edificio o área al aire libre donde se presentan obras de teatro, películas u otras actuaciones."
  },
  {
    "word": "teléfono",
    "hint": "Un dispositivo utilizado para transmitir sonido a largas distancias."
  },
  {
    "word": "lenguaje",
    "hint": "Un sistema de comunicación que consiste en palabras, gestos y sintaxis."
  },
  {
    "word": "desierto",
    "hint": "Una tierra árida o estéril con poca o ninguna precipitación."
  },
  {
    "word": "girasol",
    "hint": "Una planta alta con una gran cabeza de flor amarilla."
  },
  {
    "word": "fantasía",
    "hint": "Un género de ficción imaginativa que involucra magia y elementos sobrenaturales."
  },
  {
    "word": "telescopio",
    "hint": "Un instrumento óptico utilizado para observar objetos distantes en el espacio."
  },
  {
    "word": "brisa",
    "hint": "Un viento suave."
  },
  {
    "word": "oasis",
    "hint": "Un lugar fértil en un desierto donde se encuentra agua."
  },
  {
    "word": "fotografía",
    "hint": "El arte, proceso o práctica de crear imágenes grabando luz u otra radiación electromagnética."
  },
  {
    "word": "safari",
    "hint": "Una expedición o viaje, típicamente para observar la vida silvestre en su hábitat natural."
  },
  {
    "word": "planeta",
    "hint": "Un cuerpo celeste que orbita una estrella y no produce luz propia."
  },
  {
    "word": "río",
    "hint": "Un gran flujo natural de agua que fluye en un canal hacia el mar, un lago u otro flujo similar."
  },
  {
    "word": "tropical",
    "hint": "Relacionado o situado en la región entre el Trópico de Cáncer y el Trópico de Capricornio."
  },
  {
    "word": "misterioso",
    "hint": "Difícil o imposible de entender, explicar o identificar."
  },
  {
    "word": "enigma",
    "hint": "Algo que es misterioso, desconcertante o difícil de entender."
  },
  {
    "word": "paradoja",
    "hint": "Una declaración o situación que se contradice a sí misma o desafía la intuición."
  },
  {
    "word": "rompecabezas",
    "hint": "Un juego, juguete o problema diseñado para probar el ingenio o el conocimiento."
  },
  {
    "word": "susurro",
    "hint": "Hablar muy suavemente o en voz baja, a menudo de manera secreta."
  },
  {
    "word": "sombra",
    "hint": "Un área u objeto oscuro producido por un objeto que bloquea la luz."
  },
  {
    "word": "secreto",
    "hint": "Algo mantenido oculto o desconocido para otros."
  },
  {
    "word": "curiosidad",
    "hint": "Un fuerte deseo de saber o aprender algo."
  },
  {
    "word": "impredecible",
    "hint": "No puede ser previsto o conocido de antemano; incierto."
  },
  {
    "word": "obfuscar",
    "hint": "Confundir o desconcertar a alguien; hacer algo poco claro o difícil de entender."
  },
  {
    "word": "desvelar",
    "hint": "Dar a conocer o revelar algo previamente secreto o desconocido."
  },
  {
    "word": "ilusión",
    "hint": "Una percepción o creencia falsa; una apariencia o impresión engañosa."
  },
  {
    "word": "fotosíntesis",
    "hint": "es un proceso químico que consiste en la conversión de materia inorgánica a materia orgánica gracias a la energía que aporta la luz solar."
  },
  {
    "word": "vibrante",
    "hint": "Lleno de energía, brillo y vida."
  },
  {
    "word": "nostalgia",
    "hint": "Un anhelo sentimental o afecto melancólico por el pasado."
  },
  {
    "word": "brillante",
    "hint": "Excepcionalmente inteligente, talentoso o impresionante."
  }
]
