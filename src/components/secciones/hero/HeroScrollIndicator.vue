<template>
  <div class="hero__scroll-indicator">
    <div class="scroll-mouse">
      <div class="scroll-wheel"></div>
    </div>
    <ChevronDown class="scroll-arrow" />
    <span class="scroll-text">Scroll para explorar</span>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
</script>

<style scoped>
.hero__scroll-indicator {
  position: absolute;
  bottom: var(--spacing-2xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  color: rgba(255, 255, 255, 0.7);
  animation: bounce 2s ease-in-out infinite;
  cursor: pointer;
  transition: all var(--transition-base);
}

.hero__scroll-indicator:hover {
  color: rgba(255, 255, 255, 0.9);
  transform: translateX(-50%) scale(1.1);
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

.scroll-mouse {
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  position: relative;
  margin-bottom: var(--spacing-xs);
}

.scroll-wheel {
  width: 3px;
  height: 8px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollWheel 2s ease-in-out infinite;
}

@keyframes scrollWheel {
  0% { opacity: 1; top: 6px; }
  50% { opacity: 0.5; top: 14px; }
  100% { opacity: 1; top: 6px; }
}

.scroll-arrow {
  width: 20px;
  height: 20px;
  animation: arrowBounce 1.5s ease-in-out infinite;
}

@keyframes arrowBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}

.scroll-text {
  font-size: var(--font-size-xs);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .hero__scroll-indicator {
    bottom: var(--spacing-lg);
  }
  
  .scroll-text {
    display: none;
  }
}
</style>