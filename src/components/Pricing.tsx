"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { FiCheck, FiX } from 'react-icons/fi';

const pricingPlans = [
  {
    name: 'Free',
    description: 'Perfect for beginners exploring AI prompts',
    price: '0',
    priceDetail: 'No credit card required',
    features: [
      'Browse marketplace',
      '5 prompt downloads/month',
      'Basic analytics',
      'Community support',
    ],
    notIncluded: [
      'Sell your own prompts',
      'Premium prompts',
      'Advanced analytics',
      'Custom licensing',
    ],
    cta: 'Get Started',
    featured: false,
    ctaColor: 'btn-secondary',
  },
  {
    name: 'Creator',
    description: 'For prompt engineers ready to monetize',
    price: '9.99',
    priceDetail: 'per month',
    features: [
      'Everything in Free',
      'Sell your own prompts',
      '20 prompt downloads/month',
      'Creator analytics',
      'Custom licensing options',
      'Creator badge',
      'Priority support',
    ],
    notIncluded: [],
    cta: 'Start Creating',
    featured: true,
    ctaColor: 'btn-primary',
  },
  {
    name: 'Pro',
    description: 'For power users and enterprises',
    price: '29.99',
    priceDetail: 'per month',
    features: [
      'Everything in Creator',
      'Unlimited prompt downloads',
      'Bulk downloads',
      'Advanced analytics',
      'API access',
      'White-label options',
      'Dedicated account manager',
    ],
    notIncluded: [],
    cta: 'Go Pro',
    featured: false,
    ctaColor: 'btn-secondary',
  },
];

const Pricing = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="pricing" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const [planRef, planInView] = useInView({
              threshold: 0.1,
              triggerOnce: true,
            });

            return (
              <motion.div
                key={index}
                ref={planRef}
                initial={{ opacity: 0, y: 20 }}
                animate={planInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-xl ${
                  plan.featured
                    ? 'bg-gradient-to-b from-primary/5 to-secondary/5 border border-primary shadow-xl'
                    : 'bg-white border border-gray-200 shadow-md'
                } p-8`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="heading-md mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">$</span>
                    <span className="text-5xl font-bold mx-1">{plan.price}</span>
                    <span className="text-gray-500">{plan.priceDetail}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="font-medium mb-4">What's included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-green-500 mr-2">
                          <FiCheck />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="font-medium mb-4 mt-6">Not included:</p>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-400">
                            <span className="mr-2">
                              <FiX />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <div className="mt-auto">
                  <Link href="#signup" className={`w-full ${plan.ctaColor} justify-center`}>
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500">
            Need something custom? <Link href="#contact" className="text-primary font-medium hover:underline">Contact us</Link> for enterprise plans.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 