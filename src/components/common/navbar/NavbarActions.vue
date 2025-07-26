<template>
  <div class="navbar__actions">
    <a :href="contactHref" class="btn-contact">
      <Mail class="btn-icon" />
      <span>Contactar</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Mail } from 'lucide-vue-next'

interface Props {
  portfolioData: any
}

const props = defineProps<Props>()

const contactHref = computed(() => `mailto:${props.portfolioData.personal.email}`)
</script>

<style scoped>
.navbar__actions {
  display: flex;
  align-items: center;
}

.btn-contact {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  border-radius: 20px;
  transition: all var(--transition-base);
  box-shadow: 0 2px 8px rgba(0, 122, 255, 0.3);
  border: none;
  position: relative;
  overflow: hidden;
}

.btn-contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s;
}

.btn-contact:hover::before {
  left: 100%;
}

.btn-contact:hover {
  background: #0051D5;
  transform: translateY(-1px) scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 122, 255, 0.4);
}

.btn-contact:active {
  transform: translateY(0) scale(0.98);
}

.btn-icon {
  width: 16px;
  height: 16px;
}

@media (max-width: 768px) {
  .navbar__actions {
    display: none;
  }
}
</style>