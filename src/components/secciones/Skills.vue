<template>
  <section id="skills" class="skills seccion">
    <div class="contenedor">
      <SkillsHeader />
      
      <div class="skills__content">
        <SkillsDock :portfolio-data="portfolioData" />
        
        <div class="skills__grid">
          <SkillsLevels :portfolio-data="portfolioData" />
          <SkillsTools :portfolio-data="portfolioData" />
        </div>
        
        <SkillsCertifications :portfolio-data="portfolioData" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '@/data/portafolio'
import SkillsHeader from './skills/SkillsHeader.vue'
import SkillsDock from './skills/SkillsDock.vue'
import SkillsLevels from './skills/SkillsLevels.vue'
import SkillsTools from './skills/SkillsTools.vue'
import SkillsCertifications from './skills/SkillsCertifications.vue'
</script>

<style scoped>
.skills {
  background: var(--color-bg-skills);  /* Fondo gris muy sutil */
  position: relative;
  overflow: hidden;
}

.skills::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-border-primary), transparent);
}

.skills__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
}

.skills__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: start;
}

@media (max-width: 968px) {
  .skills__grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
}
</style>