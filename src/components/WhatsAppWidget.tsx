import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../data/config';

export default function WhatsAppWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:opacity-100">
        <div className="bg-white text-dark text-sm font-medium px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
          Chat with us!
          <div className="absolute top-full right-6 w-3 h-3 bg-white rotate-45 -mt-1.5" />
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pulse group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
      </a>
    </div>
  );
}
