<template>
  <div class="skills__header">
    <div class="header-badge">
      <Code class="badge-icon" />
      <span>Habilidades</span>
    </div>
    
    <h2 class="section-title">
      Tecnologías que
      <span class="title-highlight">domino</span>
    </h2>
    
    <p class="section-subtitle">
      Desde desarrollo móvil hasta backend, aquí están las herramientas
      que uso para crear experiencias digitales excepcionales
    </p>
  </div>
</template>

<script setup lang="ts">
import { Code } from 'lucide-vue-next'
</script>

<style scoped>
.skills__header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-lg);
  background: rgba(0, 122, 255, 0.1);
  color: var(--color-primary);
  border-radius: var(--border-radius-full);
  font-weight: 600;
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-lg);
  border: 1px solid var(--color-border-primary);
  backdrop-filter: blur(10px);
  transition: all var(--transition-base);
}

.header-badge:hover {
  background: rgba(0, 122, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.badge-icon {
  width: 16px;
  height: 16px;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.title-highlight {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: var(--font-size-base);
    max-width: 400px;
  }
  
  .skills__header {
    margin-bottom: var(--spacing-2xl);
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.75rem;
  }
  
  .section-subtitle {
    font-size: var(--font-size-sm);
    padding: 0 var(--spacing-md);
  }
}
</style>