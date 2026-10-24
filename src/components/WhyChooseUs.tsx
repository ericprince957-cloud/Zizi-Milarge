import { ShieldCheck, Clock, CreditCard, Truck } from 'lucide-react';
import { FEATURES } from '../data/config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap: Record<string, any> = {
  ShieldCheck,
  Clock,
  CreditCard,
  Truck,
};

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-20 md:py-28 bg-dark-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Why Us
          </span>
          <h2 className="font-[Montserrat] text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Why Choose Zizi Milarge
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We're not just selling cars — we're building trust, one satisfied customer at a time.
          </p>
          <div className="w-16 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <FeatureCard
                key={feature.title}
                icon={Icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            );
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatItem value="500+" label="Cars Sold" />
          <StatItem value="24/7" label="Availability" />
          <StatItem value="98%" label="Happy Clients" />
          <StatItem value="5+" label="Years Experience" />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: any;
  title: string;
  description: string;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`bg-dark-card border border-dark-border rounded-2xl p-6 text-center hover:border-gold/50 transition-all duration-500 group fade-in-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
        <Icon size={28} className="text-gold" />
      </div>
      <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`text-center fade-in-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="text-3xl md:text-4xl font-black gold-shimmer mb-2">
        {value}
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
