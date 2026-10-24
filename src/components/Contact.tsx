import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { BRAND, WHATSAPP_LINK, MAP_IMAGE } from '../data/config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.1);
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.1);

  return (
    <section id="contact" className="py-20 md:py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 fade-in-up ${headerVisible ? 'visible' : ''}`}
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="font-[Montserrat] text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Contact & Location
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Visit our showroom or reach out anytime. We're here to help you find your perfect ride.
          </p>
          <div className="w-16 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact Info */}
          <div
            ref={leftRef}
            className={`fade-in-left ${leftVisible ? 'visible' : ''}`}
          >
            <div className="bg-dark-card border border-dark-border rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">
                Visit Our Showroom
              </h3>

              <div className="space-y-6">
                <ContactItem
                  icon={<MapPin size={20} className="text-gold" />}
                  label="Address"
                  value={BRAND.address}
                />
                <ContactItem
                  icon={<Phone size={20} className="text-gold" />}
                  label="Phone"
                  value={BRAND.phone}
                  href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                />
                <ContactItem
                  icon={<Mail size={20} className="text-gold" />}
                  label="Email"
                  value={BRAND.email}
                  href={`mailto:${BRAND.email}`}
                />
                <ContactItem
                  icon={<Clock size={20} className="text-gold" />}
                  label="Business Hours"
                  value={BRAND.hours}
                />
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 pt-6 border-t border-dark-border">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 text-base hover:scale-[1.02] hover:shadow-lg hover:shadow-green-600/20"
                >
                  <MessageCircle size={22} />
                  Chat on WhatsApp
                </a>
                <p className="text-center text-gray-500 text-sm mt-3">
                  Quick response guaranteed
                </p>
              </div>
            </div>
          </div>

          {/* Right: Map Placeholder */}
          <div
            ref={rightRef}
            className={`fade-in-right ${rightVisible ? 'visible' : ''}`}
          >
            <div className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden h-full min-h-[400px]">
              <img
                src={MAP_IMAGE}
                alt={`Map showing location: ${BRAND.address}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">
          {label}
        </p>
        <p className="text-white font-medium">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }

  return content;
}
