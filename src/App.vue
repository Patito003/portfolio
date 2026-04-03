<script setup lang="ts">
import TopBar from "./components/TopBar.vue";
import HomeSection from "./components/HomeSection.vue";
import AboutSection from "./components/AboutSection.vue";
import FloatingNav from "./components/FloatingBarNav.vue";
</script>

<template>
  <main>
    <div
      class="bg-bg-primary dark:bg-bg-primary-dark min-h-screen"
    >
      <TopBar />
      <main>
        <HomeSection />
        <AboutSection />
      </main>
      <FloatingNav />
    </div>
  </main>
</template>
