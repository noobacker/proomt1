"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Create an Account',
    description: 'Sign up in seconds with just your email. No credit card required to get started.',
  },
  {
    number: '02',
    title: 'Browse the Marketplace',
    description: 'Explore thousands of prompts across categories like writing, coding, image generation, and more.',
  },
  {
    number: '03',
    title: 'Buy or Sell Prompts',
    description: 'Purchase prompts that catch your eye or list your own creations for sale to the community.',
  },
  {
    number: '04',
    title: 'Use & Iterate',
    description: 'Copy prompts directly to your favorite AI tools. Refine them and share your improvements.',
  },
];

const HowItWorks = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="how-it-works" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">
            How <span className="gradient-text">Proomt</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple process designed to help you find, use, and monetize the best AI prompts.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-200 -translate-x-1/2 hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const [stepRef, stepInView] = useInView({
                threshold: 0.1,
                triggerOnce: true,
              });

              return (
                <motion.div
                  key={index}
                  ref={stepRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={stepInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-center gap-8 lg:gap-16`}
                >
                  <div className="lg:w-1/2">
                    <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg mb-4 relative z-10">
                        {step.number}
                      </div>
                      <h3 className="heading-md mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-lg">{step.description}</p>
                    </div>
                  </div>

                  <div className="lg:w-1/2 flex items-center justify-center relative">
                    {/* Circle connector */}
                    <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 hidden lg:block"></div>

                    <div className={`bg-white p-4 rounded-xl shadow-lg ${
                      index === 0 ? 'border-t-4 border-primary' :
                      index === 1 ? 'border-l-4 border-secondary' :
                      index === 2 ? 'border-r-4 border-accent' :
                      'border-b-4 border-green-500'
                    }`}>
                      {/* Placeholder for images - in a real project, these would be actual images */}
                      <div className="w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                        <div className="text-gray-500">Step {index + 1} illustration</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 