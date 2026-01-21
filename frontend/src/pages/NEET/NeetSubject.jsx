import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import "./neetSubject.css";

export default function JeeMainSubject() {
  const navigate = useNavigate();

  /* ✅ Fixed params for JEE Main */
  const { subject } = useParams();
  const classLevel = "12";
  const board = "NEET";

  const [subjectData, setSubjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ================= FETCH FROM BACKEND ================= */
  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/syllabus/${classLevel}/${board}/${subject}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error("Syllabus not found");
        }

        const data = await res.json();
        setSubjectData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubject();
  }, [subject]);

  /* ================= STATES ================= */
  if (loading) {
    return (
      <div style={{ padding: "100px" }}>
        <Header />
        <p>Loading chapters...</p>
      </div>
    );
  }

  if (error || !subjectData) {
    return (
      <div style={{ padding: "100px" }}>
        <Header />
        <p>No chapters found for <b>{subject}</b></p>
      </div>
    );
  }

  /* ================= UI ================= */
  return (
    <div className="subject-wrapper">
      <Header />

      <div className="subject-header">
        <h1>{subjectData.subject}</h1>
        <p>JEE Main • Class 12</p>
      </div>

      <div className="chapter-grid">
        {subjectData.chapters.map((chapter) => (
          <div
            key={chapter.id}
            className="chapter-card"
            onClick={() =>
              navigate(`/exam/jee-main/${subject}/${chapter.id}`)
            }
          >
            <strong>Unit {chapter.unit}</strong>
            <span>{chapter.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
