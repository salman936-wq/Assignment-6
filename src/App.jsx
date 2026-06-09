import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/herosection/HeroSection";
import Stats from "./components/stats/Stats";
import MainSection from "./components/mainSection/MainSection";
import Steps from "./components/steps/Steps";


const fetchProductData = fetch("/productData.json").then(ok => ok.json());



const PLANS = [
  {
    name: "Starter",
    tagline: "Perfect for getting started",
    price: "$0",
    period: "/Month",
    popular: false,
    cta: "Get Started Free",
    ctaClass: "btn-outline border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white",
    features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
  },
  {
    name: "Pro",
    tagline: "Best for professionals",
    price: "$29",
    period: "/Month",
    popular: true,
    cta: "Start Pro Trial",
    ctaClass: "btn-ghost border border-white text-white hover:bg-white hover:text-purple-700",
    features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
  },
  {
    name: "Enterprise",
    tagline: "For teams and businesses",
    price: "$99",
    period: "/Month",
    popular: false,
    cta: "Contact Sales",
    ctaClass: "btn-outline border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white",
    features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
  },
];

const FOOTER_LINKS = {
  Product: ["Features", "Pricing", "Templates", "Integrations"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "Help Center", "Community", "Contact"],
};

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
      <section className="py-20 px-6 lg:px-16 max-w-6xl mx-auto">
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-3xl font-extrabold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 text-sm">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`card rounded-2xl ${plan.popular ? "bg-purple-600 text-white shadow-xl scale-105" : "bg-white border border-gray-100 shadow-sm text-gray-900"} relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="badge bg-yellow-400 text-gray-900 border-none font-bold text-xs px-4 py-2 rounded-full">Most Popular</span>
                </div>
              )}
              <div className="card-body p-7 space-y-4">
                <div>
                  <h3 className={`font-extrabold text-xl ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                  <p className={`text-sm mt-1 ${plan.popular ? "text-purple-200" : "text-gray-400"}`}>{plan.tagline}</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-extrabold ${plan.popular ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? "text-purple-200" : "text-gray-400"}`}>{plan.period}</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${plan.popular ? "text-purple-100" : "text-gray-600"}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 flex-shrink-0 ${plan.popular ? "text-purple-200" : "text-purple-500"}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`btn w-full rounded-xl border ${plan.ctaClass}`}>{plan.cta}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-purple-600 py-20 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto space-y-5">
          <h2 className="text-3xl lg:text-4xl font-extrabold">Ready To Transform Your Workflow?</h2>
          <p className="text-purple-200 text-sm">
            Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <button className="btn bg-white text-purple-700 hover:bg-gray-100 border-none rounded-full px-7">Explore Products</button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-700 rounded-full px-7">View Pricing</button>
          </div>
          <p className="text-purple-300 text-xs">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 px-6 lg:px-16 py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 space-y-3">
            <span className="text-xl font-extrabold text-white">DigiTools</span>
            <p className="text-sm text-gray-500 leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group} className="space-y-3">
              <h4 className="text-white font-semibold text-sm">{group}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:text-purple-400 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm">Social Links</h4>
            <div className="flex gap-2">
              {["tw", "fb", "ig"].map((s) => (
                <button key={s} className="btn btn-sm btn-circle bg-gray-700 hover:bg-purple-600 border-none text-white text-xs">
                  {s === "tw" ? "𝕏" : s === "fb" ? "f" : "▶"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-10 pt-6 flex flex-col lg:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <span>©2026 DigiTools. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Cookie</a>
          </div>
        </div>
      </footer>
    </div>
  );
}