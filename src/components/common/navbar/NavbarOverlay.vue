<template>
  <div
    class="navbar__overlay"
    :class="{ 'navbar__overlay--open': isOpen }"
    @click="$emit('close')"
  ></div>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean
}

defineProps<Props>()

defineEmits<{
  close: []
}>()
</script>

<style scoped>
.navbar__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-base);
  z-index: var(--z-dropdown);
  backdrop-filter: blur(10px);
}

.navbar__overlay--open {
  opacity: 1;
  visibility: visible;
}
</style>