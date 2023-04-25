import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrameComponent from "./pages/FrameComponent";
import CarboncheckmarkFilled from "./pages/CarboncheckmarkFilled";
import InterfaceAwardTrophy from "./pages/InterfaceAwardTrophy";
import SelectHeight from "./pages/SelectHeight";
import SelectWeight from "./pages/SelectWeight";
import SelectGoalWeight from "./pages/SelectGoalWeight";
import Gender from "./pages/Gender";
import SelectLevel from "./pages/SelectLevel";
import SelectActivities from "./pages/SelectActivities";
import SelectActivities1 from "./pages/SelectActivities1";
import Workout1 from "./pages/Workout1";
import Congrats from "./pages/Congrats";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import Homepage from "./pages/Homepage";
import SignUpPage1 from "./pages/SignUpPage1";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/carboncheckmarkfilled":
        title = "";
        metaDescription = "";
        break;
      case "/interface-award-trophy":
        title = "";
        metaDescription = "";
        break;
      case "/10selectheight":
        title = "";
        metaDescription = "";
        break;
      case "/11selectweight":
        title = "";
        metaDescription = "";
        break;
      case "/12selectgoalweight":
        title = "";
        metaDescription = "";
        break;
      case "/08gender":
        title = "";
        metaDescription = "";
        break;
      case "/13selectlevel":
        title = "";
        metaDescription = "";
        break;
      case "/14selectactivities1":
        title = "";
        metaDescription = "";
        break;
      case "/14selectactivities":
        title = "";
        metaDescription = "";
        break;
      case "/workout-1":
        title = "";
        metaDescription = "";
        break;
      case "/congrats":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/leaderboard":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/signup-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FrameComponent />} />
      <Route
        path="/carboncheckmarkfilled"
        element={<CarboncheckmarkFilled />}
      />
      <Route
        path="/interface-award-trophy"
        element={<InterfaceAwardTrophy />}
      />
      <Route path="/10selectheight" element={<SelectHeight />} />
      <Route path="/11selectweight" element={<SelectWeight />} />
      <Route path="/12selectgoalweight" element={<SelectGoalWeight />} />
      <Route path="/08gender" element={<Gender />} />
      <Route path="/13selectlevel" element={<SelectLevel />} />
      <Route path="/14selectactivities1" element={<SelectActivities />} />
      <Route path="/14selectactivities" element={<SelectActivities1 />} />
      <Route path="/workout-1" element={<Workout1 />} />
      <Route path="/congrats" element={<Congrats />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/signup-page-1" element={<SignUpPage1 />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
