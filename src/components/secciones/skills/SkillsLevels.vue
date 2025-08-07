<template>
  <div class="skills__levels">
    <div class="levels-card">
      <div class="card-header">
        <div class="card-icon">
          <Target class="icon" />
        </div>
        <h3 class="card-title">Nivel de Dominio</h3>
      </div>
      
      <div class="levels-grid">
        <div
          v-for="(skill, index) in skillLevels"
          :key="skill.name"
          class="level-item"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <div class="progress-ring-container">
            <svg class="progress-ring" viewBox="0 0 80 80">
              <circle
                class="progress-ring-bg"
                cx="40"
                cy="40"
                r="32"
                stroke-width="6"
              />
              <circle
                class="progress-ring-fill"
                cx="40"
                cy="40"
                r="32"
                stroke-width="6"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="getStrokeDashoffset(skill.level)"
                :class="`ring-${skill.colorClass}`"
              />
            </svg>
            
            <div class="progress-center">
              <div class="skill-icon">{{ skill.icon }}</div>
              <div class="skill-percentage">{{ skill.level }}%</div>
            </div>
          </div>
          
          <div class="skill-info">
            <h4 class="skill-name">{{ skill.name }}</h4>
            <p class="skill-category">{{ skill.category }}</p>
            <div class="skill-experience">
              <div class="exp-dots">
                <div
                  v-for="dot in 5"
                  :key="dot"
                  class="exp-dot"
                  :class="{ 'exp-dot--filled': dot <= getExperienceLevel(skill.level) }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Target } from 'lucide-vue-next'

interface Props {
  portfolioData: any
}

defineProps<Props>()

const circumference = 2 * Math.PI * 32 // 2πr where r=32

const skillLevels = [
  { 
    name: 'React Native', 
    level: 95, 
    category: 'Frontend/Mobile',
    icon: '⚛️',
    colorClass: 'primary'
  },
  { 
    name: 'TypeScript', 
    level: 90, 
    category: 'Lenguaje',
    icon: '🔷',
    colorClass: 'secondary'
  },
  { 
    name: 'NestJS', 
    level: 90, 
    category: 'Backend',
    icon: '🐱',
    colorClass: 'danger'
  },
  { 
    name: 'GraphQL', 
    level: 85, 
    category: 'API',
    icon: '🔗',
    colorClass: 'warning'
  },
  { 
    name: 'Django', 
    level: 85, 
    category: 'Backend',
    icon: '🐍',
    colorClass: 'success'
  },
  { 
    name: 'Vue.js', 
    level: 70, 
    category: 'Frontend',
    icon: '💚',
    colorClass: 'success'
  }
]

const getStrokeDashoffset = (percentage: number) => {
  return circumference - (percentage / 100) * circumference
}

const getExperienceLevel = (percentage: number) => {
  if (percentage >= 90) return 5
  if (percentage >= 80) return 4
  if (percentage >= 70) return 3
  if (percentage >= 60) return 2
  return 1
}
</script>

<style scoped>
.skills__levels {
  animation: slideInLeft 0.8s ease-out 0.4s both;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.levels-card {
  background: var(--color-bg-card);
  border-radius: var(--border-radius-2xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border-light);
  transition: all var(--transition-base);
}

.levels-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-2xl);
  border-color: var(--color-border-primary);
}

.card-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border-light);
}

.card-icon {
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
}

.icon {
  width: 24px;
  height: 24px;
  color: var(--color-text-light);
}

.card-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
}

.levels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--spacing-xl);
  justify-items: center;
}

.level-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 250px;
  animation: levelFadeIn 0.8s ease-out both;
}

@keyframes levelFadeIn {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* ✨ CÍRCULOS RESPONSIVOS - CLAVE DEL ARREGLO ✨ */
.progress-ring-container {
  position: relative;
  margin-bottom: var(--spacing-lg);
  transition: all var(--transition-base);
  width: 100%;
  max-width: 120px;
  aspect-ratio: 1;
}

.level-item:hover .progress-ring-container {
  transform: scale(1.05);
}

.progress-ring {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  filter: drop-shadow(var(--shadow-sm));
}

.progress-ring-bg {
  fill: none;
  stroke: var(--color-bg-secondary);
  stroke-linecap: round;
}

.progress-ring-fill {
  fill: none;
  stroke-linecap: round;
  transition: stroke-dashoffset 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Colores para los rings usando tu paleta */
.ring-primary {
  stroke: var(--color-primary);
  filter: drop-shadow(0 0 4px var(--color-border-primary));
}

.ring-secondary {
  stroke: var(--color-secondary);
  filter: drop-shadow(0 0 4px rgba(88, 86, 214, 0.3));
}

.ring-success {
  stroke: var(--color-success);
  filter: drop-shadow(0 0 4px rgba(52, 199, 89, 0.3));
}

.ring-warning {
  stroke: var(--color-warning);
  filter: drop-shadow(0 0 4px rgba(255, 149, 0, 0.3));
}

.ring-danger {
  stroke: var(--color-danger);
  filter: drop-shadow(0 0 4px rgba(255, 59, 48, 0.3));
}

.progress-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.skill-icon {
  font-size: clamp(16px, 4vw, 20px);
  margin-bottom: 2px;
}

.skill-percentage {
  font-size: clamp(10px, 2.5vw, 12px);
  font-weight: 700;
  color: var(--color-text-primary);
}

.skill-info {
  width: 100%;
}

.skill-name {
  font-size: var(--font-size-base);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-xs) 0;
}

.skill-category {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin: 0 0 var(--spacing-sm) 0;
  font-weight: 500;
}

.skill-experience {
  display: flex;
  justify-content: center;
}

.exp-dots {
  display: flex;
  gap: var(--spacing-xs);
}

.exp-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--border-radius-full);
  background: var(--color-bg-secondary);
  transition: all var(--transition-base);
}

.exp-dot--filled {
  background: var(--color-primary);
  box-shadow: 0 0 4px var(--color-border-primary);
}

/* 📱 RESPONSIVE BREAKPOINTS MEJORADOS */
@media (max-width: 768px) {
  .levels-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: var(--spacing-lg);
  }
  
  .levels-card {
    padding: var(--spacing-xl);
  }
  
  .card-header {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-sm);
  }
  
  .progress-ring-container {
    max-width: 100px;
  }
}

@media (max-width: 480px) {
  .levels-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }
  
  .progress-ring-container {
    max-width: 80px;
  }
  
  .skill-icon {
    font-size: 14px;
  }
  
  .skill-percentage {
    font-size: 9px;
  }
  
  .skill-name {
    font-size: var(--font-size-sm);
  }
  
  .skill-category {
    font-size: var(--font-size-xs);
  }
}

@media (max-width: 320px) {
  .levels-grid {
    grid-template-columns: 1fr;
  }
  
  .progress-ring-container {
    max-width: 90px;
  }
}

/* Animación de entrada para los rings */
.level-item:nth-child(1) .progress-ring-fill {
  animation: ringFill 2s ease-out 0.5s both;
}

.level-item:nth-child(2) .progress-ring-fill {
  animation: ringFill 2s ease-out 0.7s both;
}

.level-item:nth-child(3) .progress-ring-fill {
  animation: ringFill 2s ease-out 0.9s both;
}

.level-item:nth-child(4) .progress-ring-fill {
  animation: ringFill 2s ease-out 1.1s both;
}

.level-item:nth-child(5) .progress-ring-fill {
  animation: ringFill 2s ease-out 1.3s both;
}

.level-item:nth-child(6) .progress-ring-fill {
  animation: ringFill 2s ease-out 1.5s both;
}

@keyframes ringFill {
  from {
    stroke-dashoffset: 201; /* circumference value */
  }
}
</style>