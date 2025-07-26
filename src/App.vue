<template>
  <div id="app">
    <NavBar />
    <main>
      <Hero />
      <SobreMi />
      <Skills />
      <Proyectos />
      <Contactos />
    </main>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/common/NavBar.vue'
import Hero from '@/components/secciones/Hero.vue'
import SobreMi from '@/components/secciones/SobreMi.vue'
import Skills from '@/components/secciones/Skills.vue'
import Proyectos from '@/components/secciones/Proyectos.vue'
import Contactos from '@/components/secciones/Contactos.vue'
</script>

<style>
@import './styles/variables.css';

#app {
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>