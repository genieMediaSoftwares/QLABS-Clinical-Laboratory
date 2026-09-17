import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/labData';

export const Reviews: React.FC = () => {
  return (
    <section
      id="reviews"
      className="py-16 sm:py-20 lg:py-24 bg-[#FAFAF8] border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#0C2340] mb-2">
              Patient &amp; Physician Perspectives
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0C2340] font-medium tracking-tight mb-2">
              Independent Patient &amp; Clinical Feedback
            </h2>
            <div className="flex items-center gap-2 text-sm text-stone-700">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="font-semibold text-stone-900">{BUSINESS_INFO.rating} out of 5.0</span>
              <span className="text-stone-400">·</span>
              <span className="text-stone-600">Based on {BUSINESS_INFO.reviewCount} Google Reviews</span>
            </div>
          </div>

          {/* Sample Text Transparency Disclaimer as Required by Prompt */}
          <div className="bg-[#FAF6EE] border border-[#C5A059]/40 p-3.5 rounded-xl max-w-sm text-xs text-stone-700">
            <span className="font-semibold text-[#886a2e] uppercase tracking-wider block mb-0.5">
              Client Pitch Demo Notice
            </span>
            <span>
              The cards below present representative sample quotes reflecting QLABS' confirmed 4.8★ Google Review rating across 160 patient reviews.
            </span>
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-7 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0C2340]" />
                    <span>{item.date}</span>
                  </span>
                </div>

                <div className="relative mb-6">
                  <MessageSquareQuote className="w-6 h-6 text-stone-300 absolute -top-2 -left-1 -z-0 opacity-50" />
                  <p className="text-sm text-stone-700 leading-relaxed relative z-10 italic">
                    "{item.comment}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <div className="font-serif font-semibold text-stone-900 text-base">
                  {item.author}
                </div>
                <div className="text-xs text-stone-500 mt-0.5">
                  {item.designation}
                </div>
                <div className="text-[11px] font-medium text-[#0C2340] mt-2 bg-[#0C2340]/6 inline-block px-2 py-0.5 rounded">
                  {item.serviceType}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
