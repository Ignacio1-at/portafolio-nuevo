<template>
  <div class="skills__tools">
    <div class="tools-card">
      <div class="card-header">
        <div class="card-icon">
          <Wrench class="icon" />
        </div>
        <h3 class="card-title">Herramientas</h3>
      </div>
      
      <div class="tools-grid">
        <div
          v-for="(tool, index) in toolsData"
          :key="tool.name"
          class="tool-item"
          :class="[
            `tool-item--${tool.size}`,
            `tool-item--${tool.colorClass}`,
            { 'tool-item--active': activeTool === index }
          ]"
          :style="{ animationDelay: `${index * 0.05}s` }"
          @click="toggleTool(index)"
        >
          <div class="tool-background"></div>
          
          <div class="tool-content">
            <div class="tool-icon">{{ tool.icon }}</div>
            <div class="tool-info">
              <span class="tool-name">{{ tool.name }}</span>
              <span v-if="tool.category" class="tool-category">{{ tool.category }}</span>
            </div>
          </div>
          
          <div v-if="activeTool === index" class="tool-detail">
            <p class="tool-description">{{ tool.description }}</p>
          </div>
        </div>
      </div>
      
      <div class="tools-footer">
        <p class="tools-subtitle">Toca cualquier herramienta para más info</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Wrench } from 'lucide-vue-next'

interface Props {
  portfolioData: any
}

defineProps<Props>()

const activeTool = ref<number | null>(null)

const toolsData = [
  {
    name: 'VS Code',
    icon: '💻',
    colorClass: 'primary',
    size: 'medium',
    category: 'Editor',
    description: 'Mi editor principal para desarrollo. Extensiones personalizadas para React Native y TypeScript.'
  },
  {
    name: 'Git',
    icon: '🌳',
    colorClass: 'danger',
    size: 'small',
    category: 'Control',
    description: 'Control de versiones esencial. Manejo flujos con GitFlow y conventional commits.'
  },
  {
    name: 'Docker',
    icon: '🐳',
    colorClass: 'primary',
    size: 'small',
    category: 'DevOps',
    description: 'Contenedores para desarrollo y deployment. Orquestación con Docker Compose.'
  },
  {
    name: 'Postman',
    icon: '📮',
    colorClass: 'warning',
    size: 'medium',
    category: 'API Testing',
    description: 'Testing de APIs REST y GraphQL. Automatización de pruebas y documentación.'
  },
  {
    name: 'Figma',
    icon: '🎨',
    colorClass: 'danger',
    size: 'large',
    category: 'Diseño',
    description: 'Diseño de interfaces y prototipos. Colaboración con equipos de UX/UI para apps móviles.'
  },
  {
    name: 'Android Studio',
    icon: '🤖',
    colorClass: 'success',
    size: 'medium',
    category: 'Mobile',
    description: 'IDE para desarrollo Android. Debugging y testing de apps React Native.'
  },
  {
    name: 'Xcode',
    icon: '📱',
    colorClass: 'primary',
    size: 'medium',
    category: 'iOS',
    description: 'Desarrollo iOS nativo y React Native. Gestión de certificados y App Store.'
  },
  {
    name: 'Jenkins',
    icon: '⚙️',
    colorClass: 'danger',
    size: 'small',
    category: 'CI/CD',
    description: 'Automatización de builds y deploys. Pipelines para apps móviles y backend.'
  },
  {
    name: 'PostgreSQL',
    icon: '🐘',
    colorClass: 'secondary',
    size: 'small',
    category: 'Database',
    description: 'Base de datos relacional principal. Optimización de queries y modelado.'
  },
  {
    name: 'MongoDB',
    icon: '🍃',
    colorClass: 'success',
    size: 'small',
    category: 'NoSQL',
    description: 'Base de datos NoSQL para proyectos escalables. Agregaciones y indexación.'
  }
]

const toggleTool = (index: number) => {
  activeTool.value = activeTool.value === index ? null : index
}
</script>

<style scoped>
.skills__tools {
  animation: slideInRight 0.8s ease-out 0.6s both;
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

.tools-card {
  background: var(--color-bg-card);
  border-radius: var(--border-radius-2xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border-light);
  transition: all var(--transition-base);
}

.tools-card:hover {
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
  color: var(--color-text-light);
}

.card-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.tool-item {
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: toolFadeIn 0.6s ease-out both;
  min-height: 80px;
}

@keyframes toolFadeIn {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.tool-item--small {
  grid-column: span 1;
  min-height: 80px;
}

.tool-item--medium {
  grid-column: span 2;
  min-height: 80px;
}

.tool-item--large {
  grid-column: span 2;
  grid-row: span 2;
  min-height: 172px;
}

.tool-item:hover {
  transform: scale(1.02);
}

.tool-item--active {
  transform: scale(1.05);
  z-index: 10;
}

.tool-background {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  transition: all var(--transition-base);
}

/* Colores de fondo usando tu paleta */
.tool-item--primary .tool-background {
  background: var(--color-primary);
}

.tool-item--secondary .tool-background {
  background: var(--color-secondary);
}

.tool-item--success .tool-background {
  background: var(--color-success);
}

.tool-item--warning .tool-background {
  background: var(--color-warning);
}

.tool-item--danger .tool-background {
  background: var(--color-danger);
}

.tool-item:hover .tool-background {
  opacity: 0.1;
}

.tool-item--active .tool-background {
  opacity: 0.15;
}

.tool-content {
  position: relative;
  z-index: 2;
  background: var(--color-bg-card);
  backdrop-filter: blur(20px);
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-md);
}

.tool-item:hover .tool-content {
  background: var(--color-bg-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-border-primary);
}

.tool-icon {
  font-size: 24px;
  margin-bottom: var(--spacing-sm);
  transition: all var(--transition-base);
}

.tool-item:hover .tool-icon {
  transform: scale(1.1);
}

.tool-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.tool-name {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-primary);
  line-height: 1.2;
}

.tool-category {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  font-weight: 500;
}

.tool-detail {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-text-primary);
  backdrop-filter: blur(20px);
  border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg);
  padding: var(--spacing-md);
  z-index: 5;
  animation: slideDown 0.3s ease-out;
  border: 1px solid var(--color-border-medium);
  border-top: none;
  box-shadow: var(--shadow-lg);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tool-description {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  margin: 0;
  line-height: 1.4;
}

.tools-footer {
  text-align: center;
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-border-light);
}

.tools-subtitle {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  margin: 0;
  font-weight: 500;
}

@media (max-width: 768px) {
  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-sm);
  }
  
  .tool-item--large {
    grid-column: span 2;
    grid-row: span 1;
    min-height: 80px;
  }
  
  .tool-content {
    padding: var(--spacing-md);
  }
  
  .tool-icon {
    font-size: 20px;
  }
  
  .tools-card {
    padding: var(--spacing-xl);
  }
  
  .card-header {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-sm);
  }
}

@media (max-width: 480px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }
  
  .tool-item--small,
  .tool-item--medium,
  .tool-item--large {
    grid-column: span 1;
    grid-row: span 1;
    min-height: 70px;
  }
}
</style>