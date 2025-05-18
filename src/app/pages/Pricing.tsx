import { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      price: {
        monthly: 29,
        annual: 290
      },
      description: "Perfect for individuals and small projects",
      features: [
        "5 Projects",
        "10GB Storage",
        "Basic Analytics",
        "24/7 Support",
        "API Access"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: {
        monthly: 79,
        annual: 790
      },
      description: "Ideal for growing businesses",
      features: [
        "Unlimited Projects",
        "50GB Storage",
        "Advanced Analytics",
        "Priority Support",
        "API Access",
        "Custom Integrations"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: {
        monthly: 199,
        annual: 1990
      },
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited Everything",
        "500GB Storage",
        "Custom Analytics",
        "Dedicated Support",
        "API Access",
        "Custom Integrations",
        "SLA Guarantee",
        "Custom Solutions"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-2 sm:py-12 sm:px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Simple, Transparent Pricing</h1>
          <p className="text-base sm:text-xl text-gray-600">Choose the perfect plan for your needs</p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center mb-8 sm:mb-12">
          <span className={`text-xs sm:text-sm ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="mx-2 sm:mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-black"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                isAnnual ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-xs sm:text-sm ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Annual <span className="text-green-500">(Save 20%)</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl ${
                plan.highlighted
                  ? 'bg-black text-white shadow-xl transform scale-100 sm:scale-105'
                  : 'bg-white text-gray-900 shadow-lg'
              } p-6 sm:p-8 flex flex-col h-full`}
            >
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{plan.name}</h2>
                <p className={`${plan.highlighted ? 'text-blue-100' : 'text-gray-600'} text-sm sm:text-base`}>
                  {plan.description}
                </p>
              </div>
              <div className="mb-6 sm:mb-8">
                <span className="text-3xl sm:text-4xl font-bold">
                  ${isAnnual ? plan.price.annual : plan.price.monthly}
                </span>
                <span className={`${plan.highlighted ? 'text-blue-100' : 'text-gray-600'} text-sm sm:text-base`}>
                  /{isAnnual ? 'year' : 'month'}
                </span>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-xs sm:text-base">
                    <svg
                      className={`h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 ${
                        plan.highlighted ? 'text-blue-200' : 'text-black'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-black hover:bg-blue-50'
                    : 'bg-black text-white hover:bg-black'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-12 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Can I change plans later?</h3>
              <p className="text-gray-600 text-xs sm:text-base">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600 text-xs sm:text-base">
                We accept all major credit cards, PayPal, and bank transfers for annual plans.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Is there a free trial?</h3>
              <p className="text-gray-600 text-xs sm:text-base">
                Yes, we offer a 14-day free trial on all plans. No credit card required to start.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600 text-xs sm:text-base">
                Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;