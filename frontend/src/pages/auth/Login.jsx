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
      // 🔐 Call backend login API
      const response = await loginUser(formData);

      /*
        Expected backend response shape:
        {
          token: "...",
          user: {
            board,
            classLevel
          }
        }
      */

      // ✅ Save JWT
      localStorage.setItem("token", response.token);

      // ✅ If user already completed onboarding (MongoDB)
      if (response.user?.board && response.user?.classLevel) {
        localStorage.setItem("board", response.user.board);
        localStorage.setItem("class", response.user.classLevel);

        navigate("/home"); // or /dashboard
      } else {
        // ✅ First-time user → onboarding
        navigate("/choose-board");
      }
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  /* ================= UI (UNCHANGED) ================= */
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
