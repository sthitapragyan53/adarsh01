import Header from "../../components/header/Header";
import Home from "../home/Home";
import Dashboard from "../dashboard/Dashboard";

export default function MainPage() {
  return (
    <>
      <Header />

      <main className="main">
        {/* Section 1: Home */}
        <section id="home-section">
          <Home />
        </section>

        {/* Section 2: Dashboard */}
        <section id="dashboard-section">
          <Dashboard />
        </section>

        {/* Later you can add more sections */}
        {/* <section><ExamTracker /></section> */}
        {/* <section><About /></section> */}
      </main>
    </>
  );
}
