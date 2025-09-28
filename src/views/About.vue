<script setup>
import Navigation from '../components/layout/Navigation.vue'
import About from '../components/sections/about/About.vue'
import Education from '../components/sections/about/Education.vue'
import Experience from '../components/sections/about/Experience.vue'
import Organization from '../components/sections/about/Organization.vue'
import Skills from '../components/sections/about/Skills.vue'
import Footer from '../components/layout/Footer.vue'
</script>

<template>
  <Navigation />

  <main class="bg-[length:20px_20px] bg-[radial-gradient(#eeeeee_1px,transparent_1px)]">
    <div class="flex flex-col max-w-4xl mx-auto">
      <section id="about">
        <About name="About" />
      </section>

      <section id="education">
        <Education name="Education" />
      </section>

      <section id="experience">
        <Experience name="Experience" />
      </section>

      <section id="organization">
        <Organization name="Organization" />
      </section>

      <section id="skills">
        <Skills name="Skills" />
      </section>
    </div>
  </main>

  <Footer />
</template>
