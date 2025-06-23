import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import MarketplacePreview from '@/components/MarketplacePreview';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <MarketplacePreview />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
} 