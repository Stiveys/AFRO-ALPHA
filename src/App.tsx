import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BrandProtectionPage from './pages/services/BrandProtectionPage';
import MysteryShoppingPage from './pages/services/MysteryShoppingPage';
import AntiCounterfeitingPage from './pages/services/AntiCounterfeitingPage';
import BackgroundChecksPage from './pages/services/BackgroundChecksPage';
import IllegalImportsPage from './pages/services/IllegalImportsPage';
import FraudInvestigationPage from './pages/services/FraudInvestigationPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/brand-protection" element={<BrandProtectionPage />} />
          <Route path="/services/mystery-shopping" element={<MysteryShoppingPage />} />
          <Route path="/services/anti-counterfeiting" element={<AntiCounterfeitingPage />} />
          <Route path="/services/background-checks" element={<BackgroundChecksPage />} />
          <Route path="/services/illegal-imports" element={<IllegalImportsPage />} />
          <Route path="/services/fraud-investigation" element={<FraudInvestigationPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;