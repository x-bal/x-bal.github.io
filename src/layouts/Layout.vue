<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Simulasi Network Ping yang berubah-ubah (untuk efek visual)
const networkPing = ref(24)
let pingInterval: ReturnType<typeof setInterval>

onMounted(() => {
  pingInterval = setInterval(() => {
    // Random ping antara 18ms sampai 45ms
    networkPing.value = Math.floor(Math.random() * (45 - 18 + 1)) + 18
  }, 2000)
})

onUnmounted(() => clearInterval(pingInterval))
</script>

<template>
  <div
    class="min-h-screen bg-slate-950 font-mono text-slate-200 selection:bg-chelsea selection:text-white"
  >
    <header
      class="sticky top-0 z-50 flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-6 py-3 backdrop-blur-md"
    >
      <div class="flex items-center gap-4">
        <div class="text-chelsea font-black tracking-tighter text-xl">SYS_CTRL</div>
        <div class="hidden md:flex items-center gap-2 text-xs text-slate-400">
          <span
            class="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30"
          >
            SYSTEM ONLINE
          </span>
        </div>
      </div>

      <div class="flex items-center gap-6 text-xs text-slate-400">
        <div class="hidden sm:block"><span class="text-slate-500">UPTIME:</span> 4Y_2M</div>
        <div><span class="text-slate-500">NET:</span> {{ networkPing }}ms</div>
        <div class="flex items-center gap-2">
          <span class="text-slate-500">USR:</span> ROOT_ADMIN
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-7xl p-6">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <slot></slot>
      </div>
    </main>
  </div>
</template>
