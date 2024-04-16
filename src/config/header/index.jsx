import Logo from "/AlefRodriguesNutricionista_Logo.png";
import Icon from "/AlefRodriguesNutricionista_Simbolo.png";

export const navBarConfig = {
  img: Logo,
  icon: Icon,
  img_alt: "Logo Alef Rodrigues Nutricionista",
  icon_alt: "Ícone AR da identidade visual Alef Rodrigues Nutricionista",
  link: "/",
  button: {
    link: "/",
    title: "Agendar sua consulta!",
    icon: "bi-box-arrow-up-right",
  },
  nav_items: [
    { title: "Início", url: "/", icon: "bi-house-door" },
    {
      title: "Acompanhamento",
      url: "#acompanhamento",
      icon: "bi-arrow-right-square",
    },
    { title: "Benefícios", url: "#beneficios", icon: "bi-patch-check" },
    { title: "Depoimentos", url: "#depoimentos", icon: "bi-chat-square-dots" },
    { title: "Sobre", url: "#sobre", icon: "bi-person" },
  ],
};
