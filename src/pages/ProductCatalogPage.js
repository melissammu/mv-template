import ProductCatalog from "../components/ProductCatalog";
import { PRODUCTS } from "../data/products";
import "./productCatalogPage.css";

export default function ProductCatalogPage() {
  return (
    <div className="catalogWrap">
      <div className="catalogCard">
        <div className="catalogHeader">
          <div>
            <h1 className="catalogTitle">Catálogo de Productos</h1>
            <p className="catalogSub">Elige tu producto y compra en segundos.</p>
          </div>
        </div>

        <ProductCatalog products={PRODUCTS} />
      </div>
    </div>
  );
}