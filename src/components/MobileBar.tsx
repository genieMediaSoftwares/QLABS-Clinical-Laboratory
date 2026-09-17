import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/labData';

export const MobileBar: React.FC = () => {
  return (
    <div
      id="mobile-sticky-bottom-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#07172A] border-t border-[#0C2340] px-3 py-2.5 shadow-2xl backdrop-blur-md"
      role="navigation"
      aria-label="Mobile quick actions"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call Action */}
        <a
          href={BUSINESS_INFO.phoneHref}
          id="mobile-bar-call"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors min-h-[44px]"
          aria-label="Call laboratory"
        >
          <Phone className="w-4 h-4 text-[#C5A059] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Call Lab</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={BUSINESS_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bar-whatsapp"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-emerald-800/90 hover:bg-emerald-700 text-white transition-colors min-h-[44px]"
          aria-label="Message on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-emerald-200 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Book Action */}
        <a
          href="#book"
          id="mobile-bar-book"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#C5A059] hover:bg-[#d4b36c] text-[#0C2340] font-bold transition-colors min-h-[44px]"
          aria-label="Book laboratory appointment"
        >
          <Calendar className="w-4 h-4 text-[#0C2340] mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Book Test</span>
        </a>
      </div>
    </div>
  );
};
