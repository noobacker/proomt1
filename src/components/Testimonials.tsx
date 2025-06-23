"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'AI Researcher',
    company: 'TechLabs',
    avatar: '👨‍🔬',
    quote: "Proomt is a game-changer! I used to spend hours crafting the perfect prompts for my research. Now I can find exactly what I need in minutes. The quality is consistently high and it's saved me countless hours.",
    stars: 5
  },
  {
    name: 'Sarah Johnson',
    role: 'Content Creator',
    company: 'CreativeCo',
    avatar: '👩‍💼',
    quote: "Since I started selling my prompts on Proomt, I've made enough to quit my day job. My specialized marketing prompts are in high demand, and the platform makes it easy to reach customers who value my expertise.",
    stars: 5
  },
  {
    name: 'Michael Rodriguez',
    role: 'Software Engineer',
    company: 'CodeCraft',
    avatar: '👨‍💻',
    quote: "As a developer, I rely on well-crafted prompts for pair programming with AI. The coding prompts on Proomt have noticeably improved my workflow. And now I'm selling my own, which is a nice side income!",
    stars: 4
  },
  {
    name: 'Emma Watson',
    role: 'Digital Artist',
    company: 'Pixel Perfect',
    avatar: '👩‍🎨',
    quote: "The image generation prompts on Proomt saved my latest project. I was stuck trying to create the right visuals, but found a prompt that gave me exactly what I needed. Now I contribute my own prompts too!",
    stars: 5
  },
  {
    name: 'David Kim',
    role: 'Marketing Director',
    company: 'GrowthHub',
    avatar: '👨‍💼',
    quote: "Our marketing team uses Proomt daily. The analytics on which prompts perform best has been invaluable for our campaigns. Worth every penny of the Pro subscription.",
    stars: 5
  },
  {
    name: 'Priya Patel',
    role: 'Startup Founder',
    company: 'AI Ventures',
    avatar: '👩‍🚀',
    quote: "Running a startup means wearing many hats. Proomt gives me access to expert-level prompts for everything from copywriting to coding. It's like having a team of specialists at my fingertips.",
    stars: 4
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-4">{testimonial.avatar}</div>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar
            key={i}
            className={`${
              i < testimonial.stars ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <blockquote className="text-gray-700">
        "{testimonial.quote}"
      </blockquote>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const testimonialGroups = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    testimonialGroups.push(testimonials.slice(i, i + 3));
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % testimonialGroups.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + testimonialGroups.length) % testimonialGroups.length);
  };

  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who are transforming how they work with AI.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialGroups[currentPage].map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>

          {testimonialGroups.length > 1 && (
            <div className="flex justify-center mt-12 gap-4">
              <button
                onClick={prevPage}
                className="p-2 rounded-full bg-white border border-gray-200 shadow hover:shadow-md transition-all"
                aria-label="Previous testimonials"
              >
                <FiArrowLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {testimonialGroups.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentPage === index ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial group ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextPage}
                className="p-2 rounded-full bg-white border border-gray-200 shadow hover:shadow-md transition-all"
                aria-label="Next testimonials"
              >
                <FiArrowRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 