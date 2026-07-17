import { Calculator, FileText, TrendingUp, Settings, Clock, Shield } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Calculator,
    title: "Monthly Bookkeeping",
    description: "Comprehensive monthly bookkeeping services to keep your finances organized and up-to-date.",
    features: [
      "Transaction categorization & reconciliation",
      "Bank & credit card statement reconciliation",
      "Monthly financial statements (P&L, Balance Sheet)",
      "Accounts payable & receivable tracking",
      "Ongoing email support"
    ],
    price: "Starting at $299/month"
  },
  {
    icon: FileText,
    title: "Cleanup Services",
    description: "Behind on your books? I'll get you caught up and organized, no matter how far behind you are.",
    features: [
      "Historical transaction review & categorization",
      "Bank reconciliation for past months",
      "Error correction & adjustments",
      "Clean, organized books ready for ongoing service",
      "One-time flat fee based on complexity"
    ],
    price: "Custom quote"
  },
  {
    icon: Settings,
    title: "Setup & Training",
    description: "Getting started with QuickBooks? I'll set up your account and teach you the basics.",
    features: [
      "QuickBooks Online account setup",
      "Chart of accounts customization",
      "Bank & credit card connections",
      "Basic training session (1 hour)",
      "Customized for your business type"
    ],
    price: "$199 one-time"
  },
  {
    icon: TrendingUp,
    title: "Financial Reports",
    description: "Clear, easy-to-understand reports that help you make informed business decisions.",
    features: [
      "Monthly profit & loss statements",
      "Balance sheets",
      "Cash flow reports",
      "Custom reports upon request",
      "Year-end reporting packages"
    ],
    price: "Included with monthly service"
  },
  {
    icon: Clock,
    title: "Quarterly Reviews",
    description: "In-depth quarterly financial reviews to track your business performance and plan ahead.",
    features: [
      "Quarterly financial summary",
      "Trend analysis & insights",
      "Tax preparation support",
      "Business performance recommendations",
      "30-minute review call"
    ],
    price: "Add-on available"
  },
  {
    icon: Shield,
    title: "Year-End Support",
    description: "Comprehensive year-end support to ensure a smooth transition and tax preparation.",
    features: [
      "Year-end financial statements",
      "1099 preparation support",
      "Accountant liaison services",
      "Clean books for tax filing",
      "Annual business review"
    ],
    price: "Included with monthly service"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A1A1A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Services Built for <span className="text-[#DC2626]">Small Business</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From monthly bookkeeping to financial cleanup, I offer comprehensive services 
            tailored to help your business stay organized and grow.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-[#DC2626]/10 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="text-[#DC2626]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-3 text-sm text-gray-600">
                      <span className="text-[#DC2626] mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-[#DC2626] font-semibold">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Industries I Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I work with a variety of small businesses across Denver and beyond.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Retail & E-commerce",
              "Professional Services",
              "Contractors & Trades",
              "Restaurants & Food",
              "Health & Wellness",
              "Creative Agencies",
              "Real Estate",
              "Consultants"
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-[#1A1A1A]">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Tools I Use
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proficient in industry-standard accounting software and tools.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "QuickBooks Online",
              "Xero",
              "Gusto",
              "Bill.com",
              "Hubdoc",
              "Google Workspace"
            ].map((tool, index) => (
              <div key={index} className="bg-gray-100 rounded-full px-8 py-4">
                <span className="font-medium text-[#1A1A1A]">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#DC2626]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s chat about your business and find the right solution for you.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#DC2626] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
