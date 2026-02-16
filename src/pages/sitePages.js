import { ENVY_CONFIG } from "../data/config";
import { Link } from "react-router-dom";
import "./sitePages.css";

import {
  FaYoutube,
  FaPinterest,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa6";

import { sites } from "../data/sites";

export default function SitePage() {
  const { profile, buttons, social } = ENVY_CONFIG; // si no usas profile/buttons por ahora, está bien
  const site = sites.demo;

  return (
 <div className="site-container">
  <div className="site-card">
    <img src={profile.avatar} alt="avatar" className="site-avatar" />

   <div className="social-icons">
  {social?.map((item, index) => {
    let Icon = FaEnvelope;

    if (item.type === "instagram") Icon = FaInstagram;
    if (item.type === "tiktok") Icon = FaTiktok;
    if (item.type === "youtube") Icon = FaYoutube;
    if (item.type === "pinterest") Icon = FaPinterest;
    if (item.type === "whatsapp") Icon = FaWhatsapp;

    return (
     <a key={index} href={item.url} target="_blank" rel="noreferrer">
        <Icon />
      </a>
    );
  })}
</div>
   {/* Nombre + Bio */}
      <h1 className="site-name">{profile.name}</h1>
      <p className="site-bio">{profile.tagline}</p>

      {/* BOTONES */}
      <div className="buttons">
        {buttons?.map((btn, index) =>
          btn.type === "internal" ? (
            <Link key={index} to={btn.route} className="site-button">
              {btn.label}
            </Link>
          ) : (
            <a
              key={index}
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
  </div>
);
 }