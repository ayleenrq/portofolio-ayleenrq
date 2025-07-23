<script setup>
import Navigation from '../components/layout/Navigation.vue'
import Hero from '../components/sections/home/Hero.vue'
import Footer from '../components/layout/Footer.vue'
</script>

<template>
  <Navigation />

  <main class="flex flex-col bg-[length:20px_20px] bg-[radial-gradient(#d4d4d4_1px,transparent_1px)]">
    <section id="hero">
      <Hero name="Hero" />
    </section>
  </main>

  <Footer />
</template>
