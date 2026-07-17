"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    businessType: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <section className="bg-[#1A1A1A] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-[#DC2626]">Touch</span>
            </h1>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-md mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-500" size={40} />
            </div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Message Sent!</h2>
            <p className="text-gray-600 mb-8">
              Thanks for reaching out, {formData.name}! I&apos;ll get back to you within 24 hours 
              to discuss your bookkeeping needs.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  businessName: "",
                  businessType: "",
                  message: ""
                });
              }}
              className="text-[#DC2626] font-medium hover:text-red-700"
            >
              Send another message →
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1A1A1A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-[#DC2626]">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to get your books organized? Fill out the form below and I&apos;ll 
            get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
                Let&apos;s Work Together
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you&apos;re looking for ongoing bookkeeping support or just need 
                help getting caught up, I&apos;m here to help. Reach out and let&apos;s 
                discuss how I can support your business.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#DC2626]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#DC2626]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">Email</h3>
                    <a href="mailto:kasen@kasenscashflow.com" className="text-gray-600 hover:text-[#DC2626] transition-colors">
                      kasen@kasenscashflow.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#DC2626]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#DC2626]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">Location</h3>
                    <p className="text-gray-600">Denver, Colorado</p>
                    <p className="text-sm text-gray-500">Available for in-person meetings</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#DC2626]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#DC2626]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">Response Time</h3>
                    <p className="text-gray-600">Within 24 hours</p>
                    <p className="text-sm text-gray-500">Monday - Friday</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                <h3 className="font-semibold text-[#1A1A1A] mb-3">Free Consultation Includes:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-[#DC2626]" size={16} />
                    <span>30-minute discovery call</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-[#DC2626]" size={16} />
                    <span>Business needs assessment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-[#DC2626]" size={16} />
                    <span>Custom service recommendation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-[#DC2626]" size={16} />
                    <span>No obligation quote</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none transition-all"
                    placeholder="john@yourbusiness.com"
                  />
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none transition-all"
                    placeholder="Your Business LLC"
                  />
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select your business type</option>
                    <option value="retail">Retail / E-commerce</option>
                    <option value="service">Professional Services</option>
                    <option value="contractor">Contractor / Trade</option>
                    <option value="restaurant">Restaurant / Food Service</option>
                    <option value="health">Health / Wellness</option>
                    <option value="creative">Creative Agency</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    How Can I Help? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell me about your bookkeeping needs, current challenges, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#DC2626] text-white py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
