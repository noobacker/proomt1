"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiZap } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="pt-36 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="heading-xl mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="gradient-text">The Internet's</span><br />
              Prompt Layer
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Explore, Share, Sell - One Prompt at a Time. Find the perfect words to power your AI and unlock its full potential. Join thousands of prompt engineers already making waves.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="#signup" className="btn-primary">
                Get Started <FiArrowRight className="ml-2" />
              </Link>
              <Link href="#explore" className="btn-secondary">
                Explore Marketplace
              </Link>
            </motion.div>

            <motion.div 
              className="mt-12 flex items-center gap-2 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <FiZap className="text-primary" /> <span>Join <b>15,000+</b> prompt engineers and AI enthusiasts</span>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gray-100">
                <div className="bg-white p-4 rounded-t-xl border-b">
                  <div className="flex space-x-2 items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="ml-4 text-xs text-gray-500">✨ Prompt Explorer</div>
                  </div>
                </div>

                <div className="bg-gray-900 p-6 text-gray-100 font-mono text-sm overflow-hidden">
                  <div className="typing-animation">
                    <span className="text-green-400">{">"}</span> <span className="text-blue-400">find</span> amazing AI prompts<br />
                    <span className="text-yellow-500 mt-2 block">Searching prompt marketplace...</span><br />
                    <span className="text-purple-400 mt-1 block">✓ Found 1,248 prompts matching your interests</span><br />
                    <span className="text-green-400 block mt-4">{">"}</span> <span className="text-blue-400">use</span> "Creative storytelling for gaming NPCs"<br />
                    <span className="text-yellow-500 mt-2 block">Loading prompt...</span><br />
                    <span className="text-purple-400 mt-1 block">✓ Prompt activated! Your AI is now a master storyteller</span>
                  </div>
                </div>
              </div>

              {/* Floating badge elements */}
              <motion.div 
                className="absolute -top-10 -right-10 bg-white p-3 rounded-lg shadow-lg z-20 flex items-center gap-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">$</div>
                <div className="text-sm">
                  <div className="font-semibold">Sell Your Prompts</div>
                  <div className="text-xs text-gray-500">Earn while you help</div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-5 -left-10 bg-white p-3 rounded-lg shadow-lg z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="text-2xl">🚀</div>
                  <div className="text-sm">
                    <div className="font-semibold">Prompt of the Day</div>
                    <div className="text-xs text-gray-500">Try it now!</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full filter blur-3xl opacity-70"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 