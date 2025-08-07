<template>
  <!-- Usar Teleport para renderizar fuera del componente actual -->
  <Teleport to="body">
    <div class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <div class="project-info">
            <div class="project-icon">
              <span class="icon-emoji">{{ project.icon }}</span>
            </div>
            <div>
              <h3 class="project-title">{{ project.name }}</h3>
              <p class="project-category">{{ project.category }} • {{ project.year }}</p>
            </div>
          </div>
          <button class="close-button" @click="closeModal">
            <X class="close-icon" />
          </button>
        </div>

        <div class="modal-body">
          <div class="project-description">
            <h4>Descripción detallada</h4>
            <p>{{ project.longDescription }}</p>
          </div>

          <div class="project-technologies">
            <h4>Tecnologías utilizadas</h4>
            <div class="tech-grid">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="tech-badge"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="project-features">
            <h4>Características completas</h4>
            <ul class="features-grid">
              <li
                v-for="feature in project.features"
                :key="feature"
                class="feature-item"
              >
                <Check class="feature-icon" />
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>

          <div class="project-actions">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="modal-button modal-button--github"
            >
              <Github class="button-icon" />
              <span>Ver en GitHub</span>
            </a>
            <a
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="modal-button modal-button--demo"
            >
              <ExternalLink class="button-icon" />
              <span>Ver Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, Teleport } from 'vue'
import { X, Check, Github, ExternalLink } from 'lucide-vue-next'

interface Props {
  project: any
}

defineProps<Props>()

const emit = defineEmits<{
  close: []
}>()

// 🔒 BLOQUEAR SCROLL DEL BODY
onMounted(() => {
  document.body.style.overflow = 'hidden'
  document.body.style.paddingRight = getScrollbarWidth() + 'px'
})

onUnmounted(() => {
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
})

const getScrollbarWidth = () => {
  const scrollDiv = document.createElement('div')
  scrollDiv.style.cssText = 'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;'
  document.body.appendChild(scrollDiv)
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
  document.body.removeChild(scrollDiv)
  return scrollbarWidth
}

const closeModal = () => {
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
  emit('close')
}

onMounted(() => {
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal()
    }
  }
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  padding: var(--spacing-lg);
  animation: modalFadeIn 0.3s ease-out;
}

@keyframes modalFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  background: var(--color-bg-card);
  border-radius: var(--border-radius-2xl);
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  /* 🚀 SIN SCROLL VISIBLE - Solo interno cuando sea necesario */
  overflow-y: auto;
  box-shadow: var(--shadow-2xl);
  border: 1px solid var(--color-border-light);
  animation: modalSlideIn 0.3s ease-out;
  /* 🎯 OCULTAR SCROLLBAR COMPLETAMENTE */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE y Edge */
}

/* 🎯 OCULTAR SCROLLBAR EN WEBKIT (Chrome, Safari) */
.modal-content::-webkit-scrollbar {
  display: none;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-header {
  padding: var(--spacing-xl);
  border-bottom: 1px solid var(--color-border-light);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.project-icon {
  width: 48px;
  height: 48px;
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.project-title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
}

.project-category {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin: var(--spacing-xs) 0 0 0;
}

.close-button {
  width: 40px;
  height: 40px;
  border: none;
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-base);
}

.close-button:hover {
  background: var(--color-border-light);
  transform: scale(1.1);
}

.close-icon {
  width: 20px;
  height: 20px;
  color: var(--color-text-secondary);
}

.modal-body {
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.modal-body h4 {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-md) 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-description p {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tech-badge {
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--gradient-primary);
  color: var(--color-text-light);
  border-radius: var(--border-radius-lg);
  font-size: var(--font-size-sm);
  font-weight: 600;
}

.features-grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-sm);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.feature-icon {
  width: 16px;
  height: 16px;
  color: var(--color-success);
  flex-shrink: 0;
}

.project-actions {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.modal-button {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition-base);
  flex: 1;
  justify-content: center;
}

.modal-button--github {
  background: var(--color-text-primary);
  color: var(--color-text-light);
}

.modal-button--github:hover {
  background: var(--color-text-secondary);
  transform: translateY(-2px);
}

.modal-button--demo {
  background: var(--color-primary);
  color: var(--color-text-light);
}

.modal-button--demo:hover {
  background: var(--color-secondary);
  transform: translateY(-2px);
}

.button-icon {
  width: 18px;
  height: 18px;
}

@media (max-width: 768px) {
  .modal-content {
    margin: var(--spacing-md);
    max-height: calc(100vh - 2rem);
  }
  
  .project-actions {
    flex-direction: column;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .modal-header,
  .modal-body {
    padding: var(--spacing-md);
  }
  
  .project-info {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-sm);
  }
}
</style>