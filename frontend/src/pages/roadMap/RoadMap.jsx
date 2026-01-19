import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./roadMap.css";

const roadmapSteps = [
  {
    id: 1,
    title: "Destination",
    content: "Final project deployment and launch."
  },
  {
    id: 2,
    title: "Turn left in 300M",
    subtitle: "St. Peter Street",
    content: "Complete UI Design and Layout structure."
  },
  {
    id: 3,
    title: "56 km/h",
    content: "Develop core React components."
  },
  {
    id: 4,
    title: "20 minutes",
    content: "Integrate APIs and finalize features."
  }
];

export default function RoadMap() {
  const [activeStep, setActiveStep] = useState(1);
  const [checkedSteps, setCheckedSteps] = useState([]);

  function toggleCheck(id) {
    setCheckedSteps((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }

  return (
    <div className="roadmap-page">

      {/* Page Heading */}
      <h1 className="roadmap-title">Road Map</h1>

      <div className="roadmap-container">

        {/* ===== Left Progress Tracker ===== */}
        <div className="roadmap-tracker">
          {roadmapSteps.map((step, index) => (
            <div key={step.id} className="tracker-item">

              {/* Circle */}
              <div
                className={`tracker-circle 
                  ${activeStep === step.id ? "active" : ""}
                  ${checkedSteps.includes(step.id) ? "checked" : ""}
                `}
                onClick={() => setActiveStep(step.id)}
              >
                {checkedSteps.includes(step.id) && "✓"}
              </div>

              {/* Line */}
              {index !== roadmapSteps.length - 1 && <div className="tracker-line"></div>}

              {/* Label */}
              <div className="tracker-text">
                <p>{step.title}</p>
                {step.subtitle && <span>{step.subtitle}</span>}
              </div>

              {/* Check Toggle */}
              <input
                type="checkbox"
                checked={checkedSteps.includes(step.id)}
                onChange={() => toggleCheck(step.id)}
              />
            </div>
          ))}
        </div>

        {/* ===== Right Content Section ===== */}
        <div className="roadmap-content">
          {
            roadmapSteps.find((s) => s.id === activeStep)?.content
          }
        </div>

      </div>
    </div>
  );
}
