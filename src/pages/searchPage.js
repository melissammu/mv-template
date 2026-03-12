import React, { useEffect, useState } from "react";
import ProductCatalog from "../components/ProductCatalog";
import { supabase } from "../lib/supabase";

export default function SearchPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data: shein, error: sheinError } = await supabase
        .from("products")
        .select("*")
        .eq("store", "shein");

      const { data: amazon, error: amazonError } = await supabase
        .from("amazon_products")
        .select("*")
        .eq("is_active", true);

      if (sheinError) {
        console.error("Erro ao buscar produtos Shein:", sheinError);
      }

      if (amazonError) {
        console.error("Erro ao buscar produtos Amazon:", amazonError);
      }

      const formattedShein = (shein || []).map((p) => ({
        id: `shein-${p.id}`,
        name: p.title || p.name || "Produto sem nome",
        price: p.price || "",
        image:
          (p.image_url && p.image_url.trim()) ||
          (typeof p.image === "string" && p.image.trim()) ||
          "/produtos/placeholder-shein.jpg",
        image_url:
          (p.image_url && p.image_url.trim()) ||
          (typeof p.image === "string" && p.image.trim()) ||
          "/produtos/placeholder-shein.jpg",
        link:
          (p.link_br && p.link_br.trim()) ||
          (p.link_us && p.link_us.trim()) ||
          (p.link && p.link.trim()) ||
          "",
        store: "shein",
      }));

      const formattedAmazon = (amazon || []).map((p) => ({
        id: `amazon-${p.id}`,
        name: p.title || p.name || "Produto sem nome",
        price: p.price || "",
        image:
          (p.image_url && p.image_url.trim()) ||
          "/produtos/placeholder-amazon.jpg",
        image_url:
          (p.image_url && p.image_url.trim()) ||
          "/produtos/placeholder-amazon.jpg",
        link:
          (p.link_br && p.link_br.trim()) ||
          (p.link_us && p.link_us.trim()) ||
          (p.link && p.link.trim()) ||
          "",
        store: "amazon",
      }));

      const allProducts = [...formattedShein, ...formattedAmazon];
      setProducts(allProducts);
    }

    loadProducts();
  }, []);

  return (
    <div>
      <ProductCatalog products={products} />
    </div>
  );
}