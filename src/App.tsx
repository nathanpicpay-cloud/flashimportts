/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LookBuilder from './components/LookBuilder';
import ReadyOutfits from './components/ReadyOutfits';
import FeaturedProducts from './components/FeaturedProducts';
import SocialProof from './components/SocialProof';
import AboutCTA from './components/AboutCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-body selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      <main className="pb-12 lg:space-y-4">
        <Hero />
        <LookBuilder />
        <ReadyOutfits />
        <FeaturedProducts />
        <SocialProof />
      </main>
      <AboutCTA />
    </div>
  );
}
