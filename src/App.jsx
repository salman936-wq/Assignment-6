import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/herosection/HeroSection";
import Stats from "./components/stats/Stats";
import MainSection from "./components/mainSection/MainSection";
import Steps from "./components/steps/Steps";
import Pricing from "./components/pricing/Pricing";
import Cta from "./components/cta/Cta";
import Footer from "./components/footer/Footer";


const fetchProductData = fetch("/productData.json").then(ok => ok.json());







export default function DigiToolsLanding() {
  const [activeTab, setActiveTab] = useState(true);
  
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Navbar */}
      <Navbar></Navbar>

      {/* Hero */}
      <HeroSection></HeroSection>

      {/* Stats Banner */}
      <Stats></Stats>

      {/* Products Section */}
      <MainSection activeTab={activeTab} setActiveTab={setActiveTab} fetchProductData={fetchProductData}></MainSection>

      {/* Steps Section */}
      <Steps></Steps>

      {/* Pricing Section */}
      <Pricing></Pricing>

      {/* CTA Banner */}
      <Cta></Cta>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}