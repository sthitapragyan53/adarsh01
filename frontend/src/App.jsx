import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import GreetingPage2 from "./pages/greeting/GreetingPage2";
import Login from "./pages/auth/Login";
import CreateAccount from "./pages/auth/CreateAccount";
import ChooseBoard from "./pages/onboarding/ChooseBoard";
import MainPage from "./pages/main/MainPage";
import SubjectResources from "./pages/Chapters/SubjectResources";
import ChapterDetail from "./pages/Chapters/ChapterDetail";
import Dashboard from "./pages/dashboard/Dashboard";
import ExamDashboard from "./pages/test/ExamDashboard";
import FlashCards from "./pages/flashCard/FlashCards";
import Shortnotes from "./pages/shortnotes/Shortnotes";
import RoadMap from "./pages/roadMap/RoadMap";
import SamplePaper from "./pages/samplepaper/SamplePaper";
import ExamTrack from "./pages/examTracker/ExamTracker";


///// jee mains //////
import JeeMain from "./pages/jeeMains/JeeMains";
import JeeMainSubject from "./pages/jeeMains/JeeMainSubject";
import JeeMainChapterDetail from "./pages/jeeMains/JeeMainChapterDetail";


///// jee Advance //////

import JeeAdvance from "./pages/jeeAdvance/jeeAdvance";





import GoogleSuccess from "./pages/auth/GoogleSuccess";






import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/greet" replace />} />
        <Route path="/greet" element={<GreetingPage2 />} />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/create-account"
          element={
            <PublicRoute>
              <CreateAccount />
            </PublicRoute>
          }
        />

       <Route path="/google-success/*" element={<GoogleSuccess />} />



        <Route
          path="/choose-board"
          element={
            <ProtectedRoute>
              <ChooseBoard />
            </ProtectedRoute>
          }
        />

        {/* Main scroll page */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/class/:classLevel/:board/:subject"
          element={
            <ProtectedRoute>
              <SubjectResources />
            </ProtectedRoute>
          }
        />

         <Route
          path="/class/:classLevel/:board/:subject/:chapterId"
          element={
            <ProtectedRoute>
              <ChapterDetail />
            </ProtectedRoute>
          }
        />

         {/* ===== DASHBOARD ===== */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/exam-dashboard" element={<ExamDashboard />} />
        <Route path="/flashcards" element={<FlashCards />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/shortnotes" element={<Shortnotes />} />
        <Route path="/sample-papers" element={<SamplePaper />} />
        <Route path="/exam-tracker" element={<ExamTrack />} />




        {/* ===== JEE MAIN ROUTES ===== */}
<Route
  path="/exam/jee-main"
  element={
    <ProtectedRoute>
      <JeeMain />
    </ProtectedRoute>
  }
/>

<Route
  path="/exam/jee-main/:subject"
  element={
    <ProtectedRoute>
      <JeeMainSubject />
    </ProtectedRoute>
  }
/>

<Route
  path="/exam/jee-main/:subject/:chapterId"
  element={
    <ProtectedRoute>
      <JeeMainChapterDetail />
    </ProtectedRoute>
  }
/>


{/* ===== JEE  Advance ===== */}

<Route
  path="/exam/jee-advanced"
  element={
    <ProtectedRoute>
      <JeeAdvance />
    </ProtectedRoute>
  }
/>




       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
