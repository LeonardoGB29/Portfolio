import { withBasePath } from "@/src/lib/basePath";

import type {
  ExperienceItem,
  Project,
  SiteInfo,
  SiteSectionFlags,
  SocialLink,
  StackGroup
} from "@/src/types";

export const SECTION_FLAGS: SiteSectionFlags = {
  showAbout: true,
  showSkills: true,
  showExperience: true,
  showProjects: true
};

export const SITE_INFO: SiteInfo = {
  name: "Leonardo Gustavo Gaona Briceño",
  nickname: "Leonardo GB",
  role: "Estudiante de Ciencia de la Computación y Full Stack Developer",
  siteUrl: "https://example.com",
  email: "leogustavo.gb29@gmail.com",
  location: "Arequipa, Perú",
  birthDate: "2004-12-29",
  introKicker: "Hola, soy",
  introDisplayName: "Leonardo Gaona Briceño",
  introImage: withBasePath("/images/me.jpg"),
  introImageAlt: "",
  heroTitleTop: "FULL STACK",
  heroTitleBottom: "DEVELOPER",
  heroSummary:
    "Estudiante de Ciencia de la Computación (UNSA) con enfoque en backend y sistemas orientados a datos. Desarrollo APIs REST, diseño modelos relacionales y busco entregar software con arquitectura modular, pruebas básicas y documentación clara.",
  heroCodeLines: [
    "Construyo APIs y sistemas orientados a datos, con enfoque en arquitectura modular, pruebas básicas y documentación clara."
  ],
  aboutHeadline:
    "Construyo APIs y sistemas orientados a datos, con enfoque en arquitectura modular, pruebas básicas y documentación clara.",
  aboutLeftTitle: "QUIÉN SOY",
  aboutLeftItems: [
    "Tengo 21 años y estudio Ciencia de la Computación en la Universidad Nacional de San Agustín de Arequipa (Arequipa, Perú).",
    "Me interesa construir sistemas que conecten backend, datos y una arquitectura clara, con foco en aplicaciones reales.",
    "Enfoque: backend + data",
    "Intereses: APIs, SQL, performance (C++/MPI)",
    "Actualmente: fortaleciendo proyectos y portafolio para prácticas"
  ],

  aboutRightTitle: "CÓMO TRABAJO",
  aboutRightItems: [
    "Trabajo por tareas pequeñas: backlog → in progress → done, con entregables claros",
    "Primero hago que funcione end-to-end y luego refactorizo (sin romper lo que ya sirve)",
    "Separo responsabilidades: módulos/capas, nombres claros y lógica fuera de la UI/controladores",
    "Defino “done” así: corre local, se puede probar, cubre casos básicos y edge cases principales",
    "Dejo todo replicable: README con setup, comandos, ejemplos y resultados cuando aplica"
  ],
  footerTitle: "Contáctame",
  footerCreditLabel: "github.com/LeonardoGB29",
  footerCreditUrl: "https://github.com/LeonardoGB29"
};

export const GENERAL_INFO = {
  email: SITE_INFO.email
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "github", url: "https://github.com/LeonardoGB29" },
  { name: "linkedin", url: "https://www.linkedin.com/in/leonardo-gaona-briceño-810a17174" },
  { name: "email", url: "mailto:leogustavo.gb29@gmail.com" }
];

export const STACK_GROUPS: StackGroup[] = [
  {
    id: "lenguajes",
    type: "Lenguajes",
    items: [
      {
        id: "cpp",
        name: "c/c++",
        icon: "https://cdn.simpleicons.org/cplusplus"
      },
      {
        id: "python",
        name: "python",
        icon: "https://cdn.simpleicons.org/python"
      },
      {
        id: "sql",
        name: "sql",
        icon: "https://cdn.simpleicons.org/postgresql"
      },
      {
        id: "typescript",
        name: "typescript",
        icon: "https://cdn.simpleicons.org/typescript"
      }
    ]
  },
  {
    id: "backend",
    type: "Backend",
    items: [
      {
        id: "flask",
        name: "flask",
        icon: "https://cdn.simpleicons.org/flask/FFFFFF"
      },
      {
        id: "drf",
        name: "django rest framework",
        icon: "https://cdn.simpleicons.org/django"
      },
      {
        id: "sqlalchemy",
        name: "sqlalchemy",
        icon: "https://cdn.simpleicons.org/sqlalchemy"
      },
      {
        id: "jwt",
        name: "jwt",
        icon: "https://jwt.io/img/pic_logo.svg"
      }
    ]
  },
  {
    id: "frontend",
    type: "Frontend",
    items: [
      {
        id: "html",
        name: "html",
        icon: "https://cdn.simpleicons.org/html5"
      },
      {
        id: "css",
        name: "css",
        icon: "https://cdn.simpleicons.org/css"
      },
      {
        id: "react",
        name: "react",
        icon: "https://cdn.simpleicons.org/react"
      },
      {
        id: "api-consumption",
        name: "consumo de APIs",
        icon: "https://cdn.simpleicons.org/postman"
      }
    ]
  },
  {
    id: "datos-bd",
    type: "Datos/BD",
    items: [
      { id: "postgresql", name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
      { id: "mysql", name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
      { id: "sqlite", name: "SQLite", icon: "https://cdn.simpleicons.org/sqlite" }
    ]
  },
  {
    id: "herramientas",
    type: "Herramientas",
    items: [
      {
        id: "git",
        name: "git",
        icon: "https://cdn.simpleicons.org/git"
      },
      {
        id: "github",
        name: "github",
        icon: "https://cdn.simpleicons.org/github/FFFFFF"
      },
      {
        id: "docker",
        name: "docker",
        icon: "https://cdn.simpleicons.org/docker"
      },
      {
        id: "postman",
        name: "postman",
        icon: "https://cdn.simpleicons.org/postman"
      },
      {
        id: "linux",
        name: "linux",
        icon: "https://cdn.simpleicons.org/linux"
      },
      {
        id: "vscode",
        name: "vs code",
        icon: "https://api.iconify.design/logos:visual-studio-code.svg"
      }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "phinix-2026",
    company: "PHINIX S.A.C.",
    title: "Practicante Pre-Profesional — Sistemas y Desarrollo Web",
    startDate: "Mar 2026",
    endDate: "Jun 2026",
    points: [
      "Desarrollo del proyecto Hidranix: backend en Python (FastAPI + SQLAlchemy) sobre PostgreSQL, con diseño de endpoints REST y modelos de datos.",
      "Apoyo en arquitectura multi-tenant (ruteo por subdominios) y en el ciclo de desarrollo full-stack, bajo modalidad híbrida.",
      "Entrega de informes periódicos de avance y participación en eventos de innovación e investigación en representación de la empresa."
    ]
  },
  {
    id: "edu-unsa",
    company: "Universidad Nacional de San Agustín de Arequipa (UNSA)",
    title: "Ciencia de la Computación",
    startDate: "2022",
    endDate: "Actualidad"
  },
  {
    id: "jaiio-2025",
    company: "JAIIO 2025 - UBA (Buenos Aires, Argentina)",
    title: "Asistente en charlas, talleres y networking académico",
    startDate: "",
    endDate: "2025"
  },
  {
    id: "ielts-2025",
    company: "IELTS Academic",
    title: "IELTS Academic 5.0 - Inglés intermedio",
    startDate: "",
    endDate: "2025"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "project-puzzle",
    slug: "context-aware-puzzle",
    name: "Context-Aware Puzzle Solver",
    year: 2025,
    techStack: [
      "C++",
      "OpenCV",
      "Voronoi / Poisson-disk",
      "Gabor textons",
      "MRF (energía global)"
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=900&q=80&auto=format&fit=crop",
    sourceCode: "https://github.com/LeonardoGB29/Context-Aware-Puzzle",
    description:
      "Generador y solver de rompecabezas de piezas irregulares de bordes rectos en C++/OpenCV. El generador corta la imagen con semillas Poisson-disk + Voronoi (recorte Sutherland–Hodgman) y el solver reconstruye la imagen por continuidad de color en la costura, reforzada con marco-primero, consenso multi-costura y reparación por energía global (MRF). Inspirado en los histogramas de textones de Ruzić & Pižurica.",
    features: [
      "Corte irregular sin piezas diminutas: semillas Poisson-disk (Bridson) + diagrama de Voronoi",
      "Solver por edge-matching con best-buddy, consenso multi-costura y marco-primero",
      "Reparación final por energía global (MRF) con desalojo de piezas; textones de Gabor como desempate"
    ]
  },
  {
    id: "project-tpcds",
    slug: "agente-analitico-tpcds",
    name: "Agente Analítico Retail (TPC-DS)",
    year: 2025,
    techStack: [
      "Python",
      "Gemini (LLM)",
      "Hive",
      "Spark SQL",
      "Amazon EMR / S3"
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
    galleryImages: [
      withBasePath("/images/projects/tpcds/agente_analitico.jpeg")
    ],
    sourceCode: "https://github.com/LeonardoGB29/Agentic_Analytics",
    description:
      "Agente que traduce preguntas en lenguaje natural a SQL analítico sobre un dataset retail TPC-DS en Hive/Spark. Con una sola llamada a Gemini identifica la intención, genera SQL validado y selecciona el motor (Hive para consultas simples, Spark para cargas pesadas); si el LLM falla, usa un catálogo local como respaldo. Corre sobre Amazon EMR con S3.",
    features: [
      "NL → SQL + selección de motor en una sola llamada a Gemini (optimización de cuota)",
      "Validación estricta del SQL (solo SELECT/WITH, tablas permitidas) antes de ejecutar",
      "Fallback a catálogo local para no enviar SQL roto al pipeline"
    ]
  },
  {
    id: "project-1",
    slug: "sistema-academico-epcc",
    name: "Sistema Académico EPCC",
    year: 2025,
    techStack: [
      "Python",
      "React",
      "TypeScript",
      "Django REST Framework",
      "PostgreSQL",
      "Docker Compose"
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop",
    galleryImages: [
      withBasePath("/images/projects/epcc/epcc1.png"),
      withBasePath("/images/projects/epcc/epcc2.png"),
      withBasePath("/images/projects/epcc/epcc3.png")
    ],
    sourceCode: "https://github.com/LeonardoGB29/Sistema_Academico_EPCC",
    description:
      "Sistema web para gestión académica con frontend en React/TypeScript y backend en Django REST. Arquitectura por módulos, BD relacional y ejecución con Docker Compose.",
    features: [
      "Arquitectura por módulos (apps)",
      "Base de datos relacional para gestión académica",
      "Despliegue local con Docker Compose"
    ]
  },
  {
    id: "project-2",
    slug: "actas-vitales-reniec-api",
    name: "Actas Vitales / RENIEC API",
    year: 2025,
    techStack: ["Flask", "SQLAlchemy", "JWT", "Postman"],
    thumbnail:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80&auto=format&fit=crop",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1400&q=80&auto=format&fit=crop",
    sourceCode: "https://github.com/LeonardoGB29/reniec_process",
    description:
      "API modular con migraciones, autenticación y colección Postman para pruebas. Enfoque en estructura mantenible y endpoints claros.",
    features: [
      "API REST modular",
      "Migraciones y modelo de datos con SQLAlchemy",
      "Pruebas manuales documentadas con Postman"
    ]
  },
  {
    id: "project-3",
    slug: "hpc-allgather-mpi-cpp",
    name: "HPC - Allgather (MPI/C++)",
    year: 2025,
    techStack: ["C++", "MPI", "Microbenchmarks"],
    thumbnail: 
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop",
    galleryImages: [
      withBasePath("/images/projects/hpc/run_1.png"),
      withBasePath("/images/projects/hpc/run_2.png"),
      withBasePath("/images/projects/hpc/tiempos_log.jpeg")
    ],
    sourceCode:
      "https://github.com/LeonardoGB29/A-Locality-Aware-Bruck-Allgather",
    description:
      "Implementación de Bruck Allgather y variante locality-aware; comparación contra MPI_Allgather con microbenchmarks y warmup.",
    features: [
      "Bruck Allgather implementado en C++",
      "Variante locality-aware para evaluar performance",
      "Comparativas contra MPI_Allgather"
    ]
  },
  {
    id: "project-4",
    slug: "tienda-online-flutter-python",
    name: "Tienda Online (Flutter + Python API)",
    year: 2025,
    techStack: ["Python", "REST API", "Postman", "Docker", "Flutter (equipo)"],
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop",
    sourceCode: "https://github.com/DanielfQo/Tienda_online",
    description:
      "Proyecto en equipo: app móvil en Flutter conectada a una API en Python. Mi aporte fue el backend: endpoints REST, pruebas con Postman y soporte de ejecución local (docker).",
    features: [
      "Backend contributor (Python REST)",
      "Pruebas de endpoints con Postman",
      "Ejecución local con Docker Compose"
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
