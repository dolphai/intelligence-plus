"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      label: "Schools",
      link: "#school-benefits",
    },
    {
      label: "Students",
      link: "#student-benefits",
    },
    {
      label: "Testimonials",
      link: "#testimonials",
    },
    {
      label: "Timeline",
      link: "#timeline",
    },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-violet-600">
            Intelligence Plus
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map(({ link, label }, index) => (
              <a
                href={link}
                key={`navbar-item-${index}`}
                className="text-gray-700 hover:text-violet-600"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Login / Signup */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 text-violet-600 border border-violet-600 rounded-lg hover:bg-violet-600 hover:text-white">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfBSD35zx1tlJ9H-FCfv2N1VsaEaKuMi8FfOH7cAmQSiGRV0w/viewform"
                target="_blank"
              >
                Register your School
              </Link>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          {navLinks.map(({ label, link }, index) => (
            <a
              key={`navbar-item-${index}`}
              href={link}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {label}
            </a>
          ))}
          <div className="px-4 py-2 flex flex-col space-y-2">
            <button className="px-4 py-2 text-violet-600 border border-violet-600 rounded-lg hover:bg-violet-600 hover:text-white">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfBSD35zx1tlJ9H-FCfv2N1VsaEaKuMi8FfOH7cAmQSiGRV0w/viewform"
                target="_blank"
              >
                Register your School
              </Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
