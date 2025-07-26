<template>
  <div class="hero__actions">
    <button 
      class="btn btn--primary" 
      @click="$emit('scrollToSection', 'proyectos')"
    >
      <Briefcase class="btn-icon" />
      <span>Ver Proyectos</span>
    </button>
    
    <a 
      :href="`mailto:${portfolioData.personal.email}`" 
      class="btn btn--secondary"
    >
      <Mail class="btn-icon" />
      <span>Contactar</span>
    </a>
    
    <div class="cv-buttons">
      <a 
        href="/cv/Ignacio_Torres_CV_English.pdf" 
        download="CV-Ignacio-Torres-English.pdf"
        class="btn btn--outline btn--small"
        title="Descargar CV en Inglés"
      >
        <Download class="btn-icon" />
        <span>CV EN</span>
      </a>
      
      <a 
        href="/cv/Ignacio_Torres_CV.pdf" 
        download="CV-Ignacio-Torres-Español.pdf"
        class="btn btn--outline btn--small"
        title="Descargar CV en Español"
      >
        <Download class="btn-icon" />
        <span>CV ES</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Briefcase, Mail, Download } from 'lucide-vue-next'

interface Props {
  portfolioData: any
}

defineProps<Props>()

defineEmits<{
  scrollToSection: [sectionId: string]
}>()
</script>

<style scoped>
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
  animation: slideInUp 0.8s ease-out 0.2s both;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-md) var(--spacing-xl);
  font-weight: 600;
  text-decoration: none;
  border-radius: var(--border-radius-xl);
  transition: all var(--transition-base);
  font-size: var(--font-size-base);
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s;
}

.btn:hover::before {
  left: 100%;
}

.btn--primary {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.btn--primary:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.btn--secondary {
  background: white;
  color: var(--color-primary);
  border: 1px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.btn--secondary:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.btn--outline {
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.btn--outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-1px);
}

.btn--small {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
}

.btn-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.btn--small .btn-icon {
  width: 16px;
  height: 16px;
}

.cv-buttons {
  display: flex;
  gap: var(--spacing-xs);
}

@media (max-width: 968px) {
  .hero__actions {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .hero__actions {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }

  .cv-buttons {
    width: 100%;
    max-width: 280px;
  }

  .cv-buttons .btn {
    flex: 1;
  }
}
</style>