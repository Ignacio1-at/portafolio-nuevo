<template>
  <div class="sobre-mi__stats">
    <div class="stats-card">
      <div class="card-header">
        <div class="card-icon">
          <BarChart3 class="icon" />
        </div>
        <h3 class="card-title">En Números</h3>
      </div>
      
      <div class="stats-grid">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="stat-item"
          :style="{ animationDelay: `${0.1 * index}s` }"
        >
          <div class="stat-number">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
          <div class="stat-icon">
            <component :is="stat.icon" class="stat-icon-svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BarChart3, Calendar, Code, Briefcase, GraduationCap } from 'lucide-vue-next'

interface Props {
  portfolioData: any
}

defineProps<Props>()

const stats = [
  {
    value: '1+',
    label: 'Años de Experiencia',
    icon: Calendar
  },
  {
    value: '10+',
    label: 'Tecnologías Dominadas',
    icon: Code
  },
  {
    value: '5+',
    label: 'Proyectos Completados',
    icon: Briefcase
  },
  {
    value: '2024',
    label: 'Año de Graduación',
    icon: GraduationCap
  }
]
</script>

<style scoped>
.sobre-mi__stats {
  animation: slideInRight 0.8s ease-out 0.4s both;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.stats-card {
  background: var(--color-bg-card);
  border-radius: var(--border-radius-2xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border-light);
  transition: all var(--transition-base);
}

.stats-card:hover {
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
  background: var(--gradient-secondary);
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
}

.icon {
  width: 24px;
  height: 24px;
  color: white;
}

.card-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}

.stat-item {
  position: relative;
  padding: var(--spacing-xl);
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius-xl);
  text-align: center;
  transition: all var(--transition-base);
  animation: statFadeIn 0.6s ease-out both;
  overflow: hidden;
  border: 1px solid var(--color-border-light);
}

@keyframes statFadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.stat-item:hover {
  background: var(--color-bg-card);
  border-color: var(--color-border-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.stat-number {
  font-size: var(--font-size-3xl);
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: var(--spacing-sm);
}

.stat-label {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-secondary);
  line-height: 1.3;
}

.stat-icon {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  opacity: 0.1;
}

.stat-icon-svg {
  width: 24px;
  height: 24px;
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .stats-card {
    padding: var(--spacing-xl);
  }
  
  .card-header {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-sm);
  }
}
</style>