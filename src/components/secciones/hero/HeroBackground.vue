<template>
  <div class="hero__bg">
    <div class="bg-gradient"></div>
    <div class="bg-pattern"></div>
    <div class="bg-particles">
      <div 
        v-for="i in 50" 
        :key="i"
        class="particle"
        :style="getParticleStyle(i)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const getParticleStyle = (index: number) => {
  const size = Math.random() * 4 + 1
  const left = Math.random() * 100
  const animationDuration = Math.random() * 20 + 10
  const animationDelay = Math.random() * 20
  
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDuration: `${animationDuration}s`,
    animationDelay: `${animationDelay}s`,
  }
}
</script>

<style scoped>
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
}

.bg-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%);
  opacity: 0.9;
}

.bg-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
 animation: patternMove 20s ease-in-out infinite;
}

@keyframes patternMove {
 0%, 100% { transform: translateX(0) translateY(0); }
 25% { transform: translateX(-10px) translateY(-10px); }
 50% { transform: translateX(10px) translateY(-5px); }
 75% { transform: translateX(-5px) translateY(10px); }
}

.bg-particles {
 position: absolute;
 inset: 0;
}

.particle {
 position: absolute;
 background: rgba(255, 255, 255, 0.6);
 border-radius: 50%;
 animation: float linear infinite;
}

@keyframes float {
 0% {
   transform: translateY(100vh) rotate(0deg);
   opacity: 0;
 }
 10% {
   opacity: 1;
 }
 90% {
   opacity: 1;
 }
 100% {
   transform: translateY(-100px) rotate(360deg);
   opacity: 0;
 }
}

@media (prefers-reduced-motion: reduce) {
 .bg-pattern,
 .particle {
   animation: none;
 }
}
</style>