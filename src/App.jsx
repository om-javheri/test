import { Link, Navigate, Route, Routes } from "react-router-dom";
import MateParallaxWebsiteTemplatePage from "./components/MateParallaxWebsiteTemplatePage";
import IndexPage from "./components/IndexPage";

const pages = [
  { id: "2d03c558-9a77-4e8b-abd9-649b3e24d1ab", name: "Mate - Parallax Website Template", path: "/", Component: MateParallaxWebsiteTemplatePage },
  { id: "b69f1cb3-be1e-4a1e-bdce-23fab482b59e", name: ". Index", path: "/index", Component: IndexPage }
];

export default function App() {
  const defaultPath = pages[0]?.path || "/";

  return (
    <div>
      <nav style={{ marginBottom: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
        {pages.map((page) => (
          <Link key={page.id} to={page.path} style={{ textDecoration: "none" }}>
            {page.name}
          </Link>
        ))}
      </nav>
      <Routes>
        {pages.map((page) => (
          <Route key={page.id} path={page.path} element={<page.Component />} />
        ))}
        <Route path="*" element={<Navigate to={defaultPath} replace />} />
      </Routes>
    </div>
  );
}
