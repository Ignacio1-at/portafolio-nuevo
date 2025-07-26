<template>
  <div class="sobre-mi__education">
    <div class="education-card">
      <div class="card-header">
        <GraduationCap class="header-icon" />
        <h3 class="card-title">Educación</h3>
      </div>
      
      <div class="education-item">
        <div class="education-content">
          <div class="education-degree">
            <h4>{{ portfolioData.personal.title }}</h4>
            <span class="degree-type">Título Profesional</span>
          </div>
          
          <div class="education-institution">
            <Building class="institution-icon" />
            <span>{{ portfolioData.about.university }}</span>
          </div>
          
          <div class="education-period">
            <Calendar class="period-icon" />
            <span>{{ portfolioData.about.period }}</span>
          </div>
          
          <div class="education-location">
            <MapPin class="location-icon" />
            <span>Valparaíso, Chile</span>
          </div>
        </div>
        
        <div class="education-visual">
          <div class="graduation-icon">
            <GraduationCap class="grad-icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GraduationCap, Building, Calendar, MapPin } from 'lucide-vue-next'

interface Props {
  portfolioData: any
}

defineProps<Props>()
</script>

<style scoped>
.sobre-mi__education {
  animation: slideInUp 0.8s ease-out 0.6s both;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.education-card {
  background: white;
  border-radius: var(--border-radius-2xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-bottom: var(--spacing-2xl);
  transition: all var(--transition-base);
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-2xl);
}

.card-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-lg);
  border-bottom: 2px solid var(--color-bg-secondary);
}

.header-icon {
  width: 32px;
  height: 32px;
  color: var(--color-primary);
}

.card-title {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
}

.education-item {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--spacing-2xl);
  align-items: center;
}

.education-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.education-degree h4 {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-xs) 0;
}

.degree-type {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  font-weight: 600;
  padding: var(--spacing-xs) var(--spacing-md);
  background: rgba(0, 122, 255, 0.1);
  border-radius: var(--border-radius-full);
}

.education-institution,
.education-period,
.education-location {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
}

.institution-icon,
.period-icon,
.location-icon {
  width: 20px;
  height: 20px;
  color: var(--color-primary);
}

.education-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.graduation-icon {
  width: 80px;
  height: 80px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.grad-icon {
  width: 40px;
  height: 40px;
  color: white;
}

@media (max-width: 768px) {
  .education-item {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-xl);
  }
  
  .education-content {
    align-items: center;
  }
  
  .education-institution,
  .education-period,
  .education-location {
    justify-content: center;
  }
}
</style>