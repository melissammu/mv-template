export const CONFIG = {
  adminKey: "1234", // cámbiala por la clave real del comprador
};
export const ENVY_CONFIG = {
  profile: {
    name: "Mv",
    tagline: "Todo lo que necesitas lo encuentras en un solo lugar.",
    avatar: "/avatar/avatar.jpg",
  },

  buttons: [
    {
      label: "Productos",
      type: "internal",
      route: "/produtos",
    },
    {
      label: "Galería",
      type: "internal",
      route:"/mis-videos",
    },
  ],

  social: [
    { type: "youtube", url: "https://youtube.com" },
    { type: "pinterest", url: "https://pinterest.com" },
    { type: "instagram", url: "https://instagram.com/@melissa.ti_" },
    { type: "tiktok", url: "https://tiktok.com/melissa._.m2/https://www.tiktok.com/@melissa._.m2/video/7582033038364790023?is_from_webapp=1&sender_device=pc&web_id=7596833600109872658" },
  ],

  products: [
    {
      id: "p1",
      title: "Shampoo + Conditioner",
      price: 50,
      currency: "R$",
      image: "/produtos/prod1.jpg",
      buyUrl: "https://www.amazon.com.br/",
      store: "amazon",
    },
    {
      id: "p2",
      title: "Mesa plegable 1.80m",
      price: 344.19,
      currency: "R$",
      image: "/produtos/prod2.jpg",
      buyUrl: "https://www.mercadolivre.com.br/",
      store: "mercadolivre",
    },
    
  ],
  
};