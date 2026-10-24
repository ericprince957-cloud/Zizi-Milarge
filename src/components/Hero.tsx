import { MessageCircle, ChevronDown } from 'lucide-react';
import { HERO, WHATSAPP_LINK } from '../data/config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO.backgroundImage}
          alt="Premium car showroom"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 fade-in-up ${isVisible ? 'visible' : ''}`}
      >
        {/* Gold accent line */}
        <div className="w-20 h-1 bg-gold mx-auto mb-8 rounded-full" />

        <h1 className="font-[Montserrat] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          {HERO.headline.split('Dream Car').map((part, i) => (
            <span key={i}>
              {part}
              {i === 0 && <span className="gold-shimmer"> Dream Car</span>}
            </span>
          ))}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          {HERO.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#inventory"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-dark font-bold px-8 py-4 rounded-lg transition-all duration-300 text-base hover:scale-105 hover:shadow-lg hover:shadow-gold/20"
          >
            Browse Inventory
            <ChevronDown size={18} className="animate-bounce" />
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-gold text-white hover:text-gold font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-base hover:scale-105"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>500+ Cars Sold</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-gold rounded-full" />
            <span>24/7 Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Verified Dealership</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
