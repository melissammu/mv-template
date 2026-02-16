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
      route: "/productos",
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
    { type: "tiktok", url: "https://tiktok.com/melissa._.m2"},
     { type: "whatsapp", url:"https://wa.me/5541988694242?text=Hola%20quiero%20información%20sobre%20sus%20productos"},
  ],

  products: [
    {
      id: "p1",
      title: "Conjunto de pijama sexy",
      price: 33.35,
      currency: "R$",
      image: "/produtos/public/produtos/Conjunto-de-pijama-sexy.jpg",
      buyUrl: "https://a.co/d/0imTBbaG",
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