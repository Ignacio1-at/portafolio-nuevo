<template>
  <div class="hero__bg">
    <div class="bg-gradient"></div>
    
    <!-- Zona de código solo en el lado derecho -->
    <div class="code-rain code-rain--right">
      <div
        v-for="i in 8"
        :key="`code-${i}`"
        class="code-column"
        :style="getCodeColumnStyle(i, 'right')"
      >
        <div class="code-text">{{ getRandomCode() }}</div>
      </div>
    </div>

    <!-- Dispositivos estratégicamente ubicados -->
    <div class="floating-devices">
      <div class="device device--phone">
        <div class="device-screen">
          <div class="app-interface">
            <div class="status-bar"></div>
            <div class="app-content">
              <div class="app-header">
                <div class="app-dots"></div>
              </div>
              <div class="app-body">
                <div class="app-line"></div>
                <div class="app-line app-line--short"></div>
                <div class="app-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="device device--laptop">
        <div class="device-screen">
          <div class="ide-interface">
            <div class="ide-header">
              <div class="ide-tabs">
                <div class="ide-tab active">App.tsx</div>
                <div class="ide-tab">api.ts</div>
              </div>
            </div>
            <div class="ide-content">
              <div class="code-line">
                <span class="line-number">1</span>
                <span class="code-keyword">import</span>
                <span class="code-text"> React</span>
              </div>
              <div class="code-line">
                <span class="line-number">2</span>
                <span class="code-keyword">const</span>
                <span class="code-text"> App</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="device device--tablet">
        <div class="device-screen">
          <div class="mobile-app">
            <div class="mobile-header">
              <div class="signal-bars"></div>
              <div class="battery"></div>
            </div>
            <div class="mobile-content">
              <div class="card"></div>
              <div class="card card--small"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Iconos tech sutiles en esquinas -->
    <div class="tech-constellation">
      <div class="constellation constellation--top-right">
        <div class="tech-node" data-tech="⚛️"></div>
        <div class="tech-node" data-tech="📱"></div>
        <div class="tech-node" data-tech="🔷"></div>
        <div class="connection-line line-1"></div>
        <div class="connection-line line-2"></div>
      </div>
      
      <div class="constellation constellation--bottom-left">
        <div class="tech-node" data-tech="💚"></div>
        <div class="tech-node" data-tech="🐍"></div>
        <div class="tech-node" data-tech="🔗"></div>
        <div class="connection-line line-3"></div>
        <div class="connection-line line-4"></div>
      </div>
    </div>

    <!-- Elementos geométricos minimalistas -->
    <div class="geometric-accents">
      <div class="accent accent--circle"></div>
      <div class="accent accent--line"></div>
      <div class="accent accent--dot"></div>
    </div>

    <!-- Overlay para proteger el texto -->
    <div class="text-protection-overlay"></div>
  </div>
</template>

<script setup lang="ts">
const codeSnippets = [
  'React.Native',
  'Swift UI',
  'Kotlin',
  'Vue.js',
  'TypeScript',
  'GraphQL',
  'Django',
  'NestJS',
  'useState()',
  'async/await',
  'API.call()',
  'export const',
  'interface',
  'class App',
  'override func',
  'sealed class',
  '<template>',
  'computed()',
  'useEffect()',
  'viewDidLoad',
]

const getRandomCode = () => {
  return codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
}

const getCodeColumnStyle = (index: number, side: string) => {
  const baseLeft = side === 'right' ? 70 : 10
  const left = baseLeft + (index * 4) + Math.random() * 2
  const animationDuration = Math.random() * 20 + 25
  const animationDelay = Math.random() * 15
  
  return {
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
  background: 
    radial-gradient(ellipse at top left, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at bottom right, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
    linear-gradient(135deg, 
      #0f172a 0%,
      #1e293b 30%,
      #334155 70%,
      #1e293b 100%
    );
}

/* Overlay de protección para el texto */
.text-protection-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 55%;
  height: 100%;
  background: linear-gradient(
    90deg, 
    rgba(15, 23, 42, 0.3) 0%,
    rgba(15, 23, 42, 0.1) 60%,
    transparent 100%
  );
  z-index: 2;
}

/* Lluvia de código solo en el lado derecho */
.code-rain--right {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  opacity: 0.6;
}

.code-column {
  position: absolute;
  top: -100px;
  width: 120px;
  animation: codefall linear infinite;
}

.code-text {
  color: rgba(34, 197, 94, 0.4);
  font-family: 'Monaco', 'Menlo', 'Cascadia Code', monospace;
  font-size: 11px;
  font-weight: 500;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  white-space: nowrap;
  text-shadow: 0 0 8px rgba(34, 197, 94, 0.2);
  letter-spacing: 1px;
}

@keyframes codefall {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    transform: translateY(calc(100vh + 100px));
    opacity: 0;
  }
}

/* Dispositivos más sofisticados */
.floating-devices {
  position: absolute;
  inset: 0;
}

.device {
  position: absolute;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.device--phone {
  width: 70px;
  height: 140px;
  border-radius: 18px;
  top: 15%;
  right: 12%;
  animation: deviceFloat 8s ease-in-out infinite;
  animation-delay: 0s;
}

.device--laptop {
  width: 120px;
  height: 75px;
  border-radius: 8px;
  top: 55%;
  right: 8%;
  animation: deviceFloat 10s ease-in-out infinite;
  animation-delay: 3s;
}

.device--tablet {
  width: 90px;
  height: 70px;
  border-radius: 12px;
  bottom: 15%;
  right: 20%;
  animation: deviceFloat 9s ease-in-out infinite;
  animation-delay: 6s;
}

@keyframes deviceFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-12px) rotate(1deg);
  }
  50% {
    transform: translateY(-8px) rotate(0deg);
  }
  75% {
    transform: translateY(-15px) rotate(-1deg);
  }
}

.device-screen {
  position: absolute;
  inset: 6px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 12px;
  overflow: hidden;
}

/* Interfaces más detalladas */
.app-interface {
  padding: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.status-bar {
  height: 3px;
  background: linear-gradient(90deg, #10b981 0%, #3b82f6 100%);
  border-radius: 2px;
  margin-bottom: 8px;
}

.app-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.app-header {
  display: flex;
  justify-content: center;
}

.app-dots {
  width: 20px;
  height: 3px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.app-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.app-line {
  height: 2px;
  background: rgba(59, 130, 246, 0.6);
  border-radius: 1px;
}

.app-line--short {
  width: 60%;
  background: rgba(16, 185, 129, 0.6);
}

/* IDE Interface */
.ide-interface {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.ide-header {
  height: 16px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  padding: 0 4px;
}

.ide-tabs {
  display: flex;
  gap: 2px;
}

.ide-tab {
  font-size: 6px;
  padding: 1px 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  color: rgba(255, 255, 255, 0.6);
}

.ide-tab.active {
  background: rgba(59, 130, 246, 0.3);
  color: rgba(255, 255, 255, 0.9);
}

.ide-content {
  flex: 1;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.code-line {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Monaco', monospace;
  font-size: 6px;
}

.line-number {
  color: rgba(255, 255, 255, 0.3);
  width: 8px;
  text-align: right;
}

.code-keyword {
  color: #f59e0b;
}

.code-text {
  color: #10b981;
}

/* Mobile App Interface */
.mobile-app {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 4px;
}

.mobile-header {
  height: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.signal-bars {
  width: 12px;
  height: 3px;
  background: linear-gradient(90deg, 
    #10b981 0%, #10b981 25%, 
    rgba(16, 185, 129, 0.5) 25%, rgba(16, 185, 129, 0.5) 50%,
    rgba(16, 185, 129, 0.3) 50%, rgba(16, 185, 129, 0.3) 75%,
    rgba(16, 185, 129, 0.1) 75%);
}

.battery {
  width: 8px;
  height: 3px;
  background: #10b981;
  border-radius: 1px;
  position: relative;
}

.battery::after {
  content: '';
  position: absolute;
  right: -1px;
  top: 1px;
  width: 1px;
  height: 1px;
  background: #10b981;
  border-radius: 0 1px 1px 0;
}

.mobile-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card {
  height: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  border-left: 2px solid #3b82f6;
}

.card--small {
  height: 8px;
  border-left-color: #10b981;
}

/* Constelaciones de tecnología */
.tech-constellation {
  position: absolute;
  inset: 0;
}

.constellation {
  position: absolute;
}

.constellation--top-right {
  top: 8%;
  right: 35%;
  width: 100px;
  height: 80px;
}

.constellation--bottom-left {
  bottom: 25%;
  left: 8%;
  width: 90px;
  height: 70px;
}

.tech-node {
  position: absolute;
  width: 24px;
  height: 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  opacity: 0.7;
  animation: nodeGlow 4s ease-in-out infinite;
}

.tech-node::before {
  content: attr(data-tech);
}

.tech-node:nth-child(1) { top: 0; left: 20px; animation-delay: 0s; }
.tech-node:nth-child(2) { top: 30px; right: 0; animation-delay: 1s; }
.tech-node:nth-child(3) { bottom: 0; left: 0; animation-delay: 2s; }

@keyframes nodeGlow {
  0%, 100% { 
    opacity: 0.5;
    box-shadow: 0 0 0 rgba(59, 130, 246, 0);
  }
  50% { 
    opacity: 0.8;
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
  }
}

.connection-line {
  position: absolute;
  background: linear-gradient(90deg, 
    rgba(59, 130, 246, 0.3) 0%, 
    rgba(59, 130, 246, 0.1) 100%);
  border-radius: 1px;
}

.line-1 {
  width: 40px;
  height: 1px;
  top: 12px;
  left: 35px;
  transform: rotate(45deg);
}

.line-2 {
  width: 35px;
  height: 1px;
  top: 40px;
  left: 15px;
  transform: rotate(-30deg);
}

.line-3 {
  width: 30px;
  height: 1px;
  bottom: 20px;
  left: 20px;
  transform: rotate(30deg);
}

.line-4 {
  width: 25px;
  height: 1px;
  top: 35px;
  left: 25px;
  transform: rotate(-45deg);
}

/* Acentos geométricos minimalistas */
.geometric-accents {
  position: absolute;
  inset: 0;
}

.accent {
  position: absolute;
  opacity: 0.08;
}

.accent--circle {
  width: 200px;
  height: 200px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  top: -50px;
  right: -50px;
  animation: slowRotate 30s linear infinite;
}

.accent--line {
  width: 150px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  bottom: 30%;
  left: 10%;
  transform: rotate(-15deg);
  animation: fadeInOut 6s ease-in-out infinite;
}

.accent--dot {
  width: 4px;
  height: 4px;
  background: rgba(59, 130, 246, 0.5);
  border-radius: 50%;
  top: 25%;
  left: 15%;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes slowRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes fadeInOut {
  0%, 100% { opacity: 0.05; }
  50% { opacity: 0.15; }
}

@keyframes pulse {
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
@media (max-width: 968px) {
  .text-protection-overlay {
    width: 100%;
    background: linear-gradient(
      180deg, 
      rgba(15, 23, 42, 0.4) 0%,
      rgba(15, 23, 42, 0.2) 40%,
      transparent 70%
    );
  }
  
  .code-rain--right {
    width: 100%;
    right: 0;
  }
  
  .device--phone { width: 50px; height: 100px; right: 8%; }
  .device--laptop { width: 90px; height: 60px; right: 5%; }
  .device--tablet { width: 70px; height: 55px; right: 15%; }
  
  .constellation--top-right { right: 15%; width: 80px; }
  .constellation--bottom-left { left: 5%; width: 70px; }
}

@media (max-width: 768px) {
  .code-rain--right {
    opacity: 0.3;
  }
  
  .floating-devices {
    opacity: 0.7;
  }
  
  .tech-constellation {
    opacity: 0.5;
  }
}

@media (prefers-reduced-motion: reduce) {
  .code-column,
  .device,
  .tech-node,
  .accent {
    animation: none;
  }
}
</style>