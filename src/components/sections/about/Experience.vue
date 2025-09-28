<script setup>
const experienceItems = [
  {
    title: 'Intensive Bootcamp UI/UX Research and Design',
    org: 'MySkill',
    period: 'July 2025 - September 2025',
    desc:
      'Completed an intensive UI/UX program covering end-to-end product design: user research, problem framing, wireframing, interactive prototyping, and usability testing. Built responsive high-fidelity designs in Figma, presented design decisions, and iterated based on user insights and mentor feedback.',
    icon: 'src/assets/images/experience/MySkill.jpg',
    iconClass: 'w-8 h-8',
  },
  {
    title: 'Internship | Support Staff',
    org: 'Ministry of Communication and Informatics, Malang Regency',
    period: 'June 2022 - November 2022',
    desc:
      'Assisted operational and administrative tasks including document preparation, meeting support, and coordination across units. Supported basic IT/desk requests, organized files and reports, and contributed to improving day-to-day workflows within the department.',
    icon: 'src/assets/images/experience/Ministry of Communication and Informatics.png',
    iconClass: 'w-7 h-7',
  },
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
  <section id="experience">
    <div class="border-t border-gray-200 my-16"></div>
    <div class="relative py-12">
      <div class="flex flex-col gap-10">
        <div class="flex flex-col space-y-1">
          <h2 class="text-2xl font-bold">Experience</h2>
          <span class="block h-1 w-15 rounded-full bg-blue-600 mt-1"></span>
        </div>
        <div class="px-6">
          <div
            v-for="(item, i) in experienceItems"
            :key="item.title"
            class="pb-10 border-l border-gray-200 fade-up"
            :style="{ animationDelay: `${i * 120}ms` }"
          >
            <div class="relative flex flex-col justify-start pl-12">
              <div
                class="absolute top-0 left-0 z-40 rounded-full flex items-center justify-center -translate-x-1/2 bg-white border border-gray-200 w-14 h-14"
              >
                <img :src="item.icon" alt="Experience" :class="item.iconClass" />
              </div>
              <div 
                class="z-50 flex flex-col justify-start rounded-lg bg-gray-50 border border-gray-100 p-4 hover:bg-blue-50 hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 fade-up"
              >
                <h3 class="text-lg font-semibold">{{ item.title }}</h3>
                <p class="font-medium text-gray-800 my-1">{{ item.org }}</p>
                <p class="text-gray-400">{{ item.period }}</p>
                <p class="text-gray-600 mt-4">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
