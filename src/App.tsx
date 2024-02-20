import { useEffect } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import { useAuth } from "./hooks/useAuth";

// pages
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";
import Forgot from "./pages/authentication/Forgot";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Legal from "./pages/Legal";
// import Statistics from "./pages/Statistics";
import Contests from "./pages/Contests";
import Affiliates from "./pages/Affiliates";
import Leaderboards from "./pages/Leaderboards";
import CompetitionsWeb from "./pages/Competitions";
import CertificatesWeb from "./pages/Certificates";
import Terms from "./pages/Terms";
import Returns from "./pages/Returns";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import Cookie from "./pages/Cookie";

// components
import WebHeader from "./components/WebHeader";
import WebFooter from "./components/WebFooter";
import Statistics from "./components/Statistics";
import { Layout } from "./components/Layout/Layout";

import Competitions from "./components/Competitions";
import Leaderboard from "./components/LeaderBoard/Leaderboard";
import Certificates from "./components/Certificates";
import Billing from "./components/Billing";
import AffiliatePortal from "./components/AffiliatePortal";
import Dashboard from "./components/Dashboard";
import RegistrationDetails from "./components/RegistrationDetails";
import Profit from "./components/Profit";
import Faq from "./components/Faq";
import HowITWorks from "./components/HowITWorks";
import Profile from "./components/Profile";
import Friends from "./components/Friends";
import StatisticsWeb from "./components/StatisticsWeb";
import BillingWeb from "./components/BillingWeb";

import "./App.css";

const WebRoutes = () => (
  <Routes>
    <Route path="/sign-up" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgot-password" element={<Forgot />} />
    <Route path="/" element={<Landing />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/faqs" element={<Faqs />} />
    <Route path="/legal" element={<Legal />} />
    <Route path="/statistics" element={<StatisticsWeb />} />
    <Route path="/challenge-pricing" element={<BillingWeb />} />
    <Route path="/affiliate-portal" element={<Affiliates />} />
    <Route path="/contests" element={<Contests />} />
    <Route path="/leaderboards" element={<Leaderboards />} />
    <Route path="/competitions" element={<CompetitionsWeb />} />
    <Route path="/certificates" element={<CertificatesWeb />} />
    <Route path="/terms-and-conditions" element={<Terms />} />
    <Route path="/return-policy" element={<Returns />} />
    <Route path="/privacy-policy" element={<Privacy />} />
    <Route path="/disclaimer" element={<Disclaimer />} />
    <Route path="/cookie-policy" element={<Cookie />} />
    <Route path="*" element={<Navigate to="/web" />} />
  </Routes>
);

function App() {
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    console.log("Is logged in?", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <HashRouter>
        {/* {window.location.pathname.includes("/web") && <WebHeader />} */}
        {/* {isLoggedIn && window.location.pathname.includes("/web") && ( */}
        {!isLoggedIn && <WebHeader />}
        <Routes>
          <Route path="/web/*" element={<WebRoutes />} />
          <Route
            path="/registration-details"
            element={<RegistrationDetails />}
          />
          <Route
            path="/*"
            element={
              <Layout
                children={
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/statistics" element={<Statistics />} />
                    <Route path="/competitions" element={<Competitions />} />
                    <Route path="/leaderboards" element={<Leaderboard />} />
                    <Route path="/certificates" element={<Certificates />} />
                    <Route path="/billing" element={<Billing />} />
                    <Route path="/withdrawal" element={<Profit />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/howitworks" element={<HowITWorks />} />
                    <Route
                      path="/affiliate-portal"
                      element={<AffiliatePortal />}
                    />
                  </Routes>
                }
              />
            }
          />
        </Routes>
        {/* {window.location.pathname.includes("/web") && <WebFooter />} */}
        {!isLoggedIn && <WebFooter />}
      </HashRouter>
    </>
  );
}

export default App;
