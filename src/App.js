import { Routes, Route } from "react-router-dom";
import SitePage from "./pages/sitePages";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SitePage />} />
    </Routes>
  );
}