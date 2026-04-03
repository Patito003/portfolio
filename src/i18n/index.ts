import { createI18n } from "vue-i18n";

const messages = {
  pt: {
    brand: "PV.",
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      contact: "Contato",
      sayHello: "Diga Olá",
    },
    home: {
      greeting: "Olá, eu sou o Paulo Vitor 👋",
      role: "Desenvolvedor Fullstack",
    },
    about: {
      title: "Sobre Mim",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta assumenda at omnis. Voluptatem cum, facere dicta impedit provident sapiente nostrum? Perspiciatis debitis provident fugit accusantium cupiditate dolore numquam nihil repudiandae. lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta assumenda at omnis. Voluptatem cum, facere dicta impedit provident sapiente nostrum? Perspiciatis debitis provident fugit accusantium cupiditate dolore numquam nihil repudiandae."
    }
  },
  en: {
    brand: "PV.",
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      sayHello: "Say Hello",
    },
    home: {
      greeting: "Hello, I'm Paulo Vitor 👋",
      role: "Fullstack Developer",
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "pt",
  fallbackLocale: "en",
  globalInjection: true,
  messages,
});

export default i18n;
