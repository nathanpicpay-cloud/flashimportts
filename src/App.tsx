/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import LookBuilder from './components/LookBuilder';
import SocialProof from './components/SocialProof';
import AboutCTA from './components/AboutCTA';
import NeonParticles from './components/NeonParticles';
import AdminDashboard from './components/AdminDashboard';

function LandingPage() {
  return (
    <>
      <NeonParticles />
      <Navbar />
      <main className="w-full">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <LookBuilder />
        <SocialProof />
      </main>
      <AboutCTA />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen text-white font-body selection:bg-[#FFC107] selection:text-black">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
