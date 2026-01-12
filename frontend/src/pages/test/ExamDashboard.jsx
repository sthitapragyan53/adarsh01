import React from 'react';
import './examDashboard.css';

const subjects = ['Math', 'Science', 'English', 'Social Science'];

const ExamDashboard = () => {
  return (
    <div className="page-wrapper">
      <div className="main-content-box">
        <header className="header-section">
          <div className="header-left">
            <h1>Class 12</h1>
            <span className="sub-badge">Board Exam</span>
          </div>
          <h2 className="header-right">Test</h2>
        </header>

        <main className="test-grid-container">
          <section className="category-block">
            <h3>Chapter wise test</h3>
            <div className="button-group">
              {subjects.map((item) => (
                <button key={item} className="glass-btn">{item}</button>
              ))}
            </div>
          </section>

          <section className="category-block">
            <h3>Medium test</h3>
            <div className="button-group">
              {subjects.map((item) => (
                <button key={item} className="glass-btn">{item}</button>
              ))}
            </div>
          </section>

          <section className="category-block">
            <h3>Full test</h3>
            <div className="placeholder-box">
              COMING SOON
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ExamDashboard;