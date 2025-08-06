<template>
  <section id="proyectos" class="proyectos seccion">
    <div class="contenedor">
      <ProyectosHeader />
      <ProyectosGrid :proyectos-data="proyectosData" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProyectosHeader from './proyectos/ProyectosHeader.vue'
import ProyectosGrid from './proyectos/ProyectosGrid.vue'

const proyectosData = [
  {
    id: 'desafio-zubale',
    name: 'Desafío Zubale',
    description: 'App móvil creada para un challenge empresarial. Feed tipo Instagram con stories, desarrollada en React Native Expo.',
    longDescription: 'Una aplicación móvil completa que simula las funcionalidades principales de Instagram, incluyendo un feed de publicaciones y sistema de stories. Desarrollada como parte de un desafío técnico para demostrar habilidades en desarrollo móvil.',
    category: 'Mobile App',
    type: 'Challenge',
    technologies: ['React Native', 'Expo', 'TypeScript', 'JavaScript'],
    status: 'Completado',
    year: '2025',
    github: 'https://github.com/Ignacio1-at/desafio-zubale',
    demo: null,
    images: ['/images/projects/zubale-1.jpg', '/images/projects/zubale-2.jpg'],
    icon: '📱',
    color: 'primary',
    features: [
      'Feed de publicaciones',
      'Sistema de stories',
      'Interfaz tipo Instagram',
      'Navegación fluida',
      'Responsive design'
    ]
  },
  {
    id: 'portafolio-vue',
    name: 'Portafolio Personal',
    description: 'Mi portafolio personal desarrollado en Vue.js con diseño moderno y animaciones elegantes.',
    longDescription: 'Portafolio personal completamente responsive desarrollado desde cero con Vue.js, featuring animaciones suaves, diseño moderno y arquitectura modular. Incluye secciones para proyectos, habilidades y experiencia.',
    category: 'Web Development',
    type: 'Personal',
    technologies: ['Vue.js', 'TypeScript', 'CSS3', 'Vite'],
    status: 'Completado',
    year: '2025',
    github: 'https://github.com/Ignacio1-at/portafolio-nuevo',
    demo: '#',
    images: ['/images/projects/portfolio-1.jpg', '/images/projects/portfolio-2.jpg'],
    icon: '💼',
    color: 'success',
    features: [
      'Diseño responsive',
      'Animaciones CSS',
      'Arquitectura modular',
      'Dark/Light mode',
      'Performance optimizado'
    ]
  },
  {
    id: 'zdad-chat',
    name: 'ZDAD Chat',
    description: 'Aplicación React Native Expo para gestión y visualización de notificaciones push en tiempo real.',
    longDescription: 'Aplicación móvil especializada en el manejo de notificaciones push, permitiendo a los usuarios recibir, organizar y gestionar notificaciones de manera eficiente con una interfaz intuitiva.',
    category: 'Mobile App',
    type: 'Utility',
    technologies: ['React Native', 'Expo', 'Push Notifications', 'TypeScript'],
    status: 'Completado',
    year: '2024',
    github: 'https://github.com/Ignacio1-at/zdad-chat',
    demo: null,
    images: ['/images/projects/zdad-1.jpg', '/images/projects/zdad-2.jpg'],
    icon: '💬',
    color: 'warning',
    features: [
      'Notificaciones push',
      'Gestión en tiempo real',
      'Interfaz intuitiva',
      'Historial de mensajes',
      'Estados de lectura'
    ]
  },
  {
    id: 'btz-erp',
    name: 'BTZ Services ERP',
    description: 'Sistema ERP completo desarrollado para proyecto de título. Backend en Django y frontend personalizado.',
    longDescription: 'Sistema de planificación de recursos empresariales (ERP) completo desarrollado como proyecto de título. Incluye gestión de inventarios, facturación, clientes y reportes avanzados con una arquitectura robusta.',
    category: 'Full Stack',
    type: 'Academic',
    technologies: ['Django', 'Python', 'PostgreSQL', 'HTML/CSS', 'JavaScript'],
    status: 'Completado',
    year: '2023',
    github: 'https://github.com/Ignacio1-at/BTZ_servicesERP',
    demo: null,
    images: ['/images/projects/btz-1.jpg', '/images/projects/btz-2.jpg'],
    icon: '🏢',
    color: 'secondary',
    features: [
      'Gestión de inventarios',
      'Sistema de facturación',
      'Módulo de clientes',
      'Reportes avanzados',
      'Panel administrativo'
    ]
  }
]
</script>

<style scoped>
.proyectos {
  background: var(--color-bg-primary);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.proyectos::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(ellipse at top right, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse at bottom left, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.contenedor {
  position: relative;
  z-index: 1;
}
</style>