"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1A1A1A] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#DC2626] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-white font-bold text-xl">
              Kasen&apos;s <span className="text-[#DC2626]">Cash Flow</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#DC2626] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#DC2626] text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-[#DC2626] transition-colors font-medium px-2 py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-[#DC2626] text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors text-center mx-2"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
