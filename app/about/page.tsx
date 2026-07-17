import { GraduationCap, Target, Users, Award, MapPin, Mail } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A1A1A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Meet <span className="text-[#DC2626]">Kasen</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                High school senior, soccer enthusiast, and passionate bookkeeper helping 
                Denver small businesses thrive.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin size={18} />
                  <span>Denver, Colorado</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail size={18} />
                  <span>kasen@kasenscashflow.com</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-[#DC2626] rounded-full flex items-center justify-center">
                <span className="text-white text-8xl font-bold">K</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">My Story</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p className="mb-6">
              I&apos;m Kasen, a high school senior with a passion for numbers and helping others. 
              While my friends were figuring out what they wanted to do after graduation, 
              I was already helping local business owners organize their finances.
            </p>
            <p className="mb-6">
              It started when I noticed my uncle struggling to keep up with his construction 
              company&apos;s books. I offered to help, discovered I had a knack for it, and realized 
              there were probably dozens of other small business owners in the same boat.
            </p>
            <p className="mb-6">
              That&apos;s how Kasen&apos;s Cash Flow was born. I combine my love of accounting and math 
              with the discipline and teamwork I&apos;ve learned from years of playing soccer. 
              Just like on the field, I believe in clear communication, attention to detail, 
              and always giving 100%.
            </p>
            <p>
              When I&apos;m not balancing books, you can find me on the soccer field, studying 
              for my next accounting exam, or exploring Denver&apos;s coffee shops. I&apos;m excited 
              to help your business succeed!
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Me Apart */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
              What Sets Me Apart
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I bring a unique combination of skills and values to every client relationship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#DC2626]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="text-[#DC2626]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Always Learning</h3>
              <p className="text-gray-600">
                Currently studying accounting and business. I stay up-to-date with the latest 
                bookkeeping practices and software.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#DC2626]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-[#DC2626]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Detail-Oriented</h3>
              <p className="text-gray-600">
                Every penny matters. I have a meticulous approach to ensure your books 
                are accurate and organized.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#DC2626]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-[#DC2626]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Team Player</h3>
              <p className="text-gray-600">
                Years of soccer taught me communication and collaboration. I work with you, 
                not just for you.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#DC2626]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-[#DC2626]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Driven to Excel</h3>
              <p className="text-gray-600">
                Whether it&apos;s on the field or in your books, I bring dedication and a 
                competitive spirit to everything I do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Skills */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Education & Training</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-[#DC2626] pl-6">
                  <h3 className="font-bold text-[#1A1A1A] text-lg">High School Diploma</h3>
                  <p className="text-gray-600">Expected 2025</p>
                  <p className="text-gray-500 text-sm mt-1">Focus: Business & Accounting</p>
                </div>
                <div className="border-l-4 border-[#DC2626] pl-6">
                  <h3 className="font-bold text-[#1A1A1A] text-lg">QuickBooks Online Certification</h3>
                  <p className="text-gray-600">Intuit</p>
                  <p className="text-gray-500 text-sm mt-1">ProAdvisor Certified</p>
                </div>
                <div className="border-l-4 border-[#DC2626] pl-6">
                  <h3 className="font-bold text-[#1A1A1A] text-lg">Continuing Education</h3>
                  <p className="text-gray-600">Various Online Courses</p>
                  <p className="text-gray-500 text-sm mt-1">Bookkeeping, Small Business Finance</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Skills & Expertise</h2>
              <div className="space-y-4">
                {[
                  { skill: "QuickBooks Online", level: "Expert" },
                  { skill: "Financial Statement Preparation", level: "Advanced" },
                  { skill: "Bank Reconciliation", level: "Expert" },
                  { skill: "Accounts Payable/Receivable", level: "Advanced" },
                  { skill: "Microsoft Excel / Google Sheets", level: "Advanced" },
                  { skill: "Small Business Consulting", level: "Intermediate" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="font-medium text-[#1A1A1A]">{item.skill}</span>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      item.level === "Expert" ? "bg-green-100 text-green-700" :
                      item.level === "Advanced" ? "bg-blue-100 text-blue-700" :
                      "bg-yellow-100 text-yellow-700"
                    }`}>{item.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beyond the <span className="text-[#DC2626]">Books</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get to know the person behind the spreadsheets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#2A2A2A] rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">⚽</div>
              <h3 className="text-xl font-bold mb-3">Soccer Player</h3>
              <p className="text-gray-400">
                I&apos;ve played soccer since I was 5. The teamwork and discipline I&apos;ve learned 
                on the field translate directly to how I run my business.
              </p>
            </div>
            <div className="bg-[#2A2A2A] rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">☕</div>
              <h3 className="text-xl font-bold mb-3">Coffee Enthusiast</h3>
              <p className="text-gray-400">
                I&apos;m always on the hunt for Denver&apos;s best coffee shops. 
                Great place to meet clients or crunch numbers!
              </p>
            </div>
            <div className="bg-[#2A2A2A] rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Goal Setter</h3>
              <p className="text-gray-400">
                I love setting and achieving goals — whether it&apos;s a new personal record 
                on the field or helping a client reach their financial targets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#DC2626]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ready to hand off your bookkeeping to someone who cares? Let&apos;s chat!
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#DC2626] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
