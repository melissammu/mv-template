import ProductCatalog from "../components/ProductCatalog";
import { PRODUCTS } from "../data/products.";
import "./productCatalogPage.css";

export default function ProductCatalogPage() {
  return (
    <div className="catalogWrap">
      <div className="catalogCard">
        <div className="catalogHeader">
          <div>
            <h1 className="catalogTitle">Catálogo de Produtos</h1>
            <p className="catalogSub">Escolha seu produtos e compre em segundos.</p>
          </div>
        </div>
      <ProductCatalog products={PRODUCTS} />

<div
  style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "30px"
  }}
>
  <a
    href="https://vt.tiktok.com/ZS9egfJnuCWW7-4veHy/"
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
      transition: "0.3s"
    }}
  >
    👉 Clique agora - Vitrine TikTokShop
  </a>
</div>
      </div>
    </div>
  );
}