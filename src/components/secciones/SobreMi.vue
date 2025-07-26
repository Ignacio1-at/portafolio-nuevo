<template>
  <section id="sobre-mi" class="sobre-mi seccion">
    <div class="contenedor">
      <SobreMiHeader />
      
      <div class="sobre-mi__content">
        <SobreMiInfo 
          :portfolio-data="portfolioData"
        />
        
        <SobreMiStats 
          :portfolio-data="portfolioData"
        />
      </div>
      
      <SobreMiEducation 
        :portfolio-data="portfolioData"
      />
      
      <SobreMiExperience 
        :portfolio-data="portfolioData"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '@/data/portafolio'
import SobreMiHeader from './sobre-mi/SobreMiHeader.vue'
import SobreMiInfo from './sobre-mi/SobreMiInfo.vue'
import SobreMiStats from './sobre-mi/SobreMiStats.vue'
import SobreMiEducation from './sobre-mi/SobreMiEducation.vue'
import SobreMiExperience from './sobre-mi/SobreMiExperience.vue'
</script>

<style scoped>
.sobre-mi {
  background: var(--gradient-section);
  position: relative;
  overflow: hidden;
}

.sobre-mi::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-border-primary), transparent);
}

.sobre-mi__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  margin-bottom: var(--spacing-3xl);
  align-items: start;
}

@media (max-width: 968px) {
  .sobre-mi__content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
}
</style>