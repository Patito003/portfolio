import { createI18n } from "vue-i18n";

const messages = {
  pt: {
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
      description:
        "Estudante de Ciência da Computação focado em automação, eficiência e ecossistema JavaScript/TypeScript.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      sayHello: "Say Hello",
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
