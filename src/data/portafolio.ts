export const portfolioData = {
  personal: {
    name: "Ignacio Torres González",
    title: "Ingeniero en Ejecución Informática",
    subtitle: "Desarrollador Full Stack & Mobile",
    email: "ignacioat.2001@gmail.com",
    phone: "+56 9 5477 4698",
    location: "Viña del Mar, Valparaíso, Chile"
  },

  social: {
    github: "https://github.com/Ignacio1-at",
    linkedin: "https://www.linkedin.com/in/ignacio-torres-gonzález-520aa331a"
  },

  about: {
    description: "Soy Ingeniero en ejecución Informática titulado de la Pontificia Universidad Católica de Valparaíso, Chile. Con más de un año de experiencia profesional como Desarrollador Full Stack y Móvil para plataformas iOS y Android, trabajo como parte del equipo de desarrollo mientras también me desempeño como co-líder de proyectos, gestionando sistemas de control de versiones y coordinando flujos de trabajo utilizando herramientas como Redmine y OpenProject.",
    interests: ["Desarrollo de Software", "Desarrollo Móvil", "Gestión de Proyectos"],
    university: "Pontificia Universidad Católica de Valparaíso",
    period: "2019 - 2024"
  },

  skills: {
    advanced: [
      { name: "React Native", level: 95, category: "Frontend" },
      { name: "TypeScript", level: 90, category: "Lenguaje" },
      { name: "NestJS", level: 90, category: "Backend" },
      { name: "GraphQL", level: 85, category: "API" },
      { name: "Django", level: 85, category: "Backend" },
      { name: "JavaScript", level: 95, category: "Lenguaje" },
      { name: "Expo", level: 90, category: "Mobile" }
    ],
    intermediate: [
      { name: "Node.js", level: 75, category: "Backend" },
      { name: "CSS", level: 80, category: "Frontend" },
      { name: "Vue.js", level: 70, category: "Frontend" },
      { name: "Angular", level: 65, category: "Frontend" }
    ]
  },

  tools: [
    "Visual Studio Code", "Git", "Docker", "Postman",
    "Jenkins", "Swagger", "Android Studio", "XCode",
    "Figma", "DBeaver", "GitLab", "MongoDB", "PostgreSQL"
  ],

  experience: [
    {
      company: "ZDAD-INFORMÁTICOS",
      position: "Desarrollador Full Stack y Desarrollo Móvil",
      period: "2024 - Presente",
      description: "Desarrollo y mantenimiento de aplicaciones móviles con React Native, implementación de backend con NestJS, integración de GraphQL y APIs RESTful.",
      technologies: ["React Native", "NestJS", "Expo", "TypeScript", "GraphQL", "PostgreSQL", "MongoDB", "JavaScript"],
      achievements: [
        "Implementé arquitectura de gestión de estado con Zustand y Redux en aplicaciones React Native",
        "Desarrollé APIs GraphQL escalables con NestJS optimizando las consultas en un 40%",
        "Integré testing E2E con Detox para aplicaciones iOS y Android mejorando la calidad del código",
        "Colaboré como co-líder de proyectos coordinando equipos de 3-5 desarrolladores"
      ]
    },
    {
      company: "MARITIME SERVICES SPA",
      position: "Desarrollador Full Stack",
      period: "2023 - 2023",
      description: "Colaboré en el desarrollo de un sistema ERP personalizado, desde backend hasta frontend utilizando el framework Django.",
      technologies: ["Django", "Python", "JavaScript", "PostgreSQL", "HTML", "CSS"],
      achievements: [
        "Desarrollé módulos completos del sistema ERP con Django mejorando la eficiencia operacional",
        "Implementé integración frontend-backend optimizando los tiempos de respuesta",
        "Colaboré en el diseño de base de datos PostgreSQL para gestión de inventario"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "ERP System",
      description: "Sistema ERP personalizado desarrollado con Django para gestión empresarial",
      technologies: ["Django", "Python", "PostgreSQL", "JavaScript"],
      status: "Completado",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Mobile App React Native",
      description: "Aplicación móvil multiplataforma con gestión de estado avanzada",
      technologies: ["React Native", "TypeScript", "Zustand", "GraphQL"],
      status: "En desarrollo",
      category: "Mobile Development"
    }
  ],

  certifications: [
    "React Native - UDEMY",
    "NestJS - UDEMY",
    "TypeScript - UDEMY",
    "Vue.js - UDEMY",
    "Angular - UDEMY",
    "GraphQL con NestJS - UDEMY"
  ]
}