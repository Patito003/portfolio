<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const toggleLanguage = () => {
  locale.value = locale.value === "pt" ? "en" : "pt";
};
</script>

<template>
  <button
    @click="toggleLanguage"
    class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-emerald-950/60 transition-colors text-sm font-bold text-gray-700 dark:text-white hover:text-primary"
    :title="locale === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'"
  >
    {{ locale === "pt" ? "BR" : "EN" }}
  </button>
</template>
