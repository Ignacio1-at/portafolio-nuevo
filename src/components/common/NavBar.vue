<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="contenedor">
      <div class="navbar__content">
        <NavbarBrand 
          :portfolio-data="portfolioData"
          @scroll-to-section="scrollToSection"
        />
        
        <NavbarMenu
          :navigation-items="navigationItems"
          :active-section="activeSection"
          :is-menu-open="isMenuOpen"
          @nav-click="handleNavClick"
        />
        
        <NavbarActions
          :portfolio-data="portfolioData"
        />
        
        <NavbarToggle
          :is-menu-open="isMenuOpen"
          @toggle="toggleMenu"
        />
      </div>
    </div>

    <NavbarOverlay
      :is-open="isMenuOpen"
      @close="closeMenu"
    />
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Home, User, Code, Briefcase, Mail } from 'lucide-vue-next'
import { portfolioData } from '@/data/portafolio'
import NavbarBrand from './navbar/NavbarBrand.vue'
import NavbarMenu from './navbar/NavbarMenu.vue'
import NavbarActions from './navbar/NavbarActions.vue'
import NavbarToggle from './navbar/NavbarToggle.vue'
import NavbarOverlay from './navbar/NavbarOverlay.vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('inicio')

const navigationItems = [
  { id: 'inicio', label: 'Inicio', icon: Home },
  { id: 'sobre-mi', label: 'Sobre Mí', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'proyectos', label: 'Proyectos', icon: Briefcase },
  { id: 'contactos', label: 'Contacto', icon: Mail },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleNavClick = (sectionId: string, event: Event) => {
  event.preventDefault()
  scrollToSection(sectionId)
  closeMenu()
}

const scrollToSection = (sectionId: string, event: Event | null = null) => {
  if (event) event.preventDefault()
  
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

const handleScroll = () => {
  const scrollY = window.scrollY
  isScrolled.value = scrollY > 50

  // Update active section
  const sections = navigationItems.map((item) => item.id)
  const scrollPosition = scrollY + 100

  for (const sectionId of sections) {
    const element = document.getElementById(sectionId)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = sectionId
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  transition: all var(--transition-base);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
}

.navbar--scrolled {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: var(--shadow-md);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
}

.navbar__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

@media (max-width: 768px) {
  .navbar__content {
    padding: 0 var(--spacing-md);
    height: 54px;
  }
}

@media (prefers-color-scheme: dark) {
  .navbar {
    background: rgba(28, 28, 30, 0.8);
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
  }

  .navbar--scrolled {
    background: rgba(28, 28, 30, 0.9);
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.15);
  }
}
</style>