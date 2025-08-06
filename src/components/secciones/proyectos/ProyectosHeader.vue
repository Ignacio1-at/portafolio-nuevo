<template>
  <div class="proyectos-header">
    <div class="header-decoration">
      <div class="decoration-icon">
        <Briefcase class="icon" />
      </div>
      <div class="decoration-lines">
        <div class="line line--1"></div>
        <div class="line line--2"></div>
        <div class="line line--3"></div>
      </div>
    </div>
    
    <div class="header-content">
      <h2 class="section-title">
        <span class="title-main">Mis Proyectos</span>
        <span class="title-accent">Personales</span>
      </h2>
      <p class="section-subtitle">
        Una selección de proyectos que demuestran mis habilidades en desarrollo 
        <strong>full stack</strong> y <strong>móvil</strong>
      </p>
      
      <div class="header-stats">
        <div class="stat">
          <span class="stat-number">4</span>
          <span class="stat-label">Proyectos</span>
        </div>
        <div class="stat">
          <span class="stat-number">3</span>
          <span class="stat-label">Tecnologías</span>
        </div>
        <div class="stat">
          <span class="stat-number">2023</span>
          <span class="stat-label">Año activo</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Briefcase } from 'lucide-vue-next'
</script>

<style scoped>
.proyectos-header {
  text-align: center;
  margin-bottom: var(--spacing-4xl);
  position: relative;
  animation: slideInDown 0.8s ease-out;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.header-decoration {
  position: relative;
  margin-bottom: var(--spacing-2xl);
  display: flex;
  align-items: center;
  justify-content: center;
}

.decoration-icon {
  width: 80px;
  height: 80px;
  background: var(--gradient-primary);
  border-radius: var(--border-radius-2xl);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-xl);
  animation: iconFloat 3s ease-in-out infinite;
  position: relative;
  z-index: 2;
}

@keyframes iconFloat {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-10px) scale(1.05); }
}

.icon {
  width: 40px;
  height: 40px;
  color: var(--color-text-light);
}

.decoration-lines {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.line {
  position: absolute;
  background: var(--gradient-primary);
  border-radius: 2px;
  opacity: 0.3;
}

.line--1 {
  width: 120px;
  height: 2px;
  animation: lineExpand 2s ease-out 0.5s both;
}

.line--2 {
  width: 2px;
  height: 120px;
  animation: lineExpand 2s ease-out 0.7s both;
}

.line--3 {
  width: 160px;
  height: 1px;
  transform: rotate(45deg);
  animation: lineExpand 2s ease-out 0.9s both;
}

@keyframes lineExpand {
  from { transform: scale(0); }
  to { transform: scale(1); }
}

.header-content {
  max-width: 600px;
  margin: 0 auto;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin-bottom: var(--spacing-lg);
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.title-main {
  display: block;
  color: var(--color-text-primary);
}

.title-accent {
  display: block;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 0.8em;
  margin-top: var(--spacing-xs);
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-2xl);
  font-weight: 400;
}

.section-subtitle strong {
  color: var(--color-primary);
  font-weight: 600;
}

.header-stats {
  display: flex;
  justify-content: center;
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-xl);
}

.stat {
  text-align: center;
  animation: statFadeIn 0.8s ease-out both;
}

.stat:nth-child(1) { animation-delay: 1s; }
.stat:nth-child(2) { animation-delay: 1.2s; }
.stat:nth-child(3) { animation-delay: 1.4s; }

@keyframes statFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-number {
  display: block;
  font-size: var(--font-size-2xl);
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .header-stats {
    gap: var(--spacing-lg);
  }
  
  .decoration-lines {
    display: none;
  }
  
  .decoration-icon {
    width: 64px;
    height: 64px;
  }
  
  .icon {
    width: 32px;
    height: 32px;
  }
}
</style>