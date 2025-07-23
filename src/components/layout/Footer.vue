<script setup>
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/ayleenrq', icon: 'fab fa-github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/ayleenrq', icon: 'fab fa-linkedin' },
  { name: 'Instagram', url: 'https://instagram.com/ui.ayleen', icon: 'fab fa-instagram' },
]
</script>

<template>
  <footer class="bg-white border-t border-gray-200 w-screen">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
      <p class="flex items-center justify-center text-gray-600">
        Thanks for visiting my portofolio website.
      </p>

      <div
        class="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 text-center"
      >
        <p class="text-sm text-gray-500">Ayleen Ruhul Qisthy</p>
        <div class="flex space-x-4">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-500 hover:text-blue-600 transition-colors"
          >
            <span class="sr-only">{{ social.name }}</span>
            <i :class="social.icon" class="h-6 w-6"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
