<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('home')

const navItems = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'projects', name: 'Projects' },
]

const handleScroll = () => {
  const sections = document.querySelectorAll('section[id]')
  let current = ''

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
      current = section.getAttribute('id')
    }
  })

  activeSection.value = current
}

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth',
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200/50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <a
            href="#home"
            class="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
          >
            ayleen<span class="text-blue-600">rq</span>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="flex items-center space-x-1">
            <a
              v-for="item in navItems"
              :key="item.id"
              :href="`#${item.id}`"
              @click.prevent="scrollToSection(item.id)"
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
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
