<template>
  <section id="contactos" class="contacto seccion">
    <div class="contenedor">
      <ContactoHeader />
      <div class="contacto-content">
        <ContactoInfo :portfolio-data="portfolioData" />
        <ContactoForm />
      </div>
      <ContactoFooter :portfolio-data="portfolioData" />
    </div>
    <ContactoBackground />
  </section>
</template>

<script setup lang="ts">
import { portfolioData } from '@/data/portafolio'
import ContactoHeader from './contacto/ContactoHeader.vue'
import ContactoInfo from './contacto/ContactoInfo.vue'
import ContactoForm from './contacto/ContactoForm.vue'
import ContactoFooter from './contacto/ContactoFooter.vue'
import ContactoBackground from './contacto/ContactoBackground.vue'
</script>

<style scoped>
.contacto {
  background: var(--color-bg-primary);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: var(--spacing-4xl) 0;
}

/* Espaciado entre secciones principales */
.contacto :deep(.contacto-header) {
  margin-bottom: var(--spacing-5xl);
}

.contacto-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4xl);
  margin-bottom: var(--spacing-5xl);
}

.contacto :deep(.contacto-footer) {
  margin-top: 0; /* Removemos el margin-top que tenía antes */
}

/* Espaciado interno entre componentes */
.contacto :deep(.contacto-info),
.contacto :deep(.contacto-form) {
  margin-bottom: var(--spacing-2xl);
}

@media (max-width: 968px) {
  .contacto {
    padding: var(--spacing-3xl) 0;
  }
  
  .contacto :deep(.contacto-header) {
    margin-bottom: var(--spacing-4xl);
  }
  
  .contacto-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-3xl);
    margin-bottom: var(--spacing-4xl);
  }
  
  .contacto :deep(.contacto-info),
  .contacto :deep(.contacto-form) {
    margin-bottom: var(--spacing-xl);
  }
}

@media (max-width: 640px) {
  .contacto {
    padding: var(--spacing-2xl) 0;
  }
  
  .contacto :deep(.contacto-header) {
    margin-bottom: var(--spacing-3xl);
  }
  
  .contacto-content {
    gap: var(--spacing-2xl);
    margin-bottom: var(--spacing-3xl);
  }
}
</style>