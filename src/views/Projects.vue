<script setup>
import Navigation from '../components/layout/Navigation.vue'
import UIUX from '../components/sections/projects/UIUX.vue'
import WebDev from '../components/sections/projects/WebDev.vue'
import Footer from '../components/layout/Footer.vue'
</script>

<template>
  <Navigation />

  <main class="flex flex-col max-w-4xl mx-auto">
    <div class="justify-center items-center flex flex-col space-y-2 mt-16 py-12 text-center border-b border-gray-200">
      <h2 class="text-3xl font-bold ">All My Projects</h2>
      <span class="block h-1 w-24 rounded-full bg-blue-600 mt-1"></span>
    </div>
    <section id="uiux">
      <UIUX name="UIUX" />
    </section>
    <!-- <section id="webdev">
      <WebDev name="WebDev" />
    </section> -->
  </main>

  <Footer />
</template>
