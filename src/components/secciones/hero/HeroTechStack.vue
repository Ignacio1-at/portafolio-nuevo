<template>
  <div class="hero__tech-stack">
    <h3 class="tech-title">Tecnologías principales</h3>
    <div class="tech-grid">
      <div 
        v-for="(tech, index) in featuredTechs" 
        :key="tech.name"
        class="tech-item"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="tech-icon">
          {{ tech.icon }}
        </div>
        <span class="tech-name">{{ tech.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const featuredTechs = [
  { name: 'React Native', icon: '⚛️' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'NestJS', icon: '🐱' },
  { name: 'GraphQL', icon: '🔗' },
  { name: 'Django', icon: '🐍' },
  { name: 'Vue.js', icon: '💚' },
]
</script>

<style scoped>
.hero__tech-stack {
  animation: slideInUp 0.8s ease-out 0.6s both;
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

.tech-title {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin-bottom: var(--spacing-lg);
  letter-spacing: -0.01em;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  max-width: 300px;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-lg);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all var(--transition-base);
  animation: fadeInScale 0.6s ease-out both;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.tech-item:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.tech-icon {
  font-size: 20px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tech-name {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: var(--font-size-sm);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .tech-grid {
    grid-template-columns: 1fr;
    max-width: 250px;
    margin: 0 auto;
  }

  .tech-item {
    justify-content: center;
  }
}
</style>