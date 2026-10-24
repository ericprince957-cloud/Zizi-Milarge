import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { BRAND, LOGO_URL, SOCIAL_LINKS } from '../data/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-section border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Brand */}
          <div className="text-center md:text-left">
            <img
              src={LOGO_URL}
              alt={`${BRAND.name} Logo`}
              className="h-10 w-auto mx-auto md:mx-0 mb-3"
            />
            <p className="text-gray-400 text-sm">
              Premium Automotive Dealership
            </p>
            <p className="text-gray-500 text-sm mt-1">
              {BRAND.address}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#home" className="text-gray-400 hover:text-gold text-sm transition-colors">
                Home
              </a>
              <a href="#inventory" className="text-gray-400 hover:text-gold text-sm transition-colors">
                Inventory
              </a>
              <a href="#about" className="text-gray-400 hover:text-gold text-sm transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-400 hover:text-gold text-sm transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Follow Us
            </h4>
            <div className="flex justify-center md:justify-end gap-4">
              <SocialLink href={SOCIAL_LINKS.instagram} icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href={SOCIAL_LINKS.facebook} icon={<Facebook size={18} />} label="Facebook" />
              <SocialLink href={SOCIAL_LINKS.twitter} icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href={SOCIAL_LINKS.youtube} icon={<Youtube size={18} />} label="YouTube" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-border mt-10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} {BRAND.name}. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Premium vehicles, trusted service.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/50 flex items-center justify-center text-gray-400 hover:text-gold transition-all duration-300"
    >
      {icon}
    </a>
  );
}
