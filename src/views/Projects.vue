<script setup>
import Navigation from '../components/layout/Navigation.vue'
import UIUX from '../components/sections/projects/UIUX.vue'
import WebDev from '../components/sections/projects/WebDev.vue'
import Footer from '../components/layout/Footer.vue'
</script>

<template>
  <Navigation />

  <main class="flex flex-col max-w-4xl mx-auto">
    <h2 class="text-2xl font-bold space-y-1 mt-16 py-12 text-center">Projects</h2>
    <section id="uiux">
      <UIUX name="UIUX" />
    </section>
    <section id="webdev">
      <WebDev name="WebDev" />
    </section>
  </main>

  <Footer />
</template>
