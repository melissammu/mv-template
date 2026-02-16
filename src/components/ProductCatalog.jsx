import React from "react";
import "../pages/productCatalogPage.css";

export default function ProductCatalog({ products = [] }) {
  if (!products.length) {
    return <p style={{ opacity: 0.8 }}>Aún no hay productos para mostrar.</p>;
  }

 return (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "40px",
      marginTop: "40px",
    }}
  >
    <img
      src="/produtos/vitrine.jpeg"
      alt="Minha Vitrine"
      style={{
        width: "300px",
        borderRadius: "20px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      }}
    />

    <a
      href="Confira a vitrine de melissa._.M quedate aqui no TikTok! https://vt.tiktok.com/ZS9JGTWpdAURW-BvpwX/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: "15px 25px",
        backgroundColor: "#f8a0bc",
        color: "#efefef",
        fontWeight: "bold",
        borderRadius: "30px",
        textDecoration: "none",
        fontSize: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        transition: "0.3s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "scale(1.1)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
    >
      👉 Clique agora- Vitrine TikTokshop
    </a>
  </div>
);
} 