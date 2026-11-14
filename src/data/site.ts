export const site = {
  name: 'R.T.I Mantenimiento',
  legal: 'Recursos Técnicos Industriales Ltda.',
  contactName: 'Pedro Silva Buitrago',
  phoneDisplay: '316 454 1612',
  phone: '+573164541612',
  whatsapp: '573164541612',
  landline: '762 38 13',
  email: 'pedrosilva@rtimantenimiento.com',
  address: 'Cra 22 # 11E-3, Barrio San Carlos, vía a Cerro Matoso',
  city: 'Montelíbano, Córdoba',
  country: 'Colombia',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Cra+22+%2311E-3+Barrio+San+Carlos+Montelibano+Cordoba+Colombia',
}

export const navLinks = [
  { label: 'Nosotros', id: 'nosotros' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Proceso', id: 'proceso' },
  { label: 'En planta', id: 'proyectos' },
  { label: 'Seguridad', id: 'seguridad' },
]

export type Service = {
  id: string
  title: string
  kicker: string
  description: string
  items: string[]
  image: string
  alt: string
}

export const services: Service[] = [
  {
    id: 'mantenimiento-industrial',
    title: 'Mantenimiento Industrial',
    kicker: 'Mecánico · predictivo · correctivo',
    description:
      'Intervenimos equipos críticos con diagnóstico previo, repuestos verificados y pruebas funcionales antes de entregar.',
    items: [
      'Mantenimiento predictivo, preventivo y correctivo de maquinaria.',
      'Bombas centrífugas, bandas transportadoras, trituradoras, tolvas, elevadores de cangilones, ventiladores, puente grúa y tuberías.',
      'Diagnóstico de fallas por análisis de vibraciones, termografía y pruebas funcionales.',
      'Reparación de cilindros hidráulicos y sistemas hidráulicos y neumáticos.',
    ],
    image: '/img/work.webp',
    alt: 'Técnico de R.T.I realizando mantenimiento con equipo de protección personal',
  },
  {
    id: 'mantenimiento-electrico',
    title: 'Mantenimiento Eléctrico',
    kicker: 'RETIE · NFPA 70E',
    description:
      'Trabajos eléctricos bajo norma, con análisis de riesgo, bloqueo y etiquetado, y entrega de informes detallados.',
    items: [
      'Inspección técnica de sistemas eléctricos conforme a RETIE y NFPA 70E.',
      'Mantenimiento preventivo de tableros, transformadores, motores, luminarias y sistemas de respaldo.',
      'Diagnóstico termográfico y análisis de calidad de energía.',
      'Corrección de fallas, optimización de cargas y documentación técnica.',
    ],
    image: '/img/valve.webp',
    alt: 'Mantenimiento de sistemas y equipos en planta industrial',
  },
  {
    id: 'fabricacion-mecanizado',
    title: 'Fabricación y Mecanizado',
    kicker: 'Torno · piezas a medida',
    description:
      'Fabricamos y recuperamos piezas con planos o muestra física, con control dimensional y trazabilidad del material.',
    items: [
      'Fabricación de piezas industriales y mecanizados en general.',
      'Servicio de torno y torno portátil en sitio.',
      'Fabricación de pernos, pasadores, bujes, tornillería y engranajes.',
      'Reconstrucción de maquinaria agrícola e industrial.',
    ],
    image: '/img/workshop.webp',
    alt: 'Trabajo de mecanizado y fabricación de piezas metálicas',
  },
  {
    id: 'montajes-industriales',
    title: 'Montajes Industriales',
    kicker: 'Estructuras · instrumentación',
    description:
      'Montamos desde una línea de transporte hasta una estructura completa, con supervisión técnica y cierre documental.',
    items: [
      'Montaje de motores, bombas, compresores, tableros, ventilación y climatización.',
      'Redes eléctricas de baja y media tensión conforme a RETIE y NFPA 70E.',
      'Diseño y fabricación de plataformas, escaleras, estructuras metálicas y canalizaciones.',
      'Integración de automatización, control e instrumentación con puesta en marcha.',
    ],
    image: '/img/scaffold.webp',
    alt: 'Montaje de estructura metálica y andamio certificado en planta',
  },
  {
    id: 'alquiler-equipos',
    title: 'Alquiler y Montaje de Equipos',
    kicker: 'Andamios certificados',
    description:
      'Equipos y andamios certificados, con montaje, inspección y desmontaje a cargo de nuestro propio personal.',
    items: [
      'Alquiler de maquinaria y herramientas industriales.',
      'Alquiler y montaje de andamios certificados conforme a normativa vigente.',
      'Montaje y desmontaje con personal propio y listas de chequeo.',
      'Logística y transporte hasta el sitio de trabajo.',
    ],
    image: '/img/crane.webp',
    alt: 'Izaje y montaje de equipos con grúa en planta industrial',
  },
  {
    id: 'planeacion-personal',
    title: 'Planeación y Suministro de Personal',
    kicker: 'Paradas de planta',
    description:
      'Planificamos la parada completa: alcance, cronograma, logística, personal y cierre con informes.',
    items: [
      'Planeación estratégica y ejecución de mantenimientos mayores y paradas de planta.',
      'Coordinación logística de servicios de mantenimiento y montaje.',
      'Provisión de personal técnico calificado para proyectos y operación.',
      'Gestión documental: registros, informes técnicos, cronogramas y trazabilidad.',
    ],
    image: '/img/team.webp',
    alt: 'Equipo técnico de R.T.I reunido en planta',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Diagnóstico',
    text: 'Visita técnica, levantamiento del estado del equipo y definición del alcance real del trabajo.',
  },
  {
    number: '02',
    title: 'Planeación',
    text: 'Cronograma, análisis de riesgos, permisos de trabajo y logística de la parada o del montaje.',
  },
  {
    number: '03',
    title: 'Ejecución',
    text: 'Intervención en planta con personal propio, EPP, procedimientos seguros y supervisión técnica.',
  },
  {
    number: '04',
    title: 'Cierre',
    text: 'Pruebas funcionales, entrega de informes técnicos, registros y trazabilidad documental.',
  },
]

export const gallery = [
  { src: '/img/scaffold.webp', caption: 'Estructuras y andamios certificados', tag: 'Montaje' },
  { src: '/img/welding.webp', caption: 'Soldadura y fabricación en sitio', tag: 'Mecanizado' },
  { src: '/img/grinding.webp', caption: 'Intervención de equipos en planta', tag: 'Mantenimiento' },
  { src: '/img/valve.webp', caption: 'Sistemas hidráulicos y neumáticos', tag: 'Mecánico' },
  { src: '/img/workshop.webp', caption: 'Servicio de torno y piezas a medida', tag: 'Mecanizado' },
  { src: '/img/team.webp', caption: 'Paradas de planta y mantenimiento mayor', tag: 'Planeación' },
  { src: '/img/crane.webp', caption: 'Izaje y montaje de equipos', tag: 'Montaje' },
  { src: '/img/section.webp', caption: 'Trabajo en alturas y espacios confinados', tag: 'Seguridad' },
]

export const clients = [
  'Argos',
  'China United Engineering',
  'Gecelca',
  'Refraso',
  'Singcol',
  'Esenttia',
  'Sator',
]

export const certifications = [
  { code: 'RETIE', label: 'Reglamento técnico de instalaciones eléctricas' },
  { code: 'NFPA 70E', label: 'Seguridad eléctrica en el trabajo' },
  { code: 'CCS', label: 'Consejo Colombiano de Seguridad' },
  { code: 'RUC', label: 'Registro Uniforme para Contratistas' },
]
