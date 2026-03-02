export const siteConfig = {
  name: "Silvana Bello",
  title: "Fotógrafa Profesional · Directora Creativa",
  description: "Portfolio de Silvana Bello — Fotógrafa profesional especializada en retratos, moda, dirección creativa y fotografía arquitectónica en Lima, Perú.",
  accentColor: "#818cf8",

  // Premium: 6-color palette — Análoga fría (azul noche → lila) + superficies nude/crema
  colors: {
    primaryDark: "#1e293b",    // Slate night sky — headings, footer bg, nav
    primary: "#6366f1",        // Indigo/lila — borders, badges, timeline dots
    primaryLight: "#a5b4fc",   // Lila pastel — shimmer bar highlight
    accent: "#818cf8",         // Lila saturado — CTAs, stats, bullet dots
    surface: "#f5f0eb",        // Crema/nude — section backgrounds
    surfaceLight: "#faf8f5",   // Crema claro — hero bg, lighter sections
  },

  // Premium: Hero tagline
  tagline: "Imágenes que cuentan historias.",

  // Premium: Trust bar stats
  stats: [
    { value: "15+", label: "Años de experiencia" },
    { value: "4", label: "Marcas creadas" },
    { value: "∞", label: "Historias contadas" },
  ],

  // Premium: Pull quote for About section
  quote: {
    text: "La fotografía es el arte de hacer que lo efímero se vuelva eterno",
    author: "Silvana Bello",
  },

  // Premium: Services section
  services: [
    {
      icon: "user",
      title: "Retratos",
      description: "Retratos que capturan la esencia y personalidad de cada persona con un estilo editorial y artístico.",
      items: ["Retratos personales", "Book profesional", "Headshots corporativos", "Retratos artísticos"],
    },
    {
      icon: "star",
      title: "Fotografía Comercial",
      description: "Imágenes de producto y marca que elevan la identidad visual de tu negocio.",
      items: ["Producto y packaging", "Moda y accesorios", "Gastronomía", "Arquitectura e interiores"],
    },
    {
      icon: "heart",
      title: "Dirección Creativa",
      description: "Conceptualización y dirección de proyectos fotográficos de principio a fin.",
      items: ["Campañas de marca", "Editoriales de moda", "Contenido para redes", "Branding visual"],
    },
  ],

  // Premium: CTA section
  cta: {
    title: "¿Tienes un proyecto en mente?",
    description: "Convirtamos tu visión en imágenes que impacten. Escríbeme y conversemos sobre cómo darle vida a tu próximo proyecto.",
    buttonText: "Conversemos",
    emailSubject: "Consulta sobre proyecto fotográfico",
  },

  social: {
    email: "silvanashoot.pro@gmail.com",
    linkedin: "https://linkedin.com/in/silvibello",
    instagram: "https://instagram.com/silvana.bello",
  },

  aboutMe:
    "Fotógrafa profesional y directora creativa con más de 15 años de experiencia capturando momentos que trascienden. Desde retratos íntimos hasta campañas comerciales para marcas como Cineplanet, Latam, Babel y Asia Sur, mi trabajo busca encontrar la belleza en cada historia. Fundadora de Agalux Studios y Freya Estudio, hoy construyo mi marca personal enfocada en retratos, moda y fotografía arquitectónica — donde cada imagen es una pieza de arte.",

  skills: [
    "Fotografía de Retrato",
    "Dirección Creativa",
    "Fotografía Comercial",
    "Fotografía de Moda",
    "Fotografía Arquitectónica",
    "Adobe Photoshop",
    "Adobe Lightroom",
    "Iluminación Profesional",
    "Brand Management",
    "Creación de Contenido",
  ],

  projects: [
    {
      name: "URSA Coffee Roasters",
      description: "Fotografía de producto y packaging para marca de café specialty. Composiciones editoriales con tipografía y color vibrante.",
      link: "",
      skills: ["Producto", "Packaging", "Editorial"],
    },
    {
      name: "Editoriales de Moda",
      description: "Sesiones fotográficas de joyería, accesorios y calzado con estilo editorial de lujo. Uso de espejos, telas y composiciones artísticas.",
      link: "",
      skills: ["Moda", "Joyería", "Editorial de lujo"],
    },
    {
      name: "Campañas Comerciales",
      description: "Dirección creativa y fotográfica para marcas como Cineplanet, Latam Airlines, Babel y Asia Sur.",
      link: "",
      skills: ["Dirección creativa", "Marca", "Campaña"],
    },
    {
      name: "Agalux Studios",
      description: "Marca propia de fotografía cinematográfica de bodas. Estilo 'Timeless Wedding Artist' — imágenes cálidas que preservan memorias.",
      link: "https://www.agaluxstudio.com",
      skills: ["Bodas", "Cinematográfico", "Marca propia"],
    },
  ],

  experience: [
    {
      company: "Agalux Studios & Freya Estudio",
      title: "Fotógrafa Profesional & Brand Manager",
      dateRange: "2018 - Presente",
      bullets: [
        "Dirección creativa y fotográfica de cada proyecto y su producción",
        "Trabajo con marcas como Cineplanet, Latam, Babel, Asia Sur",
        "Manejo del área productiva de video y foto",
        "Gestión de contenido y redes sociales de múltiples marcas",
      ],
    },
    {
      company: "Tahuano Foto",
      title: "Fotógrafa Principal",
      dateRange: "2011 - 2018",
      bullets: [
        "Fotógrafa principal de la marca para bodas y fotografía comercial",
        "Entrenadora de equipo humano de fotografía",
        "Editora full time en Photoshop y Lightroom",
      ],
    },
    {
      company: "Álbum del Abuelo",
      title: "Fotógrafa",
      dateRange: "2008 - 2011",
      bullets: [
        "Encargada de las tomas fotográficas del estudio",
        "Edición profesional en Photoshop",
        "Asistente de marketing del estudio",
      ],
    },
  ],

  education: [
    {
      school: "Instituto IPAD",
      degree: "Fotografía Profesional",
      dateRange: "2008",
      achievements: ["Formación técnica en Miraflores, Lima"],
    },
    {
      school: "Formación Continua",
      degree: "Especialización Fotográfica",
      dateRange: "2013 - 2022",
      achievements: [
        "Fotografía de retratos (2017)",
        "Creación de atmósferas con Morfi Jiménez (2022)",
      ],
    },
  ],
};
