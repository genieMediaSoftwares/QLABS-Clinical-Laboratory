import React from 'react';
import { Microscope, Award, Building, Check, Clock, Stethoscope } from 'lucide-react';
import { BUSINESS_INFO } from '../data/labData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#0C2340] mb-3">
            Reference Laboratory Overview
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0C2340] font-medium tracking-tight mb-5 leading-tight">
            Institutional Diagnostic Precision in the Heart of Al Karama
          </h2>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            Operating from a dedicated 3,400 sq ft clinical facility in Carrera Building, QLABS Clinical Laboratory was established to deliver precision medicine, rigorous analytical accuracy, and uncompromised quality standards to healthcare practitioners, clinics, and patients throughout Dubai.
          </p>
        </div>

        {/* Asymmetric Editorial Layout: Concrete Institutional Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Narrative & Clinical Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-stone-800 leading-relaxed text-sm sm:text-base">
            <p className="text-stone-700">
              Modern therapeutic decisions depend fundamentally on laboratory integrity. QLABS adheres to the stringent international quality metrics of <strong className="text-stone-950 font-semibold">ISO 15189:2022</strong> and holds <strong className="text-stone-950 font-semibold">CAP Accreditation</strong> from the College of American Pathologists. Every specimen undergoes automated barcoded verification, multi-level analytical calibration, and consultant pathologist review prior to dispatch.
            </p>

            <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-xs my-6">
              <h3 className="text-base font-serif font-semibold text-[#0C2340] mb-3 flex items-center gap-2">
                <Microscope className="w-5 h-5 text-[#0C2340]" />
                <span>Analytical Rigor &amp; Laboratory Disciplines</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-4">
                Our central facility houses dedicated analytical sections covering routine and high-complexity diagnostic modalities:
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-stone-800">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0C2340] shrink-0 mt-0.5" />
                  <span>Clinical Biochemistry &amp; Electrolytes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0C2340] shrink-0 mt-0.5" />
                  <span>Automated Hematology &amp; Coagulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0C2340] shrink-0 mt-0.5" />
                  <span>Endocrinology &amp; Tumor Serology</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0C2340] shrink-0 mt-0.5" />
                  <span>Infectious Immunology &amp; Serodiagnostics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0C2340] shrink-0 mt-0.5" />
                  <span>Automated Urinalysis &amp; Microscopy</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#0C2340] shrink-0 mt-0.5" />
                  <span>Preventive Metabolic &amp; Lipid Cascades</span>
                </li>
              </ul>
            </div>

            <p className="text-stone-700">
              Beyond individual patient testing, QLABS functions as an authorized Continuing Medical Education venue, hosting DHA CPD-approved CME sessions that bridge analytical pathology with clinical practice for physicians and healthcare leaders across the Emirates.
            </p>
          </div>

          {/* Right Column: Key Operational Credentials & Facts (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Facility Card */}
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs">
              <div className="flex items-center gap-3 text-[#0C2340] mb-3">
                <div className="p-2 rounded-md bg-[#0C2340]/10">
                  <Building className="w-5 h-5 text-[#0C2340]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">Dedicated Reference Infrastructure</h4>
                  <p className="text-xs text-stone-500">Carrera Building, Al Karama</p>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                3,400 sq ft designed specifically for sterile specimen workflow, cold-chain preservation, and continuous sample tracking without cross-contamination.
              </p>
              <div className="text-xs font-medium text-stone-700 pt-3 border-t border-stone-100 flex items-center justify-between">
                <span>Location: Office 304, Carrera Bldg</span>
                <span className="text-[#0C2340] font-semibold">Al Karama, Dubai</span>
              </div>
            </div>

            {/* Home Phlebotomy Fleet */}
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h4 className="text-sm font-semibold text-stone-900 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#0C2340]" />
                  <span>Dubai-Wide Home Collection</span>
                </h4>
                <span className="px-2 py-0.5 text-[11px] font-semibold text-[#0C2340] bg-[#0C2340]/10 rounded">
                  {BUSINESS_INFO.homeCollectionFee}
                </span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                Certified DHA-licensed phlebotomists equipped with calibrated portable centrifuge and cold-chain sample transport containers visit residences and workplaces throughout Dubai.
              </p>
              <a
                href="#book"
                className="text-xs font-semibold text-[#0C2340] hover:underline inline-flex items-center gap-1"
              >
                Schedule Home Collection Appointment →
              </a>
            </div>

            {/* Physician & Clinic Collaboration */}
            <div className="bg-gradient-to-br from-[#0C2340] to-[#081829] text-white p-6 rounded-xl shadow-xs border border-[#C5A059]/20">
              <div className="flex items-center gap-2 text-[#C5A059] text-xs font-semibold uppercase tracking-wider mb-2">
                <Award className="w-4 h-4" />
                <span>Clinical Governance</span>
              </div>
              <h4 className="text-base font-serif font-medium text-white mb-2">
                Physician &amp; Clinic Partnerships
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed mb-4">
                Direct telephonic correlation with our clinical pathologists for ambiguous results, critical panic values, and sub-specialty differential discussions.
              </p>
              <div className="flex items-center gap-4 text-xs text-stone-300 pt-3 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Mon–Sat 9am–9pm</span>
                </div>
                <span>·</span>
                <a href={BUSINESS_INFO.phoneHref} className="text-[#C5A059] hover:underline font-semibold">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
