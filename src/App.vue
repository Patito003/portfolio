<script setup lang="ts">
// Aqui você vai adicionar a lógica depois
const nome = "Paulo Vitor Martins de Castro";
const titulo = "Desenvolvedor Full Stack";
</script>

<template>
  <div class="container">
    <header>
      <h1>{{ nome }}</h1>
      <h2>{{ titulo }}</h2>
      <p class="status">🚧 Site em construção (Mas o código já está rodando!)</p>
    </header>

    <main>
      <p class="intro">
        Com 3 anos de experiência, ajudo empresas a criar soluções web robustas e 
        automatizar processos manuais com JavaScript.
      </p>
      
      <div class="links">
        <a href="https://www.linkedin.com/in/paulovitormartinsdecastro/" target="_blank" class="btn">LinkedIn</a>
        <a href="https://github.com/Patito003/" target="_blank" class="btn">GitHub</a>
      </div>
    </main>

    <footer>
      <p>Feito com Vue 3 + TypeScript</p>
    </footer>
  </div>
</template>

<style scoped>
/* Um estilo básico "Dark Mode" para ficar bonito */
.container {
  font-family: 'Inter', sans-serif;
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