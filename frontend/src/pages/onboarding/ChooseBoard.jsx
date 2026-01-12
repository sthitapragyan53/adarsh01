import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import "./chooseBoard.css";

export default function ChooseBoard() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const [selectedBoard, setSelectedBoard] = useState(null);
  const [loading, setLoading] = useState(false);

  const boards = [
    "CBSE", "ICSE", "CHSE", "State", "CGBSE", "COHSEM", "DHSE", "DPUE",
    "GBSHE", "GSEB", "HBSE", "HPBOSE", "HSE", "JAC", "MBOSE", "MBSE",
    "MPBSE", "MSBSHSE", "NBSE", "PSEB", "RBSE", "SBSE", "TBSE",
    "TSBIE", "UBSE", "UPMSP", "WBCHSE"
  ];

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  const handleBoardSelect = (board) => {
    setSelectedBoard(board);
  };

  const handleClassSelect = async (classLevel) => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await fetch(
        "http://localhost:5000/api/user/onboarding",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            board: selectedBoard,
            classLevel,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to save onboarding");
      }

      navigate("/home");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="board-wrapper">
      <div className="board-glass">

        {/* ================= STEP 1 ================= */}
        {!selectedBoard && (
          <>
            <h1>Choose Your Board</h1>
            <p className="subtitle">
              Select your education board to personalize your study experience.
            </p>

            <div className="scroll-wrapper">
              <button className="scroll-btn left" onClick={() => scroll("left")}>
                ‹
              </button>

              <div className="board-options" ref={scrollRef}>
                {boards.map((board) => (
                  <div
                    key={board}
                    className="board-card"
                    onClick={() => handleBoardSelect(board)}
                  >
                    <h3>{board}</h3>
                    <p>State-specific curriculum</p>
                  </div>
                ))}
              </div>

              <button className="scroll-btn right" onClick={() => scroll("right")}>
                ›
              </button>
            </div>
          </>
        )}

        {/* ================= STEP 2 ================= */}
        {selectedBoard && (
          <>
            <h1>Select Class</h1>
            <p className="subtitle">
              You selected <b>{selectedBoard}</b>. Now choose your class.
            </p>

            <div className="board-options class-grid">
              {["10", "11", "12"].map((cls) => (
                <div
                  key={cls}
                  className="board-card selected"
                  onClick={() => handleClassSelect(cls)}
                >
                  <h3>Class {cls}</h3>
                  <p>
                    {cls === "10"
                      ? "Secondary Level"
                      : cls === "11"
                      ? "Higher Secondary"
                      : "Board Examination Year"}
                  </p>
                </div>
              ))}
            </div>

            {loading && <p>Saving your preferences…</p>}
          </>
        )}

      </div>
    </div>
  );
}
