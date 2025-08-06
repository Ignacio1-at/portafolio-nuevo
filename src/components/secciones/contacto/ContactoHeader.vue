<template>
  <div class="contacto-header">
    <div class="header-decoration">
      <div class="decoration-circle">
        <Mail class="main-icon" />
      </div>
      <div class="decoration-rings">
        <div class="ring ring--1"></div>
        <div class="ring ring--2"></div>
        <div class="ring ring--3"></div>
      </div>
      <div class="floating-icons">
        <div class="floating-icon floating-icon--1">
          <Phone class="icon" />
        </div>
        <div class="floating-icon floating-icon--2">
          <MessageCircle class="icon" />
        </div>
        <div class="floating-icon floating-icon--3">
          <Send class="icon" />
        </div>
      </div>
    </div>

    <div class="header-content">
      <h2 class="section-title">
        <span class="title-main">¡Trabajemos</span>
        <span class="title-accent">Juntos!</span>
      </h2>
      <p class="section-subtitle">
        ¿Tienes un proyecto en mente? Me encantaría conocer tu idea y ayudarte a hacerla realidad. 
        <strong>Contactemos</strong> y creemos algo increíble.
      </p>
      
      <div class="availability-status">
        <div class="status-indicator">
          <div class="status-dot"></div>
          <span class="status-text">Disponible para proyectos</span>
        </div>
        <div class="response-time">
          <Clock class="clock-icon" />
          <span>Respuesta en 24hrs</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mail, Phone, MessageCircle, Send, Clock } from 'lucide-vue-next'
</script>

<style scoped>
.contacto-header {
  text-align: center;
  margin-bottom: var(--spacing-4xl);
  position: relative;
  animation: slideInDown 0.8s ease-out;
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.header-decoration {
  position: relative;
  margin-bottom: var(--spacing-2xl);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.decoration-circle {
  width: 100px;
  height: 100px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-xl);
  animation: mainIconFloat 4s ease-in-out infinite;
  position: relative;
  z-index: 3;
}

@keyframes mainIconFloat {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-15px) scale(1.05); }
}

.main-icon {
  width: 48px;
  height: 48px;
  color: var(--color-text-light);
}

.decoration-rings {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ring {
  position: absolute;
  border: 2px solid;
  border-radius: 50%;
  opacity: 0.3;
}

.ring--1 {
  width: 140px;
  height: 140px;
  border-color: var(--color-primary);
  animation: ringRotate 20s linear infinite;
}

.ring--2 {
  width: 180px;
  height: 180px;
  border-color: var(--color-secondary);
  animation: ringRotate 25s linear infinite reverse;
}

.ring--3 {
  width: 220px;
  height: 220px;
  border-color: var(--color-success);
  animation: ringRotate 30s linear infinite;
}

@keyframes ringRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.floating-icons {
  position: absolute;
  inset: 0;
}

.floating-icon {
  position: absolute;
  width: 48px;
  height: 48px;
  background: var(--color-bg-card);
  border-radius: var(--border-radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border-light);
  animation: floatingIconMove 6s ease-in-out infinite;
}

.floating-icon--1 {
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.floating-icon--2 {
  top: 30%;
  right: 10%;
  animation-delay: 2s;
}

.floating-icon--3 {
  bottom: 25%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes floatingIconMove {
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-10px) translateX(5px); }
  50% { transform: translateY(-5px) translateX(-5px); }
  75% { transform: translateY(-15px) translateX(3px); }
}

.floating-icon .icon {
  width: 20px;
  height: 20px;
  color: var(--color-primary);
}

.header-content {
  max-width: 600px;
  margin: 0 auto;
}

.section-title {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 800;
  margin-bottom: var(--spacing-lg);
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.title-main {
  display: block;
  color: var(--color-text-primary);
}

.title-accent {
  display: block;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 0.9em;
  margin-top: var(--spacing-xs);
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-2xl);
  font-weight: 400;
}

.section-subtitle strong {
  color: var(--color-primary);
  font-weight: 600;
}

.availability-status {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-bg-card);
  border-radius: var(--border-radius-full);
  border: 1px solid var(--color-border-light);
  box-shadow: var(--shadow-sm);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: var(--color-success);
  border-radius: 50%;
  animation: statusPulse 2s ease-in-out infinite;
}

@keyframes statusPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

.status-text {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-primary);
}

.response-time {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  font-weight: 500;
}

.clock-icon {
  width: 16px;
  height: 16px;
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .header-decoration {
    height: 150px;
  }
  
  .decoration-circle {
    width: 80px;
    height: 80px;
  }
  
  .main-icon {
    width: 36px;
    height: 36px;
  }
  
  .floating-icons {
    display: none;
  }
  
  .availability-status {
    flex-direction: column;
    gap: var(--spacing-md);
  }
}
</style>