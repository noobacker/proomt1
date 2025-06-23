"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiSearch, FiDollarSign, FiStar, FiShare2, FiTrendingUp, FiShield } from 'react-icons/fi';

const features = [
  {
    icon: <FiSearch size={24} />,
    title: "Discover Genius",
    description: "Find the perfect prompts for any AI model. Our smart search helps you discover exactly what you need.",
    color: "bg-blue-50 text-blue-500"
  },
  {
    icon: <FiDollarSign size={24} />,
    title: "Monetize Your Mind",
    description: "Turn your prompt engineering skills into cash. Set your price and earn money when others use your work.",
    color: "bg-green-50 text-green-500"
  },
  {
    icon: <FiStar size={24} />,
    title: "Quality Guaranteed",
    description: "All prompts are rated and reviewed. Find the best ones with our community-driven reputation system.",
    color: "bg-yellow-50 text-yellow-500"
  },
  {
    icon: <FiShare2 size={24} />,
    title: "Share & Collaborate",
    description: "Work together with other prompt engineers. Share, fork, and improve on each other's creations.",
    color: "bg-purple-50 text-purple-500"
  },
  {
    icon: <FiTrendingUp size={24} />,
    title: "Track Performance",
    description: "See how your prompts perform with detailed analytics. Understand what works and optimize.",
    color: "bg-pink-50 text-pink-500"
  },
  {
    icon: <FiShield size={24} />,
    title: "Safe & Secure",
    description: "Your intellectual property is protected. Control how your prompts are used with custom licenses.",
    color: "bg-orange-50 text-orange-500"
  }
];

const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group hover:border-primary hover:border transition-all duration-300"
    >
      <div className={`${feature.color} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {feature.icon}
      </div>
      <h3 className="heading-sm mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
};

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="features" className="section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">
            Why <span className="gradient-text">Proomt</span> is Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another marketplace. We're building the foundation layer for AI interactions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 