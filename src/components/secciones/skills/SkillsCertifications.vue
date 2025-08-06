<template>
  <div class="skills__certifications">
    <div class="certifications-header">
      <div class="header-icon">
        <Award class="icon" />
      </div>
      <h3 class="section-title">Certificaciones y Cursos</h3>
      <p class="section-subtitle">Formación continua para mantenerme actualizado</p>
    </div>
    
    <div class="certifications-container">
      <div class="certifications-scroll">
        <div
          v-for="(cert, index) in certificationsData"
          :key="cert.name"
          class="cert-card"
          :class="`cert-card--${cert.colorClass}`"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="cert-icon-container">
            <div class="cert-icon">
              <span class="cert-emoji">{{ cert.icon }}</span>
            </div>
            <div class="cert-badge">
              <CheckCircle class="badge-icon" />
            </div>
          </div>
          
          <div class="cert-content">
            <h4 class="cert-name">{{ cert.name }}</h4>
            <p class="cert-provider">{{ cert.provider }}</p>
            <div class="cert-meta">
              <span class="cert-year">{{ cert.year }}</span>
              <span class="cert-type">{{ cert.type }}</span>
            </div>
            <div class="cert-description">
              {{ cert.description }}
            </div>
          </div>
          
          <div class="cert-progress">
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: cert.completion + '%' }"></div>
            </div>
          </div>
          
          <div class="cert-shimmer"></div>
        </div>
      </div>
    </div>
    
    <div class="certifications-footer">
      <div class="stats-row">
        <div class="stat-item">
          <div class="stat-icon">🎓</div>
          <span class="stat-number">{{ certificationsData.length }}</span>
          <span class="stat-label">Certificaciones</span>
        </div>
        <div class="stat-item">
          <div class="stat-icon">📚</div>
          <span class="stat-number">{{ getCurrentYear() - 2023 + 1 }}</span>
          <span class="stat-label">Años formándome</span>
        </div>
        <div class="stat-item">
          <div class="stat-icon">⏱️</div>
          <span class="stat-number">100+</span>
          <span class="stat-label">Horas de estudio</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Award, CheckCircle } from 'lucide-vue-next'

interface Props {
  portfolioData: any
}

defineProps<Props>()

const certificationsData = [
  {
    name: 'React Native',
    provider: 'Udemy',
    year: '2024',
    type: 'Curso Completo',
    icon: '⚛️',
    colorClass: 'primary',
    completion: 100,
    description: 'Desarrollo de apps móviles multiplataforma con navegación avanzada y APIs.'
  },
  {
    name: 'NestJS',
    provider: 'Udemy',
    year: '2024',
    type: 'Backend Expert',
    icon: '🐱',
    colorClass: 'danger',
    completion: 100,
    description: 'Framework robusto para APIs escalables con TypeScript y arquitectura modular.'
  },
  {
    name: 'TypeScript',
    provider: 'Udemy',
    year: '2024',
    type: 'Lenguaje',
    icon: '🔷',
    colorClass: 'secondary',
    completion: 100,
    description: 'Tipado estático para JavaScript con patrones avanzados y mejores prácticas.'
  },
  {
    name: 'Vue.js',
    provider: 'Udemy',
    year: '2025',
    type: 'Frontend',
    icon: '💚',
    colorClass: 'success',
    completion: 100,
    description: 'Framework progresivo para interfaces reactivas con Composition API y Pinia.'
  },
  {
    name: 'Angular',
    provider: 'Udemy',
    year: '2023',
    type: 'Framework',
    icon: '🅰️',
    colorClass: 'danger',
    completion: 100,
    description: 'Plataforma completa para SPAs con RxJS, guards y arquitectura enterprise.'
  },
  {
    name: 'GraphQL con NestJS',
    provider: 'Udemy',
    year: '2024',
    type: 'API Avanzado',
    icon: '🔗',
    colorClass: 'warning',
    completion: 100,
    description: 'API modernas con queries eficientes, subscriptions y resolvers optimizados.'
  }
]

const getCurrentYear = () => new Date().getFullYear()
</script>

<style scoped>
.skills__certifications {
  animation: slideInUp 0.8s ease-out 0.8s both;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.certifications-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.header-icon {
  width: 64px;
  height: 64px;
  background: var(--gradient-primary);
  border-radius: var(--border-radius-2xl);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
  box-shadow: var(--shadow-lg);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

.icon {
  width: 32px;
  height: 32px;
  color: var(--color-text-light);
}

.section-title {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
  letter-spacing: -0.01em;
}

.section-subtitle {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  margin: 0;
  font-weight: 500;
}

.certifications-container {
  margin-bottom: var(--spacing-2xl);
}

.certifications-scroll {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  padding: var(--spacing-md);
}

.cert-card {
  background: var(--color-bg-card);
  border-radius: var(--border-radius-2xl);
  padding: var(--spacing-xl);
  border: 1px solid var(--color-border-light);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  animation: certFadeIn 0.8s ease-out both;
}

@keyframes certFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(30px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.cert-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--shadow-2xl);
  border-color: var(--color-border-primary);
}

.cert-card:hover .cert-shimmer {
  transform: translateX(100%);
}

.cert-icon-container {
  position: relative;
  margin-bottom: var(--spacing-lg);
  display: flex;
  justify-content: center;
}

.cert-icon {
  width: 80px;
  height: 80px;
  border-radius: var(--border-radius-2xl);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-base);
  position: relative;
}

/* Colores para los iconos */
.cert-card--primary .cert-icon {
  background: var(--color-primary);
}

.cert-card--secondary .cert-icon {
  background: var(--color-secondary);
}

.cert-card--success .cert-icon {
  background: var(--color-success);
}

.cert-card--warning .cert-icon {
  background: var(--color-warning);
}

.cert-card--danger .cert-icon {
  background: var(--color-danger);
}

.cert-card:hover .cert-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: var(--shadow-2xl);
}

.cert-emoji {
  font-size: 32px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.cert-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 28px;
  height: 28px;
  background: var(--color-success);
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--color-bg-card);
  box-shadow: var(--shadow-md);
}

.badge-icon {
  width: 14px;
  height: 14px;
  color: var(--color-text-light);
}

.cert-content {
  text-align: center;
  margin-bottom: var(--spacing-lg);
}

.cert-name {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-xs) 0;
  line-height: 1.3;
}

.cert-provider {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  margin: 0 0 var(--spacing-sm) 0;
  font-weight: 600;
}

.cert-meta {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.cert-year,
.cert-type {
  font-size: var(--font-size-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-full);
  font-weight: 500;
}

.cert-year {
  background: var(--color-border-primary);
  color: var(--color-primary);
}

.cert-type {
  background: var(--color-bg-secondary);
  color: var(--color-text-secondary);
}

.cert-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin-bottom: var(--spacing-md);
  text-align: left;
}

/* Barra de progreso */
.cert-progress {
  margin-top: auto;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius-full);
  overflow: hidden;
  margin-bottom: var(--spacing-xs);
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: var(--border-radius-full);
  transition: width 1s ease-out 0.5s;
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: progressShimmer 2s ease-in-out infinite;
}

@keyframes progressShimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.progress-text {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  font-weight: 600;
  text-align: center;
  display: block;
}

.cert-shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--color-glass-border), transparent);
  transition: transform 0.6s ease-out;
  pointer-events: none;
}

.certifications-footer {
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius-2xl);
  padding: var(--spacing-xl);
  border: 1px solid var(--color-border-light);
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.stat-item {
  text-align: center;
  padding: var(--spacing-lg);
  background: var(--color-bg-card);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
  border: 1px solid var(--color-border-light);
  position: relative;
}

.stat-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-border-primary);
}

.stat-icon {
  font-size: 24px;
  margin-bottom: var(--spacing-xs);
  display: block;
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
}

@media (max-width: 768px) {
  .certifications-scroll {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
    padding: 0;
  }
  
  .cert-card {
    padding: var(--spacing-lg);
  }
  
  .stats-row {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .certifications-footer {
    padding: var(--spacing-lg);
  }
}

@media (max-width: 480px) {
  .cert-icon {
    width: 60px;
    height: 60px;
  }
  
  .cert-emoji {
    font-size: 24px;
  }
  
  .cert-name {
    font-size: var(--font-size-base);
  }
  
  .cert-meta {
    flex-direction: column;
    gap: var(--spacing-xs);
  }
}
</style>