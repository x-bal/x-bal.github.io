<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value

  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  // Cek apakah ada tema yang tersimpan, atau ikuti tema sistem OS
  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <button
    @click="toggleTheme"
    class="fixed bottom-6 right-6 p-3.5 rounded-full z-[100] backdrop-blur-md transition-all duration-500 hover:scale-110 active:scale-95 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border group"
    :class="[
      isDark
        ? 'bg-slate-800/80 border-slate-700 hover:shadow-blue-900/20'
        : 'bg-white/80 border-slate-200 hover:shadow-chelsea/10',
    ]"
    aria-label="Toggle Dark Mode"
  >
    <div class="relative w-6 h-6 flex items-center justify-center">
      <transition name="fade-spin">
        <Sun
          v-if="!isDark"
          class="absolute text-amber-500 group-hover:rotate-45 transition-transform duration-500"
          :size="22"
        />
        <Moon
          v-else
          class="absolute text-blue-400 group-hover:-rotate-12 transition-transform duration-500"
          :size="22"
        />
      </transition>
    </div>
  </button>
</template>

<style scoped>
/* Animasi pergantian ikon yang mulus */
.fade-spin-enter-active,
.fade-spin-leave-active {
  transition: all 0.4s ease;
}
.fade-spin-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}
.fade-spin-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}
</style>
