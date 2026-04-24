<script setup lang="ts">
import BentoCard from '../components/BentoCard.vue'
import ThemeToggle from '../components/ThemeToggle.vue'
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Cpu,
  Database,
  Droplets,
  Server,
  Gem,
  Layout,
  Ticket,
  FileText,
} from 'lucide-vue-next'
import { Icon } from '@iconify/vue'
import ImageUrl from '@/assets/profile.jpeg'

const techs = [
  { name: 'Laravel', icon: 'logos:laravel' },
  { name: 'Vue.js', icon: 'logos:vue' },
  { name: 'Go', icon: 'logos:go' },
  { name: 'Docker', icon: 'logos:docker-icon' },
  { name: 'Python', icon: 'logos:python' },
  { name: 'PostgreSQL', icon: 'logos:postgresql' },
]
</script>

<template>
  <main
    class="min-h-screen py-16 px-4 md:px-8 bg-slate-50 dark:bg-[#020617] relative overflow-hidden text-slate-900 dark:text-slate-100"
  >
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 bg-chelsea/30 blur-[120px] rounded-full pointer-events-none animate-breathe z-0"
    ></div>

    <div
      class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-min md:auto-rows-[170px] relative z-10"
    >
      <BentoCard
        class="md:col-span-3 md:row-span-2 flex flex-col justify-center relative overflow-hidden group animate-fade-up"
        style="animation-delay: 100ms"
      >
        <div
          class="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-50 dark:from-blue-900/10 to-transparent opacity-50"
        ></div>
        <div class="flex flex-col md:flex-row gap-8 items-center md:items-start z-10">
          <div
            class="w-24 h-24 bg-gradient-to-br from-chelsea to-blue-600 text-white rounded-[2rem] flex items-center justify-center shadow-xl shadow-chelsea/20 shrink-0 group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-500 overflow-hidden"
          >
            <img
              :src="ImageUrl"
              alt="Foto Profil Muhammad Iqbal"
              class="w-full h-full object-cover rounded-[2rem]"
            />
          </div>
          <div class="space-y-3 text-center md:text-left flex-1">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold tracking-wide mb-2"
            >
              <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for Work
            </div>
            <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">
              Muhammad
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-chelsea to-blue-500"
                >Iqbal</span
              >
            </h1>
            <p
              class="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl leading-relaxed"
            >
              Software Architect & Project Manager. Ahli membangun sistem backend yang scalable
              dengan Laravel & Go, serta integrasi IoT. Memastikan eksekusi kode bersih dan sprint
              Agile berjalan mulus.
            </p>
          </div>
        </div>
      </BentoCard>

      <BentoCard
        title="Core Stack"
        class="md:col-span-1 md:row-span-2 flex flex-col animate-fade-up"
        style="animation-delay: 200ms"
      >
        <div class="grid grid-cols-2 gap-3 mt-auto mb-auto">
          <div
            v-for="tech in techs"
            :key="tech.name"
            class="flex flex-col items-center justify-center gap-2 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl hover:bg-white dark:hover:bg-slate-700 hover:shadow-md transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-600 cursor-default"
          >
            <Icon :icon="tech.icon" class="w-7 h-7" />
            <span class="text-[10px] font-bold text-slate-500">{{ tech.name }}</span>
          </div>
        </div>
      </BentoCard>

      <div
        class="bento-card md:col-span-2 md:row-span-2 !bg-[#0B1120] !border-slate-800 text-white flex flex-col relative group overflow-hidden animate-fade-up"
        style="animation-delay: 300ms"
      >
        <div
          class="absolute inset-0 bg-gradient-to-t from-[#050812] via-[#0B1120]/80 to-transparent z-0"
        ></div>
        <Cpu
          class="absolute -right-8 -bottom-8 text-white/[0.03] group-hover:text-white/[0.08] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 z-0"
          :size="250"
        />

        <div class="flex-1 flex flex-col z-10 p-2 h-full">
          <div class="flex justify-between items-start mb-6">
            <div class="flex gap-2">
              <span
                class="text-[10px] bg-white/10 text-blue-200 px-3 py-1.5 rounded-lg uppercase font-bold tracking-widest border border-white/5 backdrop-blur-sm"
                >SaaS</span
              >
              <span
                class="text-[10px] bg-emerald-500/20 text-emerald-300 px-3 py-1.5 rounded-lg uppercase font-bold tracking-widest border border-white/5 backdrop-blur-sm"
                >IoT</span
              >
            </div>
            <a
              href="https://gymmaster.id"
              target="_blank"
              rel="noopener noreferrer"
              class="relative z-50 p-2.5 bg-white/5 rounded-full hover:bg-white/20 transition-colors border border-white/10"
              @click.stop
            >
              <ExternalLink class="text-slate-300 pointer-events-none" :size="18" />
            </a>
          </div>

          <div class="mt-auto">
            <h3
              class="text-3xl font-extrabold mb-3 tracking-tight group-hover:text-blue-400 transition-colors"
            >
              Gym Master ID
            </h3>
            <p class="text-slate-400 text-[14px] leading-relaxed mb-6 line-clamp-3">
              Sistem manajemen fitness terintegrasi. Dilengkapi fitur pelacakan keanggotaan dan
              akses kontrol pintu berbasis RFID secara real-time.
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                class="text-[11px] font-semibold px-3 py-1.5 bg-slate-800/80 rounded-md text-slate-300 border border-slate-700/50 shadow-sm"
                >Go (Fiber)</span
              >
              <span
                class="text-[11px] font-semibold px-3 py-1.5 bg-slate-800/80 rounded-md text-slate-300 border border-slate-700/50 shadow-sm"
                >Vue.js</span
              >
              <span
                class="text-[11px] font-semibold px-3 py-1.5 bg-slate-800/80 rounded-md text-slate-300 border border-slate-700/50 shadow-sm"
                >Hardware Int.</span
              >
            </div>
          </div>
        </div>
      </div>

      <div
        class="bento-card md:col-span-2 md:row-span-2 !bg-[#064E3B] !border-emerald-900 text-white flex flex-col relative group overflow-hidden animate-fade-up"
        style="animation-delay: 400ms"
      >
        <div
          class="absolute inset-0 bg-gradient-to-t from-[#022C22] via-[#064E3B]/80 to-transparent z-0"
        ></div>
        <Droplets
          class="absolute -right-8 -bottom-8 text-white/[0.04] group-hover:text-white/[0.1] group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 z-0"
          :size="250"
        />

        <div class="flex-1 flex flex-col z-10 p-2 h-full">
          <div class="flex justify-between items-start mb-6">
            <div class="flex gap-2">
              <span
                class="text-[10px] bg-white/10 text-emerald-200 px-3 py-1.5 rounded-lg uppercase font-bold tracking-widest border border-white/5 backdrop-blur-sm"
                >Dashboard</span
              >
              <span
                class="text-[10px] bg-emerald-500/30 text-emerald-100 px-3 py-1.5 rounded-lg uppercase font-bold tracking-widest border border-white/5 backdrop-blur-sm"
                >IoT Control</span
              >
            </div>
          </div>

          <div class="mt-auto">
            <h3
              class="text-3xl font-extrabold mb-3 tracking-tight group-hover:text-emerald-300 transition-colors"
            >
              IPAL System
            </h3>
            <p class="text-emerald-100/70 text-[14px] leading-relaxed mb-6 line-clamp-3">
              Dashboard pintar untuk Instalasi Pengolahan Air Limbah. Memungkinkan monitoring,
              controlling, dan recording data secara real-time dari sensor pH meter.
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                class="text-[11px] font-semibold px-3 py-1.5 bg-emerald-900/80 rounded-md text-emerald-200 border border-emerald-700/50 shadow-sm"
                >Laravel</span
              >
              <span
                class="text-[11px] font-semibold px-3 py-1.5 bg-emerald-900/80 rounded-md text-emerald-200 border border-emerald-700/50 shadow-sm"
                >Vue.js</span
              >
              <span
                class="text-[11px] font-semibold px-3 py-1.5 bg-emerald-900/80 rounded-md text-emerald-200 border border-emerald-700/50 shadow-sm"
                >Data Logging</span
              >
              <span
                class="text-[11px] font-semibold px-3 py-1.5 bg-emerald-900/80 rounded-md text-emerald-200 border border-emerald-700/50 shadow-sm"
                >Sensors</span
              >
            </div>
          </div>
        </div>
      </div>

      <BentoCard
        class="md:col-span-2 md:row-span-1 group flex flex-col justify-between relative overflow-hidden animate-fade-up"
        style="animation-delay: 500ms"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/50 dark:to-blue-900/10 z-0"
        ></div>
        <div class="relative z-10 flex justify-between items-start">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <div class="w-1.5 h-1.5 rounded-full bg-chelsea"></div>
              <span class="text-[10px] text-chelsea font-bold tracking-widest uppercase block"
                >Hospital System</span
              >
            </div>
            <h3
              class="text-xl md:text-2xl font-bold tracking-tight group-hover:text-chelsea transition-colors leading-none"
            >
              SmileRS Linen
            </h3>
          </div>
        </div>
        <div
          class="relative z-10 mt-auto flex flex-col sm:flex-row sm:items-end justify-between gap-3"
        >
          <p class="text-slate-500 text-[13px] leading-snug max-w-[260px] line-clamp-2">
            Manajemen logistik dan inventaris linen sentral rumah sakit untuk pelacakan distribusi.
          </p>
          <div class="flex flex-wrap gap-1.5 shrink-0">
            <span
              class="text-[10px] font-semibold px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-md shadow-sm"
              >Laravel</span
            >
            <span
              class="text-[10px] font-semibold px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-md shadow-sm"
              >MySQL</span
            >
          </div>
        </div>
      </BentoCard>

      <BentoCard
        class="md:col-span-2 md:row-span-1 group flex flex-col justify-between relative overflow-hidden animate-fade-up"
        style="animation-delay: 600ms"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-100/50 dark:to-slate-800/30 z-0"
        ></div>
        <div class="relative z-10 flex justify-between items-start">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <Server class="w-3 h-3 text-slate-500" />
              <span class="text-[10px] text-slate-500 font-bold tracking-widest uppercase block"
                >Backend Architecture</span
              >
            </div>
            <h3
              class="text-xl md:text-2xl font-bold tracking-tight group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors leading-none"
            >
              Digdaya.co API
            </h3>
          </div>
        </div>
        <div
          class="relative z-10 mt-auto flex flex-col sm:flex-row sm:items-end justify-between gap-3"
        >
          <p class="text-slate-500 text-[13px] leading-snug max-w-[260px] line-clamp-2">
            Infrastruktur backend dan penyediaan API tangguh untuk core system landing page
            korporat.
          </p>
          <div class="flex flex-wrap gap-1.5 shrink-0">
            <span
              class="text-[10px] font-semibold px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-md shadow-sm"
              >REST API</span
            >
            <span
              class="text-[10px] font-semibold px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-md shadow-sm"
              >Database</span
            >
          </div>
        </div>
      </BentoCard>

      <BentoCard
        class="md:col-span-1 md:row-span-1 flex flex-col justify-between group animate-fade-up"
        style="animation-delay: 700ms"
      >
        <div class="flex justify-between items-start">
          <div
            class="w-10 h-10 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
          >
            <Gem :size="20" />
          </div>
          <a
            href="https://scentplusclub.com"
            target="_blank"
            rel="noopener noreferrer"
            class="relative z-50 p-1.5 bg-slate-50 dark:bg-slate-800 rounded-full hover:bg-amber-50 dark:hover:bg-amber-900/50 transition-colors"
            @click.stop
          >
            <ExternalLink
              class="text-slate-400 hover:text-amber-600 pointer-events-none"
              :size="14"
            />
          </a>
        </div>
        <div class="mt-2">
          <h3 class="font-bold text-[15px] leading-tight mb-1">Scentplus Club</h3>
          <p class="text-slate-500 text-[11px] leading-relaxed line-clamp-2">
            Platform keanggotaan eksklusif & digital id.
          </p>
        </div>
      </BentoCard>

      <BentoCard
        class="md:col-span-1 md:row-span-1 flex flex-col justify-between group animate-fade-up"
        style="animation-delay: 800ms"
      >
        <div class="flex justify-between items-start">
          <div
            class="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
          >
            <Layout :size="20" />
          </div>
          <a
            href="https://tazaka.co.id"
            target="_blank"
            rel="noopener noreferrer"
            class="relative z-50 p-1.5 bg-slate-50 dark:bg-slate-800 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-colors"
            @click.stop
          >
            <ExternalLink
              class="text-slate-400 hover:text-indigo-600 pointer-events-none"
              :size="14"
            />
          </a>
        </div>
        <div class="mt-2">
          <h3 class="font-bold text-[15px] leading-tight mb-1">Tazaka Profil</h3>
          <p class="text-slate-500 text-[11px] leading-relaxed line-clamp-2">
            Company profile & landing page interaktif modern.
          </p>
        </div>
      </BentoCard>

      <BentoCard
        class="md:col-span-1 md:row-span-1 flex flex-col justify-between group animate-fade-up"
        style="animation-delay: 900ms"
      >
        <div
          class="w-10 h-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
        >
          <Database :size="20" />
        </div>
        <div class="mt-2">
          <h3 class="font-bold text-[15px] leading-tight mb-1">Manless Parking</h3>
          <p class="text-slate-500 text-[11px] leading-relaxed line-clamp-2">
            Sistem parkir otomatis integrasi E-money & Raspi.
          </p>
        </div>
      </BentoCard>

      <BentoCard
        class="md:col-span-1 md:row-span-1 flex flex-col justify-between group animate-fade-up"
        style="animation-delay: 1000ms"
      >
        <div
          class="w-10 h-10 bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
        >
          <Ticket :size="20" />
        </div>
        <div class="mt-2">
          <h3 class="font-bold text-[15px] leading-tight mb-1">Ticketing Gate</h3>
          <p class="text-slate-500 text-[11px] leading-relaxed line-clamp-2">
            Sistem gerbang tiket elektronik & validasi akses.
          </p>
        </div>
      </BentoCard>

      <div
        class="bento-card md:col-span-3 md:row-span-1 !bg-chelsea !border-chelsea text-white flex flex-col md:flex-row items-center justify-between px-8 relative overflow-hidden group animate-fade-up"
        style="animation-delay: 1100ms"
      >
        <div
          class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"
        ></div>
        <div class="z-10 text-center md:text-left space-y-1">
          <h3 class="text-xl font-bold">Mari diskusikan proyek Anda</h3>
          <p class="text-blue-200 text-sm">Terbuka untuk arsitektur sistem atau manajemen tim.</p>
        </div>
        <div class="z-10 flex gap-3 mt-4 md:mt-0">
          <a
            href="/CV_Muhammad_Iqbal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-5 py-2.5 bg-white text-chelsea hover:bg-blue-50 rounded-xl transition-all hover:-translate-y-1 relative z-50 font-bold shadow-[0_4px_14px_0_rgba(255,255,255,0.2)]"
          >
            <FileText :size="18" stroke-width="2.5" />
            <span>Lihat CV</span>
          </a>
          <a
            href="mailto:mxbal026@gmail.com"
            target="_blank"
            class="p-3 bg-white/10 hover:bg-white/20 rounded-xl border border-white/10 transition-all hover:-translate-y-1 relative z-50"
          >
            <Mail :size="20" />
          </a>
          <a
            href="https://www.linkedin.com/in/mxbal/"
            target="_blank"
            class="p-3 bg-white/10 hover:bg-white/20 rounded-xl border border-white/10 transition-all hover:-translate-y-1 relative z-50"
          >
            <Linkedin :size="20" />
          </a>
          <a
            href="http://github.com/x-bal"
            target="_blank"
            class="p-3 bg-white/10 hover:bg-white/20 rounded-xl border border-white/10 transition-all hover:-translate-y-1 relative z-50"
          >
            <Github :size="20" />
          </a>
        </div>
      </div>

      <BentoCard
        class="md:col-span-1 md:row-span-1 flex flex-col items-center justify-center text-center group animate-fade-up"
        style="animation-delay: 1200ms"
      >
        <div class="relative mb-2">
          <MapPin
            class="text-chelsea relative z-10 group-hover:-translate-y-1 transition-transform"
            :size="24"
          />
          <div class="absolute inset-0 bg-chelsea/20 blur-md rounded-full"></div>
        </div>
        <p class="text-[9px] font-bold uppercase text-slate-400 tracking-widest mb-1">
          Base Location
        </p>
        <p class="font-bold text-sm">Bandung, ID</p>
      </BentoCard>
    </div>
  </main>

  <ThemeToggle />
</template>

<style scoped>
/* Animasi untuk memunculkan kartu dari bawah */
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-fade-up {
  /* Pastikan elemen transparan sebelum animasi dimulai */
  opacity: 0;
  /* Menggunakan cubic-bezier agar pergerakannya smooth (cepat di awal, lambat di akhir) */
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Animasi untuk background blur agar bernapas (membesar & mengecil perlahan) */
@keyframes breathe {
  0%,
  100% {
    transform: translate(-50%, 0) scale(1);
    opacity: 0.2;
  }
  50% {
    transform: translate(-50%, -20px) scale(1.1);
    opacity: 0.3;
  }
}

.animate-breathe {
  animation: breathe 8s ease-in-out infinite;
}
</style>
