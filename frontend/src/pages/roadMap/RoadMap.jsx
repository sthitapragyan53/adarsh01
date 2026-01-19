import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./roadMap.css";

const roadmapCards = [
  {
    id: 1,
    company: "Amazon",
    role: "Senior UI/UX Designer",
    type: ["Part-Time", "Senior Level"],
    price: "$120/hr",
    location: "Mumbai, India",
    logo: "🅰️",
  },
  {
    id: 2,
    company: "Google",
    role: "Graphic Designer",
    type: ["Part-Time", "Flexible Schedule"],
    price: "$150 - 220k",
    location: "Kochi, India",
    logo: "🅶",
  },
  {
    id: 3,
    company: "Dribbble",
    role: "Senior Motion Designer",
    type: ["Contract", "Remote"],
    price: "$85/hr",
    location: "Chennai, India",
    logo: "🏀",
  },
  {
    id: 4,
    company: "Figma",
    role: "UX Designer",
    type: ["Full-Time", "In office"],
    price: "$200 - 250k",
    location: "Bangalore, India",
    logo: "🎨",
  },
  {
    id: 5,
    company: "Airbnb",
    role: "Junior UI/UX Designer",
    type: ["Contract", "Remote"],
    price: "$100/hr",
    location: "Delhi, India",
    logo: "🏠",
  },
  {
    id: 6,
    company: "Apple",
    role: "Graphic Designer",
    type: ["Full-Time", "Flexible Schedule"],
    price: "$85 - 120k",
    location: "Kerala, India",
    logo: "🍎",
  },
];

export default function RoadMap() {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState([]);

  function toggleComplete(id) {
    setCompleted((prev) =>
      prev.includes(id)
        ? prev.filter((c) => c !== id)
        : [...prev, id]
    );
  }

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
      <h1 className="roadmap-title">Road Map</h1>

      {/* Cards Grid */}
      <div className="roadmap-grid">
        {roadmapCards.map((card) => (
          <div
            key={card.id}
            className={`roadmap-card ${
              completed.includes(card.id) ? "completed" : ""
            }`}
            onClick={() => toggleComplete(card.id)}
          >
            {/* Top Section */}
            <div className="card-top">
              <div className="card-logo">{card.logo}</div>
              <div className="save-status">
                {completed.includes(card.id) ? "Saved ✓" : "Save"}
              </div>
            </div>

            {/* Company + Role */}
            <p className="company-name">{card.company}</p>
            <h3 className="role-name">{card.role}</h3>

            {/* Tags */}
            <div className="card-tags">
              {card.type.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            {/* Divider */}
            <div className="card-divider"></div>

            {/* Bottom Section */}
            <div className="card-bottom">
              <div>
                <strong>{card.price}</strong>
                <p>{card.location}</p>
              </div>
              <button className="apply-btn-small">
                Apply now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
