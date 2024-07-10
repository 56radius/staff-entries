import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing the main components
import SplashScreen from "./components/SplashScreen";
import LoginScreen from "./components/LoginScreen";
import SignupScreen from "./components/SignupScreen";

// Importing dashboard components
import QuestionDashboardScreen from "./components/Dashboard/QuestionDashboardScreen";
import AssessmentQuestionsScreen from "./components/Dashboard/AssessmentQuestionsScreen";
import HelpSupportScreen from "./components/Dashboard/HelpSupportScreen";
import ProfileScreen from "./components/Dashboard/ProfileScreen";
import NotificationScreen from "./components/Dashboard/NotificationScreen";

// Importing Admin components
import AdminDashboardScreen from "./components/Admin/AdminDashboardScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={showSplash ? <SplashScreen /> : <LoginScreen />}
          />
          <Route path="/register" element={<SignupScreen />} />
          <Route path="/dashboard" element={<QuestionDashboardScreen />} />
          <Route path="/assessment/:serviceId" element={<AssessmentQuestionsScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/notification" element={<NotificationScreen />} />
          <Route path="/help" element={<HelpSupportScreen />} />
          <Route path="/admin" element={<AdminDashboardScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
