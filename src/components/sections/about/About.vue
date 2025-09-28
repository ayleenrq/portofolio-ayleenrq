<script setup>
const aboutParagraphs = [
  `An Informatics Engineering student from the Department of Information Technology at Malang State Polytechnic, expected to graduate in 2027. Interested in UI Visual Design and Frontend Development, with an interest in creating visually appealing and user-centered digital interfaces.`,
  `I have completed an intensive bootcamp in UI-UX Research and Design, where I gained hands-on experience in user research, wireframing, prototyping, and usability testing. This experience has strengthened my understanding of user behavior and design thinking processes.`,
  `Motivated, detail-oriented, and always eager to learn, I continuously explore new tools and technologies to improve both my design and coding skills.`,
]
</script>

<style scoped>
@keyframes fadeUp { 
  from { 
    opacity: 0; 
    transform: translateY(12px); 
  } 
  to { 
    opacity: 1; 
    transform: translateY(0); 
  } 
}

.fade-up { 
  animation: fadeUp 0.6s ease forwards; }
</style>

<template>
  <section id="about">
    <div class="border-t border-gray-200 my-16"></div>
    <div class="relative">
      <div class="flex flex-col gap-10">
        <div class="flex flex-col space-y-1">
          <h2 class="text-2xl font-bold">About Me</h2>
          <span class="block h-1 w-15 rounded-full bg-blue-600 mt-1"></span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-1 gap-10 items-center">
          <div class="text-base space-y-6 text-gray-600 leading-7">
            <p v-for="(p, i) in aboutParagraphs" :key="i" class="fade-up" :style="{ animationDelay: `${i * 120}ms` }">
              {{ p }}
            </p>
          </div>

          <!-- <div class="flex justify-center">
            <img
              src="../../../assets/images/ayleen.jpg"
              class="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover ring-4 ring-blue-100 shadow-sm"
              alt="Ayleen Ruhul Qisthy"
            />
          </div> -->
        </div>
      </div>
    </div>
  </section>
  </template>
