import React from "react";
import "../pages/productCatalogPage.css";

export default function ProductCatalog({ products = [] }) {
  if (!products.length) {
    return (
      <p style={{ opacity: 0.8, textAlign: "center", marginTop: "20px" }}>
        Aún no hay productos para mostrar.
      </p>
    );
  }

  return (
    <div>
      {/* aquí va tu render de productos (map) */}
      {products.map((p, index) => (
        <div key={index}>{p.name}</div>
      ))}
    </div>
  );
}