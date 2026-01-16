<script setup lang="ts">
import { useI18n } from "vue-i18n";
import LanguageSwitch from "./LanguageSwitch.vue"; // O botão de idioma vai aqui dentro agora

const { t } = useI18n();

const links = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" }, // Vamos criar essas seções depois
  { key: "nav.projects", href: "#projects" },
];
</script>

<template>
  <div class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-auto">
    <nav
      class="flex items-center gap-1 p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-xl border border-white/20 rounded-full"
    >
      <a
        v-for="link in links"
        :key="link.key"
        :href="link.href"
        class="px-5 py-3 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 transition-all"
      >
        {{ t(link.key) }}
      </a>
      <div class="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2"></div>
      <div class="pr-2">
        <LanguageSwitch />
      </div>
    </nav>
  </div>
</template>
