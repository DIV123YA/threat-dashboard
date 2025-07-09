import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThreatDetailPage from "./pages/ThreatDetailPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/threat/:id" element={<ThreatDetailPage />} />
      </Routes>
    </Router>
  );
}
