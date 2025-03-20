import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Courses from "./components/Courses";
import HowItWorks from "./components/HowItWorks";
import CareerRecommendation from "./components/CareerRecommendation";
import Partners from "./components/Partners";
import JoinUs from "./components/JoinUs";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import AuthPage from "./components/AuthPage";  // New Auth Page
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Landing Page Route */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <AboutUs />
              <CareerRecommendation />
              <Services />
              <Courses />
              <HowItWorks />
              <Partners />
              <JoinUs />
              <Newsletter />
              <Footer />
            </>
          }
        />

        {/* Authentication Route */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Protected Route - Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
