import { Link, Navigate, Route, Routes } from "react-router-dom";
import AmberFolioDarkPhotographyPortfolioByTemplatemoPage from "./components/AmberFolioDarkPhotographyPortfolioByTemplatemoPage";
import LatestFreeHtmlCssTemplatesTemplatemoPage from "./components/LatestFreeHtmlCssTemplatesTemplatemoPage";

const pages = [
  { id: "80bc0590-75e7-4a21-834b-9e6077ccaa8e", name: "Amber Folio Dark Photography Portfolio by TemplateMo", path: "/", Component: AmberFolioDarkPhotographyPortfolioByTemplatemoPage },
  { id: "06f80c40-7353-450d-82d9-eb3f1b2689da", name: "Latest Free HTML CSS Templates - TemplateMo", path: "/latest-free-html-css-templates-templatemo", Component: LatestFreeHtmlCssTemplatesTemplatemoPage }
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
