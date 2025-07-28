<template>
  <div class="skills__dock">
    <div class="dock-container">
      <div class="dock-background"></div>
      
      <div class="dock-items">
        <div
          v-for="(skill, index) in mainSkills"
          :key="skill.name"
          class="dock-item"
          :style="{ animationDelay: `${index * 0.1}s` }"
          :title="skill.name"
          @mouseenter="handleHover(index)"
          @mouseleave="handleLeave"
        >
          <div class="dock-icon" :class="{ 'dock-icon--active': hoveredIndex === index }">
            <div class="icon-content">
              {{ skill.icon }}
            </div>
            <div class="skill-indicator">
              <div class="indicator-fill" :style="{ width: `${skill.level}%` }"></div>
            </div>
          </div>
          
          <div class="dock-tooltip">
            <span class="tooltip-name">{{ skill.name }}</span>
            <span class="tooltip-level">{{ skill.level }}%</span>
          </div>
        </div>
      </div>
      
      <div class="dock-reflection"></div>
    </div>
    
    <p class="dock-subtitle">Tecnologías principales - Hover para ver nivel</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  portfolioData: any
}

defineProps<Props>()

const hoveredIndex = ref<number | null>(null)

const mainSkills = [
  { name: 'React Native', icon: '⚛️', level: 95 },
  { name: 'TypeScript', icon: '🔷', level: 90 },
  { name: 'NestJS', icon: '🐱', level: 90 },
  { name: 'GraphQL', icon: '🔗', level: 85 },
  { name: 'Django', icon: '🐍', level: 85 },
  { name: 'JavaScript', icon: '💛', level: 95 },
  { name: 'Expo', icon: '📱', level: 90 },
  { name: 'Node.js', icon: '💚', level: 75 }
]

const handleHover = (index: number) => {
  hoveredIndex.value = index
}

const handleLeave = () => {
  hoveredIndex.value = null
}
</script>

<style scoped>
.skills__dock {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: slideInUp 0.8s ease-out 0.2s both;
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

.dock-container {
  position: relative;
  padding: var(--spacing-xl);
}

.dock-background {
  position: absolute;
  inset: 0;
  background: var(--color-bg-secondary);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: var(--border-radius-2xl);
  border: 1px solid var(--color-border-light);
  box-shadow: var(--shadow-xl);
}

.dock-items {
  display: flex;
  gap: var(--spacing-md);
  position: relative;
  z-index: 2;
}

.dock-item {
  position: relative;
  animation: dockFadeIn 0.6s ease-out both;
  cursor: pointer;
}

@keyframes dockFadeIn {
  from {
    opacity: 0;
    transform: scale(0.5) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.dock-icon {
  width: 64px;
  height: 64px;
  background: var(--color-bg-card);
  border-radius: var(--border-radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border-light);
  position: relative;
  overflow: hidden;
}

.dock-icon--active {
  transform: scale(1.2) translateY(-8px);
  box-shadow: var(--shadow-2xl);
  border-color: var(--color-border-primary);
}

.icon-content {
  font-size: 24px;
  margin-bottom: 4px;
  transition: all var(--transition-base);
}

.dock-icon--active .icon-content {
  transform: scale(1.1);
}

.skill-indicator {
  position: absolute;
  bottom: 4px;
  left: 4px;
  right: 4px;
  height: 3px;
  background: var(--color-bg-secondary);
  border-radius: 2px;
  overflow: hidden;
}

.indicator-fill {
  height: 100%;
  background: var(--gradient-primary);
  border-radius: 2px;
  transition: width 0.6s ease-out;
}

.dock-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-8px);
  background: var(--color-text-primary);
  backdrop-filter: blur(20px);
  color: var(--color-text-light);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-xs);
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-base);
  pointer-events: none;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border-medium);
}

.dock-item:hover .dock-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-12px);
}

.tooltip-name {
  font-weight: 600;
  margin-right: var(--spacing-xs);
}

.tooltip-level {
  color: var(--color-primary);
  font-weight: 700;
}

.dock-reflection {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(180deg, var(--color-bg-tertiary) 0%, transparent 100%);
  border-radius: 0 0 var(--border-radius-2xl) var(--border-radius-2xl);
  opacity: 0.3;
}

.dock-subtitle {
  margin-top: var(--spacing-lg);
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  text-align: center;
  font-weight: 500;
}

@media (max-width: 768px) {
  .dock-items {
    gap: var(--spacing-sm);
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .dock-icon {
    width: 56px;
    height: 56px;
  }
  
  .icon-content {
    font-size: 20px;
  }
  
  .dock-subtitle {
    font-size: var(--font-size-xs);
  }
  
  .dock-container {
    padding: var(--spacing-lg);
  }
}

@media (max-width: 480px) {
  .dock-icon {
    width: 48px;
    height: 48px;
  }
  
  .icon-content {
    font-size: 18px;
  }
  
  .dock-container {
    padding: var(--spacing-md);
  }
}
</style>