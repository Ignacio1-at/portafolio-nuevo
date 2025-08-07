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
  z-index: 998; /* Un z-index menor que el menú pero mayor que el contenido */
  backdrop-filter: blur(10px);
  pointer-events: none; /* Importante: bloquea clics cuando está cerrado */
}

.navbar__overlay--open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto; /* Permite clics cuando está abierto */
}
</style>