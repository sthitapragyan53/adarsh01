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
  const [activeCard, setActiveCard] = useState(null);
  const [checkedStep, setCheckedStep] = useState(false);

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

      {/* ===== Card Grid (UNCHANGED UI) ===== */}
      <div className="roadmap-grid">
        {roadmapCards.map((card) => (
          <div
            key={card.id}
            className={`roadmap-card ${
              completed.includes(card.id) ? "completed" : ""
            }`}
            onClick={() => {
              setActiveCard(card);
              setCheckedStep(completed.includes(card.id));
            }}
          >
            <div className="card-top">
              <div className="card-logo">{card.logo}</div>
              <div className="save-status">
                {completed.includes(card.id) ? "Saved ✓" : "Save"}
              </div>
            </div>

            <p className="company-name">{card.company}</p>
            <h3 className="role-name">{card.role}</h3>

            <div className="card-tags">
              {card.type.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <div className="card-divider"></div>

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

      {/* ===== Popup Roadmap Modal ===== */}
      {activeCard && (
        <div className="modal-overlay">
          <div className="nav-modal-card">

            {/* Close */}
            <button 
              className="close-btn"
              onClick={() => setActiveCard(null)}
            >
              ✖
            </button>

            {/* ===== Navigation Style Roadmap ===== */}
            <div className="map-ui">
              <div className="map-left">
                <div className="dot filled"></div>
                <div className="dashed-line"></div>
                <div className="dot ring"></div>
                <div className="dashed-line"></div>
                <div className="dot filled"></div>
              </div>

              <div className="map-text">
                <p className="map-title">Your Destination</p>
                <p className="map-step">
                  Turn Right in <strong>220M</strong>
                </p>
                <p className="map-speed">80 km/h</p>
              </div>

              <div className="map-route"></div>
            </div>

            {/* ===== Card Info + Checkbox ===== */}
            <div className="nav-info">
              <h2>{activeCard.role}</h2>
              <p>
                Navigate with precision using real-time roadmap guidance.
              </p>

              <label className="check-row">
                <input
                  type="checkbox"
                  checked={checkedStep}
                  onChange={() => {
                    setCheckedStep(!checkedStep);
                    toggleComplete(activeCard.id);
                  }}
                />
                Mark this step as completed
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
