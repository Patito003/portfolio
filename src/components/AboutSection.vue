<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <div
    id="about"
    class="flex flex-col items-center justify-center min-h-screen pt-20 pb-30 relative"
  >
    <div
      class="flex flex-col items-center justify-start min-h-[70vh] w-full text-center relative dark:bg-bg-secondary-dark pt-20"
    >
      <h2
        class="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 tracking-tight pb-10"
      >
        {{ t("about.title") }}
      </h2>
      <p class="text-lg md:text-xl text-white font-semibold mb-2 px-10 text-center">
        {{ t("about.text") }}
      </p>
    </div>
  </div>
</template>
