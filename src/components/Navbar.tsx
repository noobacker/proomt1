"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-5 fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center">
            <span className="text-2xl font-display font-bold gradient-text">Proomt</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="font-medium text-dark hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="font-medium text-dark hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" className="font-medium text-dark hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#testimonials" className="font-medium text-dark hover:text-primary transition-colors">
            Testimonials
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="#login" className="font-medium text-dark hover:text-primary transition-colors">
            Log in
          </Link>
          <Link href="#signup" className="btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-dark focus:outline-none"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg absolute w-full left-0 py-4 px-4"
        >
          <div className="flex flex-col space-y-4">
            <Link 
              href="#features"
              className="font-medium px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#how-it-works"
              className="font-medium px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#pricing"
              className="font-medium px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#testimonials"
              className="font-medium px-4 py-2 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <div className="border-t border-gray-200 pt-4 flex flex-col space-y-3">
              <Link 
                href="#login"
                className="font-medium px-4 py-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link 
                href="#signup"
                className="btn-primary mx-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 