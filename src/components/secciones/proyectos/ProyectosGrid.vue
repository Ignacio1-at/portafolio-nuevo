<template>
  <div class="proyectos-grid">
    <div class="grid-container">
      <div
        v-for="(proyecto, index) in proyectosData"
        :key="proyecto.id"
        class="proyecto-card"
        :class="`proyecto-card--${proyecto.color}`"
        :style="{ animationDelay: `${index * 0.2}s` }"
      >
        <div class="card-header">
          <div class="project-icon">
            <span class="icon-emoji">{{ proyecto.icon }}</span>
          </div>
          <div class="project-status">
            <span class="status-dot" :class="`status-dot--${getStatusColor(proyecto.status)}`"></span>
            <span class="status-text">{{ proyecto.status }}</span>
          </div>
        </div>

        <div class="card-content">
          <div class="project-meta">
            <span class="project-category">{{ proyecto.category }}</span>
            <span class="project-year">{{ proyecto.year }}</span>
          </div>
          
          <h3 class="project-title">{{ proyecto.name }}</h3>
          <p class="project-description">{{ proyecto.description }}</p>
          
          <div class="project-technologies">
            <div class="tech-tags">
              <span
                v-for="tech in proyecto.technologies"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <div class="card-features">
          <h4 class="features-title">Características principales</h4>
          <ul class="features-list">
            <li
              v-for="feature in proyecto.features.slice(0, 3)"
              :key="feature"
              class="feature-item"
            >
              <Check class="feature-icon" />
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>

        <div class="card-actions">
          <a
            :href="proyecto.github"
            target="_blank"
            rel="noopener noreferrer"
            class="action-button action-button--github"
          >
            <Github class="button-icon" />
            <span>Código</span>
          </a>

          <a
            v-if="proyecto.demo"
            :href="proyecto.demo"
            target="_blank"
            rel="noopener noreferrer"
            class="action-button action-button--demo"
          >
            <ExternalLink class="button-icon" />
            <span>Demo</span>
          </a>
          
          <button
            class="action-button action-button--details"
            @click="openProjectDetails(proyecto)"
          >
            <Info class="button-icon" />
            <span>Detalles</span>
          </button>
        </div>

        <div class="card-shimmer"></div>
      </div>
    </div>

    <!-- Modal de detalles del proyecto -->
    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="closeProjectDetails"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Github, ExternalLink, Info, Check } from 'lucide-vue-next'
import ProjectModal from './ProjectModal.vue'

interface Props {
  proyectosData: any[]
}

defineProps<Props>()

const selectedProject = ref(null)

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'completado': return 'success'
    case 'en desarrollo': return 'warning'
    case 'en pausa': return 'danger'
    default: return 'primary'
  }
}

const openProjectDetails = (project: any) => {
  selectedProject.value = project
}

const closeProjectDetails = () => {
  selectedProject.value = null
}
</script>

<style scoped>
.proyectos-grid {
  margin-bottom: var(--spacing-4xl);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: var(--spacing-2xl);
  padding: var(--spacing-lg);
}

.proyecto-card {
  background: var(--color-bg-card);
  border-radius: var(--border-radius-2xl);
  padding: var(--spacing-2xl);
  border: 1px solid var(--color-border-light);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  animation: cardSlideIn 0.8s ease-out both;
  display: flex;
  flex-direction: column;
  height: 100%;
}

@keyframes cardSlideIn {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.proyecto-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: var(--shadow-2xl);
  border-color: var(--color-border-primary);
}

.proyecto-card:hover .card-shimmer {
  transform: translateX(100%);
}

/* Bordes de color por categoría */
.proyecto-card--primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--color-primary);
}

.proyecto-card--success::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--color-success);
}

.proyecto-card--warning::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--color-warning);
}

.proyecto-card--secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--color-secondary);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
}

.project-icon {
  width: 60px;
  height: 60px;
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all var(--transition-base);
}

.proyecto-card:hover .project-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: var(--shadow-lg);
}

.project-status {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: statusPulse 2s ease-in-out infinite;
}

@keyframes statusPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.status-dot--success { background: var(--color-success); }
.status-dot--warning { background: var(--color-warning); }
.status-dot--danger { background: var(--color-danger); }
.status-dot--primary { background: var(--color-primary); }

.card-content {
  flex: 1;
  margin-bottom: var(--spacing-lg);
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.project-category {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-year {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  font-weight: 500;
}

.project-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-md) 0;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.project-description {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
}

.project-technologies {
  margin-bottom: var(--spacing-lg);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.tech-tag {
  font-size: var(--font-size-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  border-radius: var(--border-radius-md);
  font-weight: 500;
  transition: all var(--transition-base);
}

.tech-tag:hover {
  background: var(--color-border-primary);
  color: var(--color-primary);
  transform: translateY(-1px);
}

.card-features {
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-md);
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--color-border-light);
}

.features-title {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-sm) 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.feature-icon {
  width: 14px;
  height: 14px;
  color: var(--color-success);
  flex-shrink: 0;
}

.card-actions {
  display: flex;
  gap: var(--spacing-sm);
  margin-top: auto;
}

.action-button {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-lg);
  font-weight: 600;
  font-size: var(--font-size-sm);
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
  flex: 1;
  justify-content: center;
}

.action-button--github {
  background: var(--color-text-primary);
  color: var(--color-text-light);
}

.action-button--github:hover {
  background: var(--color-text-secondary);
  transform: translateY(-2px);
}

.action-button--demo {
  background: var(--color-primary);
  color: var(--color-text-light);
}

.action-button--demo:hover {
  background: var(--color-secondary);
  transform: translateY(-2px);
}

.action-button--details {
  background: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border-light);
}

.action-button--details:hover {
  background: var(--color-border-primary);
  color: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.button-icon {
  width: 16px;
  height: 16px;
}

.card-shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--color-glass-border), transparent);
  transition: transform 0.6s ease-out;
  pointer-events: none;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
    padding: 0;
  }
  
  .proyecto-card {
    padding: var(--spacing-xl);
  }
  
  .card-actions {
    flex-direction: column;
  }
  
  .action-button {
    flex: none;
  }
}
</style>