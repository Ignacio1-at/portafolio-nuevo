<template>
  <div class="hero__text">
    <div class="hero__greeting">
      <span class="greeting-emoji">👋</span>
      <span class="greeting-text">¡Hola! Soy</span>
    </div>
    
    <h1 class="hero__name">
      <span class="name-highlight">{{ portfolioData.personal.name }}</span>
    </h1>
    
    <h2 class="hero__title">{{ portfolioData.personal.title }}</h2>
    
    <p class="hero__subtitle">{{ portfolioData.personal.subtitle }}</p>
    
    <p class="hero__description">
      Especializado en desarrollo Full Stack y móvil con más de un año de experiencia 
      profesional. Apasionado por crear soluciones tecnológicas innovadoras desde 
      {{ portfolioData.personal.location }}.
    </p>
    
    <HeroActions 
      :portfolio-data="portfolioData"
      @scroll-to-section="$emit('scrollToSection', $event)"
    />
    
    <HeroSocial 
      :portfolio-data="portfolioData"
    />
  </div>
</template>

<script setup lang="ts">
import HeroActions from './HeroActions.vue'
import HeroSocial from './HeroSocial.vue'

interface Props {
  portfolioData: any
}

defineProps<Props>()

defineEmits<{
  scrollToSection: [sectionId: string]
}>()
</script>

<style scoped>
.hero__text {
  max-width: 600px;
  animation: slideInLeft 0.8s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero__greeting {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.greeting-emoji {
  font-size: var(--font-size-2xl);
  animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  75% { transform: rotate(-10deg); }
}

.greeting-text {
  font-weight: 500;
}

.hero__name {
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 800;
  margin-bottom: var(--spacing-sm);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.name-highlight {
  background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.hero__title {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: var(--spacing-sm);
  letter-spacing: -0.01em;
}

.hero__subtitle {
  font-size: clamp(1.125rem, 3vw, 1.25rem);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: var(--spacing-lg);
  letter-spacing: -0.005em;
}

.hero__description {
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: var(--spacing-2xl);
  font-weight: 400;
}

@media (max-width: 968px) {
  .hero__text {
    max-width: none;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero__name {
    font-size: 2.5rem;
  }

  .hero__title {
    font-size: 1.5rem;
  }

  .hero__description {
    font-size: var(--font-size-base);
  }
}
</style>