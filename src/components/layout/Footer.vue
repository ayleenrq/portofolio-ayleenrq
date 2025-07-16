<script setup>
import { ref, computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/ayleenrq', icon: 'fab fa-github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/ayleenrq', icon: 'fab fa-linkedin' },
  { name: 'Instagram', url: 'https://instagram.com/ui.ayleen', icon: 'fab fa-instagram' },
]
</script>

<template>
  <footer class="bg-white border-t border-gray-200 mt-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900">About Me</h3>
          <p class="text-gray-600">
            Creating beautiful and functional web experiences with modern technologies.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link.href">
              <a :href="link.href" class="text-gray-600 hover:text-blue-600 transition-colors">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
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

      <div class="mt-12 pt-8 border-t border-gray-200 text-center">
        <p class="text-sm text-gray-500">
          &copy; {{ currentYear }} Ayleen RQ. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
