<script setup>
import { ref, onMounted } from 'vue'
import Button from '../ui/Button.vue'

const name = ref('Ayleen Ruhul Qisthy')
const title = ref('UI/UX Designer & Frontend Developer')
const isVisible = ref(false)

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
    <div class="flex flex-col gap-5 items-center justify-center h-200">
      <h2 :class="['text-5xl font-bold fade-in', { 'opacity-100': isVisible }]">
        Hi, I'm <span class="text-blue-600">{{ name }}</span>
      </h2>
      <p class="text-xl text-gray-600">{{ title }}</p>
      <Button variant="primary" size="lg"
        class="mt-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
        Download CV
      </Button>
    </div>
  </section>
</template>
