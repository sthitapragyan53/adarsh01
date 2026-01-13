import "./home.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Calender from "../../components/calendar/Calender.jsx";

export default function Home() {
  const navigate = useNavigate();

  const [board, setBoard] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/user/me`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!res.ok) throw new Error("Unauthorized");

        const user = await res.json();

        // If onboarding not done → go to choose-board
        if (!user.board || !user.classLevel) {
          navigate("/choose-board");
          return;
        }

        // Otherwise set data
        setBoard(user.board);
        setClassLevel(user.classLevel);
      } catch {
        navigate("/login");
      } finally {
        setLoadingUser(false);
      }
    };

    fetchUser();
  }, [navigate]);

  // Wait until user is loaded before rendering
  if (loadingUser) return null;

  const handleChangeBoard = () => {
    navigate("/choose-board");
  };

  return (
    <div className="home-wrapper">
      <Header />

      <div className="home-glass">
        {/* LEFT CONTENT */}
        <div className="home-left">
          <div className="user-meta">
            🎓 {board} • Class {classLevel}
            <button className="change-btn" onClick={handleChangeBoard}>
              Change
            </button>
          </div>

          <span className="badge">🚀 Smart Study Platform</span>

          <h1>
            The smarter way to <br />
            <span>prepare for exams</span>
          </h1>

          <p>
            Track your syllabus, practice tests, and monitor progress — all in
            one place for Class {classLevel} students.
          </p>

          <div className="home-actions">
            <button
              className="primary-btn"
              onClick={() =>
                document
                  .getElementById("dashboard-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/exam-tracker")}
            >
              Track your Exams
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="home-right">
          <Calender />
        </div>
      </div>
    </div>
  );
}
