import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/labData';

interface FooterProps {
  onOpenReports: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReports }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#07172A] text-stone-300 border-t border-[#0C2340]">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#top" className="flex items-center gap-3 group">
              <div className="bg-white px-2.5 py-1.5 rounded-lg border border-white/20 inline-flex items-center justify-center shadow-xs">
                <img
                  src="/qlabs-logo-trimmed.png"
                  alt="QLABS Clinical Laboratory"
                  className="h-9 w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">QLABS</span>
                <span className="text-[10px] tracking-widest uppercase text-stone-400 font-medium">
                  Clinical Laboratory · Dubai
                </span>
              </div>
            </a>

            <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
              Reference diagnostic pathology laboratory in Al Karama, Dubai. Certified under ISO 15189:2022 and accredited by the College of American Pathologists (CAP).
            </p>

            {/* Accreditation Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#0C2340] border border-[#C5A059]/30 text-[11px] font-semibold text-[#C5A059]">
                <ShieldCheck className="w-3.5 h-3.5" /> ISO 15189:2022
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#0C2340] border border-white/15 text-[11px] font-semibold text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-300" /> CAP Accredited
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#0C2340] border border-white/15 text-[11px] font-semibold text-stone-300">
                DHA Licensed
              </span>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Clinical Navigation
            </h3>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Laboratory Facility
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Diagnostic Disciplines
                </a>
              </li>
              <li>
                <a href="#accreditations" className="hover:text-white transition-colors">
                  Accreditations &amp; Awards
                </a>
              </li>
              <li>
                <a href="#find-test" className="hover:text-white transition-colors">
                  Search Tests Catalog
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-white transition-colors">
                  Schedule In-Lab / Home Collection
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenReports}
                  className="hover:text-white text-[#C5A059] transition-colors inline-flex items-center gap-1"
                >
                  Download Patient Reports →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details with Corrected Links (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Karama Central Laboratory
            </h3>
            
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              {/* Corrected Phone Link (Fixing tel:971457822239 defect) */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneHref}
                  id="footer-phone-link"
                  className="hover:text-white transition-colors font-medium text-white"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              {/* WhatsApp Link */}
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors text-emerald-400 font-medium"
                >
                  WhatsApp: {BUSINESS_INFO.whatsappDisplay}
                </a>
              </div>

              {/* Email Link */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href={BUSINESS_INFO.emailHref}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            {/* Social Media Links (Correct Public Company URLs) */}
            <div className="pt-2">
              <div className="text-[11px] font-semibold text-stone-400 mb-2 uppercase tracking-wider">
                Official Channels
              </div>
              <div className="flex items-center gap-3 text-stone-300">
                <a
                  href={BUSINESS_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-xs hover:underline"
                >
                  Facebook
                </a>
                <span>·</span>
                <a
                  href={BUSINESS_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-xs hover:underline"
                >
                  Instagram
                </a>
                <span>·</span>
                <a
                  href={BUSINESS_INFO.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-xs hover:underline"
                >
                  YouTube
                </a>
                <span>·</span>
                {/* Fixed LinkedIn URL pointing to public company page, NOT admin dashboard! */}
                <a
                  href={BUSINESS_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-linkedin-link"
                  className="hover:text-white transition-colors text-xs hover:underline"
                >
                  LinkedIn (Company)
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer: Dynamic Year, Staging URL Defect Fix, Back to Top */}
      <div className="border-t border-[#0C2340] bg-[#040E1B] text-stone-400 text-xs py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {currentYear}{' '}
            <a
              href="#top"
              id="footer-copyright-brand-link"
              className="font-medium text-stone-300 hover:text-white underline decoration-stone-600"
            >
              {BUSINESS_INFO.legalName}
            </a>
            . Licensed by Dubai Health Authority (DHA).
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-stone-400">
              Hours: {BUSINESS_INFO.hoursConsolidated}
            </span>
            <a
              href="#top"
              className="inline-flex items-center gap-1 text-stone-300 hover:text-white transition-colors"
              aria-label="Back to top of page"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
