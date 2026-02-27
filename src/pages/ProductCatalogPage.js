import React from "react";
import { TIKTOK_VITRINE_URL } from "../data/products";

export default function ProductCatalogPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <a
        href={TIKTOK_VITRINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "15px 25px",
          backgroundColor: "#eb6cbb",
          color: "#ffffff",
          fontWeight: "bold",
          borderRadius: "30px",
          textDecoration: "none",
          fontSize: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          transition: "0.3s",
        }}
      >
        👉 Clique agora - Vitrine TikTokShop
      </a>
    </div>
  );
}