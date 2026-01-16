<script setup lang="ts">
import { useI18n } from "vue-i18n";

// Importamos a função de tradução
const { t } = useI18n();

// Função simples para rolar até os projetos (vamos usar depois)
const scrollToProjects = () => {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <section
    id="home"
    class="flex flex-col items-center justify-center min-h-screen pt-20 pb-40 px-4 bg-white dark:bg-gray-900 text-center relative"
  >
    <div class="max-w-3xl text-center">
      <p class="text-lg md:text-xl text-blue-600 font-semibold mb-2">
        {{ t("home.greeting") }}
      </p>

      <h1
        class="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6 tracking-tight"
      >
        {{ t("home.role") }}
      </h1>

      <p
        class="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
      >
        {{ t("home.description") }}
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          @click="scrollToProjects"
          class="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
        >
          {{ t("home.cta_primary") }}
        </button>

        <a
          href="mailto:seuemail@exemplo.com"
          class="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-lg font-medium hover:border-blue-500 hover:text-blue-500 transition-colors"
        >
          {{ t("home.cta_secondary") }}
        </a>
      </div>
    </div>
  </section>
</template>
