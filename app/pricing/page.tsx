import { Check, X } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "Perfect for new businesses with simple needs",
    price: "$199",
    period: "/month",
    features: [
      { text: "Up to 100 transactions/month", included: true },
      { text: "Monthly bank reconciliation", included: true },
      { text: "Basic financial reports", included: true },
      { text: "Email support", included: true },
      { text: "1 bank account", included: true },
      { text: "Accounts payable tracking", included: false },
      { text: "Accounts receivable tracking", included: false },
      { text: "Quarterly reviews", included: false }
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Growth",
    description: "Ideal for growing small businesses",
    price: "$349",
    period: "/month",
    features: [
      { text: "Up to 300 transactions/month", included: true },
      { text: "Monthly bank reconciliation", included: true },
      { text: "Detailed financial reports", included: true },
      { text: "Priority email support", included: true },
      { text: "Up to 3 bank accounts", included: true },
      { text: "Accounts payable tracking", included: true },
      { text: "Accounts receivable tracking", included: true },
      { text: "Quarterly reviews", included: false }
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Professional",
    description: "For established businesses needing full service",
    price: "$549",
    period: "/month",
    features: [
      { text: "Unlimited transactions", included: true },
      { text: "Monthly bank reconciliation", included: true },
      { text: "Comprehensive financial reports", included: true },
      { text: "Priority phone & email support", included: true },
      { text: "Unlimited bank accounts", included: true },
      { text: "Full AP/AR management", included: true },
      { text: "Quarterly business reviews", included: true },
      { text: "Tax preparation support", included: true }
    ],
    cta: "Get Started",
    popular: false
  }
];

const addOns = [
  {
    name: "Cleanup Service",
    description: "Get your historical books organized and up-to-date",
    price: "Custom quote",
    note: "One-time fee based on months behind and complexity"
  },
  {
    name: "QuickBooks Setup",
    description: "Complete account setup tailored to your business",
    price: "$199",
    note: "One-time fee includes 1-hour training session"
  },
  {
    name: "Catch-up Bookkeeping",
    description: "Monthly catch-up for businesses falling behind",
    price: "$99/month",
    note: "Per additional month of catch-up work"
  },
  {
    name: "1099 Preparation",
    description: "End-of-year 1099 preparation and filing support",
    price: "$25",
    note: "Per 1099 form (Professional plan includes first 5)"
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A1A1A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent <span className="text-[#DC2626]">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No hidden fees, no surprises. Choose the plan that fits your business 
            and scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-[#1A1A1A] text-white ring-4 ring-[#DC2626] transform scale-105"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="inline-block bg-[#DC2626] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-[#1A1A1A]"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                  {plan.description}
                </p>
                <div className="mb-8">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-[#1A1A1A]"}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? "text-gray-300" : "text-gray-600"}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-3">
                      {feature.included ? (
                        <Check className={`flex-shrink-0 ${plan.popular ? "text-[#DC2626]" : "text-green-500"}`} size={20} />
                      ) : (
                        <X className="flex-shrink-0 text-gray-400" size={20} />
                      )}
                      <span className={feature.included 
                        ? (plan.popular ? "text-gray-200" : "text-gray-700")
                        : "text-gray-400"
                      }>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? "bg-[#DC2626] text-white hover:bg-red-700"
                      : "bg-[#1A1A1A] text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Additional Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Need something extra? These add-ons can be combined with any plan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-[#1A1A1A]">{addon.name}</h3>
                  <span className="text-[#DC2626] font-semibold">{addon.price}</span>
                </div>
                <p className="text-gray-600 mb-2">{addon.description}</p>
                <p className="text-sm text-gray-400">{addon.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "How do I know which plan is right for me?",
                a: "During our free consultation, we'll review your business needs, transaction volume, and complexity to recommend the best plan. You can always upgrade or downgrade as your business changes."
              },
              {
                q: "Are there any setup fees?",
                a: "No setup fees for ongoing monthly service! If you need historical cleanup or QuickBooks setup, those are one-time charges listed in our add-ons."
              },
              {
                q: "What if I go over my transaction limit?",
                a: "We'll notify you if you're approaching your limit. You can upgrade to the next plan or pay a small overage fee per additional transaction."
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes! Monthly plans can be canceled with 30 days notice. There are no long-term contracts or cancellation fees."
              },
              {
                q: "Do you offer discounts for annual payment?",
                a: "Yes! Pay annually and receive one month free — that's 12 months for the price of 11."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#DC2626]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s chat about your specific needs and find the perfect solution.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#DC2626] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
