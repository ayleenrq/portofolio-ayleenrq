<script setup>
import { ref } from 'vue'
import Button from '../ui/Button.vue'

const name = ref('Ayleen Ruhul Qisthy')
const title = ref('UI/UX Designer & Frontend Developer')
</script>

<template>
  <section id="hero">
    <div class="flex flex-col gap-3 items-center justify-center h-screen">
      <h2 class="text-5xl font-bold">Hi, I'm <span class="text-blue-600">{{ name }}</span></h2>
      <p class="text-2xl text-gray-600">{{ title }}</p>
      <Button variant="primary" size="lg"
        class="mt-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
        Download CV
      </Button>
    </div>
  </section>
</template>
