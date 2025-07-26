<template>
  <div class="sobre-mi__header">
    <div class="header-badge">
      <User class="badge-icon" />
      <span>Sobre Mí</span>
    </div>
    
    <h2 class="section-title">
      Conoce más sobre 
      <span class="title-highlight">mi experiencia</span>
    </h2>
    
    <p class="section-subtitle">
      Desarrollador apasionado con enfoque en crear soluciones tecnológicas 
      innovadoras y escalables
    </p>
  </div>
</template>

<script setup lang="ts">
import { User } from 'lucide-vue-next'
</script>

<style scoped>
.sobre-mi__header {
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
  border: 1px solid rgba(0, 122, 255, 0.2);
  backdrop-filter: blur(10px);
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
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: var(--font-size-base);
  }
}
</style>