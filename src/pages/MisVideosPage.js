import "./MisVideosPage.css";
import { mediaItems } from "../data/media";

export default function MisVideosPage() {
  return (
    <div className="Mis-videos-page">
      <h1>Mis videos</h1>

      <p className="Mis-videos-desc">
        Aquí se mostrarán los videos y fotos publicados por el dueño de la plantilla
      </p>

      <div className="media-grid">
        {mediaItems.map((item) => (
          <div key={item.id} className="media-item">
            {item.type === "video" ? (
  <iframe
    src={item.src}
    title="video"
    width="100%"
    height="300"
    style={{ borderRadius: "12px" }}
    allow="autoplay; encrypted-media"
    allowFullScreen
  ></iframe>
) : (
  <img src={item.src} alt="media" />
)}
          </div>
        ))}
      </div>
    </div>
  );
}