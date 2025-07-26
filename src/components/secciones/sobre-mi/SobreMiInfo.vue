<template>
  <div class="sobre-mi__info">
    <div class="info-card">
      <div class="card-header">
        <div class="card-icon">
          <User class="icon" />
        </div>
        <h3 class="card-title">Mi Historia</h3>
      </div>
      
      <div class="card-content">
        <p class="info-text">
          {{ portfolioData.about.description }}
        </p>
        
        <div class="info-details">
          <div class="detail-item">
            <MapPin class="detail-icon" />
            <span>{{ portfolioData.personal.location }}</span>
          </div>
          
          <div class="detail-item">
            <GraduationCap class="detail-icon" />
            <span>{{ portfolioData.about.university }}</span>
          </div>
          
          <div class="detail-item">
            <Calendar class="detail-icon" />
            <span>{{ portfolioData.about.period }}</span>
          </div>
        </div>
        
        <div class="interests">
          <h4 class="interests-title">Intereses principales</h4>
          <div class="interests-list">
            <span 
              v-for="interest in portfolioData.about.interests" 
              :key="interest"
              class="interest-tag"
            >
              {{ interest }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User, MapPin, GraduationCap, Calendar } from 'lucide-vue-next'

interface Props {
  portfolioData: any
}

defineProps<Props>()
</script>

<style scoped>
.sobre-mi__info {
  animation: slideInLeft 0.8s ease-out 0.2s both;
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

.info-card {
  background: var(--color-bg-card);
  border-radius: var(--border-radius-2xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border-light);
  transition: all var(--transition-base);
}

.info-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-2xl);
  border-color: var(--color-border-primary);
}

.card-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border-light);
}

.card-icon {
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
}

.icon {
  width: 24px;
  height: 24px;
  color: white;
}

.card-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
}

.card-content > * + * {
  margin-top: var(--spacing-lg);
}

.info-text {
  font-size: var(--font-size-base);
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}

.info-details {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.detail-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius-lg);
  transition: all var(--transition-base);
  border: 1px solid var(--color-border-light);
}

.detail-item:hover {
  background: var(--color-bg-card);
  transform: translateX(5px);
  border-color: var(--color-border-primary);
  box-shadow: var(--shadow-sm);
}

.detail-icon {
  width: 18px;
  height: 18px;
  color: var(--color-primary);
  flex-shrink: 0;
}

.detail-item span {
  font-size: var(--font-size-sm);
  color: var(--color-text-primary);
  font-weight: 500;
}

.interests {
  margin-top: var(--spacing-xl);
}

.interests-title {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.interests-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.interest-tag {
  padding: var(--spacing-sm) var(--spacing-lg);
  background: var(--gradient-primary);
  color: white;
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-sm);
  font-weight: 500;
  transition: all var(--transition-base);
  border: none;
}

.interest-tag:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

@media (max-width: 768px) {
  .info-card {
    padding: var(--spacing-xl);
  }
  
  .card-header {
    flex-direction: column;
    text-align: center;
  }
}
</style>