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
        class="btn btn--outline btn--small btn--cv"
        title="Descargar CV en Inglés"
      >
        <div class="flag-container">
          <span class="flag flag--us">🇺🇸</span>
        </div>
        <span>CV EN</span>
      </a>
      <a
        href="/cv/Ignacio_Torres_CV.pdf"
        download="CV-Ignacio-Torres-Español.pdf"
        class="btn btn--outline btn--small btn--cv"
        title="Descargar CV en Español"
      >
        <div class="flag-container">
          <span class="flag flag--cl">🇨🇱</span>
        </div>
        <span>CV ES</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Briefcase, Mail } from 'lucide-vue-next'

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

.btn--cv {
  position: relative;
  overflow: visible;
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

/* Banderas */
.flag-container {
  position: relative;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
}

.flag {
  font-size: 14px;
  line-height: 1;
  transition: all var(--transition-base);
  filter: brightness(1.1) contrast(1.1);
}

.flag--us {
  transform: scale(1.1);
}

.flag--cl {
  transform: scale(1.1);
}

.btn--cv:hover .flag {
  transform: scale(1.2);
  filter: brightness(1.3) contrast(1.2);
}

.btn--cv:hover .flag-container {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.3);
}

/* Efectos especiales para las banderas */
.btn--cv::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, 
    rgba(59, 130, 246, 0.3),
    rgba(16, 185, 129, 0.3),
    rgba(168, 85, 247, 0.3),
    rgba(59, 130, 246, 0.3)
  );
  border-radius: var(--border-radius-xl);
  opacity: 0;
  transition: opacity var(--transition-base);
  z-index: -1;
  background-size: 400% 400%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.btn--cv:hover::after {
  opacity: 0.6;
}

.cv-buttons {
  display: flex;
  gap: var(--spacing-xs);
}

/* Animaciones staggered para las banderas */
.cv-buttons .btn:nth-child(1) {
  animation-delay: 0.4s;
}

.cv-buttons .btn:nth-child(2) {
  animation-delay: 0.5s;
}

/* Responsive */
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
  
  .flag {
    font-size: 16px;
  }
  
  .flag-container {
    width: 22px;
    height: 22px;
  }
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .btn::before,
  .btn--cv::after {
    animation: none;
    transition: none;
  }
  
  .flag {
    transition: none;
  }
}

/* Estados de focus para accesibilidad */
.btn:focus {
  outline: 2px solid rgba(59, 130, 246, 0.6);
  outline-offset: 2px;
}

.btn:focus:not(:focus-visible) {
  outline: none;
}
</style>