"use client";

import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="text-3xl font-display font-bold mb-4">
                <span className="gradient-text">Proomt</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              The Internet's Prompt Layer. Explore, Share, Sell - One Prompt at a Time. Find the right words to power your AI.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <FiTwitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <FiGithub size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <FiInstagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
                <FiMail size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Prompt Engineering Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {year} Proomt. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              Designed with ❤️ for prompt engineers everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 