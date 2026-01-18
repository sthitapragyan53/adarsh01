import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= LOGIN HANDLER ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(formData);

      localStorage.setItem("token", response.token);

      if (response.user?.board && response.user?.classLevel) {
        localStorage.setItem("board", response.user.board);
        localStorage.setItem("class", response.user.classLevel);
        navigate("/home");
      } else {
        navigate("/choose-board");
      }
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  /* ================= GOOGLE LOGIN ================= */
  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/api/auth/google`;
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* LEFT SIDE */}
        <div className="login-left">
          <h2>Adarsh</h2>
          <p className="tagline">
            Get access to your personal hub for clarity and productivity.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-right">
          <h1>Welcome back</h1>
          <p className="subtitle">
            Login to continue your learning journey.
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            {error && <p className="error-text">{error}</p>}

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              onChange={handleChange}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              required
              onChange={handleChange}
            />

            <button className="btn login-btn" type="submit">
              Login
            </button>
          </form>

          {/* 🔹 Divider */}
          <div style={{
            margin: "15px 0",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#999"
          }}>
            <div style={{ flex: 1, height: "1px", background: "#ddd" }}></div>
            OR
            <div style={{ flex: 1, height: "1px", background: "#ddd" }}></div>
          </div>

          {/* 🔹 Google Button */}
          <button
            onClick={handleGoogleLogin}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              cursor: "pointer",
              fontWeight: "500"
            }}
          >
            <img
              src= "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="google"
              style={{ width: "18px", height: "18px" }}
            />
            Continue with Google
          </button>

          <p className="bottom-text">
            Don’t have an account?{" "}
            <span
              style={{ cursor: "pointer", color: "#6366f1" }}
              onClick={() => navigate("/create-account")}
            >
              Create account
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}
