<template>
  <div class="navbar__brand">
    <a href="#inicio" class="brand-link" @click="handleClick">
      <div class="brand-avatar">
        <span>{{ avatarLetter }}</span>
      </div>
      <div class="brand-text">
        <span class="brand-name">{{ firstName }}</span>
        <span class="brand-title">Developer</span>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  portfolioData: any
}

const props = defineProps<Props>()

const emit = defineEmits<{
  scrollToSection: [sectionId: string, event: Event | null]
}>()

const avatarLetter = computed(() => props.portfolioData.personal.name.charAt(0))
const firstName = computed(() => props.portfolioData.personal.name.split(' ')[0])

const handleClick = (event: Event) => {
  emit('scrollToSection', 'inicio', event)
}
</script>

<style scoped>
.brand-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-base);
}

.brand-link:hover {
  transform: scale(1.02);
}

.brand-avatar {
  width: 32px;
  height: 32px;
  border-radius: var(--border-radius-md);
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0, 122, 255, 0.3);
  transition: all var(--transition-base);
}

.brand-link:hover .brand-avatar {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.4);
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-light);
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.brand-title {
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .brand-text {
    display: none;
  }

  .brand-avatar {
    width: 28px;
    height: 28px;
    font-size: 12px;
  }
}
</style>