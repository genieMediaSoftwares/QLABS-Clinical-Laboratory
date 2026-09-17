import React from 'react';
import { Calendar, ArrowRight, Shield, CheckCircle2, MapPin, Building2, Star, Truck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/labData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative bg-[#F8FAFC] border-b border-stone-200 overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      {/* Subtle architectural grid / background accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0C23400a_1px,transparent_1px),linear-gradient(to_bottom,#0C23400a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Authoritative Editorial Presentation */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Accreditation Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#0C2340]/8 border border-[#0C2340]/15 text-[#0C2340] text-xs font-semibold tracking-wider uppercase mb-5">
              <Shield className="w-3.5 h-3.5 text-[#0C2340]" />
              <span>Reference Pathology &amp; Clinical Diagnostics</span>
            </div>

            {/* Strict Compliant H1: Locality-specific, keyword-rich, no superlative */}
            <h1
              id="hero-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.18] text-[#0C2340] font-medium tracking-tight mb-5 max-w-2xl"
            >
              ISO 15189:2022 Accredited Clinical Laboratory in Karama, Dubai
            </h1>

            {/* One-Line Positioning */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal mb-7 max-w-xl">
              Delivering reference-grade diagnostic pathology, rapid clinical chemistry, and comprehensive health screening from our 3,400 sq ft reference facility in Carrera Building, Al Karama.
            </p>

            {/* Restrained Trust Line */}
            <div
              id="hero-trust-line"
              className="w-full flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-stone-800 font-medium py-3 px-4 bg-white rounded-lg border border-stone-200/80 shadow-xs mb-8"
            >
              <div className="flex items-center gap-1.5 text-[#0C2340]">
                <CheckCircle2 className="w-4 h-4 text-[#0C2340] shrink-0" />
                <span className="font-semibold">ISO 15189:2022</span>
              </div>
              <span className="text-stone-300">·</span>
              <div className="flex items-center gap-1.5 text-[#0C2340]">
                <CheckCircle2 className="w-4 h-4 text-[#0C2340] shrink-0" />
                <span className="font-semibold">CAP Accredited</span>
              </div>
              <span className="text-stone-300">·</span>
              <div className="flex items-center gap-1.5 text-stone-800">
                <div className="flex text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <span>
                  <strong>{BUSINESS_INFO.rating} ★</strong> ({BUSINESS_INFO.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#book"
                id="hero-book-cta-btn"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#0C2340] text-white text-sm font-semibold hover:bg-[#081829] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0C2340]"
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#find-test"
                id="hero-find-test-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white border border-stone-300 text-stone-800 text-sm font-semibold hover:bg-stone-50 hover:border-stone-400 transition-colors"
              >
                <span>Search Diagnostic Tests</span>
              </a>
            </div>

            {/* Subtle Practical Notes */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-stone-600">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#0C2340]" />
                <span>Home collection across Dubai ({BUSINESS_INFO.homeCollectionFee})</span>
              </div>
              <span className="hidden sm:inline text-stone-300">|</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0C2340]" />
                <span>Office 304, Carrera Building</span>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural & Clinical Facility Overview (Asymmetric Layout) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl border border-stone-200/90 shadow-sm overflow-hidden divide-y divide-stone-100">
              
              {/* Facility Header Card */}
              <div className="p-6 bg-gradient-to-b from-[#EFF5FA] to-white">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-1.5 rounded-lg bg-white border border-stone-200 shadow-xs flex items-center justify-center">
                    <img
                      src="/qlabs-logo-trimmed.png"
                      alt="QLABS Clinical Laboratory Logo"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <span className="inline-block px-2.5 py-1 rounded text-[11px] font-semibold uppercase tracking-wider bg-[#C5A059]/15 text-[#886a2e] border border-[#C5A059]/30">
                    Reference Facility
                  </span>
                </div>

                <h2 className="text-xl font-serif font-semibold text-[#0C2340] mb-1.5">
                  Central Diagnostic Floor
                </h2>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Engineered strictly around ISO 15189:2022 international laboratory quality workflows, temperature-controlled analytical suites, and sample automation.
                </p>
              </div>

              {/* Verified Facility Metrics */}
              <div className="p-6 grid grid-cols-2 gap-4 bg-white">
                <div>
                  <div className="text-2xl font-serif font-semibold text-[#0C2340]">
                    3,400 <span className="text-xs font-sans font-medium text-stone-500">sq ft</span>
                  </div>
                  <div className="text-xs font-medium text-stone-700 mt-0.5">Laboratory Floor</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">Carrera Building, Karama</div>
                </div>

                <div>
                  <div className="text-2xl font-serif font-semibold text-[#0C2340]">
                    4.8 ★
                  </div>
                  <div className="text-xs font-medium text-stone-700 mt-0.5">Patient Reputation</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">Across 160 Google reviews</div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-[#0C2340]">
                    Same-Day
                  </div>
                  <div className="text-xs font-medium text-stone-700 mt-0.5">Routine Turnaround</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">Biochemistry &amp; CBC</div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-[#0C2340]">
                    DHA Licensed
                  </div>
                  <div className="text-xs font-medium text-stone-700 mt-0.5">Clinical Standards</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">Approved CME venue</div>
                </div>
              </div>

              {/* Service Modality Strip */}
              <div className="px-6 py-4 bg-[#EFF5FA] flex items-center justify-between text-xs">
                <div className="text-stone-700">
                  <span className="font-semibold text-stone-900">Visiting Today?</span>{' '}
                  <span className="text-stone-500">Walk-ins and scheduled appointments welcome.</span>
                </div>
                <a
                  href="#book"
                  className="font-semibold text-[#0C2340] hover:underline shrink-0 ml-2"
                >
                  Book Slot →
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
