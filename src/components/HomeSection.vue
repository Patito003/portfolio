<script setup lang="ts">
import { useI18n } from "vue-i18n";
import fotoPerfil from "@/assets/Paulo-Vitor.jpeg";

const { t } = useI18n();
</script>

<template>
  <div
    id="home"
    class="flex flex-col items-center justify-between min-h-screen pt-20 pb-30 px-4 text-center relative"
  >
    <div class="pt-10">
      <p class="text-lg md:text-xl text-primary font-semibold mb-2">
        {{ t("home.greeting") }}
      </p>
      <h1
        class="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6 tracking-tight"
      >
        {{ t("home.role") }}
      </h1>
    </div>
    <img
      :src="fotoPerfil"
      alt="Paulo Vitor"
      class="w-32 h-32 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20 shadow-xl"
    />
  </div>
</template>
