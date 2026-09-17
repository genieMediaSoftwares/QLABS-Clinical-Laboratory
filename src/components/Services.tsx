import React from 'react';
import { Activity, HeartPulse, Dna, Briefcase, ArrowUpRight, CheckCircle } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/labData';

interface ServicesProps {
  onSelectCategoryFilter?: (category: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectCategoryFilter }) => {
  const handleCategoryClick = (categoryName: string) => {
    if (onSelectCategoryFilter) {
      onSelectCategoryFilter(categoryName);
    }
    const elem = document.getElementById('find-test');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const core = SERVICE_CATEGORIES.find((s) => s.id === 'core-diagnostics')!;
  const wellness = SERVICE_CATEGORIES.find((s) => s.id === 'preventive-wellness')!;
  const specialized = SERVICE_CATEGORIES.find((s) => s.id === 'specialized-services')!;
  const labMgmt = SERVICE_CATEGORIES.find((s) => s.id === 'laboratory-management')!;

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-[#F1F5F9] border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#0C2340] mb-2">
              Clinical Service Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0C2340] font-medium tracking-tight">
              Diagnostic Modalities &amp; Laboratory Disciplines
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            Organized across four established service lines, supporting outpatient preventive healthcare, acute physician decisions, and institutional reference pathology.
          </p>
        </div>

        {/* Asymmetric Service Layout (Not identical card grids) */}
        <div className="space-y-6">
          
          {/* Top Row: Core Diagnostics (Left) & Preventive Wellness (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Core Diagnostics (7 cols) */}
            <div className="lg:col-span-7 bg-white p-7 sm:p-8 rounded-xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#0C2340]/10 text-[#0C2340]">
                      <Activity className="w-5 h-5 text-[#0C2340]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0C2340]">
                        {core.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif font-semibold text-stone-900">
                        {core.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-blue-900 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 shrink-0">
                    {core.turnaroundNote}
                  </span>
                </div>

                <p className="text-sm text-stone-700 leading-relaxed mb-6">
                  {core.summary}
                </p>

                <div className="mb-6">
                  <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2.5">
                    Clinical Parameter Groups
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-800">
                    {core.details.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0C2340] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <span className="text-stone-500">Specimens: {core.sampleTypes}</span>
                <button
                  type="button"
                  onClick={() => handleCategoryClick('Core Diagnostics')}
                  className="inline-flex items-center gap-1 font-semibold text-[#0C2340] hover:underline"
                >
                  <span>Explore Core Diagnostic Tests</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Preventive & Wellness (5 cols) */}
            <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#C5A059]/20 text-[#886a2e]">
                      <HeartPulse className="w-5 h-5 text-[#886a2e]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#886a2e]">
                        {wellness.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif font-semibold text-stone-900">
                        {wellness.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-stone-700 leading-relaxed mb-6">
                  {wellness.summary}
                </p>

                <div className="mb-6">
                  <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2.5">
                    Target Biomarkers &amp; Profiles
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-800">
                    {wellness.details.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500">{wellness.turnaroundNote}</span>
                <button
                  type="button"
                  onClick={() => handleCategoryClick('Preventive & Wellness')}
                  className="inline-flex items-center gap-1 font-semibold text-[#0C2340] hover:underline"
                >
                  <span>View Wellness Panels</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Row: Specialized Services (7 cols) & Laboratory Management (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Specialized Services (7 cols) */}
            <div className="lg:col-span-7 bg-white p-7 sm:p-8 rounded-xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#0C2340]/10 text-[#0C2340]">
                      <Dna className="w-5 h-5 text-[#0C2340]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0C2340]">
                        {specialized.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif font-semibold text-stone-900">
                        {specialized.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-stone-600 bg-stone-100 px-2.5 py-1 rounded">
                    {specialized.turnaroundNote}
                  </span>
                </div>

                <p className="text-sm text-stone-700 leading-relaxed mb-6">
                  {specialized.summary}
                </p>

                <div className="mb-6">
                  <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2.5">
                    Sub-Specialty Focus Areas
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-800">
                    {specialized.details.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#0C2340] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500">Specimens: {specialized.sampleTypes}</span>
                <button
                  type="button"
                  onClick={() => handleCategoryClick('Specialized Services')}
                  className="inline-flex items-center gap-1 font-semibold text-[#0C2340] hover:underline"
                >
                  <span>Search Specialized Assays</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Laboratory Management (5 cols) Institutional Theme */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0C2340] to-[#081829] text-white p-7 sm:p-8 rounded-xl shadow-xs flex flex-col justify-between border border-[#C5A059]/20">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-white/10 text-[#C5A059]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C5A059]">
                      {labMgmt.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white">
                      {labMgmt.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-stone-300 leading-relaxed mb-6">
                  {labMgmt.summary}
                </p>

                <div className="mb-6">
                  <div className="text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2.5">
                    Operational Scope for Partner Facilities
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-stone-200">
                    {labMgmt.details.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-stone-400">Cold-Chain Pickup Across Dubai</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 font-semibold text-[#C5A059] hover:underline"
                >
                  <span>Inquire for Clinic Partnership</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
