import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PasswordReset from "./pages/PasswordReset";
import Pricing from "./pages/Pricing";
import DashboardLayout from "./Layout/DashboardLayout";
import Dashboard from "./pages/DashboardPages/Dashboard";
import Analytics from "./pages/DashboardPages/Analytics";
import Settings from "./pages/DashboardPages/Settings";
import FollowUps from "./pages/DashboardPages/FollowUps";
import MyProposals from "./pages/DashboardPages/MyProposals";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/password-reset" element={<PasswordReset />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/dashboard-layout" element={<DashboardLayout />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
         <Route path="/analytics" element={<Analytics />}/>
         <Route path="/settings" element={<Settings />}/>
         <Route path="/follow-ups" element={<FollowUps />}/>
         <Route path="/my-proposals" element={<MyProposals />}/>
      </Routes>
    </Router>
  );
}

export default App;
