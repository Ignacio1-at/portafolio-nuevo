<template>
  <section id="inicio" class="hero seccion">
    <div class="contenedor">
      <div class="hero__content">
        <HeroText 
          :portfolio-data="portfolioData"
          @scroll-to-section="scrollToSection"
        />
        
        <HeroVisual 
          :portfolio-data="portfolioData"
        />
      </div>
      
      <HeroScrollIndicator />
    </div>
    
    <HeroBackground />
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '@/data/portafolio'
import HeroText from './hero/HeroText.vue'
import HeroVisual from './hero/HeroVisual.vue'
import HeroScrollIndicator from './hero/HeroScrollIndicator.vue'
import HeroBackground from './hero/HeroBackground.vue'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const navbar = document.querySelector('.navbar') as HTMLElement
    const offset = navbar?.offsetHeight || 60

    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: 'smooth',
    })
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  position: relative;
  z-index: 2;
  width: 100%;
}

@media (max-width: 968px) {
  .hero__content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 90vh;
    padding-top: 60px;
  }
  
  .hero__content {
    gap: var(--spacing-xl);
  }
}
</style>