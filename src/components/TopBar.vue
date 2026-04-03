<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <header
    class="absolute top-0 left-0 w-full flex justify-between items-center py-6 px-6 md:px-12 z-40"
  >
    <div class="text-3xl font-bold text-primary cursor-pointer">{{ t("brand") }}</div>
    <p class="text-primary status">🚧 Site em construção (Mas o código já está rodando!)</p>
    <a
      href="mailto:seuemail@exemplo.com"
      class="border-2 border-primary text-primary px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
    >
      {{ t("nav.sayHello") }}
    </a>
  </header>
</template>
