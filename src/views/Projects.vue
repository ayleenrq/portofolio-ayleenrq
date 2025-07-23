<script setup>
import Navigation from '../components/layout/Navigation.vue'
import UIUX from '../components/sections/projects/UIUX.vue'
import WebDev from '../components/sections/projects/WebDev.vue'
import Footer from '../components/layout/Footer.vue'
</script>

<template>
  <Navigation />

  <main class="flex flex-col gap-10">
    <section id="projects">
      <UIUX name="UIUX" />
      <WebDev name="WebDev" />
    </section>
  </main>

  <Footer />
</template>
