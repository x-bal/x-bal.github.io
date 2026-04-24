<script setup lang="ts">
interface Props {
  title?: string;
  className?: string;
}
defineProps<Props>();
</script>

<template>
  <div :class="['bento-card', className]">
    <h3 v-if="title" class="text-[10px] font-bold text-slate-400 mb-4 uppercase tracking-[0.2em]">
      {{ title }}
    </h3>
    <slot />
  </div>
</template>