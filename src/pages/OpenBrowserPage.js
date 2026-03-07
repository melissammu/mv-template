import React from "react";

export default function OpenBrowserPage() {

  const abrirCatalogo = () => {
    window.location.href = "https://mv-template.vercel.app/home";
  };

  return (
    <div style={{
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#f5f5f5",
  textAlign: "center",
  padding: "20px",
  maxWidth: "420px",
  margin: "0 auto"
}}>
      
      <h1 style={{fontSize:"28px", marginBottom:"10px"}}>
        Abrir catálogo
      </h1>

      <p style={{marginBottom:"30px"}}>
        Para ver todos os produtos, clique
        agora!.
      </p>

      <button
        onClick={abrirCatalogo}
        style={{
          padding:"15px 30px",
          fontSize:"18px",
          borderRadius:"10px",
          border:"none",
          background:"#f3c90d",
          color:"#0a0909",
          cursor:"pointer"
        }}
      >
       Vitrine.
      </button>

    </div>
  );
}