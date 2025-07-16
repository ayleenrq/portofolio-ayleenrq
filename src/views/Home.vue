<script setup>
import Navigation from '../components/layout/Navigation.vue'
import Hero from '../components/sections/Hero.vue'
import About from '../components/sections/About.vue'
import Skills from '../components/sections/Skills.vue'
import Experience from '../components/sections/Experience.vue'
import Projects from '../components/sections/Projects.vue'
import Contact from '../components/sections/Contact.vue'
import Footer from '../components/layout/Footer.vue'
</script>

<template>
  <Navigation />

  <main class="flex flex-col gap-10">
    <section id="hero">
      <Hero name="Hero" />
    </section>

    <section id="about">
      <About name="About" />
    </section>

    <section id="skills">
      <Skills name="Skills" />
    </section>

    <section id="experience">
      <Experience name="Experience" />
    </section>

    <section id="projects">
      <Projects name="Projects" />
    </section>

    <section id="contact">
      <Contact name="Contact" />
    </section>
  </main>

  <Footer />
</template>
