import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Mail,
  Navigation,
  Train,
  Car,
  ExternalLink,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/labData';

export const LocationHours: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-[#F1F5F9] border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#0C2340] mb-2">
            Facility Access &amp; Operating Schedule
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0C2340] font-medium tracking-tight mb-3">
            Location, Directions &amp; Laboratory Hours
          </h2>
          <p className="text-base text-stone-700 leading-relaxed">
            Conveniently situated in Al Karama’s Carrera Building with street-level accessibility, dedicated patient parking, and direct proximity to Dubai Metro.
          </p>
        </div>

        {/* Two-Column Grid: Operational Data (Left) & Pinned Map Interface (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Access Details & Working Links (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-stone-200/90 shadow-xs">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="p-2.5 rounded-lg bg-[#0C2340]/10 text-[#0C2340] shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6 text-[#0C2340]" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-semibold text-stone-900">
                    Central Laboratory Location
                  </h3>
                  <p className="text-sm font-medium text-stone-800 mt-1">
                    {BUSINESS_INFO.addressLine1}
                  </p>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {BUSINESS_INFO.addressLine2}
                  </p>
                </div>
              </div>

              {/* Transit & Parking Details */}
              <div className="pt-4 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <Train className="w-4 h-4 text-[#0C2340] shrink-0" />
                  <span>Near ADCB Metro Station (Red Line)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#0C2340] shrink-0" />
                  <span>RTA Parking Available Around Building</span>
                </div>
              </div>
            </div>

            {/* Operating Hours Card (Single Consistent Schedule) */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-stone-200/90 shadow-xs">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="p-2.5 rounded-lg bg-[#0C2340]/10 text-[#0C2340] shrink-0 mt-0.5">
                  <Clock className="w-6 h-6 text-[#0C2340]" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-semibold text-stone-900">
                    Laboratory Operational Hours
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Continuous specimen accessioning and reference testing
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAFAF8] border border-stone-200">
                  <span className="font-medium text-stone-700">Monday through Saturday</span>
                  <span className="font-semibold text-[#0C2340]">9:00 AM – 9:00 PM</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAFAF8] border border-stone-200">
                  <span className="font-medium text-stone-700">Sunday</span>
                  <span className="font-semibold text-[#0C2340]">9:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Working Direct Contact Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <a
                href={BUSINESS_INFO.phoneHref}
                id="contact-call-btn"
                className="p-4 rounded-xl bg-white border border-stone-200 hover:border-[#0C2340] shadow-xs flex items-center gap-3 transition-colors group"
              >
                <div className="p-2 bg-[#0C2340]/10 rounded-lg group-hover:bg-[#0C2340] transition-colors">
                  <Phone className="w-4 h-4 text-[#0C2340] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">Direct Telephone</div>
                  <div className="text-xs sm:text-sm font-semibold text-stone-900">{BUSINESS_INFO.phoneDisplay}</div>
                </div>
              </a>

              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="p-4 rounded-xl bg-white border border-stone-200 hover:border-emerald-600 shadow-xs flex items-center gap-3 transition-colors group"
              >
                <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-600 transition-colors">
                  <MessageSquare className="w-4 h-4 text-emerald-800 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[11px] text-stone-500 uppercase tracking-wider font-semibold">WhatsApp Lab Desk</div>
                  <div className="text-xs sm:text-sm font-semibold text-stone-900">{BUSINESS_INFO.whatsappDisplay}</div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Street-Level Pinned Map Visual (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-xl border border-stone-200/90 shadow-xs overflow-hidden flex flex-col">
            
            {/* Map Header Bar */}
            <div className="px-6 py-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-700">
                <Navigation className="w-4 h-4 text-[#0C2340]" />
                <span>Street-Level Pinned Location · Al Karama</span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#0C2340] hover:underline flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Custom Interactive Street-Level Visual Representation */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[360px] bg-[#E2E8F0] overflow-hidden flex items-center justify-center p-6">
              
              {/* Stylized Urban Grid of Karama */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#0C2340_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Major Streets Layout Graphic */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Kuwait Street (Horizontal) */}
                <div className="absolute top-1/4 left-0 right-0 h-6 bg-white/70 border-y border-stone-300 flex items-center justify-end px-4">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-stone-500">Kuwait St (Al Karama)</span>
                </div>
                {/* Sheikh Khalifa Bin Zayed St */}
                <div className="absolute bottom-1/4 left-0 right-0 h-8 bg-white/80 border-y border-stone-300 flex items-center justify-start px-4">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-stone-600">Sheikh Khalifa Bin Zayed Rd</span>
                </div>
                {/* 20th Street (Vertical) */}
                <div className="absolute top-0 bottom-0 left-1/3 w-6 bg-white/70 border-x border-stone-300 flex items-center justify-center">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-stone-400 rotate-90">20th St</span>
                </div>
              </div>

              {/* Pinned Marker for Carrera Building */}
              <div className="relative z-10 bg-white p-4 sm:p-5 rounded-xl shadow-lg border border-stone-300/80 max-w-xs text-center animate-in fade-in zoom-in-95">
                <div className="w-10 h-10 bg-[#0C2340] text-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                  <MapPin className="w-5 h-5 fill-current" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#0C2340]">
                  Carrera Building, Office 304
                </div>
                <div className="text-sm font-serif font-bold text-stone-900 mt-0.5">
                  QLABS Clinical Laboratory
                </div>
                <div className="text-xs text-stone-500 mt-1">
                  Floor 3, Carrera Bldg · Al Karama, Dubai
                </div>
                
                <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-center gap-2">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 bg-[#0C2340] text-white text-xs font-semibold rounded-lg hover:bg-[#081829] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Map Footnote */}
            <div className="px-6 py-3 bg-stone-50 border-t border-stone-200 text-xs text-stone-600 flex items-center justify-between">
              <span>Geo: 25.2443° N, 55.3025° E</span>
              <span className="font-medium text-[#0C2340]">DHA Facility ID: Verified</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
