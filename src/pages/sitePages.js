import { ENVY_CONFIG } from "../data/config";
import {sites} from "../data/sites";
import"./sitePages.css";
import { FaYoutube, FaPinterest, FaEnvelope, FaInstagram, FaWhatsapp, FaTiktok }
from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
export default function SitePage() {
  const data = sites.demo;
  const {profile, buttons} = ENVY_CONFIG;
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 26,
        fontFamily: "Arial",
        background: "#f6f6f6",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          textAlign: "center",
          background: "#ffeef2",
          borderRadius: 18,
          padding: 26,
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        }}
      >
       <img
  src={profile.avatar}
  alt={profile.name}
  style={{
    width: 120,
    height: 120,
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: 14,
    border: "4px solid white",
  }}
/>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 20 }}>
  <a href="https://youtube.com" target="_blank" rel="noreferrer">
    <FaYoutube size={28} />
  </a>

  <a href="https://pinterest.com" target="_blank" rel="noreferrer">
    <FaPinterest size={28} />
  </a>

  <a href="mailto:tuemail@gmail.com">
    <FaEnvelope size={28} />
  </a>

  <a href="https://instagram.com" target="_blank" rel="noreferrer">
    <FaInstagram size={28} />
  </a>

  <a href="https://wa.me/5599999999999" target="_blank" rel="noreferrer">
    <FaWhatsapp size={28} />
  </a>
  <a href="https://www.tiktok.com/@tucuenta" target="_blank" rel="noreferrer">
    <FaTiktok size={28} />
  </a>
</div>
        <h1>{profile.name}</h1>
        <p>{profile.tagline}</p>
        
 {buttons.map((btn) =>
  btn.type === "internal" ? (
    <button
  key={btn.label}
  onClick={() => navigate(btn.route)}
  className="site-button"
>
  {btn.label}
</button>
  ) : (
    <a
  key={btn.label}
  href={btn.url}
  target="_blank"
  rel="noreferrer"
  className="site-button"
>
  {btn.label}
</a>
  )
)}
</div>
</div>
  );
   }