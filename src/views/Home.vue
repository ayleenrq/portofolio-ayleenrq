<script setup>
import Navigation from '../components/layout/Navigation.vue'
import Hero from '../components/sections/home/Hero.vue'
import Footer from '../components/layout/Footer.vue'
</script>

<template>
  <Navigation />

  <main class="flex flex-col">
    <section id="hero">
      <Hero name="Hero" />
    </section>
  </main>

  <Footer />
</template>
