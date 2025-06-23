"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const CallToAction = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 opacity-80"></div>
      
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center relative overflow-hidden border border-gray-100"
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full"></div>
          
          <motion.h2 
            className="heading-lg mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to find and sell the <span className="gradient-text">perfect prompts</span>?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Join the revolution in AI prompt engineering. Whether you're looking for the perfect prompt or want to monetize your expertise, Proomt is your platform.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="#signup" className="btn-primary">
              Get Started Free <FiArrowRight className="ml-2" />
            </Link>
            <Link href="#contact" className="btn-secondary">
              Contact Sales
            </Link>
          </motion.div>
          
          <motion.p 
            className="text-sm text-gray-500 mt-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            No credit card required. Cancel anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction; 