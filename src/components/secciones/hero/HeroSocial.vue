<template>
  <div class="hero__social">
    <a 
      :href="portfolioData.social.github" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="social-link"
      title="GitHub"
    >
      <Github class="social-icon" />
      <span>GitHub</span>
    </a>
    
    <a 
      :href="portfolioData.social.linkedin" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="social-link"
      title="LinkedIn"
    >
      <Linkedin class="social-icon" />
      <span>LinkedIn</span>
    </a>
    
    <a 
      :href="`tel:${portfolioData.personal.phone}`" 
      class="social-link"
      title="Teléfono"
    >
      <Phone class="social-icon" />
      <span>{{ portfolioData.personal.phone }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { Github, Linkedin, Phone } from 'lucide-vue-next'

interface Props {
  portfolioData: any
}

defineProps<Props>()
</script>

<style scoped>
.hero__social {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
  animation: slideInUp 0.8s ease-out 0.4s both;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.social-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  font-size: var(--font-size-sm);
  transition: all var(--transition-base);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-md);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.1);
  opacity: 0;
  transition: opacity var(--transition-base);
  border-radius: var(--border-radius-md);
}

.social-link:hover::before {
  opacity: 1;
}

.social-link:hover {
  color: white;
  transform: translateY(-2px);
}

.social-icon {
  width: 20px;
  height: 20px;
  transition: all var(--transition-base);
}

.social-link:hover .social-icon {
  transform: scale(1.1);
}

@media (max-width: 968px) {
  .hero__social {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .hero__social {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-md);
  }

  .social-link {
    padding: var(--spacing-sm) var(--spacing-md);
  }
}
</style>