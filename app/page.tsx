import Link from "next/link";
import { ArrowRight, CheckCircle, Calculator, FileText, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-[#DC2626]/20 text-[#DC2626] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-[#DC2626] rounded-full animate-pulse"></span>
                <span>Now serving Denver small businesses</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Books,{" "}
                <span className="text-[#DC2626]">Handled.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
                Professional bookkeeping services for small businesses. 
                Accurate, timely, and stress-free — so you can focus on what you do best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-[#DC2626] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-[#DC2626] hover:text-[#DC2626] transition-colors text-center"
                >
                  View Services
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-[#DC2626]" />
                  <span>QuickBooks Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-[#DC2626]" />
                  <span>Denver Local</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-[#DC2626]/20 rounded-full absolute blur-3xl"></div>
                <div className="relative bg-[#2A2A2A] rounded-2xl p-8 border border-gray-700">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-[#DC2626] rounded-xl flex items-center justify-center">
                      <Calculator className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Monthly Savings</p>
                      <p className="text-2xl font-bold text-white">$2,450</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-[#1A1A1A] rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Revenue</span>
                        <span className="text-green-400 text-sm">+12%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div className="bg-[#1A1A1A] rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Expenses</span>
                        <span className="text-[#DC2626] text-sm">-8%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-[#DC2626] h-2 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              Services Built for Small Business
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From monthly bookkeeping to financial cleanup, I help you stay organized and make informed decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#DC2626]/10 rounded-xl flex items-center justify-center mb-6">
                <Calculator className="text-[#DC2626]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Monthly Bookkeeping</h3>
              <p className="text-gray-600 mb-4">
                Regular transaction categorization, reconciliations, and financial statements delivered monthly.
              </p>
              <Link href="/services" className="text-[#DC2626] font-medium hover:text-red-700 flex items-center space-x-1">
                <span>Learn more</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#DC2626]/10 rounded-xl flex items-center justify-center mb-6">
                <FileText className="text-[#DC2626]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Cleanup Services</h3>
              <p className="text-gray-600 mb-4">
                Behind on your books? I&apos;ll organize your historical data and get you caught up quickly.
              </p>
              <Link href="/services" className="text-[#DC2626] font-medium hover:text-red-700 flex items-center space-x-1">
                <span>Learn more</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#DC2626]/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="text-[#DC2626]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Financial Reports</h3>
              <p className="text-gray-600 mb-4">
                Clear, easy-to-understand reports that help you track performance and plan for growth.
              </p>
              <Link href="/services" className="text-[#DC2626] font-medium hover:text-red-700 flex items-center space-x-1">
                <span>Learn more</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting started is simple. Three steps to stress-free bookkeeping.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Free Consultation</h3>
              <p className="text-gray-600">
                We&apos;ll discuss your business needs and determine the best plan for your bookkeeping.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Setup & Onboarding</h3>
              <p className="text-gray-600">
                I&apos;ll connect your accounts and set up your books for accurate, ongoing tracking.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Monthly Updates</h3>
              <p className="text-gray-600">
                Receive regular financial reports and have confidence your books are always up to date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kasen */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-[#DC2626]">Kasen?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Detail-Oriented</h3>
                    <p className="text-gray-400">Every transaction matters. I ensure your books are accurate to the penny.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Tech-Savvy</h3>
                    <p className="text-gray-400">Proficient in QuickBooks Online and modern accounting tools.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Local & Accessible</h3>
                    <p className="text-gray-400">Denver-based and available for in-person meetings when needed.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Team Player</h3>
                    <p className="text-gray-400">Years of soccer taught me discipline, communication, and dedication.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#2A2A2A] rounded-2xl p-8">
              <blockquote className="text-xl italic text-gray-300 mb-6">
                &quot;I started Kasen&apos;s Cash Flow because I saw small business owners struggling with their books. 
                As someone who loves numbers and helping others, this was the perfect way to combine my passions.&quot;
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-[#DC2626] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Kasen</p>
                  <p className="text-gray-400 text-sm">Founder, Kasen&apos;s Cash Flow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#DC2626]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Your Books in Order?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s chat about how I can help your business thrive with organized, accurate financials.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#DC2626] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <span>Schedule a Free Consultation</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
