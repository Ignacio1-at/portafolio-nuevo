<template>
  <div class="hero__visual">
    <div class="hero__avatar">
      <div class="avatar-container">
        <div class="avatar-bg"></div>
        <div class="avatar-content">
          <img
            src="/images/profile/avatar.jpg"
            :alt="portfolioData.personal.name"
            class="avatar-image"
            @error="handleImageError"
            @load="handleImageLoad"
          />
          <div v-if="imageError" class="avatar-fallback">
            {{ portfolioData.personal.name.split(' ').map((n: string) => n[0]).join('') }}
          </div>
        </div>
        <div class="avatar-ring"></div>
        <div class="avatar-ring avatar-ring--secondary"></div>
      </div>
    </div>
    
    <HeroTechStack />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeroTechStack from './HeroTechStack.vue'

interface Props {
  portfolioData: any
}

defineProps<Props>()

const imageError = ref(false)

const handleImageError = () => {
  console.log('Error cargando imagen')
  imageError.value = true
}

const handleImageLoad = () => {
  console.log('Imagen cargada correctamente')
  imageError.value = false
}
</script>

<style scoped>
.hero__visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-2xl);
  animation: slideInRight 0.8s ease-out 0.3s both;
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

.hero__avatar {
  position: relative;
}

.avatar-container {
  position: relative;
  width: 300px;
  height: 300px;
}

.avatar-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 50%;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.avatar-content {
  position: absolute;
  inset: 20px;
  border-radius: 50%;
  overflow: hidden;
  background: #ffffff;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.2),
    inset 0 2px 4px rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 50%; /* CLAVE: Posicionar la cara en el centro */
  border-radius: 50%;
  transition: all var(--transition-base);
  display: block;
}

.avatar-content:hover .avatar-image {
  transform: scale(1.05);
}

.avatar-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #007AFF 0%, #0051D5 100%);
  border-radius: 50%;
}

.avatar-ring {
  position: absolute;
  inset: -15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: rotate 20s linear infinite;
}

.avatar-ring--secondary {
  inset: -25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: rotate 30s linear infinite reverse;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.avatar-container::before {
  content: '';
  position: absolute;
  inset: -30px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

@media (max-width: 968px) {
  .hero__visual {
    order: -1;
  }
}

@media (max-width: 768px) {
  .avatar-container {
    width: 220px;
    height: 220px;
  }

  .avatar-fallback {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .avatar-container {
    width: 180px;
    height: 180px;
  }

  .avatar-fallback {
    font-size: 2rem;
  }
}
</style>