import React, { useEffect, useState } from "react";

const STORAGE_KEY = "envy_products";

export default function AdminProductsPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [buyUrl, setBuyUrl] = useState("");
  const [imageDataUrl, setImageDataUrl] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    setItems(saved);
  }, []);

  function save(next) {
    setItems(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function onPickImage(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setImageDataUrl(String(reader.result));
    reader.readAsDataURL(file);
  }

  function addProduct(e) {
    e.preventDefault();

    if (!title.trim() || !buyUrl.trim()) {
      alert("Coloca al menos Título y Link de compra (Hotmart).");
      return;
    }

    const newItem = {
      id: crypto.randomUUID(),
      title: title.trim(),
      price: price.trim(),
      image: imageDataUrl, // queda guardada como base64 en el navegador
      buyUrl: buyUrl.trim(),
    };

    const next = [newItem, ...items];
    save(next);

    setTitle("");
    setPrice("");
    setBuyUrl("");
    setImageDataUrl("");
  }

  function removeProduct(id) {
    const next = items.filter((p) => p.id !== id);
    save(next);
  }

  function clearAll() {
    if (!window.confirm("¿seguro desea borrar este producto?")) return;
    save([]);
  }

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: 16 }}>
      <h2 style={{ marginBottom: 8 }}>Admin - Productos</h2>
      <p style={{ opacity: 0.8, marginTop: 0 }}>
        Aquí el comprador agrega productos sin tocar código. Se guarda en este navegador.
      </p>

      <form onSubmit={addProduct} style={{ display: "grid", gap: 10, padding: 12, border: "1px solid #eee", borderRadius: 12 }}>
        <input
          placeholder="Título del producto"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: 10, borderRadius: 10, border: "1px solid #ddd" }}
        />
        <input
          placeholder="Precio (ej: R$ 49,90)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ padding: 10, borderRadius: 10, border: "1px solid #ddd" }}
        />
        <input
          placeholder="Link de compra (Hotmart) - buyUrl"
          value={buyUrl}
          onChange={(e) => setBuyUrl(e.target.value)}
          style={{ padding: 10, borderRadius: 10, border: "1px solid #ddd" }}
        />

        <div style={{ display: "grid", gap: 8 }}>
          <label style={{ fontWeight: 600 }}>Imagen del producto</label>
          <input type="file" accept="image/*" onChange={onPickImage} />
          {imageDataUrl ? (
            <img src={imageDataUrl} alt="preview" style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 12, border: "1px solid #eee" }} />
          ) : (
            <div style={{ opacity: 0.6 }}>Sin imagen (opcional)</div>
          )}
        </div>

        <button type="submit" style={{ padding: "10px 14px", borderRadius: 12, border: "0", cursor: "pointer" }}>
          + Agregar producto
        </button>

        <button type="button" onClick={clearAll} style={{ padding: "10px 14px", borderRadius: 12, border: "1px solid #ddd", cursor: "pointer", background: "transparent" }}>
          Borrar todo (prueba)
        </button>
      </form>

      <h3 style={{ marginTop: 18 }}>Productos guardados: {items.length}</h3>
      <div style={{ display: "grid", gap: 10 }}>
        {items.map((p) => (
          <div key={p.id} style={{ display: "flex", gap: 12, alignItems: "center", padding: 12, border: "1px solid #eee", borderRadius: 12 }}>
            {p.image ? (
              <img src={p.image} alt={p.title} style={{ width: 64, height: 64, borderRadius: 12, objectFit: "cover" }} />
            ) : (
              <div style={{ width: 64, height: 64, borderRadius: 12, background: "#f2f2f2" }} />
            )}
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700 }}>{p.title}</div>
              <div style={{ opacity: 0.8 }}>{p.price}</div>
              <div style={{ fontSize: 12, opacity: 0.7, wordBreak: "break-all" }}>{p.buyUrl}</div>
            </div>
            <button onClick={() => removeProduct(p.id)} style={{ padding: "8px 10px", borderRadius: 10, border: "1px solid #ddd", background: "transparent", cursor: "pointer" }}>
              Quitar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}