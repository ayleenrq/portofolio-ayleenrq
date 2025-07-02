<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const activeSection = ref('home');

const navItems = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'experience', name: 'Experience' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' },
];

const handleScroll = () => {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
      current = section.getAttribute('id');
    }
  });
  
  activeSection.value = current;
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="#home" class="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
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
                'text-gray-600 hover:text-blue-600 hover:bg-blue-50': activeSection !== item.id
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

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              :class="{ 'hidden': isMenuOpen, 'block': !isMenuOpen }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              class="h-6 w-6"
              :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      class="md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white"
      :class="{ 'max-h-0': !isMenuOpen, 'max-h-96': isMenuOpen }"
    >
      <div class="pt-2 pb-3 space-y-1 px-4">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          @click="() => { scrollToSection(item.id); isMenuOpen = false; }"
          class="block px-3 py-2 rounded-md text-base font-medium"
          :class="{
            'text-blue-600 bg-blue-50': activeSection === item.id,
            'text-gray-600 hover:text-blue-600 hover:bg-blue-50': activeSection !== item.id
          }"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>