import { Routes, Route } from "react-router-dom";
import SitePage from "./pages/sitePages";
import ProductCatalogPage from "./pages/ProductCatalogPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SitePage />} />
      <Route path="/productos" element={<ProductCatalogPage />} />
    </Routes>
  );
}