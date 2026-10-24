import { Eye, Fuel, Gauge, Settings } from 'lucide-react';
import { CARS, WHATSAPP_LINK } from '../data/config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function CarCard({ car, index }: { car: typeof CARS[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`car-card bg-dark-card rounded-2xl overflow-hidden border border-dark-border relative group fade-in-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={car.image}
          alt={car.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {car.badges.map((badge) => (
            <span
              key={badge}
              className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                badge === 'New Arrival'
                  ? 'bg-gold text-dark'
                  : badge === 'Verified'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-700 text-gray-200'
              }`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Coming Soon Overlay */}
        {car.comingSoon && (
          <div className="absolute inset-0 bg-dark/70 flex items-center justify-center">
            <div className="text-center">
              <span className="inline-block bg-gold text-dark font-bold px-6 py-2 rounded-full text-sm uppercase tracking-wider">
                Coming Soon
              </span>
              <p className="text-gray-300 text-sm mt-3">
                Contact us for details
              </p>
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
          {car.title}
        </h3>

        <p className="text-gold font-bold text-xl mb-4">{car.price}</p>

        {/* Specs */}
        <div className="flex items-center gap-4 text-gray-400 text-sm mb-5">
          <div className="flex items-center gap-1">
            <Gauge size={14} />
            <span>{car.mileage}</span>
          </div>
          <div className="flex items-center gap-1">
            <Settings size={14} />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel size={14} />
            <span>{car.year}</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={car.comingSoon ? WHATSAPP_LINK : '#'}
          target={car.comingSoon ? '_blank' : undefined}
          rel={car.comingSoon ? 'noopener noreferrer' : undefined}
          className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
            car.comingSoon
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-white/10 hover:bg-gold hover:text-dark text-white border border-white/10 hover:border-gold'
          }`}
        >
          <Eye size={16} />
          {car.comingSoon ? 'Inquire Now' : 'View Details'}
        </a>
      </div>
    </div>
  );
}

export default function Inventory() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="inventory" className="py-20 md:py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-14 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Our Collection
          </span>
          <h2 className="font-[Montserrat] text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Latest Arrivals
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Hand-picked premium vehicles, thoroughly inspected and ready for you.
          </p>
          <div className="w-16 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CARS.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-dark font-bold px-8 py-3 rounded-lg transition-all duration-300"
          >
            View Full Inventory
          </a>
        </div>
      </div>
    </section>
  );
}
