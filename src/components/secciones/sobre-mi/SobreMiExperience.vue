<template>
  <div class="sobre-mi__experience">
    <div class="experience-header">
      <Briefcase class="header-icon" />
      <h3 class="section-title">Experiencia Profesional</h3>
    </div>
    
    <div class="experience-timeline">
      <div 
        v-for="(job, index) in portfolioData.experience" 
        :key="index"
        class="timeline-item"
        :class="{ 'timeline-item--current': job.period.includes('Presente') }"
      >
        <div class="timeline-marker">
          <div class="marker-dot"></div>
          <div class="marker-line"></div>
        </div>
        
        <div class="timeline-content">
          <div class="job-header">
            <h4 class="job-title">{{ job.position }}</h4>
            <span class="job-period">{{ job.period }}</span>
          </div>
          
          <div class="job-company">
            <Building class="company-icon" />
            <span>{{ job.company }}</span>
          </div>
          
          <p class="job-description">{{ job.description }}</p>
          
          <div class="job-technologies">
            <span 
              v-for="tech in job.technologies" 
              :key="tech"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
          
          <div v-if="job.achievements" class="job-achievements">
            <h5 class="achievements-title">Logros destacados:</h5>
            <ul class="achievements-list">
              <li v-for="achievement in job.achievements" :key="achievement">
                <CheckCircle class="check-icon" />
                <span>{{ achievement }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Briefcase, Building, CheckCircle } from 'lucide-vue-next'

interface Props {
  portfolioData: any
}

defineProps<Props>()
</script>

<style scoped>
.sobre-mi__experience {
  animation: slideInUp 0.8s ease-out 0.8s both;
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

.experience-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
  padding-bottom: var(--spacing-lg);
  border-bottom: 2px solid var(--color-bg-secondary);
}

.header-icon {
  width: 32px;
  height: 32px;
  color: var(--color-primary);
}

.section-title {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
}

.experience-timeline {
  position: relative;
}

.timeline-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
  position: relative;
}

.timeline-item:last-child .marker-line {
  display: none;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.marker-dot {
  width: 16px;
  height: 16px;
  background: var(--color-bg-secondary);
  border: 3px solid var(--color-primary);
  border-radius: 50%;
  transition: all var(--transition-base);
}

.timeline-item--current .marker-dot {
  background: var(--color-primary);
  box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.2);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.marker-line {
  width: 2px;
  height: 100px;
  background: var(--color-bg-secondary);
  margin-top: var(--spacing-sm);
}

.timeline-content {
  background: white;
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all var(--transition-base);
}

.timeline-content:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.job-title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
}

.job-period {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  font-weight: 600;
  padding: var(--spacing-xs) var(--spacing-md);
  background: rgba(0, 122, 255, 0.1);
  border-radius: var(--border-radius-full);
}

.job-company {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  font-weight: 600;
  color: var(--color-text-secondary);
}

.company-icon {
  width: 18px;
  height: 18px;
  color: var(--color-primary);
}

.job-description {
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
}

.job-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-lg);
}

.tech-tag {
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-xs);
  font-weight: 500;
  transition: all var(--transition-base);
}

.tech-tag:hover {
  background: rgba(0, 122, 255, 0.1);
  color: var(--color-primary);
}

.job-achievements {
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-bg-secondary);
}

.achievements-title {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.achievements-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.achievements-list li {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.check-icon {
 width: 16px;
 height: 16px;
 color: var(--color-success);
 flex-shrink: 0;
 margin-top: 2px;
}

@media (max-width: 768px) {
 .timeline-item {
   grid-template-columns: auto 1fr;
   gap: var(--spacing-lg);
 }
 
 .timeline-content {
   padding: var(--spacing-lg);
 }
 
 .job-header {
   flex-direction: column;
   align-items: flex-start;
 }
 
 .job-technologies {
   justify-content: flex-start;
 }
 
 .marker-line {
   height: 80px;
 }
}

@media (max-width: 480px) {
 .experience-header {
   flex-direction: column;
   text-align: center;
 }
 
 .timeline-item {
   grid-template-columns: 1fr;
   gap: var(--spacing-md);
 }
 
 .timeline-marker {
   display: none;
 }
 
 .timeline-content {
   margin-left: 0;
 }
}
</style>