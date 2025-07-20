<script setup>
import { ref, onMounted } from 'vue'
import Button from '../ui/Button.vue'

const name = ref('Ayleen Ruhul Qisthy')
const title = ref('UI Designer & Frontend Developer')
const isVisible = ref(false)

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/ayleenrq', icon: 'fab fa-github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/ayleenrq', icon: 'fab fa-linkedin' },
  { name: 'Instagram', url: 'https://instagram.com/ui.ayleen', icon: 'fab fa-instagram' },
]

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 500)
})
</script>

<style scoped>
.fade-in {
  opacity: 0;
  animation: fadeIn 2s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<template>
  <section id="hero">
    <div class="flex flex-col gap-4 items-center justify-center h-200">
      <h2 :class="['text-5xl font-bold fade-in', { 'opacity-100': isVisible }]">
        Hi, I'm <span class="text-blue-600">{{ name }}</span>
      </h2>
      <p class="text-3xl font-semibold text-black/80">{{ title }}</p>
      <p class="mt-6 text-2xl text-gray-600 max-w-3xl text-center">
        Undergraduate Informatics Engineering Student, interested in UI design and frontend development.
      </p>
      <div class="flex gap-8 mt-6 items-center">
        <Button variant="primary" size="lg"
          class="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
          Download CV
        </Button>
        <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank"
          class="text-gray-500 hover:text-blue-600 transition-colors">
          <i :class="link.icon" class="h-6 w-6"></i>
        </a>
      </div>
    </div>
  </section>
</template>
