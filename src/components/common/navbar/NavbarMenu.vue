<template>
  <ul class="navbar__menu" :class="{ 'navbar__menu--open': isMenuOpen }">
    <li v-for="item in navigationItems" :key="item.id">
      <a
        :href="`#${item.id}`"
        class="navbar__link"
        :class="{ 'navbar__link--active': activeSection === item.id }"
        @click="$emit('navClick', item.id, $event)"
      >
        <component :is="item.icon" class="navbar__icon" />
        <span>{{ item.label }}</span>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface NavigationItem {
  id: string
  label: string
  icon: any
}

interface Props {
  navigationItems: NavigationItem[]
  activeSection: string
  isMenuOpen: boolean
}

defineProps<Props>()
defineEmits<{
  navClick: [sectionId: string, event: Event]
}>()
</script>


<style scoped>
.navbar__menu {
  display: flex;
  list-style: none;
  gap: 4px;
  margin: 0;
  padding: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-lg);
  backdrop-filter: blur(10px);
}

.navbar__link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: var(--spacing-sm) var(--border-radius-lg);
  text-decoration: none;
  color: var(--color-text-primary);
  font-weight: 500;
  font-size: 14px;
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  position: relative;
  white-space: nowrap;
}

.navbar__link::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 122, 255, 0.1);
  border-radius: var(--border-radius-md);
  opacity: 0;
  transition: opacity var(--transition-fast);
}

.navbar__link:hover::before {
  opacity: 1;
}

.navbar__link:hover {
  color: var(--color-primary);
  transform: translateY(-1px);
}

.navbar__link--active {
  background: var(--color-primary);
  color: white;
  box-shadow: 0 2px 8px rgba(0, 122, 255, 0.3);
}

.navbar__link--active::before {
  display: none;
}

.navbar__icon {
  width: 16px;
  height: 16px;
  transition: all var(--transition-fast);
}

.navbar__link:hover .navbar__icon {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .navbar__menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: min(320px, 85vw);
    height: 100vh;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 80px 24px 24px;
    gap: var(--spacing-sm);
    transition: right 0.4s var(--transition-base);
    z-index: 999; /* Mayor que el overlay */
    box-shadow: -2px 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 0;
  }

  .navbar__menu--open {
    right: 0;
  }

  .navbar__link {
    padding: var(--spacing-md) var(--spacing-lg);
    font-size: var(--font-size-base);
    border-radius: var(--border-radius-lg);
    margin: 0;
  }

  .navbar__link::before {
    border-radius: var(--border-radius-lg);
  }
}

@media (prefers-color-scheme: dark) {
  .navbar__menu {
    background: rgba(44, 44, 46, 0.95);
  }

  .navbar__link {
    color: #f5f5f7;
  }
}
</style>