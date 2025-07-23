<script setup>
import Navigation from '../components/layout/Navigation.vue'
import Hero from '../components/sections/home/Hero.vue'
import About from '../components/sections/about/About.vue'
import Education from '../components/sections/about/Education.vue'
import Experience from '../components/sections/about/Experience.vue'
import Skills from '../components/sections/about/Skills.vue'
import Projects from '../components/sections/projects/UIUX.vue'
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

    <section id="education">
      <Education name="Education" />
    </section>

    <section id="experience">
      <Experience name="Experience" />
    </section>

    <section id="skills">
      <Skills name="Skills" />
    </section>

    <section id="projects">
      <Projects name="Projects" />
    </section>
  </main>

  <Footer />
</template>
