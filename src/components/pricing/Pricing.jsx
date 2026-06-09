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

const Pricing = () => {
  return (


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
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 shrink-0 ${plan.popular ? "text-purple-200" : "text-purple-500"}`} viewBox="0 0 20 20" fill="currentColor">
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
  );
};

export default Pricing;