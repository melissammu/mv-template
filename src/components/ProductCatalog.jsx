import React from "react";
import "../pages/productCatalogPage.css";
export default function ProductCatalog({ products = [] }) {
  if (!products.length) {
    return <p style={{ opacity: 0.8 }}>Aún no hay productos para mostrar.</p>;
  }

  return (
    <div className="hm-grid">
      {products.map((p) => (
        <div key={p.id} className="hm-card">
          <img className="hm-image" src={p.image} alt={p.title} />

          <div className="hm-body">
            <h3 className="hm-title">{p.title}</h3>
            {p.price && <div className="hm-price">{p.price}</div>}

            <a
              className="hm-buy"
              href={p.buyUrl}
              target="_blank"
              rel="noreferrer"
            >
              Comprar
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}