// Catálogo Completo y Estructurado de Productos - ANGEL-IK
// Generado dinámicamente para el Portafolio Interactivo

const PORTFOLIO_CATEGORIES = [
  { id: 'todos', name: 'Todos los Diseños', icon: '✨' },
  { id: 'fiestas', name: 'Para tus Fiestas', icon: '🎉', subcategories: [
    { id: 'todos-fiestas', name: 'Todo en Fiestas' },
    { id: 'fiestas-dulceros', name: 'Dulceros Temáticos' },
    { id: 'fiestas-recuerdos', name: 'Recuerdos de Evento' },
    { id: 'fiestas-mesas', name: 'Mesas de Dulces' },
    { id: 'fiestas-decoracion', name: 'Decoración de Salón' },
    { id: 'fiestas-postres', name: 'Postres & Repostería' },
    { id: 'fiestas-invitaciones', name: 'Invitaciones Digitales' }
  ]},
  { id: 'hogar', name: 'Adornos para el Hogar', icon: '🏡', subcategories: [
    { id: 'todos-hogar', name: 'Todo en Hogar' },
    { id: 'hogar-pared', name: 'Para tu Pared' },
    { id: 'hogar-mesa', name: 'Centros de Mesa' },
    { id: 'hogar-general', name: 'Decoración General' }
  ]},
  { id: 'regalos', name: 'Regalos Personalizados', icon: '🎁', subcategories: [
    { id: 'todos-regalos', name: 'Todos los Regalos' },
    { id: 'regalos-arreglos', name: 'Arreglos Buchonés & Ramos' },
    { id: 'regalos-cajas', name: 'Cajas Sorpresa' }
  ]},
  { id: 'natura', name: 'Productos Natura', icon: '🌸' },
  { id: 'school', name: 'Back to School', icon: '📚' },
  { id: 'ropa', name: 'Ropa de Uso', icon: '👗', subcategories: [
    { id: 'todos-ropa', name: 'Toda la Ropa' },
    { id: 'ropa-dama', name: 'Dama' },
    { id: 'ropa-caballero', name: 'Caballero' },
    { id: 'ropa-accesorios', name: 'Accesorios' }
  ]}
];

const PORTFOLIO_DATA = [
  {
    "id": "item-1",
    "title": "Línea de Belleza & Cuidado Personal Natura",
    "category": "natura",
    "categoryName": "Productos Natura",
    "subcategory": "natura-belleza",
    "subcategoryName": "Catálogo & Ofertas",
    "image": "img/nat.jpg",
    "description": "Cremas, perfumes, maquillaje y cuidado corporal Natura con descuentos especiales."
  },
  {
    "id": "item-2",
    "title": "Detalle Decorativo para Hogar",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-general",
    "subcategoryName": "Decoración General",
    "image": "Photo/Adorno/ad001.webp",
    "description": "Adornos artesanales para llenar de vida cada espacio"
  },
  {
    "id": "item-3",
    "title": "Detalle Decorativo para Hogar",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-general",
    "subcategoryName": "Decoración General",
    "image": "Photo/Adorno/ad002.webp",
    "description": "Adornos artesanales para llenar de vida cada espacio"
  },
  {
    "id": "item-4",
    "title": "Detalle Decorativo para Hogar",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-general",
    "subcategoryName": "Decoración General",
    "image": "Photo/Adorno/ad003.webp",
    "description": "Adornos artesanales para llenar de vida cada espacio"
  },
  {
    "id": "item-5",
    "title": "Detalle Decorativo para Hogar",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-general",
    "subcategoryName": "Decoración General",
    "image": "Photo/Adorno/ad004.webp",
    "description": "Adornos artesanales para llenar de vida cada espacio"
  },
  {
    "id": "item-6",
    "title": "Detalle Decorativo para Hogar",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-general",
    "subcategoryName": "Decoración General",
    "image": "Photo/Adorno/ad005.webp",
    "description": "Adornos artesanales para llenar de vida cada espacio"
  },
  {
    "id": "item-7",
    "title": "Detalle Decorativo para Hogar",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-general",
    "subcategoryName": "Decoración General",
    "image": "Photo/Adorno/ad006.webp",
    "description": "Adornos artesanales para llenar de vida cada espacio"
  },
  {
    "id": "item-8",
    "title": "Detalle Decorativo para Hogar",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-general",
    "subcategoryName": "Decoración General",
    "image": "Photo/Adorno/ad007.webp",
    "description": "Adornos artesanales para llenar de vida cada espacio"
  },
  {
    "id": "item-9",
    "title": "Detalle Decorativo para Hogar",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-general",
    "subcategoryName": "Decoración General",
    "image": "Photo/Adorno/ad008.webp",
    "description": "Adornos artesanales para llenar de vida cada espacio"
  },
  {
    "id": "item-10",
    "title": "Cuadro / Adorno de Pared",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-pared",
    "subcategoryName": "Para tu Pared",
    "image": "Photo/Adorno/ad009.webp",
    "description": "Decoración exclusiva para muros y salas"
  },
  {
    "id": "item-11",
    "title": "Cuadro / Adorno de Pared",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-pared",
    "subcategoryName": "Para tu Pared",
    "image": "Photo/Adorno/ado10.webp",
    "description": "Decoración exclusiva para muros y salas"
  },
  {
    "id": "item-12",
    "title": "Cuadro / Adorno de Pared",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-pared",
    "subcategoryName": "Para tu Pared",
    "image": "Photo/Adorno/ado11.webp",
    "description": "Decoración exclusiva para muros y salas"
  },
  {
    "id": "item-13",
    "title": "Cuadro / Adorno de Pared",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-pared",
    "subcategoryName": "Para tu Pared",
    "image": "Photo/Adorno/ado12.webp",
    "description": "Decoración exclusiva para muros y salas"
  },
  {
    "id": "item-14",
    "title": "Cuadro / Adorno de Pared",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-pared",
    "subcategoryName": "Para tu Pared",
    "image": "Photo/Adorno/ado13.webp",
    "description": "Decoración exclusiva para muros y salas"
  },
  {
    "id": "item-15",
    "title": "Cuadro / Adorno de Pared",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-pared",
    "subcategoryName": "Para tu Pared",
    "image": "Photo/Adorno/ado14.webp",
    "description": "Decoración exclusiva para muros y salas"
  },
  {
    "id": "item-16",
    "title": "Cuadro / Adorno de Pared",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-pared",
    "subcategoryName": "Para tu Pared",
    "image": "Photo/Adorno/ado15.webp",
    "description": "Decoración exclusiva para muros y salas"
  },
  {
    "id": "item-17",
    "title": "Centro de Mesa Artesanal",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-mesa",
    "subcategoryName": "Centros de Mesa",
    "image": "Photo/Centros/cm001.webp",
    "description": "Elegante centro de mesa para eventos y hogar"
  },
  {
    "id": "item-18",
    "title": "Centro de Mesa Artesanal",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-mesa",
    "subcategoryName": "Centros de Mesa",
    "image": "Photo/Centros/cm002.webp",
    "description": "Elegante centro de mesa para eventos y hogar"
  },
  {
    "id": "item-19",
    "title": "Centro de Mesa Artesanal",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-mesa",
    "subcategoryName": "Centros de Mesa",
    "image": "Photo/Centros/cm003.webp",
    "description": "Elegante centro de mesa para eventos y hogar"
  },
  {
    "id": "item-20",
    "title": "Centro de Mesa Artesanal",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-mesa",
    "subcategoryName": "Centros de Mesa",
    "image": "Photo/Centros/cm004.webp",
    "description": "Elegante centro de mesa para eventos y hogar"
  },
  {
    "id": "item-21",
    "title": "Centro de Mesa Artesanal",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-mesa",
    "subcategoryName": "Centros de Mesa",
    "image": "Photo/Centros/cm005.webp",
    "description": "Elegante centro de mesa para eventos y hogar"
  },
  {
    "id": "item-22",
    "title": "Centro de Mesa Artesanal",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-mesa",
    "subcategoryName": "Centros de Mesa",
    "image": "Photo/Centros/cm006.webp",
    "description": "Elegante centro de mesa para eventos y hogar"
  },
  {
    "id": "item-23",
    "title": "Centro de Mesa Artesanal",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-mesa",
    "subcategoryName": "Centros de Mesa",
    "image": "Photo/Centros/cm007.webp",
    "description": "Elegante centro de mesa para eventos y hogar"
  },
  {
    "id": "item-24",
    "title": "Centro de Mesa Artesanal",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-mesa",
    "subcategoryName": "Centros de Mesa",
    "image": "Photo/Centros/cm008.webp",
    "description": "Elegante centro de mesa para eventos y hogar"
  },
  {
    "id": "item-25",
    "title": "Centro de Mesa Artesanal",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-mesa",
    "subcategoryName": "Centros de Mesa",
    "image": "Photo/Centros/cm009.webp",
    "description": "Elegante centro de mesa para eventos y hogar"
  },
  {
    "id": "item-26",
    "title": "Centro de Mesa Artesanal",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-mesa",
    "subcategoryName": "Centros de Mesa",
    "image": "Photo/Centros/cm010.webp",
    "description": "Elegante centro de mesa para eventos y hogar"
  },
  {
    "id": "item-27",
    "title": "Centro de Mesa Artesanal",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-mesa",
    "subcategoryName": "Centros de Mesa",
    "image": "Photo/Centros/cm011.webp",
    "description": "Elegante centro de mesa para eventos y hogar"
  },
  {
    "id": "item-28",
    "title": "Centro de Mesa Artesanal",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-mesa",
    "subcategoryName": "Centros de Mesa",
    "image": "Photo/Centros/cm012.webp",
    "description": "Elegante centro de mesa para eventos y hogar"
  },
  {
    "id": "item-29",
    "title": "Centro de Mesa Artesanal",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-mesa",
    "subcategoryName": "Centros de Mesa",
    "image": "Photo/Centros/cm013.webp",
    "description": "Elegante centro de mesa para eventos y hogar"
  },
  {
    "id": "item-30",
    "title": "Centro de Mesa Artesanal",
    "category": "hogar",
    "categoryName": "Adornos para el Hogar",
    "subcategory": "hogar-mesa",
    "subcategoryName": "Centros de Mesa",
    "image": "Photo/Centros/cm014.webp",
    "description": "Elegante centro de mesa para eventos y hogar"
  },
  {
    "id": "item-31",
    "title": "Invitación Digital Interactiva",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-invitaciones",
    "subcategoryName": "Invitaciones Digitales",
    "image": "Photo/Invitaciones/invi001.webp",
    "description": "Diseño digital personalizado listo para WhatsApp y redes"
  },
  {
    "id": "item-32",
    "title": "Montaje de Mesa de Dulces",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-mesas",
    "subcategoryName": "Mesas de Dulces",
    "image": "Photo/MDulces/md001.webp",
    "description": "Decoración temática y dulces seleccionados para eventos"
  },
  {
    "id": "item-33",
    "title": "Montaje de Mesa de Dulces",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-mesas",
    "subcategoryName": "Mesas de Dulces",
    "image": "Photo/MDulces/md002.webp",
    "description": "Decoración temática y dulces seleccionados para eventos"
  },
  {
    "id": "item-34",
    "title": "Montaje de Mesa de Dulces",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-mesas",
    "subcategoryName": "Mesas de Dulces",
    "image": "Photo/MDulces/md003.webp",
    "description": "Decoración temática y dulces seleccionados para eventos"
  },
  {
    "id": "item-35",
    "title": "Montaje de Mesa de Dulces",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-mesas",
    "subcategoryName": "Mesas de Dulces",
    "image": "Photo/MDulces/md004.webp",
    "description": "Decoración temática y dulces seleccionados para eventos"
  },
  {
    "id": "item-36",
    "title": "Montaje de Mesa de Dulces",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-mesas",
    "subcategoryName": "Mesas de Dulces",
    "image": "Photo/MDulces/md005.webp",
    "description": "Decoración temática y dulces seleccionados para eventos"
  },
  {
    "id": "item-37",
    "title": "Montaje de Mesa de Dulces",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-mesas",
    "subcategoryName": "Mesas de Dulces",
    "image": "Photo/MDulces/md006.webp",
    "description": "Decoración temática y dulces seleccionados para eventos"
  },
  {
    "id": "item-38",
    "title": "Decoración de Salón y Eventos",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-decoracion",
    "subcategoryName": "Decoración de Salón",
    "image": "Photo/Salon/sal001.webp",
    "description": "Ambientación completa, arcos y detalles para fiestas"
  },
  {
    "id": "item-39",
    "title": "Decoración de Salón y Eventos",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-decoracion",
    "subcategoryName": "Decoración de Salón",
    "image": "Photo/Salon/sal002.webp",
    "description": "Ambientación completa, arcos y detalles para fiestas"
  },
  {
    "id": "item-40",
    "title": "Decoración de Salón y Eventos",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-decoracion",
    "subcategoryName": "Decoración de Salón",
    "image": "Photo/Salon/sal003.webp",
    "description": "Ambientación completa, arcos y detalles para fiestas"
  },
  {
    "id": "item-41",
    "title": "Decoración de Salón y Eventos",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-decoracion",
    "subcategoryName": "Decoración de Salón",
    "image": "Photo/Salon/sal004.webp",
    "description": "Ambientación completa, arcos y detalles para fiestas"
  },
  {
    "id": "item-42",
    "title": "Decoración de Salón y Eventos",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-decoracion",
    "subcategoryName": "Decoración de Salón",
    "image": "Photo/Salon/sal005.webp",
    "description": "Ambientación completa, arcos y detalles para fiestas"
  },
  {
    "id": "item-43",
    "title": "Decoración de Salón y Eventos",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-decoracion",
    "subcategoryName": "Decoración de Salón",
    "image": "Photo/Salon/sal006.webp",
    "description": "Ambientación completa, arcos y detalles para fiestas"
  },
  {
    "id": "item-44",
    "title": "Decoración de Salón y Eventos",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-decoracion",
    "subcategoryName": "Decoración de Salón",
    "image": "Photo/Salon/sal007.webp",
    "description": "Ambientación completa, arcos y detalles para fiestas"
  },
  {
    "id": "item-45",
    "title": "Decoración de Salón y Eventos",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-decoracion",
    "subcategoryName": "Decoración de Salón",
    "image": "Photo/Salon/sal008.webp",
    "description": "Ambientación completa, arcos y detalles para fiestas"
  },
  {
    "id": "item-46",
    "title": "Decoración de Salón y Eventos",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-decoracion",
    "subcategoryName": "Decoración de Salón",
    "image": "Photo/Salon/sal009.webp",
    "description": "Ambientación completa, arcos y detalles para fiestas"
  },
  {
    "id": "item-47",
    "title": "Decoración de Salón y Eventos",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-decoracion",
    "subcategoryName": "Decoración de Salón",
    "image": "Photo/Salon/sal010.webp",
    "description": "Ambientación completa, arcos y detalles para fiestas"
  },
  {
    "id": "item-48",
    "title": "Dulcero Personalizado #1",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul001.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-49",
    "title": "Dulcero Personalizado #2",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul002.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-50",
    "title": "Dulcero Personalizado #3",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul003.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-51",
    "title": "Dulcero Personalizado #4",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul004.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-52",
    "title": "Dulcero Personalizado #5",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul005.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-53",
    "title": "Dulcero Personalizado #6",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul006.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-54",
    "title": "Dulcero Personalizado #7",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul007.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-55",
    "title": "Dulcero Personalizado #8",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul008.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-56",
    "title": "Dulcero Personalizado #9",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul009.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-57",
    "title": "Dulcero Personalizado #10",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul010.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-58",
    "title": "Dulcero Personalizado #11",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul011.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-59",
    "title": "Dulcero Personalizado #12",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul012.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-60",
    "title": "Dulcero Personalizado #13",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul013.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-61",
    "title": "Dulcero Personalizado #14",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul014.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-62",
    "title": "Dulcero Personalizado #15",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul015.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-63",
    "title": "Dulcero Personalizado #16",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul016.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-64",
    "title": "Dulcero Personalizado #17",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul017.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-65",
    "title": "Dulcero Personalizado #18",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul018.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-66",
    "title": "Dulcero Personalizado #19",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul019.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-67",
    "title": "Dulcero Personalizado #20",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul020.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-68",
    "title": "Dulcero Personalizado #21",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul021.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-69",
    "title": "Dulcero Personalizado #22",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul022.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-70",
    "title": "Dulcero Personalizado #23",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul023.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-71",
    "title": "Dulcero Personalizado #24",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul024.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-72",
    "title": "Dulcero Personalizado #25",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul025.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-73",
    "title": "Dulcero Personalizado #26",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul026.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-74",
    "title": "Dulcero Personalizado #27",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul027.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-75",
    "title": "Dulcero Personalizado #28",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul028.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-76",
    "title": "Dulcero Personalizado #29",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul029.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-77",
    "title": "Dulcero Personalizado #30",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul030.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-78",
    "title": "Dulcero Personalizado #31",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul031.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-79",
    "title": "Dulcero Personalizado #32",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul032.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-80",
    "title": "Dulcero Personalizado #33",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul033.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-81",
    "title": "Dulcero Personalizado #34",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul034.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-82",
    "title": "Dulcero Personalizado #35",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul035.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-83",
    "title": "Dulcero Personalizado #36",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul036.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-84",
    "title": "Dulcero Personalizado #37",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul037.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-85",
    "title": "Dulcero Personalizado #38",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul038.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-86",
    "title": "Dulcero Personalizado #39",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul039.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-87",
    "title": "Dulcero Personalizado #40",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul040.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-88",
    "title": "Dulcero Personalizado #41",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul041.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-89",
    "title": "Dulcero Personalizado #42",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul042.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-90",
    "title": "Dulcero Personalizado #43",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul043.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-91",
    "title": "Dulcero Personalizado #44",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul044.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-92",
    "title": "Dulcero Personalizado #45",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul045.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-93",
    "title": "Dulcero Personalizado #46",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul046.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-94",
    "title": "Dulcero Personalizado #47",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul047.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-95",
    "title": "Dulcero Personalizado #48",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul048.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-96",
    "title": "Dulcero Personalizado #49",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul049.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-97",
    "title": "Dulcero Personalizado #50",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul050.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-98",
    "title": "Dulcero Personalizado #51",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul051.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-99",
    "title": "Dulcero Personalizado #52",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul052.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-100",
    "title": "Dulcero Personalizado #53",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul053.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-101",
    "title": "Dulcero Personalizado #54",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul054.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-102",
    "title": "Dulcero Personalizado #55",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul055.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-103",
    "title": "Dulcero Personalizado #56",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul056.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-104",
    "title": "Dulcero Personalizado #57",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul057.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-105",
    "title": "Dulcero Personalizado #58",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul058.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-106",
    "title": "Dulcero Personalizado #59",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul059.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-107",
    "title": "Dulcero Personalizado #60",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul060.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-108",
    "title": "Dulcero Personalizado #61",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul061.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-109",
    "title": "Dulcero Personalizado #62",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul062.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-110",
    "title": "Dulcero Personalizado #63",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul063.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-111",
    "title": "Dulcero Personalizado #64",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul064.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-112",
    "title": "Dulcero Personalizado #65",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-dulceros",
    "subcategoryName": "Dulceros Temáticos",
    "image": "Photo/Dulceros/dul065.webp",
    "description": "Dulcero artesanal personalizado para fiesta infantil o evento"
  },
  {
    "id": "item-113",
    "title": "Recuerdo para Evento #1",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec001.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-114",
    "title": "Recuerdo para Evento #2",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec002.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-115",
    "title": "Recuerdo para Evento #3",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec003.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-116",
    "title": "Recuerdo para Evento #4",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec004.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-117",
    "title": "Recuerdo para Evento #5",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec005.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-118",
    "title": "Recuerdo para Evento #6",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec006.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-119",
    "title": "Recuerdo para Evento #7",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec007.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-120",
    "title": "Recuerdo para Evento #8",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec008.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-121",
    "title": "Recuerdo para Evento #9",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec009.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-122",
    "title": "Recuerdo para Evento #10",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec010.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-123",
    "title": "Recuerdo para Evento #11",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec011.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-124",
    "title": "Recuerdo para Evento #12",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec012.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-125",
    "title": "Recuerdo para Evento #13",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec013.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-126",
    "title": "Recuerdo para Evento #14",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec014.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-127",
    "title": "Recuerdo para Evento #15",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec015.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-128",
    "title": "Recuerdo para Evento #16",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec016.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-129",
    "title": "Recuerdo para Evento #17",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec017.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-130",
    "title": "Recuerdo para Evento #18",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec018.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-131",
    "title": "Recuerdo para Evento #19",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec019.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-132",
    "title": "Recuerdo para Evento #20",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec020.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-133",
    "title": "Recuerdo para Evento #21",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec021.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-134",
    "title": "Recuerdo para Evento #22",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec022.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-135",
    "title": "Recuerdo para Evento #23",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec023.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-136",
    "title": "Recuerdo para Evento #24",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-recuerdos",
    "subcategoryName": "Recuerdos de Evento",
    "image": "Photo/Recuerdos/rec024.webp",
    "description": "Recuerdo especial para bautizos, bodas, XV años y baby shower"
  },
  {
    "id": "item-137",
    "title": "Detalle de Postres & Repostería #1",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-postres",
    "subcategoryName": "Mesas de Postres",
    "image": "Photo/Postres/pos001.webp",
    "description": "Deliciosas opciones decoradas para mesa de postres"
  },
  {
    "id": "item-138",
    "title": "Detalle de Postres & Repostería #2",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-postres",
    "subcategoryName": "Mesas de Postres",
    "image": "Photo/Postres/pos002.webp",
    "description": "Deliciosas opciones decoradas para mesa de postres"
  },
  {
    "id": "item-139",
    "title": "Detalle de Postres & Repostería #3",
    "category": "fiestas",
    "categoryName": "Para tus Fiestas",
    "subcategory": "fiestas-postres",
    "subcategoryName": "Mesas de Postres",
    "image": "Photo/Postres/pos003.webp",
    "description": "Deliciosas opciones decoradas para mesa de postres"
  },
  {
    "id": "item-140",
    "title": "Útiles Escolares & Mochilas #1",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs001.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-141",
    "title": "Útiles Escolares & Mochilas #2",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs002.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-142",
    "title": "Útiles Escolares & Mochilas #3",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs003.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-143",
    "title": "Útiles Escolares & Mochilas #4",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs004.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-144",
    "title": "Útiles Escolares & Mochilas #5",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs005.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-145",
    "title": "Útiles Escolares & Mochilas #6",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs006.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-146",
    "title": "Útiles Escolares & Mochilas #7",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs007.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-147",
    "title": "Útiles Escolares & Mochilas #8",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs008.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-148",
    "title": "Útiles Escolares & Mochilas #9",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs009.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-149",
    "title": "Útiles Escolares & Mochilas #10",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs010.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-150",
    "title": "Útiles Escolares & Mochilas #11",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs011.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-151",
    "title": "Útiles Escolares & Mochilas #12",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs012.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-152",
    "title": "Útiles Escolares & Mochilas #13",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs013.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-153",
    "title": "Útiles Escolares & Mochilas #14",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs014.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-154",
    "title": "Útiles Escolares & Mochilas #15",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs015.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-155",
    "title": "Útiles Escolares & Mochilas #16",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs016.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-156",
    "title": "Útiles Escolares & Mochilas #17",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs017.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-157",
    "title": "Útiles Escolares & Mochilas #18",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs018.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-158",
    "title": "Útiles Escolares & Mochilas #19",
    "category": "school",
    "categoryName": "Back to School",
    "subcategory": "school-utiles",
    "subcategoryName": "Útiles Escolares",
    "image": "Photo/Backtoschool/bs019.webp",
    "description": "Artículos escolares de calidad para regreso a clases"
  },
  {
    "id": "item-159",
    "title": "Arreglo Buchón / Ramo Especial #1",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-arreglos",
    "subcategoryName": "Arreglos Buchonés & Flores",
    "image": "Photo/Arreglos/arr001.webp",
    "description": "Ramos de dulces, flores y detalles sorpresa"
  },
  {
    "id": "item-160",
    "title": "Arreglo Buchón / Ramo Especial #2",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-arreglos",
    "subcategoryName": "Arreglos Buchonés & Flores",
    "image": "Photo/Arreglos/arr002.webp",
    "description": "Ramos de dulces, flores y detalles sorpresa"
  },
  {
    "id": "item-161",
    "title": "Arreglo Buchón / Ramo Especial #3",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-arreglos",
    "subcategoryName": "Arreglos Buchonés & Flores",
    "image": "Photo/Arreglos/arr003.webp",
    "description": "Ramos de dulces, flores y detalles sorpresa"
  },
  {
    "id": "item-162",
    "title": "Arreglo Buchón / Ramo Especial #4",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-arreglos",
    "subcategoryName": "Arreglos Buchonés & Flores",
    "image": "Photo/Arreglos/arr004.webp",
    "description": "Ramos de dulces, flores y detalles sorpresa"
  },
  {
    "id": "item-163",
    "title": "Arreglo Buchón / Ramo Especial #5",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-arreglos",
    "subcategoryName": "Arreglos Buchonés & Flores",
    "image": "Photo/Arreglos/arr005.webp",
    "description": "Ramos de dulces, flores y detalles sorpresa"
  },
  {
    "id": "item-164",
    "title": "Arreglo Buchón / Ramo Especial #6",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-arreglos",
    "subcategoryName": "Arreglos Buchonés & Flores",
    "image": "Photo/Arreglos/arr006.webp",
    "description": "Ramos de dulces, flores y detalles sorpresa"
  },
  {
    "id": "item-165",
    "title": "Arreglo Buchón / Ramo Especial #7",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-arreglos",
    "subcategoryName": "Arreglos Buchonés & Flores",
    "image": "Photo/Arreglos/arr007.webp",
    "description": "Ramos de dulces, flores y detalles sorpresa"
  },
  {
    "id": "item-166",
    "title": "Arreglo Buchón / Ramo Especial #8",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-arreglos",
    "subcategoryName": "Arreglos Buchonés & Flores",
    "image": "Photo/Arreglos/arr008.webp",
    "description": "Ramos de dulces, flores y detalles sorpresa"
  },
  {
    "id": "item-167",
    "title": "Arreglo Buchón / Ramo Especial #9",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-arreglos",
    "subcategoryName": "Arreglos Buchonés & Flores",
    "image": "Photo/Arreglos/arr009.webp",
    "description": "Ramos de dulces, flores y detalles sorpresa"
  },
  {
    "id": "item-168",
    "title": "Arreglo Buchón / Ramo Especial #10",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-arreglos",
    "subcategoryName": "Arreglos Buchonés & Flores",
    "image": "Photo/Arreglos/arr010.webp",
    "description": "Ramos de dulces, flores y detalles sorpresa"
  },
  {
    "id": "item-169",
    "title": "Arreglo Buchón / Ramo Especial #11",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-arreglos",
    "subcategoryName": "Arreglos Buchonés & Flores",
    "image": "Photo/Arreglos/arr011.webp",
    "description": "Ramos de dulces, flores y detalles sorpresa"
  },
  {
    "id": "item-170",
    "title": "Arreglo Buchón / Ramo Especial #12",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-arreglos",
    "subcategoryName": "Arreglos Buchonés & Flores",
    "image": "Photo/Arreglos/arr012.webp",
    "description": "Ramos de dulces, flores y detalles sorpresa"
  },
  {
    "id": "item-171",
    "title": "Arreglo Buchón / Ramo Especial #13",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-arreglos",
    "subcategoryName": "Arreglos Buchonés & Flores",
    "image": "Photo/Arreglos/arr013.webp",
    "description": "Ramos de dulces, flores y detalles sorpresa"
  },
  {
    "id": "item-172",
    "title": "Arreglo Buchón / Ramo Especial #14",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-arreglos",
    "subcategoryName": "Arreglos Buchonés & Flores",
    "image": "Photo/Arreglos/arr014.webp",
    "description": "Ramos de dulces, flores y detalles sorpresa"
  },
  {
    "id": "item-173",
    "title": "Arreglo Buchón / Ramo Especial #15",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-arreglos",
    "subcategoryName": "Arreglos Buchonés & Flores",
    "image": "Photo/Arreglos/arr015.webp",
    "description": "Ramos de dulces, flores y detalles sorpresa"
  },
  {
    "id": "item-174",
    "title": "Arreglo Buchón / Ramo Especial #16",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-arreglos",
    "subcategoryName": "Arreglos Buchonés & Flores",
    "image": "Photo/Arreglos/arr016.webp",
    "description": "Ramos de dulces, flores y detalles sorpresa"
  },
  {
    "id": "item-175",
    "title": "Arreglo Buchón / Ramo Especial #17",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-arreglos",
    "subcategoryName": "Arreglos Buchonés & Flores",
    "image": "Photo/Arreglos/arr017 .webp",
    "description": "Ramos de dulces, flores y detalles sorpresa"
  },
  {
    "id": "item-176",
    "title": "Regalo Sorpresa Personalizado #1",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg001.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-177",
    "title": "Regalo Sorpresa Personalizado #2",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg002.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-178",
    "title": "Regalo Sorpresa Personalizado #3",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg003.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-179",
    "title": "Regalo Sorpresa Personalizado #4",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg004.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-180",
    "title": "Regalo Sorpresa Personalizado #5",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg005.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-181",
    "title": "Regalo Sorpresa Personalizado #6",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg006.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-182",
    "title": "Regalo Sorpresa Personalizado #7",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg007.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-183",
    "title": "Regalo Sorpresa Personalizado #8",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg008.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-184",
    "title": "Regalo Sorpresa Personalizado #9",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg009.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-185",
    "title": "Regalo Sorpresa Personalizado #10",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg010.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-186",
    "title": "Regalo Sorpresa Personalizado #11",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg011.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-187",
    "title": "Regalo Sorpresa Personalizado #12",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg012.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-188",
    "title": "Regalo Sorpresa Personalizado #13",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg013.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-189",
    "title": "Regalo Sorpresa Personalizado #14",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg014.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-190",
    "title": "Regalo Sorpresa Personalizado #15",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg015.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-191",
    "title": "Regalo Sorpresa Personalizado #16",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg016.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-192",
    "title": "Regalo Sorpresa Personalizado #17",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg017.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-193",
    "title": "Regalo Sorpresa Personalizado #18",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg018.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-194",
    "title": "Regalo Sorpresa Personalizado #19",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg019.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-195",
    "title": "Regalo Sorpresa Personalizado #20",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg020.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-196",
    "title": "Regalo Sorpresa Personalizado #21",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg021.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-197",
    "title": "Regalo Sorpresa Personalizado #22",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg022.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-198",
    "title": "Regalo Sorpresa Personalizado #23",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg023.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-199",
    "title": "Regalo Sorpresa Personalizado #24",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg024.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-200",
    "title": "Regalo Sorpresa Personalizado #25",
    "category": "regalos",
    "categoryName": "Regalos Personalizados",
    "subcategory": "regalos-cajas",
    "subcategoryName": "Cajas & Regalos",
    "image": "Photo/Regalos/reg025.webp",
    "description": "Cajas sorpresa personalizadas para aniversarios y cumpleaños"
  },
  {
    "id": "item-201",
    "title": "Prenda para Caballero",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-caballero",
    "subcategoryName": "Caballero",
    "image": "Photo/Ropa/rop001.webp",
    "description": "Prendas seleccionadas para hombre en excelente estado"
  },
  {
    "id": "item-202",
    "title": "Prenda para Dama",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-dama",
    "subcategoryName": "Dama",
    "image": "Photo/Ropa/rop002.webp",
    "description": "Ropa de moda femenina seleccionada a precio accesible"
  },
  {
    "id": "item-203",
    "title": "Prenda para Dama",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-dama",
    "subcategoryName": "Dama",
    "image": "Photo/Ropa/rop003.webp",
    "description": "Ropa de moda femenina seleccionada a precio accesible"
  },
  {
    "id": "item-204",
    "title": "Prenda para Dama",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-dama",
    "subcategoryName": "Dama",
    "image": "Photo/Ropa/rop004.webp",
    "description": "Ropa de moda femenina seleccionada a precio accesible"
  },
  {
    "id": "item-205",
    "title": "Prenda para Dama",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-dama",
    "subcategoryName": "Dama",
    "image": "Photo/Ropa/rop005.webp",
    "description": "Ropa de moda femenina seleccionada a precio accesible"
  },
  {
    "id": "item-206",
    "title": "Prenda para Dama",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-dama",
    "subcategoryName": "Dama",
    "image": "Photo/Ropa/rop006.webp",
    "description": "Ropa de moda femenina seleccionada a precio accesible"
  },
  {
    "id": "item-207",
    "title": "Prenda para Dama",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-dama",
    "subcategoryName": "Dama",
    "image": "Photo/Ropa/rop007.webp",
    "description": "Ropa de moda femenina seleccionada a precio accesible"
  },
  {
    "id": "item-208",
    "title": "Prenda para Dama",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-dama",
    "subcategoryName": "Dama",
    "image": "Photo/Ropa/rop008.webp",
    "description": "Ropa de moda femenina seleccionada a precio accesible"
  },
  {
    "id": "item-209",
    "title": "Prenda para Dama",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-dama",
    "subcategoryName": "Dama",
    "image": "Photo/Ropa/rop009.webp",
    "description": "Ropa de moda femenina seleccionada a precio accesible"
  },
  {
    "id": "item-210",
    "title": "Prenda para Dama",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-dama",
    "subcategoryName": "Dama",
    "image": "Photo/Ropa/rop010.webp",
    "description": "Ropa de moda femenina seleccionada a precio accesible"
  },
  {
    "id": "item-211",
    "title": "Prenda para Dama",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-dama",
    "subcategoryName": "Dama",
    "image": "Photo/Ropa/rop011.webp",
    "description": "Ropa de moda femenina seleccionada a precio accesible"
  },
  {
    "id": "item-212",
    "title": "Prenda para Dama",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-dama",
    "subcategoryName": "Dama",
    "image": "Photo/Ropa/rop012.webp",
    "description": "Ropa de moda femenina seleccionada a precio accesible"
  },
  {
    "id": "item-213",
    "title": "Prenda para Dama",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-dama",
    "subcategoryName": "Dama",
    "image": "Photo/Ropa/rop013.webp",
    "description": "Ropa de moda femenina seleccionada a precio accesible"
  },
  {
    "id": "item-214",
    "title": "Prenda para Dama",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-dama",
    "subcategoryName": "Dama",
    "image": "Photo/Ropa/rop014.webp",
    "description": "Ropa de moda femenina seleccionada a precio accesible"
  },
  {
    "id": "item-215",
    "title": "Prenda para Dama",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-dama",
    "subcategoryName": "Dama",
    "image": "Photo/Ropa/rop015.webp",
    "description": "Ropa de moda femenina seleccionada a precio accesible"
  },
  {
    "id": "item-216",
    "title": "Prenda para Dama",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-dama",
    "subcategoryName": "Dama",
    "image": "Photo/Ropa/rop016.webp",
    "description": "Ropa de moda femenina seleccionada a precio accesible"
  },
  {
    "id": "item-217",
    "title": "Prenda para Caballero",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-caballero",
    "subcategoryName": "Caballero",
    "image": "Photo/Ropa/rop017.webp",
    "description": "Prendas seleccionadas para hombre en excelente estado"
  },
  {
    "id": "item-218",
    "title": "Prenda para Caballero",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-caballero",
    "subcategoryName": "Caballero",
    "image": "Photo/Ropa/rop018.webp",
    "description": "Prendas seleccionadas para hombre en excelente estado"
  },
  {
    "id": "item-219",
    "title": "Prenda para Caballero",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-caballero",
    "subcategoryName": "Caballero",
    "image": "Photo/Ropa/rop019.webp",
    "description": "Prendas seleccionadas para hombre en excelente estado"
  },
  {
    "id": "item-220",
    "title": "Prenda para Caballero",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-caballero",
    "subcategoryName": "Caballero",
    "image": "Photo/Ropa/rop020.webp",
    "description": "Prendas seleccionadas para hombre en excelente estado"
  },
  {
    "id": "item-221",
    "title": "Prenda para Dama",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-dama",
    "subcategoryName": "Dama",
    "image": "Photo/Ropa/rop021.webp",
    "description": "Ropa de moda femenina seleccionada a precio accesible"
  },
  {
    "id": "item-222",
    "title": "Accesorio de Moda",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-accesorios",
    "subcategoryName": "Accesorios",
    "image": "Photo/Ropa/rop022.webp",
    "description": "Bolsos, cinturones y accesorios de calidad"
  },
  {
    "id": "item-223",
    "title": "Accesorio de Moda",
    "category": "ropa",
    "categoryName": "Ropa de Uso",
    "subcategory": "ropa-accesorios",
    "subcategoryName": "Accesorios",
    "image": "Photo/Ropa/rop023.webp",
    "description": "Bolsos, cinturones y accesorios de calidad"
  }
];
