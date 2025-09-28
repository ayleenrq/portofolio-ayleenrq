<script setup>
import WRI from '@/assets/images/experience/WRI.jpeg'
const organizationItems = [
  {
    role: 'Secretary',
    org: 'Workshop & Riset Informatika',
    period: 'January 2025 - January 2026',
    desc:
      'Responsible for managing organizational administration, including document archiving, meeting minutes preparation, and correspondence. Coordinating schedules, facilitating inter-divisional communication, and documenting all organizational activities. Also responsible for membership data management and supporting the smooth execution of events.',
    icon: WRI,
    iconClass: 'w-8 h-8',
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
  <section id="organization">
    <div class="border-t border-gray-200 my-16"></div>
    <div class="relative py-12">
      <div class="flex flex-col gap-10">
        <div class="flex flex-col space-y-1">
          <h2 class="text-2xl font-bold">Organization</h2>
          <span class="block h-1 w-16 rounded-full bg-blue-600 mt-1"></span>
        </div>
        <div class="px-6">
          <div
            v-for="(item, idx) in organizationItems"
            :key="item.role + item.org"
            class="pb-10 border-l border-gray-200 fade-up"
            :style="{ animationDelay: `${idx * 120}ms` }"
          >
            <div class="relative flex flex-col justify-start pl-12 ">
              <div
                class="absolute top-0 left-0 z-40 rounded-full flex items-center justify-center -translate-x-1/2 bg-white border border-gray-200 w-14 h-14"
              >
                <img :src="item.icon" alt="Organization" :class="item.iconClass" />
              </div>
              <div 
                class="z-50 flex flex-col justify-start rounded-lg bg-gray-50 border border-gray-100 p-4 hover:bg-blue-50 hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 fade-up"
              >
                <h3 class="text-lg font-semibold">{{ item.role }}</h3>
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
