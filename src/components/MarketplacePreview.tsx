"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Link from 'next/link';
import { FiStar, FiDownload, FiShoppingCart, FiTag, FiFilter } from 'react-icons/fi';

// Example prompt data
const prompts = [
  {
    id: 1,
    title: "Ultimate Video Script Generator",
    description: "Create engaging scripts for YouTube, TikTok, and more with this AI-powered prompt. Includes hooks, storytelling frameworks, and CTAs.",
    category: "Content Creation",
    price: 19.99,
    rating: 4.9,
    reviews: 127,
    author: "ScriptMaster",
    tags: ["video", "content", "writing"],
    featured: true
  },
  {
    id: 2,
    title: "Code Debugger Pro",
    description: "Fix any code bug with this step-by-step prompt. Works for JavaScript, Python, React, and more. Identifies issues and explains solutions.",
    category: "Programming",
    price: 14.99,
    rating: 4.7,
    reviews: 85,
    author: "DevGenius",
    tags: ["code", "debug", "programming"],
    featured: false
  },
  {
    id: 3,
    title: "Photorealistic Landscape Generator",
    description: "Create stunning, photorealistic landscapes for your projects. Control style, time of day, weather, and more with simple modifiers.",
    category: "Image Generation",
    price: 29.99,
    rating: 4.8,
    reviews: 203,
    author: "VisualArtist",
    tags: ["image", "landscape", "art"],
    featured: true
  },
  {
    id: 4,
    title: "SEO Content Optimizer",
    description: "Transform any article into SEO-friendly content that ranks. Includes keyword optimization, readability improvements, and meta descriptions.",
    category: "Marketing",
    price: 24.99,
    rating: 4.6,
    reviews: 91,
    author: "SEOWizard",
    tags: ["SEO", "content", "marketing"],
    featured: false
  },
  {
    id: 5,
    title: "Email Sequence Builder",
    description: "Create converting email sequences for sales, nurturing, onboarding, and more. Customizable tone and audience targeting.",
    category: "Marketing",
    price: 17.99,
    rating: 4.8,
    reviews: 78,
    author: "EmailPro",
    tags: ["email", "marketing", "sales"],
    featured: false
  },
  {
    id: 6,
    title: "Startup Pitch Deck Creator",
    description: "Generate compelling pitch decks for investors. Includes problem statement, solution, market analysis, and financial projections sections.",
    category: "Business",
    price: 39.99,
    rating: 4.9,
    reviews: 56,
    author: "VCWhisperer",
    tags: ["startup", "pitch", "business"],
    featured: true
  }
];

// Filter categories
const categories = [
  "All",
  "Content Creation",
  "Programming",
  "Image Generation",
  "Marketing",
  "Business"
];

const PromptCard = ({ prompt }: { prompt: any }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className={`card group hover:scale-[1.02] transition-all duration-300 ${
        prompt.featured ? 'border-l-4 border-primary' : ''
      }`}
    >
      {prompt.featured && (
        <div className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-md">
          Featured
        </div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
          {prompt.category}
        </span>
        <div className="flex items-center">
          <FiStar className="text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-medium">{prompt.rating}</span>
          <span className="ml-1 text-xs text-gray-500">({prompt.reviews})</span>
        </div>
      </div>
      
      <h3 className="font-semibold text-lg mb-2">{prompt.title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{prompt.description}</p>
      
      <div className="flex flex-wrap gap-1 mb-4">
        {prompt.tags.map((tag: string, i: number) => (
          <span key={i} className="inline-flex items-center px-2 py-1 text-xs bg-gray-50 text-gray-600 rounded">
            #{tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
        <div className="font-medium">
          ${prompt.price}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mr-1">
            {prompt.author.charAt(0)}
          </div>
          by {prompt.author}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link href="#" className="btn-primary scale-90 group-hover:scale-100 transition-transform duration-200 mr-2">
          <FiShoppingCart className="mr-1" /> Buy Now
        </Link>
        <Link href="#" className="btn-secondary scale-90 group-hover:scale-100 transition-transform duration-200">
          Preview
        </Link>
      </div>
    </motion.div>
  );
};

const MarketplacePreview = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const filteredPrompts = activeCategory === "All" 
    ? prompts
    : prompts.filter(prompt => prompt.category === activeCategory);

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-lg mb-4">
            Explore the <span className="gradient-text">Marketplace</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Browse our most popular prompts or search from thousands of options crafted by expert prompt engineers.
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Marketplace Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Link href="#marketplace" className="btn-primary">
            Browse All Prompts <FiFilter className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview; 