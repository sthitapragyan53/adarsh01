import "./kcet.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../components/header/Header";
import CircularProgress from "../../components/circularAnimation/CircularProgress";

export default function JeeMain() {
  const navigate = useNavigate();

  const [subjects, setSubjects] = useState([]);
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= LOAD JEE SUBJECTS ================= */
  useEffect(() => {
    const fetchSubjects = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/syllabus/12/KCET`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (!res.ok) {
        setLoading(false);
        return;
      }

      const data = await res.json();
      setSubjects(data.subjects || []);
      setLoading(false);
    };

    fetchSubjects();
  }, []);

  /* ================= LOAD PROGRESS ================= */
  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/progress`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (!res.ok) return;

      const data = await res.json();
      setProgressData(data || []);
    };

    fetchProgress();
    window.addEventListener("progressUpdated", fetchProgress);

    return () => {
      window.removeEventListener("progressUpdated", fetchProgress);
    };
  }, []);

  /* ================= SUBJECT ICONS ================= */
  const subjectIcons = {
    physics: "⚡",
    chemistry: "⚗️",
    mathematics: "📐",
  };

  /* ================= PROGRESS HELPERS ================= */
  const getCount = (slug, totalChapters) => {
    const subjectProgress = progressData.find((s) => s.subject === slug);
    const completed = subjectProgress?.completedChapters.length || 0;
    return `${completed} / ${totalChapters}`;
  };

  const getProgress = (slug, totalChapters) => {
    const subjectProgress = progressData.find((s) => s.subject === slug);
    const completed = subjectProgress?.completedChapters.length || 0;
    return Math.round((completed / totalChapters) * 100);
  };

  if (loading) {
    return <div style={{ padding: "100px" }}>Loading JEE Main...</div>;
  }

  /* ================= UI ================= */
  return (
    <div className="dashboard-wrapper">
      <Header />

      {/* ===== TOP SECTION ===== */}
      <section className="dashboard-overview glass">
        <div>
          <h1>JEE Main • Class 12</h1>
          <p className="overview-subtext">
            Track your JEE Main preparation subject-wise
          </p>
        </div>
      </section>

      {/* ===== SUBJECT GRID ===== */}
      <section className="dashboard-grid">
        <div className="syllabus-card glass">
          <h2>JEE Main Syllabus Progress</h2>

          {subjects.map((subject) => (
            <div
              key={subject.slug}
              className="subject clickable"
              onClick={() =>
                navigate(`/exam/jee-main/${subject.slug}`)
              }
            >
              <span>
                {subjectIcons[subject.slug] || "📘"} {subject.name}
              </span>

              <small>{getCount(subject.slug, subject.totalChapters)}</small>

              <CircularProgress
                percent={getProgress(subject.slug, subject.totalChapters)}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
