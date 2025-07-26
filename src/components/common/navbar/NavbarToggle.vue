<template>
  <button
    class="navbar__toggle"
    :class="{ 'navbar__toggle--active': isMenuOpen }"
    @click="$emit('toggle')"
    aria-label="Toggle navigation menu"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  isMenuOpen: boolean
}

defineProps<Props>()

defineEmits<{
  toggle: []
}>()
</script>

<style scoped>
.navbar__toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 22px;
  height: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all var(--transition-base);
}

.navbar__toggle:hover {
  transform: scale(1.1);
}

.navbar__toggle span {
  width: 100%;
  height: 2px;
  background: var(--color-text-primary);
  transition: all var(--transition-base);
  border-radius: 1px;
  transform-origin: center;
}

.navbar__toggle--active span:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}

.navbar__toggle--active span:nth-child(2) {
  opacity: 0;
  transform: translateX(-10px);
}

.navbar__toggle--active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .navbar__toggle {
    display: flex;
  }
}

@media (prefers-color-scheme: dark) {
  .navbar__toggle span {
    background: #f5f5f7;
  }
}
</style>