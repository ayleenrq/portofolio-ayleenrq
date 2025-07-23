<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()

const navItems = [
  { id: 'home', name: 'Home', path: '/' },
  { id: 'about', name: 'About', path: '/about' },
  { id: 'projects', name: 'Projects', path: '/projects' },
]

const activeSection = computed(() => {
  // Remove leading slash and return the route path (e.g., '/about' -> 'about')
  return route.path === '/' ? 'home' : route.path.substring(1)
})
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <RouterLink
            to="/"
            class="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
          >
            ayleen<span class="text-blue-600">rq</span>
          </RouterLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="flex items-center space-x-1">
            <RouterLink
              v-for="item in navItems"
              :key="item.id"
              :to="item.path"
              class="px-4 py-2 text-sm font-medium rounded-md transition-all duration-200"
              :class="{
                'text-blue-600 font-semibold': activeSection === item.id,
                'text-gray-600 hover:text-blue-600 hover:bg-blue-50': activeSection !== item.id,
              }"
            >
              {{ item.name }}
              <span
                v-if="activeSection === item.id"
                class="block h-0.5 bg-blue-600 mt-1 -mx-1"
              ></span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
