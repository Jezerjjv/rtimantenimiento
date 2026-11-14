export const site = {
  name: 'RTI Mantenimiento',
  legal: 'Recursos Técnicos Industriales Ltda.',
  contactName: 'Pedro Silva Buitrago',
  phoneDisplay: '316 454 1612',
  phone: '+573164541612',
  phones: [
    { label: 'Celular', display: '316 454 1612', tel: '+573164541612' },
    { label: 'Celular', display: '316 808 6811', tel: '+573168086811' },
    { label: 'Celular', display: '317 680 7785', tel: '+573176807785' },
    { label: 'Teléfono', display: '762 38 13', tel: '+577623813' },
  ],
  whatsapp: '573164541612',
  landline: '762 38 13',
  emails: [
    { label: 'Gerencia', address: 'gerencia@rtimantenimiento.com' },
    { label: 'Dirección', address: 'pedrosilva@rtimantenimiento.com' },
  ],
  email: 'gerencia@rtimantenimiento.com',
  address: 'Cra 22 # 11E-3, Barrio San Carlos, vía a Cerro Matoso',
  city: 'Montelíbano, Córdoba',
  country: 'Colombia',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Cra+22+%2311E-3+Barrio+San+Carlos+Montelibano+Cordoba+Colombia',
  portfolio: '/portafolio-rti.pdf',
}

export const navLinks = [
  { label: 'Nosotros', id: 'nosotros' },
  { label: 'Nuestra gente', id: 'gente' },
  { label: 'Servicios', id: 'servicios' },
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

/**
 * Contenido tomado de https://rtimantenimiento.com/index.php/servicios/
 */
export const services: Service[] = [
  {
    id: 'alquiler-equipos',
    title: 'Alquiler y Montaje de Equipos',
    kicker: 'Andamios certificados',
    description: 'Maquinaria, herramientas y andamios certificados, con montaje incluido.',
    items: [
      'Alquiler de maquinaria y herramientas industriales.',
      'Alquiler y montaje de andamios certificados conforme a normativas vigentes.',
    ],
    image: '/img/crane.webp',
    alt: 'Izaje y montaje de equipos con grúa en planta industrial',
  },
  {
    id: 'fabricacion-mecanizado',
    title: 'Fabricación y Mecanizado',
    kicker: 'Torno portátil en campo',
    description: 'Piezas, mecanizados y reconstrucción de maquinaria.',
    items: [
      'Fabricación de piezas industriales.',
      'Mecanizados en general, incluyendo servicio de torno portátil en campo.',
      'Fabricación de pernos, pasadores, bujes, tornillería y engranajes.',
      'Reconstrucción de maquinaria agrícola e industrial.',
    ],
    image: '/img/workshop.webp',
    alt: 'Trabajo de mecanizado y fabricación de piezas metálicas',
  },
  {
    id: 'mantenimiento-industrial',
    title: 'Mantenimiento Industrial',
    kicker: 'Predictivo · preventivo · correctivo',
    description: 'Mantenimiento de maquinaria y sistemas para sostener la operación.',
    items: [
      'Mantenimiento y reparación de piezas y equipos industriales.',
      'Mantenimiento predictivo, preventivo y correctivo de maquinaria, sistemas eléctricos, hidráulicos y neumáticos.',
      'Bombas centrífugas, bandas transportadoras, trituradoras, tolvas, elevadores de cangilones, ventiladores, puente grúa y tuberías.',
      'Diagnóstico de fallas mediante análisis de vibraciones, termografía y pruebas funcionales.',
      'Reparación de cilindros hidráulicos.',
    ],
    image: '/img/work.webp',
    alt: 'Técnico de R.T.I realizando mantenimiento con equipo de protección personal',
  },
  {
    id: 'mantenimiento-electrico',
    title: 'Mantenimiento Eléctrico',
    kicker: 'RETIE · NFPA 70E',
    description: 'Inspección, mantenimiento y diagnóstico eléctrico bajo norma.',
    items: [
      'Inspección técnica de sistemas eléctricos conforme a RETIE y NFPA 70E.',
      'Mantenimiento preventivo de tableros, transformadores, motores, luminarias y sistemas de respaldo.',
      'Diagnóstico termográfico.',
      'Análisis de calidad de energía.',
      'Corrección de fallas y optimización de cargas.',
      'Documentación técnica y entrega de informes detallados.',
    ],
    image: '/img/valve.webp',
    alt: 'Mantenimiento de sistemas y equipos en planta industrial',
  },
  {
    id: 'montajes-industriales',
    title: 'Montajes Industriales',
    kicker: 'Estructuras · automatización',
    description: 'Montaje de equipos, estructuras y redes, con puesta en marcha.',
    items: [
      'Montaje de equipos industriales: motores, bombas, compresores, tableros eléctricos, sistemas de ventilación y climatización.',
      'Instalación de redes eléctricas de baja y media tensión conforme a RETIE y NFPA 70E.',
      'Montaje de estructuras metálicas, soportes técnicos y canalizaciones industriales.',
      'Integración de sistemas: automatización, control, instrumentación y puesta en marcha.',
      'Supervisión técnica y gestión documental del proyecto.',
    ],
    image: '/img/scaffold.webp',
    alt: 'Montaje de estructura metálica y andamio certificado en planta',
  },
  {
    id: 'planeacion-logistica',
    title: 'Planeación y Logística',
    kicker: 'Paradas de planta',
    description: 'Planeación y coordinación de mantenimientos mayores y paradas.',
    items: [
      'Planeación estratégica y ejecución de mantenimientos mayores y paradas de planta.',
      'Coordinación logística de servicios de mantenimiento y montaje.',
    ],
    image: '/img/team.webp',
    alt: 'Equipo técnico de R.T.I reunido en planta',
  },
  {
    id: 'suministro-personal',
    title: 'Suministro de Personal',
    kicker: 'Personal técnico calificado',
    description: 'Personal técnico calificado para proyectos, mantenimiento y operación.',
    items: [
      'Provisión de personal técnico calificado para proyectos industriales, mantenimiento y operación.',
    ],
    image: '/img/crew.webp',
    alt: 'Personal técnico de R.T.I en planta industrial',
  },
]

/** Razones tomadas del sitio actual (bloque de beneficios). */
export const strengths = [
  {
    number: '01',
    title: 'Cumplimiento y seguridad',
    text: 'Soluciones enfocadas en calidad y seguridad, cumpliendo estrictamente con normativas vigentes como RETIE y NFPA 70E.',
  },
  {
    number: '02',
    title: 'Diagnóstico especializado',
    text: 'Análisis de vibraciones, termografía y pruebas funcionales para un mantenimiento predictivo y preventivo de alta precisión.',
  },
  {
    number: '03',
    title: 'Soluciones 360°',
    text: 'Desde el suministro de personal calificado y alquiler de equipos hasta la ejecución de montajes y paradas de planta.',
  },
  {
    number: '04',
    title: 'Gestión documental',
    text: 'Registros de mantenimiento, informes técnicos, cronogramas y trazabilidad en cada trabajo.',
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

/** Texto literal de https://rtimantenimiento.com/index.php/nuestra-gente/ */
export const people = {
  lead: 'Contamos con un excelente equipo de profesionales y técnicos con una amplia experiencia en el ámbito de mantenimiento industrial y montaje.',
  body: [
    'Cuidamos de ellos y así los motivamos para hacer de cada trabajo una operación segura, cumpliendo con los estándares en calidad, seguridad y salud en el trabajo.',
    'Trabajamos bajo las condiciones de unos procedimientos seguros por cada actividad específica, utilizando equipos y elementos de protección personal adecuados para cada necesidad.',
  ],
}

/** Política literal de https://rtimantenimiento.com/index.php/seguridad/ */
export const safetyPolicy = {
  intro:
    'RECURSOS TÉCNICOS INDUSTRIALES LTDA se compromete a implementar un sistema de gestión en seguridad, salud en el trabajo y ambiente, con el fin de gestionar los riesgos laborales derivados del desarrollo de sus actividades. Con este fin ha establecido los siguientes principios:',
  principles: [
    'Prevenir accidentes y enfermedades laborales mediante la identificación de peligros, evaluación y valoración de riesgos, y el establecimiento de controles.',
    'Evitar los daños a la propiedad que la empresa pueda ocasionar en la ejecución de sus labores.',
    'Prevenir y mitigar el impacto ambiental optimizando el uso de los recursos naturales en el desarrollo de nuestras actividades.',
    'Cumplir con los requisitos legales aplicables en materia de seguridad, salud en el trabajo, ambiente y de otra índole que haya suscrito la organización.',
    'Proporcionar los recursos necesarios para la implementación y mejoramiento continuo de su sistema de gestión de seguridad, salud en el trabajo y ambiente.',
    'Fomentar la responsabilidad social con sus grupos de interés.',
  ],
  closing:
    'La gerencia de R.T.I. Recursos Técnicos Industriales Ltda. se compromete a divulgar esta política a todos sus empleados, proveedores y contratistas.',
}
