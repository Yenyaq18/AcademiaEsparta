// src/data/data.js

export const SITE = {
  nombre:    "Esparta",
  subtitulo: "Academia Militar",
  email:     "info@academiaesparta.com",
  telefono:  "+573001112233",
  whatsapp:  "573000000000",
  copyright: "© 2025 Academia Militar Esparta",
};

export const NAV_LINKS = [
  { href: "#nosotros",    label: "Nosotros"   },
  { href: "#programas",   label: "Programas"  },
  { href: "#informacion", label: "Detalles"   },
  { href: "#requisitos",  label: "Requisitos" },
];

export const STATS = [
  { value: "15+",  label: "Años de experiencia" },
  { value: "3",    label: "Áreas de formación"  },
  { value: "98%",  label: "Tasa de aprobación"  },
  { value: "500+", label: "Cadetes formados"     },
];

export const PROGRAMAS = [
  {
    key:     "fisica",
    titulo:  "Preparación Física",
    tag:     "Entrenamiento",
    descripcion:
      "Rutinas guiadas para resistencia, fuerza, agilidad y trabajo en equipo con instructores certificados.",
    detalle:
      "Nuestros instructores cuentan con experiencia real en fuerzas militares activas, garantizando una preparación auténtica para cada prueba de admisión.",
    color:  "#3B6D11",
    accent: "#7ABD2F",
    bg:     "rgba(59,109,17,0.12)",
    border: "rgba(59,109,17,0.3)",
  },
  {
    key:     "academica",
    titulo:  "Formación Académica",
    tag:     "Educación",
    descripcion:
      "Refuerzo en materias clave, evaluaciones periódicas y acompañamiento constante para el éxito.",
    detalle:
      "Clases estructuradas con docentes especializados que preparan al aspirante para superar cualquier examen de admisión con solidez y confianza.",
    color:  "#185FA5",
    accent: "#4DA3FF",
    bg:     "rgba(24,95,165,0.12)",
    border: "rgba(24,95,165,0.3)",
  },
  {
    key:     "liderazgo",
    titulo:  "Liderazgo y Valores",
    tag:     "Carácter",
    descripcion:
      "Disciplina, responsabilidad y sentido del deber como pilares del crecimiento personal.",
    detalle:
      "Talleres de formación en ética militar y trabajo en equipo para moldear líderes íntegros, comprometidos con el servicio y la patria.",
    color:  "#534AB7",
    accent: "#9D94FF",
    bg:     "rgba(83,74,183,0.12)",
    border: "rgba(83,74,183,0.3)",
  },
];

export const INFO_ITEMS = [
  {
    key:         "horarios",
    titulo:      "Horarios Flexibles",
    descripcion: "Turnos matutinos y vespertinos para facilitar la asistencia de todos los aspirantes.",
    color:       "#BA7517",
    accent:      "#EF9F27",
    bg:          "rgba(186,117,23,0.12)",
  },
  {
    key:         "simulacros",
    titulo:      "Simulacros Reales",
    descripcion: "Prácticas con condiciones idénticas a las pruebas físicas y exámenes oficiales.",
    color:       "#0F6E56",
    accent:      "#1D9E75",
    bg:          "rgba(15,110,86,0.12)",
  },
  {
    key:         "familia",
    titulo:      "Seguimiento Familiar",
    descripcion: "Reportes periódicos de avance para padres y tutores durante la formación.",
    color:       "#993556",
    accent:      "#D4537E",
    bg:          "rgba(153,53,86,0.12)",
  },
];

export const NOSOTROS_PUNTOS = [
  "Metodología probada en campo real",
  "Instructores con experiencia activa",
  "Acompañamiento integral al aspirante",
  "Resultados medibles en cada etapa",
];

export const PANEL_ITEMS = [
  "Entrenamiento físico integral",
  "Asesoría personalizada",
  "Instructores certificados",
  "Ambiente de exigencia real",
];

export const REQUISITOS = [
  "Documento de identidad vigente",
  "Certificado médico básico",
  "Formulario de inscripción completo",
  "Compromiso con normas y horarios",
  "Edad entre 16 y 24 años",
];