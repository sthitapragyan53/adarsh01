import React, { useState } from "react";
import "./flashCards.css";

const cards = [
  {
    title: "Web Designer",
    desc: "UI/UX and website design work.",
    icon: "🎨",
    price: "$85 - 120",
    type: "Part-Time",
    mode: "Remote",
    time: "5 days ago",
  },
  {
    title: "SEO Optimizer",
    desc: "Improve search rankings.",
    icon: "🔍",
    price: "$60 - 100",
    type: "Full-Time",
    mode: "Remote",
    time: "2 days ago",
  },
  {
    title: "Content Creator",
    desc: "Write engaging content.",
    icon: "📝",
    price: "$40 - 80",
    type: "Part-Time",
    mode: "On-site",
    time: "1 day ago",
  },
];

export default function FlashCards() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      <div className="page">
        <div className="grid">
          {cards.map((card, index) => (
            <div
              className="glass-card"
              key={index}
              onClick={() => setSelectedCard(card)}
            >
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <button>Learn more</button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button
              className="close-btn"
              onClick={() => setSelectedCard(null)}
            >
              ✖
            </button>

            <div className="modal-header">
              <div className="logo">◉◉</div>
              <span className="time">{selectedCard.time}</span>
            </div>

            <h2>{selectedCard.title}</h2>

            <div className="tags">
              <span>{selectedCard.type}</span>
              <span>{selectedCard.mode}</span>
            </div>

            <div className="modal-footer">
              <div>
                <h3>{selectedCard.price}</h3>
                <p>Per every hour</p>
              </div>

              <button className="apply-btn">Apply now</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
