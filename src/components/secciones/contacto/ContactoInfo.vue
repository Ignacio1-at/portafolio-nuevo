<template>
  <div class="contacto-info">
    <div class="info-card">
      <div class="card-header">
        <div class="header-icon">
          <User class="icon" />
        </div>
        <h3 class="card-title">Información de Contacto</h3>
      </div>

      <div class="contact-methods">
        <div class="contact-item">
          <div class="contact-icon">
            <Mail class="icon" />
          </div>
          <div class="contact-content">
            <span class="contact-label">Email</span>
            <a 
              :href="`mailto:${portfolioData.personal.email}`"
              class="contact-value contact-link"
            >
              {{ portfolioData.personal.email }}
            </a>
          </div>
          <button 
            class="copy-button"
            @click="copyToClipboard(portfolioData.personal.email)"
            :class="{ 'copied': copiedEmail }"
          >
            <Copy v-if="!copiedEmail" class="copy-icon" />
            <Check v-else class="copy-icon" />
          </button>
        </div>

        <div class="contact-item">
          <div class="contact-icon">
            <Phone class="icon" />
          </div>
          <div class="contact-content">
            <span class="contact-label">Teléfono</span>
            <a 
              :href="`tel:${portfolioData.personal.phone}`"
              class="contact-value contact-link"
            >
              {{ portfolioData.personal.phone }}
            </a>
          </div>
          <button 
            class="copy-button"
            @click="copyToClipboard(portfolioData.personal.phone)"
            :class="{ 'copied': copiedPhone }"
          >
            <Copy v-if="!copiedPhone" class="copy-icon" />
            <Check v-else class="copy-icon" />
          </button>
        </div>

        <div class="contact-item">
          <div class="contact-icon">
            <MapPin class="icon" />
          </div>
          <div class="contact-content">
            <span class="contact-label">Ubicación</span>
            <span class="contact-value">{{ portfolioData.personal.location }}</span>
          </div>
          <div class="timezone-info">
            <Globe class="timezone-icon" />
            <span class="timezone-text">UTC-3</span>
          </div>
        </div>
      </div>

      <div class="social-links">
        <h4 class="social-title">Sígueme en</h4>
        <div class="social-grid">
          <a
            :href="portfolioData.social.github"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link social-link--github"
          >
            <Github class="social-icon" />
            <span class="social-text">GitHub</span>
            <ExternalLink class="external-icon" />
          </a>

          <a
            :href="portfolioData.social.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link social-link--linkedin"
          >
            <Linkedin class="social-icon" />
            <span class="social-text">LinkedIn</span>
            <ExternalLink class="external-icon" />
          </a>
        </div>
      </div>

      <div class="availability-card">
        <div class="availability-header">
          <Calendar class="calendar-icon" />
          <h4 class="availability-title">Disponibilidad</h4>
        </div>
        <div class="availability-content">
          <div class="availability-item">
            <span class="availability-day">Lun - Vie</span>
            <span class="availability-time">9:00 - 18:00</span>
          </div>
          <div class="availability-item">
            <span class="availability-day">Sábado</span>
            <span class="availability-time">10:00 - 14:00</span>
          </div>
          <div class="availability-note">
            <Info class="info-icon" />
            <span>Respuesta garantizada en 24 horas</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Copy, 
  Check, 
  Calendar, 
  Info 
} from 'lucide-vue-next'

interface Props {
  portfolioData: any
}

defineProps<Props>()

const copiedEmail = ref(false)
const copiedPhone = ref(false)

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    
    if (text.includes('@')) {
      copiedEmail.value = true
      setTimeout(() => copiedEmail.value = false, 2000)
    } else {
      copiedPhone.value = true
      setTimeout(() => copiedPhone.value = false, 2000)
    }
  } catch (err) {
    console.error('Error copying to clipboard:', err)
  }
}
</script>

<style scoped>
.contacto-info {
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
  border: 1px solid var(--color-border-light);
  box-shadow: var(--shadow-lg);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.card-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--color-border-light);
}

.header-icon {
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-icon .icon {
  width: 24px;
  height: 24px;
  color: var(--color-text-light);
}

.card-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
  letter-spacing: -0.01em;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius-xl);
  border: 1px solid var(--color-border-light);
  transition: all var(--transition-base);
  position: relative;
}

.contact-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-border-primary);
}

.contact-icon {
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-icon .icon {
  width: 20px;
  height: 20px;
  color: var(--color-text-light);
}

.contact-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.contact-label {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-value {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
}

.contact-link {
  color: var(--color-primary);
  text-decoration: none;
  transition: all var(--transition-base);
}

.contact-link:hover {
  color: var(--color-secondary);
  text-decoration: underline;
}

.copy-button {
  width: 32px;
  height: 32px;
  border: none;
  background: var(--color-bg-card);
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-base);
  border: 1px solid var(--color-border-light);
}

.copy-button:hover {
  background: var(--color-border-primary);
  transform: scale(1.1);
}

.copy-button.copied {
  background: var(--color-success);
  border-color: var(--color-success);
}

.copy-icon {
  width: 14px;
  height: 14px;
  color: var(--color-text-secondary);
}

.copy-button.copied .copy-icon {
  color: var(--color-text-light);
}

.timezone-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.timezone-icon {
  width: 16px;
  height: 16px;
  color: var(--color-primary);
}

.timezone-text {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  font-weight: 500;
}

.social-links {
  border-top: 1px solid var(--color-border-light);
  padding-top: var(--spacing-lg);
}

.social-title {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-md) 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.social-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.social-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius-lg);
  text-decoration: none;
  border: 1px solid var(--color-border-light);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.6s;
}

.social-link:hover::before {
  left: 100%;
}

.social-link:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.social-link--github:hover {
  border-color: #333;
  background: rgba(51, 51, 51, 0.1);
}

.social-link--linkedin:hover {
  border-color: #0077b5;
  background: rgba(0, 119, 181, 0.1);
}

.social-icon {
  width: 20px;
  height: 20px;
  color: var(--color-text-primary);
}

.social-text {
  flex: 1;
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
}

.external-icon {
  width: 16px;
  height: 16px;
  color: var(--color-text-secondary);
}

.availability-card {
  background: var(--color-bg-secondary);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-lg);
  border: 1px solid var(--color-border-light);
}

.availability-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.calendar-icon {
  width: 20px;
  height: 20px;
  color: var(--color-primary);
}

.availability-title {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
}

.availability-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.availability-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm);
  background: var(--color-bg-card);
  border-radius: var(--border-radius-md);
}

.availability-day {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-primary);
}

.availability-time {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  font-weight: 500;
}

.availability-note {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm);
  background: var(--color-border-primary);
  border-radius: var(--border-radius-md);
  margin-top: var(--spacing-sm);
}

.info-icon {
  width: 16px;
  height: 16px;
  color: var(--color-primary);
}

.availability-note span {
  font-size: var(--font-size-xs);
  color: var(--color-primary);
  font-weight: 600;
}

@media (max-width: 768px) {
  .info-card {
    padding: var(--spacing-xl);
  }
  
  .contact-item {
    padding: var(--spacing-md);
  }
  
  .card-header {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-sm);
  }
}
</style>