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
import JeeAdvanceSubject from "./pages/jeeAdvance/JeeAdvanceSubject";
import JeeAdvanceChapterDetail from "./pages/jeeAdvance/JeeAdvanceChapterDetail";


///// WBjee //////
import WBJEE from "./pages/WBJEE/Wbjee";
import WBJEESubject from "./pages/WBJEE/WbjeeSubject";
import WBJEEChapterDetail from "./pages/WBJEE/WbjeeChapterDetails";


///// NDA //////
import NDA from "./pages/NDA/Nda";
import NDASubject from "./pages/NDA/NdaSubject";
import NDAChapterDetail from "./pages/NDA/NdaChapterDetail";


///// Neet //////
import NEET from "./pages/NEET/Neet";
import NEETSubject from "./pages/NEET/NeetSubject";
import NEETChapterDetail from "./pages/NEET/NeetChapterDetail";



///// ojee //////

import OJEE from "./pages/OJEE/Ojee";
import OJEESubject from "./pages/OJEE/OjeeSubject";
import OJEEChapterDetail from "./pages/OJEE/OjeeChapterDetail";

///// Niser //////

import NISER from "./pages/NISER/Niser";
import NISERSubject from "./pages/NISER/NiserSubject";
import NISERChapterDetail from "./pages/NISER/NiserChapterDetail";

///// Kvpy //////
import KVPY from "./pages/KVPY/Kvpy";
import KVPYSubject from "./pages/KVPY/KvpySubject";
import KVPYChapterDetail from "./pages/KVPY/KvpyChapterDetail";

///// kcet //////
import KCET from "./pages/KCET/Kcet";
import KCETSubject from "./pages/KCET/KcetSubject";
import KCETChapterDetail from "./pages/KCET/KcetChapterDetail";








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



<Route
  path="/exam/jee-Advance/:subject"
  element={
    <ProtectedRoute>
      <JeeAdvanceSubject />
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



{/* =====  Wbjee  ===== */}
<Route
  path="/exam/wbjee"
  element={
    <ProtectedRoute>
      <WBJEE />
    </ProtectedRoute>
  }
/>

<Route
  path="/exam/wbjeeSubject/:subject"
  element={
    <ProtectedRoute>
      < WBJEESubject />
    </ProtectedRoute>
  }
/>

<Route
  path="/exam/WbjeeChapter/:subject/:chapterId"
  element={
    <ProtectedRoute>
      <WBJEEChapterDetail />
    </ProtectedRoute>
  }
/>



{/* =====  OJEE  ===== */}
<Route
  path="/exam/ojee"
  element={
    <ProtectedRoute>
      <OJEE />
    </ProtectedRoute>
  }
/>

<Route
  path="/exam/ojeeSubject/:subject"
  element={
    <ProtectedRoute>
      <OJEESubject />
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



{/* =====  NISER  ===== */}
<Route
  path="/exam/niser"
  element={
    <ProtectedRoute>
      <NISER />
    </ProtectedRoute>
  }
/>

<Route
  path="/exam/niserSubject/:subject"
  element={
    <ProtectedRoute>
      <NISERSubject />
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



{/* =====  NDA    ===== */}
<Route
  path="/exam/nda"
  element={
    <ProtectedRoute>
      <NDA />
    </ProtectedRoute>
  }
/>

<Route
  path="/exam/ndaSubject/:subject"
  element={
    <ProtectedRoute>
      <NDASubject />
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



{/* =====   NEET    ===== */}
<Route
  path="/exam/neet"
  element={
    <ProtectedRoute>
      <NEET />
    </ProtectedRoute>
  }
/>

<Route
  path="/exam/neetSubject/:subject"
  element={
    <ProtectedRoute>
      <NEETSubject />
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



{/* =====   kcet    ===== */}
<Route
  path="/exam/kcet"
  element={
    <ProtectedRoute>
      <KCET />
    </ProtectedRoute>
  }
/>

<Route
  path="/exam/KcetSubject/:subject"
  element={
    <ProtectedRoute>
      <KCETSubject />
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


{/* =====   KVPY    ===== */}
<Route
  path="/exam/kvpy"
  element={
    <ProtectedRoute>
      <KVPY />
    </ProtectedRoute>
  }
/>

<Route
  path="/exam/kvpySbject/:subject"
  element={
    <ProtectedRoute>
      <KVPYSubject />
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










       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
