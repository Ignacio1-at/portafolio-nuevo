<template>
  <div class="contacto-footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-main">
          <div class="footer-brand">
            <div class="brand-icon">
              <Code class="icon" />
            </div>
            <div class="brand-content">
              <h3 class="brand-name">{{ portfolioData.personal.name }}</h3>
              <p class="brand-title">{{ portfolioData.personal.title }}</p>
            </div>
          </div>

          <!-- CTA mejorado que encaje mejor -->
          <div class="footer-cta">
            <div class="cta-content">
              <h4 class="cta-title">¿Listo para comenzar tu proyecto?</h4>
              <p class="cta-description">
                Trabajemos juntos para crear algo increíble
              </p>
            </div>
            
            <div class="cta-actions">
              <a
                :href="`mailto:${portfolioData.personal.email}`"
                class="cta-button cta-button--primary"
              >
                <Mail class="button-icon" />
                <span>Enviar email</span>
              </a>
              <a
                :href="`tel:${portfolioData.personal.phone}`"
                class="cta-button cta-button--secondary"
              >
                <Phone class="button-icon" />
                <span>Llamar ahora</span>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-links">
          <div class="links-section">
            <h4 class="section-title">Navegación</h4>
            <ul class="links-list">
              <li><a href="#inicio" class="footer-link">Inicio</a></li>
              <li><a href="#sobre-mi" class="footer-link">Sobre mí</a></li>
              <li><a href="#skills" class="footer-link">Habilidades</a></li>
              <li><a href="#proyectos" class="footer-link">Proyectos</a></li>
              <li><a href="#contacto" class="footer-link">Contacto</a></li>
            </ul>
          </div>

          <div class="links-section">
            <h4 class="section-title">Servicios</h4>
            <ul class="links-list">
              <li><span class="service-item">Desarrollo Web</span></li>
              <li><span class="service-item">Apps Móviles</span></li>
              <li><span class="service-item">Backend APIs</span></li>
              <li><span class="service-item">Consultoría</span></li>
            </ul>
          </div>

          <div class="links-section">
            <h4 class="section-title">Tecnologías</h4>
            <ul class="tech-list">
              <li class="tech-item">
                <span class="tech-icon">⚛️</span>
                <span>React Native</span>
              </li>
              <li class="tech-item">
                <span class="tech-icon">💚</span>
                <span>Vue.js</span>
              </li>
              <li class="tech-item">
                <span class="tech-icon">🔷</span>
                <span>TypeScript</span>
              </li>
              <li class="tech-item">
                <span class="tech-icon">🐍</span>
                <span>Django</span>
              </li>
            </ul>
          </div>

          <div class="links-section">
            <h4 class="section-title">Sígueme</h4>
            <div class="social-links">
              <a
                :href="portfolioData.social.github"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link social-link--github"
                title="GitHub"
              >
                <Github class="social-icon" />
                <span class="social-text">GitHub</span>
              </a>

              <a
                :href="portfolioData.social.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="social-link social-link--linkedin"
                title="LinkedIn"
              >
                <Linkedin class="social-icon" />
                <span class="social-text">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-copyright">
          <p class="copyright-text">
            © {{ currentYear }} {{ portfolioData.personal.name }}. 
            Todos los derechos reservados.
          </p>
        </div>
        
        <div class="footer-status">
          <div class="status-indicator">
            <div class="status-dot"></div>
            <span class="status-text">Disponible para proyectos</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Code, Mail, Phone, Github, Linkedin } from 'lucide-vue-next'

interface Props {
  portfolioData: any
}

defineProps<Props>()

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.contacto-footer {
  margin-top: var(--spacing-4xl);
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

.footer-container {
  background: var(--color-bg-card);
  border-radius: var(--border-radius-2xl);
  border: 1px solid var(--color-border-light);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  position: relative;
}

.footer-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-primary);
}

.footer-content {
  padding: var(--spacing-2xl);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
}

.footer-main {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.brand-icon {
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: brandIconFloat 3s ease-in-out infinite;
}

@keyframes brandIconFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

.brand-icon .icon {
  width: 24px;
  height: 24px;
  color: var(--color-text-light);
}

.brand-name {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
  line-height: 1.2;
}

.brand-title {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  margin: var(--spacing-xs) 0 0 0;
}

/* CTA rediseñado para que encaje mejor */
.footer-cta {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  padding: var(--spacing-xl);
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius-xl);
  border: 1px solid var(--color-border-light);
}

.cta-content {
  text-align: left;
}

.cta-title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-sm) 0;
}

.cta-description {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.5;
}

.cta-actions {
  display: flex;
  gap: var(--spacing-md);
}

.cta-button {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition-base);
  font-size: var(--font-size-sm);
  flex: 1;
  justify-content: center;
}

.cta-button--primary {
  background: var(--gradient-primary);
  color: var(--color-text-light);
}

.cta-button--primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.cta-button--secondary {
  background: var(--color-bg-card);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border-light);
}

.cta-button--secondary:hover {
  background: var(--color-border-primary);
  color: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.button-icon {
  width: 16px;
  height: 16px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
}

.links-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.section-title {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  padding-bottom: var(--spacing-xs);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 20px;
  height: 2px;
  background: var(--gradient-primary);
}

.links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-link {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all var(--transition-base);
  padding: var(--spacing-xs) 0;
  position: relative;
}

.footer-link::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition-base);
}

.footer-link:hover {
  color: var(--color-primary);
  padding-left: var(--spacing-sm);
}

.footer-link:hover::before {
  width: 20px;
}

.service-item {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  position: relative;
  padding: var(--spacing-xs) 0 var(--spacing-xs) var(--spacing-md);
  display: block;
}

.service-item::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: bold;
}

.tech-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.tech-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  padding: var(--spacing-xs);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-base);
}

.tech-item:hover {
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
}

.tech-icon {
  font-size: 16px;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.social-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-lg);
  transition: all var(--transition-base);
  text-decoration: none;
  border: 1px solid var(--color-border-light);
  background: var(--color-bg-secondary);
}

.social-link--github {
  color: var(--color-text-secondary);
}

.social-link--github:hover {
  background: #333;
  color: white;
  border-color: #333;
  transform: translateY(-2px);
}

.social-link--linkedin {
  color: var(--color-text-secondary);
}

.social-link--linkedin:hover {
  background: #0077b5;
  color: white;
  border-color: #0077b5;
  transform: translateY(-2px);
}

.social-icon {
  width: 20px;
  height: 20px;
}

.social-text {
  font-size: var(--font-size-sm);
  font-weight: 600;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-xl) var(--spacing-2xl);
  border-top: 1px solid var(--color-border-light);
  background: var(--color-bg-secondary);
  margin-bottom: var(--spacing-xl);
}

.copyright-text {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin: 0;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
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
  color: var(--color-text-secondary);
  font-weight: 500;
}

@media (max-width: 968px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .cta-actions {
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .footer-container {
    margin: 0 -var(--spacing-md);
    border-radius: var(--border-radius-xl) var(--border-radius-xl) 0 0;
  }
  
  .footer-content {
    padding: var(--spacing-xl);
  }
  
  .footer-bottom {
    padding: var(--spacing-lg);
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }
  
  .footer-brand {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-sm);
  }
  
  .cta-content {
    text-align: center;
  }
}
</style>