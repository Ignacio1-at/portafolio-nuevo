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
          </div>
          
          <div class="cert-actions">
            <button class="cert-button" @click="handleCertClick(cert)">
              <ExternalLink class="button-icon" />
              <span>Ver más</span>
            </button>
          </div>
          
          <div class="cert-shimmer"></div>
        </div>
      </div>
    </div>
    
    <div class="certifications-footer">
      <div class="stats-row">
        <div class="stat-item">
          <span class="stat-number">{{ certificationsData.length }}</span>
          <span class="stat-label">Certificaciones</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ getCurrentYear() - 2023 + 1 }}</span>
          <span class="stat-label">Años formándome</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">100+</span>
          <span class="stat-label">Horas de estudio</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Award, CheckCircle, ExternalLink } from 'lucide-vue-next'

interface Props {
  portfolioData: any
}

defineProps<Props>()

const certificationsData = [
  {
    name: 'React Native',
    provider: 'Udemy',
    year: '2023',
    type: 'Curso Completo',
    icon: '⚛️',
    colorClass: 'primary',
    url: '#'
  },
  {
    name: 'NestJS',
    provider: 'Udemy',
    year: '2023',
    type: 'Backend Expert',
    icon: '🐱',
    colorClass: 'danger',
    url: '#'
  },
  {
    name: 'TypeScript',
    provider: 'Udemy',
    year: '2023',
    type: 'Lenguaje',
    icon: '🔷',
    colorClass: 'secondary',
    url: '#'
  },
  {
    name: 'Vue.js',
    provider: 'Udemy',
    year: '2024',
    type: 'Frontend',
    icon: '💚',
    colorClass: 'success',
    url: '#'
  },
  {
    name: 'Angular',
    provider: 'Udemy',
    year: '2024',
    type: 'Framework',
    icon: '🅰️',
    colorClass: 'danger',
    url: '#'
  },
  {
    name: 'GraphQL con NestJS',
    provider: 'Udemy',
    year: '2024',
    type: 'API Avanzado',
    icon: '🔗',
    colorClass: 'warning',
    url: '#'
  }
]

const getCurrentYear = () => new Date().getFullYear()

const handleCertClick = (cert: any) => {
  console.log('Viewing certification:', cert.name)
  // Aquí puedes abrir un modal o navegar a la certificación
}
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
  cursor: pointer;
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
  transform: translateY(-12px) scale(1.02);
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

/* Colores para los iconos usando tu paleta */
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

.cert-actions {
  display: flex;
  justify-content: center;
}

.cert-button {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-lg);
  background: var(--color-primary);
  color: var(--color-text-light);
  border: none;
  border-radius: var(--border-radius-full);
  font-weight: 600;
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-sm);
}

.cert-button:hover {
  background: var(--color-secondary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.button-icon {
  width: 16px;
  height: 16px;
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
}

.stat-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-border-primary);
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
}
</style>