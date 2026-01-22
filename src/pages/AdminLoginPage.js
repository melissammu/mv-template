import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CONFIG } from "../data/config";

export default function AdminLoginPage() {
  const [key, setKey] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    if (key === CONFIG.adminKey) {
      localStorage.setItem("envy_admin_ok", "1");
      navigate("/admin/products");
    } else {
      setError("Clave incorrecta.");
    }
  }

  return (
    <div style={{ maxWidth: 420, margin: "40px auto", padding: 16 }}>
      <h2>Acceso Admin</h2>
      <p style={{ opacity: 0.8 }}>
        Ingresa tu clave para administrar productos.
      </p>

      <form onSubmit={handleLogin} style={{ display: "grid", gap: 10 }}>
        <input
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Clave"
          style={{
            padding: 12,
            borderRadius: 10,
            border: "1px solid #ddd",
            fontSize: 16,
          }}
        />

        <button
          type="submit"
          style={{
            padding: 12,
            borderRadius: 10,
            border: 0,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Entrar
        </button>

        {error && <div style={{ color: "crimson" }}>{error}</div>}
      </form>
    </div>
  );
}