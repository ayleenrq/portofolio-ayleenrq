<script setup>
const educationItems = [
  {
    title: 'Bachelor of Applied Science - BASc, Information Technology',
    org: 'State Polytechnic of Malang',
    period: '2023 - 2027',
    desc:
      'Coursework and projects in software engineering, databases, networking, and web development. Built several team-based applications emphasizing usability, performance, and clean code practices.',
    icon: 'src/assets/images/education/State Polytechnic of Malang.png',
    iconClass: 'w-8 h-8',
  },
  {
    title: 'Computer and Network Engineering',
    org: 'Vocational High School Telkom Sandhy Putra Malang',
    period: '2020 - 2023',
    desc:
      'Focused on computer systems and network fundamentals: LAN/WAN configuration, routing, device setup, troubleshooting, and basic programming. Hands-on practice with infrastructure maintenance and documentation.',
    icon: 'src/assets/images/education/Vocational High School Telkom Sandhy Putra Malang.png',
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
  <section id="education" >
    <div class="border-t border-gray-200 my-16"></div>
    <div class="relative py-12">
      <div class="flex flex-col gap-10">
        <div class="flex flex-col space-y-1">
          <h2 class="text-2xl font-bold">Education</h2>
          <span class="block h-1 w-15 rounded-full bg-blue-600 mt-1"></span>
        </div>
        <div class="px-6">
          <div
            v-for="(item, i) in educationItems"
            :key="item.title"
            class="pb-10 border-l border-gray-200 fade-up"
            :style="{ animationDelay: `${i * 120}ms` }"
          >
            <div class="relative flex flex-col justify-start pl-12">
              <div
                class="absolute top-0 left-0 z-40 rounded-full flex items-center justify-center -translate-x-1/2 bg-white border border-gray-200 w-14 h-14"
              >
                <img :src="item.icon" alt="Education" :class="item.iconClass" />
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
