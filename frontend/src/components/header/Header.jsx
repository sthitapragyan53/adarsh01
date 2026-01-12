import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
  const navigate = useNavigate();

  // ✅ Load saved theme on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // ✅ Toggle theme (light → dark → amoled → light)
  const toggleTheme = () => {
    const current =
      document.documentElement.getAttribute("data-theme") || "light";

    const next =
      current === "light"
        ? "dark"
        : current === "dark"
        ? "amoled"
        : "light";

    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  // ✅ Logout helper (optional but useful)
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="home-header glass">
      {/* LOGO */}
      <div className="header-logo" onClick={() => navigate("/home")}>
        Adarsh
      </div>

      {/* NAVIGATION */}
      <nav className="header-nav">
        <Link to="/home">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/exam-dashboard">Tests</Link>
        <Link to="/home#resources">Resources</Link>
      </nav>

      {/* ACTIONS */}
      <div className="header-actions">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          title="Change theme"
        >
          🌗
        </button>

        {/* Optional logout */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}
