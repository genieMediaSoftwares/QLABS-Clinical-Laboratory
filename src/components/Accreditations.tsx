import React from 'react';
import { ShieldCheck, Award, BookOpen, CheckCircle2, FileCheck } from 'lucide-react';
import { ACCREDITATIONS_AND_AWARDS } from '../data/labData';

export const Accreditations: React.FC = () => {
  const accreditations = ACCREDITATIONS_AND_AWARDS.filter((a) => a.type === 'accreditation');
  const awards = ACCREDITATIONS_AND_AWARDS.filter((a) => a.type === 'award');
  const cme = ACCREDITATIONS_AND_AWARDS.find((a) => a.type === 'cme');

  return (
    <section
      id="accreditations"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#0C2340] mb-3">
            <Award className="w-4 h-4 text-[#C5A059]" />
            <span>Independent Validation &amp; Quality Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0C2340] font-medium tracking-tight mb-5">
            Accreditations &amp; Industry Honors
          </h2>
          <p className="text-base text-stone-700 leading-relaxed">
            Analytical excellence is governed by rigorous external peer inspection, continuous proficiency testing, and compliance with the world’s most demanding medical laboratory benchmarks.
          </p>
        </div>

        {/* Primary Accreditations (Gold Standard Dual Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {accreditations.map((item) => (
            <div
              key={item.id}
              className="bg-white p-7 sm:p-8 rounded-xl border border-stone-300/80 shadow-xs relative overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0C2340]" />

              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 bg-[#0C2340]/10 rounded-lg text-[#0C2340]">
                    <ShieldCheck className="w-7 h-7 text-[#0C2340]" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF6EE] text-[#886a2e] border border-[#C5A059]/40 tracking-wider uppercase">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#0C2340] mb-1.5">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
                  Issuing Body: {item.body}
                </div>

                <p className="text-sm text-stone-700 leading-relaxed">
                  {item.significance}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-medium text-blue-900">
                <CheckCircle2 className="w-4 h-4 text-[#0C2340]" />
                <span>Verified Diagnostic Standard · Active Registry</span>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Awards & Honors (Specific Names, Bodies, Years) */}
        <div className="mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-4">
            Recognized by UAE &amp; Regional Healthcare Institutions
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {awards.map((award) => (
              <div
                key={award.id}
                className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between hover:border-stone-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-[#886a2e] bg-[#FAF6EE] px-2.5 py-0.5 rounded border border-[#C5A059]/30">
                      {award.year}
                    </span>
                    <FileCheck className="w-4 h-4 text-stone-400" />
                  </div>

                  <h4 className="text-base font-serif font-semibold text-stone-900 mb-1 leading-snug">
                    {award.title}
                  </h4>
                  
                  <div className="text-xs font-medium text-[#0C2340] mb-2.5">
                    {award.body}
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {award.significance}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500">
                  Documented Healthcare Award
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DHA CPD CME Accreditation Banner */}
        {cme && (
          <div className="bg-gradient-to-br from-[#0C2340] to-[#081829] text-white p-6 sm:p-8 rounded-xl shadow-xs border border-[#C5A059]/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg text-[#C5A059] shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
                      Academic &amp; Clinical Leadership
                    </span>
                    <span className="text-white/40">·</span>
                    <span className="text-xs text-stone-300">Dubai Health Authority (DHA)</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-semibold text-white mb-2">
                    {cme.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
                    {cme.significance} Regular clinical audit and case reviews conducted on-site in Carrera Building, Al Karama.
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <a
                  href="#contact"
                  className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-colors text-center"
                >
                  CME Calendar &amp; Medical Affairs
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

