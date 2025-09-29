<template>
  <section id="uiux" class="max-w-6xl mx-auto px-4 py-12">
    <header class="text-center mb-6">
      <h2 class="text-2xl font-bold text-blue-900">UI/UX Projects</h2>
      <p class="text-gray-500 mt-1">Kumpulan desain dan prototipe yang pernah saya kerjakan</p>
    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
      <button
        v-for="(img, idx) in images"
        :key="img.src"
        class="group relative flex flex-col border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
        role="listitem"
        @click="open(idx)"
        :aria-label="`Buka gambar ${img.alt}`"
      >
        <img :src="img.src" :alt="img.alt" loading="lazy" class="w-full h-56 object-cover" />
        <span class="px-4 py-3 text-sm font-medium text-gray-900 text-left">{{ img.alt }}</span>
      </button>
    </div>

    <transition
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="lightbox.open"
        class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
        @click.self="close"
        :aria-hidden="!lightbox.open"
      >
        <button class="absolute top-4 right-4 text-gray-200 hover:text-white text-3xl leading-none" @click="close" aria-label="Tutup">×</button>
        <button class="absolute left-6 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 text-white w-12 h-12 rounded-full grid place-items-center text-3xl" @click.stop="prev" aria-label="Sebelumnya">‹</button>
        <figure class="mx-6 text-center">
          <img :src="currentImage?.src" :alt="currentImage?.alt" class="max-w-[90vw] max-h-[80vh] w-auto h-auto rounded-lg shadow-2xl" />
          <figcaption class="mt-3 text-gray-200 text-sm">{{ currentImage?.alt }}</figcaption>
        </figure>
        <button class="absolute right-6 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 text-white w-12 h-12 rounded-full grid place-items-center text-3xl" @click.stop="next" aria-label="Berikutnya">›</button>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, reactive } from 'vue'

const modules = import.meta.glob('/src/assets/images/projects/uiux/*.{png,jpg,jpeg,webp,gif}', {
  eager: true,
  as: 'url',
})

function fileNameToAlt(path) {
  const name = path.split('/').pop() || ''
  return name.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, '')
}

const images = Object.keys(modules)
  .sort() // stable order
  .map((k) => ({ src: modules[k], alt: fileNameToAlt(k) }))

const lightbox = reactive({ open: false, index: 0 })

const currentImage = computed(() => images[lightbox.index] ?? null)

function open(i) {
  if (!images.length) return
  lightbox.index = i
  lightbox.open = true
}

function close() {
  lightbox.open = false
}

function next() {
  if (!images.length) return
  lightbox.index = (lightbox.index + 1) % images.length
}

function prev() {
  if (!images.length) return
  lightbox.index = (lightbox.index - 1 + images.length) % images.length
}

function onKey(e) {
  if (!lightbox.open) return
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowRight') next()
  else if (e.key === 'ArrowLeft') prev()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>
