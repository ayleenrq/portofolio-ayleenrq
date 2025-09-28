<script setup>
const skillCategories = [
  {
    title: 'Frontend',
    description: 'Building responsive, accessible, and performant interfaces.',
    skills: [
      { name: 'HTML' },
      { name: 'CSS / Tailwind' },
      { name: 'JavaScript' },
      { name: 'Vue' },
    ],
  },
  {
    title: 'Programming Languages',
    description: 'Core languages for application development.',
    skills: [
      { name: 'Java' },
      { name: 'PHP' },
      { name: 'JavaScript' },
      { name: 'SQL' },
    ],
  },
  {
    title: 'Backend Frameworks',
    description: 'Modern frameworks for building robust backends.',
    skills: [
      { name: 'Laravel' },
    ],
  },
  {
    title: 'UI/UX & Visual Design',
    description: 'Translating research into intuitive, aesthetic design.',
    skills: [
      { name: 'Wireframing' },
      { name: 'Prototyping' },
      { name: 'User Research' },
      { name: 'Usability Testing' },
    ],
  },
  {
    title: 'Tools',
    description: 'Day-to-day tools for collaboration and delivery.',
    skills: [
      { name: 'Figma' },
      { name: 'Canva' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Notion' },
    ],
  },
]

</script>

<style scoped>
.card-shadow {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

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
  animation: fadeUp 0.6s ease forwards;
}
</style>

<template>
  <section id="skills">
    <div class="relative py-12">
      <div class="flex flex-col gap-10">
        <div class="flex flex-col space-y-1">
          <h2 class="text-2xl font-bold">Skills</h2>
          <span class="block h-1 w-16 rounded-full bg-blue-600 mt-1"></span>
        </div>

        <div class="px-6">
          <!-- Skill cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div
              v-for="(cat, idx) in skillCategories"
              :key="cat.title"
              class="group rounded-xl border border-gray-100 bg-white p-5 card-shadow hover:-translate-y-1 hover:shadow-xl transition-transform duration-300 fade-up"
              :style="{ animationDelay: `${idx * 120}ms` }"
            >
              <div class="flex items-start justify-between mb-3">
                <div>
                  <h3 class="text-lg font-semibold">{{ cat.title }}</h3>
                  <p class="text-sm text-gray-500">{{ cat.description }}</p>
                </div>
                <span
                  class="ml-3 inline-flex items-center justify-center rounded-full bg-blue-50 text-blue-600 border border-blue-100 h-9 w-9 group-hover:bg-blue-100 transition"
                >
                  <!-- simple icon dot -->
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                    <path d="M12 6.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                  </svg>
                </span>
              </div>

              <div class="mt-3">
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="skill in cat.skills"
                    :key="skill.name"
                    class="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 px-3 py-1 text-sm hover:bg-blue-100 transition"
                  >
                    {{ skill.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
