import React from "react";
import "./flashCards.css";
import { useNavigate } from "react-router-dom";

const cards = [
  { title: "Hnbl Tone Analyzer", desc: "Analyze your writing tone instantly." },
  { title: "SEO Analyzer Optimizer", desc: "Boost your SEO performance." },
  { title: "Content Optimizer", desc: "Optimize content for engagement." },
  { title: "Pond Neceind", desc: "Smart AI writing assistant." },
  { title: "Poat Fhuin Fielcing", desc: "Creative text enhancement." },
  { title: "Gujot Guiid Bucuzcx", desc: "Grammar correction tool." },
  { title: "Sudiccitt pry Optimizer", desc: "Content polishing AI." },
  { title: "Soog Miucl tio, Epciozer", desc: "Marketing optimization suite." },
  { title: "Cooluen Apo Opclent Oon", desc: "Productivity booster." },
  { title: "Pone Cone Urvouine", desc: "Smart workflow tool." },
  { title: "Coquamod Opainizer", desc: "AI content generator." },
  { title: "Wiun Then Roding Oup", desc: "Automation assistant." },
];

const FlashCards = () => {
  return (
    <div className="page">
      <div className="grid">
        {cards.map((card, index) => (
          <div className="glass-card" key={index}>
            <div className="icon">⚡</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <button>Learn more</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashCards;
