import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
import "./createAccount.css";

export default function CreateAccount() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      navigate("/login"); // success
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* LEFT */}
        <div className="login-left">
          <h2>Adarsh</h2>
          <p className="tagline">
            Get access to your personal hub for clarity and productivity.
          </p>
        </div>

        {/* RIGHT */}
        <div className="login-right">
          <h1>Create an account</h1>
          <p className="subtitle">
            Access your notes, tests, and progress anytime.
          </p>

          <form className="login-form" onSubmit={handleSubmit}>
            {error && <p className="error-text">{error}</p>}

            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              onChange={handleChange}
            />

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
              required
              onChange={handleChange}
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              required
              onChange={handleChange}
            />

            <div className="cta-wrapper">
              <button className="btn login-btn" type="submit">
                Continue
              </button>
            </div>
          </form>

          <p className="bottom-text">
            Already have an account?{" "}
            <span
              style={{ cursor: "pointer", color: "#6366f1" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}
