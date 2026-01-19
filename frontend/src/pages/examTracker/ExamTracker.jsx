import React from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import "./roadMap.css"; // reuse same CSS
=======
import "./examTracker.css";

// Import logos
import jeeMain from "../../assets/exams/jee-main.png";
import jeeAdvanced from "../../assets/exams/jee-advanced.png";
import boards from "../../assets/exams/boards.png";
import wbjee from "../../assets/exams/wbjee.png";
import ojee from "../../assets/exams/ojee.png";



>>>>>>> 0c1213e6936762e5e5008d16cb0e155ef1eb027b

const examCards = [
  {
    id: 1,
    exam: "JEE Main",
    desc: "National level engineering entrance exam",
    tags: ["Engineering", "NTA"],
    route: "/exam/jee-main",
    logo: "📘",
  },
  {
    id: 2,
    exam: "JEE Advanced",
    desc: "IIT admission entrance exam",
    tags: ["IIT", "Advanced"],
    route: "/exam/jee-advanced",
    logo: "🚀",
  },
  {
    id: 3,
    exam: "Board Exam",
    desc: "State & CBSE board examinations",
    tags: ["School", "Boards"],
    route: "/exam/boards",
    logo: "🏫",
  },
  {
    id: 4,
    exam: "WBJEE",
    desc: "West Bengal Engineering Exam",
    tags: ["WB", "Engineering"],
    route: "/exam/wbjee",
    logo: "🧭",
  },
  {
    id: 5,
    exam: "OJEE",
    desc: "Odisha Joint Entrance Exam",
    tags: ["Odisha", "Engineering"],
    route: "/exam/ojee",
    logo: "🌍",
  },
  {
    id: 6,
    exam: "BITSAT",
    desc: "Birla Institute Entrance Test",
    tags: ["BITS", "Private"],
    route: "/exam/bitsat",
    logo: "💎",
  },
  {
    id: 7,
    exam: "KCET",
    desc: "Karnataka Entrance Test",
    tags: ["Karnataka", "Engineering"],
    route: "/exam/kcet",
    logo: "🏁",
  },
];

export default function ExamTrack() {
  const navigate = useNavigate();

  return (
    <div className="roadmap-wrapper">

      {/* Back */}
      <button 
        className="page-back-btn"
        onClick={() => navigate("/dashboard")}
      >
        ← Back
      </button>

      {/* Heading */}
      <h1 className="roadmap-title">Exam Tracker</h1>

      {/* Card Grid */}
      <div className="roadmap-grid">
        {examCards.map((card) => (
          <div
            key={card.id}
            className="roadmap-card"
            onClick={() => navigate(card.route)}
          >
            <div className="card-top">
              <div className="card-logo">{card.logo}</div>
            </div>

            <p className="company-name">{card.exam}</p>
            <h3 className="role-name">{card.desc}</h3>

            <div className="card-tags">
              {card.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>

            <div className="card-divider"></div>

            <div className="card-bottom">
              <p>Tap to open</p>
              <button className="apply-btn-small">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
