import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import "./jeeMainChapterDetail.css";

export default function JeeMainChapterDetail() {
  const navigate = useNavigate();

  /* ✅ Fixed params for JEE Main */
  const { subject, chapterId } = useParams();
  const classLevel = "12";
  const board = "JEE_ADV";

  const [chapter, setChapter] = useState(null);
  const [content, setContent] = useState(null);
  const [activeTab, setActiveTab] = useState("notes");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  /* ================= FETCH CHAPTER ================= */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        /* 1️⃣ Load syllabus index */
        const syllabusRes = await fetch(
          `${import.meta.env.VITE_API_URL}/api/syllabus/${classLevel}/${board}/${subject}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (!syllabusRes.ok) throw new Error("Failed to load syllabus");

        const syllabusData = await syllabusRes.json();

        const foundChapter = syllabusData.chapters.find(
          (c) => c.id === chapterId
        );

        if (!foundChapter) throw new Error("Chapter not found");
        setChapter(foundChapter);

        /* 2️⃣ Load chapter content */
        const contentRes = await fetch(
          `${import.meta.env.VITE_API_URL}/api/chapter/${classLevel}/${board}/${subject}/${foundChapter.file}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (!contentRes.ok) throw new Error("Chapter content not found");

        const contentData = await contentRes.json();
        setContent(contentData);

        /* 3️⃣ Load progress */
        const progressRes = await fetch(
          `${import.meta.env.VITE_API_URL}/api/progress`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const progressData = await progressRes.json();
        const subjectProgress = progressData.find((p) => p.subject === subject);

        if (subjectProgress?.completedChapters.includes(chapterId)) {
          setIsCompleted(true);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [subject, chapterId, navigate]);

  /* ================= MARK COMPLETED ================= */
  const toggleCompleted = async () => {
    try {
      const token = localStorage.getItem("token");

      const url = isCompleted
        ? `${import.meta.env.VITE_API_URL}/api/progress/uncomplete`
        : `${import.meta.env.VITE_API_URL}/api/progress/complete`;

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          subject,
          chapterId,
          classLevel,
          board,
        }),
      });

      if (!res.ok) throw new Error();

      setIsCompleted(!isCompleted);
      window.dispatchEvent(new Event("progressUpdated"));
    } catch {
      alert("❌ Failed to update progress");
    }
  };

  /* ================= UI STATES ================= */
  if (loading) return <p style={{ padding: 100 }}>Loading…</p>;
  if (error || !chapter || !content)
    return <p style={{ padding: 100 }}>{error}</p>;

  /* ================= UI ================= */
  return (
    <div className="chapter-detail-wrapper">
      <Header />

      <section className="chapter-detail-header glass">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h1>{chapter.title}</h1>
        <p>
          Unit {chapter.unit} • Weightage <strong>{chapter.weightage}</strong>
        </p>

        <button
          className={`complete-btn ${isCompleted ? "completed" : ""}`}
          onClick={toggleCompleted}
        >
          {isCompleted ? " Completed" : "Mark Completed"}
        </button>
      </section>

      {/* ================= TABS ================= */}
      <div className="tab-bar glass">
        <button
          className={activeTab === "notes" ? "tab active" : "tab"}
          onClick={() => setActiveTab("notes")}
        >
          📘 Notes
        </button>

        <button
          className={activeTab === "mcqs" ? "tab active" : "tab"}
          onClick={() => setActiveTab("mcqs")}
        >
          🧠 MCQs
        </button>

        <button
          className={activeTab === "pyqs" ? "tab active" : "tab"}
          onClick={() => setActiveTab("pyqs")}
        >
          📄 PYQs
        </button>

        <button
          className={activeTab === "theory" ? "tab active" : "tab"}
          onClick={() => setActiveTab("theory")}
        >
          ✍️ Theory
        </button>
      </div>

      {/* ================= TAB CONTENT ================= */}
      <div className="tab-content fade-up">
        {/* NOTES */}
        {activeTab === "notes" &&
          content.notes?.map((note, i) => (
            <div key={i} className="note-block glass">
              <h3>{note.heading}</h3>
              <p>{note.content}</p>
            </div>
          ))}

        {/* MCQs */}
        {activeTab === "mcqs" &&
          (content.mcqs?.length ? (
            content.mcqs.map((mcq, i) => (
              <div key={i} className="mcq-block glass">
                <p>
                  <strong>Q{i + 1}.</strong> {mcq.question}
                </p>
                <ul>
                  {mcq.options.map((opt, idx) => (
                    <li key={idx}>{opt}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No MCQs available.</p>
          ))}

        {/* PYQs */}
        {activeTab === "pyqs" &&
          (content.pyqs?.length ? (
            content.pyqs.map((pyq, idx) => (
              <div key={idx} className="mcq-block glass">
                {pyq.question && (
                  <p>
                    <strong>Q{idx + 1}.</strong> {pyq.question}
                  </p>
                )}

                {pyq.type === "assertion-reason" && (
                  <>
                    <p>
                      <strong>Assertion:</strong> {pyq.assertion}
                    </p>
                    <p>
                      <strong>Reason:</strong> {pyq.reason}
                    </p>
                  </>
                )}

                {pyq.type === "descriptive" && (
                  <>
                    {pyq.questionParts.map((part, i) => (
                      <p key={i}>
                        <strong>{part.label}</strong> {part.question}
                      </p>
                    ))}
                    {pyq.OR && (
                      <p>
                        <strong>OR:</strong> {pyq.OR.question}
                      </p>
                    )}
                  </>
                )}

                {pyq.options && (
                  <ul>
                    {pyq.options.map((opt, i) => (
                      <li key={i}>{opt}</li>
                    ))}
                  </ul>
                )}

                {pyq.answer && (
                  <details>
                    <summary>View Answer</summary>
                    <p>{pyq.answer}</p>
                  </details>
                )}

                <small>Year: {pyq.year}</small>
              </div>
            ))
          ) : (
            <p>No PYQs available.</p>
          ))}

        {/* THEORY */}
        {activeTab === "theory" &&
          (content.theoryQuestions?.length ? (
            content.theoryQuestions.map((tq, idx) => (
              <div key={idx} className="mcq-block glass">
                <p>
                  <strong>
                    Q{idx + 1}. ({tq.marks} Marks)
                  </strong>
                </p>
                <p>{tq.question}</p>

                {tq.answer && (
                  <details>
                    <summary>View Answer</summary>
                    <p>{tq.answer}</p>
                  </details>
                )}

                {tq.year && <small>Year: {tq.year}</small>}
              </div>
            ))
          ) : (
            <p>No theory questions available.</p>
          ))}
      </div>
    </div>
  );
}
