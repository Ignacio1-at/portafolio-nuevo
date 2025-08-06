<template>
  <div class="contacto-background">
    <div class="bg-gradient"></div>
    
    <!-- Elementos flotantes de comunicación -->
    <div class="floating-elements">
      <div class="floating-element element--1">
        <Mail class="element-icon" />
      </div>
      <div class="floating-element element--2">
        <MessageCircle class="element-icon" />
      </div>
      <div class="floating-element element--3">
        <Phone class="element-icon" />
      </div>
      <div class="floating-element element--4">
        <Send class="element-icon" />
      </div>
      <div class="floating-element element--5">
        <MapPin class="element-icon" />
      </div>
      <div class="floating-element element--6">
        <Globe class="element-icon" />
      </div>
    </div>

    <!-- Ondas de comunicación -->
    <div class="communication-waves">
      <div class="wave wave--1"></div>
      <div class="wave wave--2"></div>
      <div class="wave wave--3"></div>
      <div class="wave wave--4"></div>
    </div>

    <!-- Líneas de conexión -->
    <div class="connection-lines">
      <div class="connection-line line--1"></div>
      <div class="connection-line line--2"></div>
      <div class="connection-line line--3"></div>
      <div class="connection-line line--4"></div>
    </div>

    <!-- Puntos decorativos -->
    <div class="decorative-dots">
      <div class="dot-group group--1">
        <div v-for="i in 6" :key="`g1-${i}`" class="dot"></div>
      </div>
      <div class="dot-group group--2">
        <div v-for="i in 8" :key="`g2-${i}`" class="dot"></div>
      </div>
      <div class="dot-group group--3">
        <div v-for="i in 4" :key="`g3-${i}`" class="dot"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mail, MessageCircle, Phone, Send, MapPin, Globe } from 'lucide-vue-next'
</script>

<style scoped>
.contacto-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: -1;
}

.bg-gradient {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at top left, rgba(0, 122, 255, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at bottom right, rgba(16, 185, 129, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at center, rgba(88, 86, 214, 0.04) 0%, transparent 50%);
}

/* Elementos flotantes */
.floating-elements {
  position: absolute;
  inset: 0;
}

.floating-element {
  position: absolute;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: elementFloat 8s ease-in-out infinite;
}

.element--1 {
  top: 10%;
  left: 8%;
  animation-delay: 0s;
}

.element--2 {
  top: 20%;
  right: 12%;
  animation-delay: 1s;
}

.element--3 {
  top: 60%;
  left: 5%;
  animation-delay: 2s;
}

.element--4 {
  bottom: 30%;
  right: 8%;
  animation-delay: 3s;
}

.element--5 {
  bottom: 10%;
  left: 20%;
  animation-delay: 4s;
}

.element--6 {
  top: 45%;
  right: 15%;
  animation-delay: 5s;
}

@keyframes elementFloat {
  0%, 100% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: 0.6;
  }
  25% {
    transform: translateY(-20px) translateX(10px) rotate(5deg);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-10px) translateX(-5px) rotate(-3deg);
    opacity: 0.4;
  }
  75% {
    transform: translateY(-25px) translateX(8px) rotate(7deg);
    opacity: 0.7;
  }
}

.element-icon {
  width: 20px;
  height: 20px;
  color: var(--color-primary);
  opacity: 0.7;
}

/* Ondas de comunicación */
.communication-waves {
  position: absolute;
  inset: 0;
}

.wave {
  position: absolute;
  border: 2px solid;
  border-radius: 50%;
  opacity: 0.1;
  animation: waveExpand 6s ease-out infinite;
}

.wave--1 {
  width: 200px;
  height: 200px;
  top: 15%;
  left: 10%;
  border-color: var(--color-primary);
  animation-delay: 0s;
}

.wave--2 {
  width: 300px;
  height: 300px;
  top: 50%;
  right: 15%;
  border-color: var(--color-secondary);
  animation-delay: 2s;
}

.wave--3 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 25%;
  border-color: var(--color-success);
  animation-delay: 4s;
}

.wave--4 {
  width: 250px;
  height: 250px;
  top: 30%;
  right: 30%;
  border-color: var(--color-warning);
  animation-delay: 6s;
}

@keyframes waveExpand {
  0% {
    transform: scale(0);
    opacity: 0.3;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

/* Líneas de conexión */
.connection-lines {
  position: absolute;
  inset: 0;
}

.connection-line {
  position: absolute;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(0, 122, 255, 0.2), 
    transparent
  );
  border-radius: 1px;
  animation: lineFlow 8s ease-in-out infinite;
}

.line--1 {
  width: 200px;
  height: 1px;
  top: 25%;
  left: 15%;
  transform: rotate(45deg);
  animation-delay: 0s;
}

.line--2 {
  width: 150px;
  height: 1px;
  top: 60%;
  right: 20%;
  transform: rotate(-30deg);
  animation-delay: 2s;
}

.line--3 {
  width: 180px;
  height: 1px;
  bottom: 25%;
  left: 20%;
  transform: rotate(60deg);
  animation-delay: 4s;
}

.line--4 {
  width: 120px;
  height: 1px;
  top: 40%;
  right: 30%;
  transform: rotate(-45deg);
  animation-delay: 6s;
}

@keyframes lineFlow {
  0%, 100% {
    opacity: 0;
    transform: scale(0.5) rotate(var(--rotation, 0deg));
  }
  50% {
    opacity: 0.4;
    transform: scale(1) rotate(var(--rotation, 0deg));
  }
}

/* Puntos decorativos */
.decorative-dots {
  position: absolute;
  inset: 0;
}

.dot-group {
  position: absolute;
  display: grid;
  gap: 8px;
}

.group--1 {
  grid-template-columns: repeat(3, 1fr);
  top: 20%;
  right: 5%;
}

.group--2 {
  grid-template-columns: repeat(4, 1fr);
  bottom: 15%;
  right: 10%;
}

.group--3 {
  grid-template-columns: repeat(2, 1fr);
  top: 70%;
  left: 10%;
}

.dot {
 width: 4px;
 height: 4px;
 background: var(--color-primary);
 border-radius: 50%;
 opacity: 0.3;
 animation: dotPulse 4s ease-in-out infinite;
}

.group--1 .dot:nth-child(1) { animation-delay: 0s; }
.group--1 .dot:nth-child(2) { animation-delay: 0.2s; }
.group--1 .dot:nth-child(3) { animation-delay: 0.4s; }
.group--1 .dot:nth-child(4) { animation-delay: 0.6s; }
.group--1 .dot:nth-child(5) { animation-delay: 0.8s; }
.group--1 .dot:nth-child(6) { animation-delay: 1s; }

.group--2 .dot:nth-child(1) { animation-delay: 0.1s; }
.group--2 .dot:nth-child(2) { animation-delay: 0.3s; }
.group--2 .dot:nth-child(3) { animation-delay: 0.5s; }
.group--2 .dot:nth-child(4) { animation-delay: 0.7s; }
.group--2 .dot:nth-child(5) { animation-delay: 0.9s; }
.group--2 .dot:nth-child(6) { animation-delay: 1.1s; }
.group--2 .dot:nth-child(7) { animation-delay: 1.3s; }
.group--2 .dot:nth-child(8) { animation-delay: 1.5s; }

.group--3 .dot:nth-child(1) { animation-delay: 0.2s; }
.group--3 .dot:nth-child(2) { animation-delay: 0.4s; }
.group--3 .dot:nth-child(3) { animation-delay: 0.6s; }
.group--3 .dot:nth-child(4) { animation-delay: 0.8s; }

@keyframes dotPulse {
 0%, 100% {
   opacity: 0.3;
   transform: scale(1);
 }
 50% {
   opacity: 0.8;
   transform: scale(1.5);
 }
}

/* Responsive */
@media (max-width: 768px) {
 .floating-element {
   width: 36px;
   height: 36px;
 }
 
 .element-icon {
   width: 16px;
   height: 16px;
 }
 
 .wave {
   transform: scale(0.7);
 }
 
 .connection-line {
   opacity: 0.5;
 }
}

@media (prefers-reduced-motion: reduce) {
 .floating-element,
 .wave,
 .connection-line,
 .dot {
   animation: none;
 }
 
 .floating-element,
 .wave,
 .connection-line {
   opacity: 0.3;
 }
 
 .dot {
   opacity: 0.2;
 }
}
</style>