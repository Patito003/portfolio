import { createI18n } from "vue-i18n";

const messages = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Skills",
      projects: "Projetos",
      sayHello: "Diga Olá",
    },
    home: {
      greeting: "Olá, eu sou o Paulo 👋",
      role: "Desenvolvedor Fullstack",
      description:
        "Estudante de Ciência da Computação focado em automação, eficiência e ecossistema JavaScript/TypeScript.",
      cta_primary: "Ver Projetos",
      cta_secondary: "Entrar em Contato",
    },
  },
  en: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Skills",
      projects: "Projetos",
      sayHello: "Diga Olá",
    },
    home: {
      greeting: "Hi, I am Paulo 👋",
      role: "Fullstack Developer",
      description:
        "Computer Science student focused on automation, efficiency, and the JavaScript/TypeScript ecosystem.",
      cta_primary: "See Projects",
      cta_secondary: "Get in Touch",
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
