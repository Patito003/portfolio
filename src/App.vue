<script setup lang="ts">
import TopBar from "./components/TopBar.vue";
import HomeSection from "./components/HomeSection.vue";
import FloatingNav from "./components/FloatingBarNav.vue";
</script>

<template>
  <main>
    <div
      class="bg-white dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200"
    >
      <TopBar />
      <main>
        <HomeSection />
      </main>
      <FloatingNav />
    </div>
  </main>
</template>

<style scoped>
.container {
  font-family: "Inter", sans-serif;
  text-align: center;
  background-color: #1a1a1a;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #42b883; /* Verde do Vue */
}

h2 {
  font-size: 1.5rem;
  color: #a5a5a5;
  margin-bottom: 2rem;
}

.status {
  background: #333;
  padding: 8px 16px;
  border-radius: 20px;
  display: inline-block;
  font-size: 0.9rem;
  margin-bottom: 3rem;
}

.intro {
  max-width: 600px;
  line-height: 1.6;
  margin: 0 auto 2rem auto;
  font-size: 1.1rem;
}

.links {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.btn {
  text-decoration: none;
  color: #1a1a1a;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.3s;
}

.btn:hover {
  background-color: #42b883;
}

footer {
  margin-top: 50px;
  font-size: 0.8rem;
  opacity: 0.5;
}
</style>
