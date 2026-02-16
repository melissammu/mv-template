import { Routes, Route } from "react-router-dom";
import SitePage from "./pages/sitePages";
import ProductCatalogPage from "./pages/ProductCatalogPage";
import AdminProductsPage from "./pages/AdminProductsPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminGuard from "./components/AdminGuard";
export default function App() {
  return (
      <Routes>
  <Route path="/" element={<SitePage />} />
  <Route path="/productos" element={<ProductCatalogPage />} />

  <Route path="/Admin/login" element={<AdminLoginPage />} />
  <Route
    path="/Admin/products"
    element={
      <AdminGuard>
        <AdminProductsPage />
      </AdminGuard>
    }
  />
</Routes>
  )
 }