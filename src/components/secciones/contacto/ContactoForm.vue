<template>
  <div class="contacto-form">
    <div class="form-card">
      <div class="form-header">
        <div class="header-icon">
          <Send class="icon" />
        </div>
        <h3 class="form-title">Envíame un mensaje</h3>
        <p class="form-subtitle">Cuéntame sobre tu proyecto y cómo podemos trabajar juntos</p>
      </div>

      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-row">
          <div class="form-group">
            <label for="name" class="form-label">
              <User class="label-icon" />
              Nombre completo
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="form-input"
              :class="{ 'form-input--error': errors.name }"
              placeholder="Tu nombre completo"
              required
            />
            <span v-if="errors.name" class="form-error">{{ errors.name }}</span>
          </div>

          <div class="form-group">
            <label for="email" class="form-label">
              <Mail class="label-icon" />
              Correo electrónico
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="form-input"
              :class="{ 'form-input--error': errors.email }"
              placeholder="tu@email.com"
              required
            />
            <span v-if="errors.email" class="form-error">{{ errors.email }}</span>
          </div>
        </div>

        <div class="form-group">
          <label for="subject" class="form-label">
            <Tag class="label-icon" />
            Asunto
          </label>
          <select
            id="subject"
            v-model="form.subject"
            class="form-select"
            :class="{ 'form-input--error': errors.subject }"
            required
          >
            <option value="">Selecciona un tema</option>
            <option value="proyecto-web">Desarrollo Web</option>
            <option value="proyecto-mobile">Aplicación Móvil</option>
            <option value="consulta-general">Consulta General</option>
            <option value="colaboracion">Colaboración</option>
            <option value="otro">Otro</option>
          </select>
          <ChevronDown class="select-arrow" />
          <span v-if="errors.subject" class="form-error">{{ errors.subject }}</span>
        </div>

        <div class="form-group">
          <label for="budget" class="form-label">
            <DollarSign class="label-icon" />
            Presupuesto estimado (opcional)
          </label>
          <select
            id="budget"
            v-model="form.budget"
            class="form-select"
          >
            <option value="">Selecciona un rango</option>
            <option value="500-1000">$500 - $1,000 USD</option>
            <option value="1000-3000">$1,000 - $3,000 USD</option>
            <option value="3000-5000">$3,000 - $5,000 USD</option>
            <option value="5000+">$5,000+ USD</option>
            <option value="por-definir">Por definir</option>
          </select>
          <ChevronDown class="select-arrow" />
        </div>

        <div class="form-group">
          <label for="message" class="form-label">
            <MessageSquare class="label-icon" />
            Mensaje
          </label>
          <textarea
            id="message"
            v-model="form.message"
            class="form-textarea"
            :class="{ 'form-input--error': errors.message }"
            placeholder="Cuéntame sobre tu proyecto, objetivos, timeline y cualquier detalle importante..."
            rows="6"
            required
          ></textarea>
          <div class="textarea-counter">
            <span class="counter-text">{{ form.message.length }}/500</span>
          </div>
          <span v-if="errors.message" class="form-error">{{ errors.message }}</span>
        </div>

        <div class="form-actions">
          <button
            type="submit"
            class="submit-button"
            :class="{
              'submit-button--loading': isSubmitting,
              'submit-button--success': isSuccess
            }"
            :disabled="isSubmitting"
          >
            <Loader2 v-if="isSubmitting" class="button-icon button-icon--spinning" />
            <CheckCircle v-else-if="isSuccess" class="button-icon" />
            <Send v-else class="button-icon" />
            
            <span v-if="isSubmitting">Enviando...</span>
            <span v-else-if="isSuccess">¡Enviado!</span>
            <span v-else>Enviar mensaje</span>
          </button>

          <div class="form-note">
            <Shield class="note-icon" />
            <span>Tu información está segura y no será compartida</span>
          </div>
        </div>
      </form>

      <!-- Mensaje de éxito -->
      <div v-if="isSuccess" class="success-message">
        <div class="success-icon">
          <CheckCircle class="icon" />
        </div>
        <h4 class="success-title">¡Mensaje enviado con éxito!</h4>
        <p class="success-text">
          Gracias por contactarme. Te responderé lo antes posible, 
          generalmente dentro de las próximas 24 horas.
        </p>
        <button @click="resetForm" class="reset-button">
          <RotateCcw class="reset-icon" />
          Enviar otro mensaje
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import {
  Send,
  User,
  Mail,
  Tag,
  DollarSign,
  MessageSquare,
  ChevronDown,
  Loader2,
  CheckCircle,
  Shield,
  RotateCcw
} from 'lucide-vue-next'

const isSubmitting = ref(false)
const isSuccess = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  budget: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const validateForm = () => {
  // Limpiar errores
  Object.keys(errors).forEach(key => {
    errors[key as keyof typeof errors] = ''
  })

  let isValid = true

  // Validar nombre
  if (!form.name.trim()) {
    errors.name = 'El nombre es requerido'
    isValid = false
  } else if (form.name.trim().length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres'
    isValid = false
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = 'El email es requerido'
    isValid = false
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Por favor ingresa un email válido'
    isValid = false
  }

  // Validar asunto
  if (!form.subject) {
    errors.subject = 'Por favor selecciona un asunto'
    isValid = false
  }

  // Validar mensaje
  if (!form.message.trim()) {
    errors.message = 'El mensaje es requerido'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres'
    isValid = false
  } else if (form.message.length > 500) {
    errors.message = 'El mensaje no puede exceder 500 caracteres'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true

  try {
    // Simular envío (aquí integrarías con tu backend o servicio de email)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Formulario enviado:', form)
    
    isSuccess.value = true
  } catch (error) {
    console.error('Error enviando formulario:', error)
    // Aquí puedes mostrar un mensaje de error
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  Object.keys(form).forEach(key => {
    form[key as keyof typeof form] = ''
  })
  Object.keys(errors).forEach(key => {
    errors[key as keyof typeof errors] = ''
  })
  isSuccess.value = false
}
</script>

<style scoped>
.contacto-form {
  animation: slideInRight 0.8s ease-out 0.4s both;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.form-card {
  background: var(--color-bg-card);
  border-radius: var(--border-radius-2xl);
  padding: var(--spacing-2xl);
  border: 1px solid var(--color-border-light);
  box-shadow: var(--shadow-lg);
  height: 100%;
  position: relative;
}

.form-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
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
  margin: 0 auto var(--spacing-md);
  animation: iconPulse 2s ease-in-out infinite;
}

@keyframes iconPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.header-icon .icon {
  width: 24px;
  height: 24px;
  color: var(--color-text-light);
}

.form-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-xs) 0;
  letter-spacing: -0.01em;
}

.form-subtitle {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.5;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  position: relative;
}

.form-label {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
}

.label-icon {
  width: 16px;
  height: 16px;
  color: var(--color-primary);
}

.form-input,
.form-select,
.form-textarea {
  padding: var(--spacing-md);
  border: 2px solid var(--color-border-light);
  border-radius: var(--border-radius-lg);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  background: var(--color-bg-secondary);
  transition: all var(--transition-base);
  font-family: inherit;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
  background: var(--color-bg-card);
}

.form-input--error {
  border-color: var(--color-danger);
  box-shadow: 0 0 0 3px rgba(255, 59, 48, 0.1);
}

.form-select {
  appearance: none;
  cursor: pointer;
  position: relative;
}

.select-arrow {
  position: absolute;
  right: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: var(--color-text-secondary);
  pointer-events: none;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
}

.textarea-counter {
  position: absolute;
  bottom: var(--spacing-xs);
  right: var(--spacing-sm);
  pointer-events: none;
}

.counter-text {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  background: var(--color-bg-card);
  padding: 2px 6px;
  border-radius: var(--border-radius-sm);
}

.form-error {
  font-size: var(--font-size-xs);
  color: var(--color-danger);
  font-weight: 500;
  margin-top: var(--spacing-xs);
}

.form-actions {
  margin-top: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg) var(--spacing-2xl);
  background: var(--gradient-primary);
  color: var(--color-text-light);
  border: none;
  border-radius: var(--border-radius-lg);
  font-weight: 600;
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.submit-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s;
}

.submit-button:hover::before {
  left: 100%;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-button--loading {
  background: var(--color-secondary);
}

.submit-button--success {
  background: var(--color-success);
}

.button-icon {
  width: 18px;
  height: 18px;
}

.button-icon--spinning {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.form-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  text-align: center;
}

.note-icon {
  width: 14px;
  height: 14px;
  color: var(--color-success);
}

.success-message {
  position: absolute;
  inset: 0;
  background: var(--color-bg-card);
  border-radius: var(--border-radius-2xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--spacing-2xl);
  animation: successSlideIn 0.5s ease-out;
}

@keyframes successSlideIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.success-icon {
  width: 80px;
  height: 80px;
  background: var(--color-success);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-lg);
  animation: successIconBounce 0.6s ease-out 0.2s both;
}

@keyframes successIconBounce {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

.success-icon .icon {
  width: 40px;
  height: 40px;
  color: var(--color-text-light);
}

.success-title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-md) 0;
}

.success-text {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 var(--spacing-xl) 0;
}

.reset-button {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border-light);
  border-radius: var(--border-radius-lg);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-base);
}

.reset-button:hover {
  background: var(--color-border-primary);
  color: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-1px);
}

.reset-icon {
  width: 16px;
  height: 16px;
}

@media (max-width: 768px) {
  .form-card {
    padding: var(--spacing-xl);
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .submit-button {
    padding: var(--spacing-md) var(--spacing-xl);
  }
}
</style>