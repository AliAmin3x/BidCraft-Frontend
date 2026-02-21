import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HeroWavesTopGradient from '../components/HeroWavesTopGradient'

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "10 Proposals / month",
      "Manual follow-ups",
      "Basic tracking dashboard",
      "Basic analytics",
      "1 Platform (Upwork only)",
      "Email support"
    ],
    highlight: false
  },
  {
    name: "Pro",
    price: "$19/month",
    features: [
      "100 Proposals / month",
      "5 Automated follow-ups",
      "Advanced analytics",
      "Multi-platform support",
      "AI tone optimization",
      "Proposal templates",
      "Priority support"
    ],
    highlight: true
  },
  {
    name: "Premium",
    price: "$39/month",
    features: [
      "Unlimited Proposals",
      "Unlimited automated follow-ups",
      "Advanced AI rewriting",
      "A/B testing proposals",
      "Full analytics dashboard",
      "CRM export",
      "Team collaboration (3 users)",
      "Premium support"
    ],
    highlight: false
  }
];

const Pricing = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <Navbar />
      <div className="relative flex-1 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <HeroWavesTopGradient />
        </div>

        {/* Content — centered vertically and horizontally */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-4">
          <h1 className="text-4xl font-bold text-white underline mb-6">
            Pricing Plans
          </h1>

          <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 shadow-lg transition transform hover:scale-101
                  ${plan.highlight
                    ? "bg-blue-600 text-white border-4 border-blue-400"
                    : "bg-white text-gray-800"
                  }`}
              >
                <h2 className="text-2xl font-bold text-center">{plan.name}</h2>
                <p className="text-center text-3xl font-extrabold mt-2">{plan.price}</p>

                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="mr-2">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate('/login')}
                  className={`mt-6 w-full py-2.5 rounded-xl font-semibold transition
                    ${plan.highlight
                      ? "bg-white text-blue-600 hover:bg-gray-200"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing