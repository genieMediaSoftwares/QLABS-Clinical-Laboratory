import React, { useState, useEffect } from 'react';
import { Phone, Search, FileText, Menu, X, Clock, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/labData';

interface HeaderProps {
  onOpenReports: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReports }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Accreditations', href: '#accreditations' },
    { label: 'Book Appointment', href: '#book' },
    { label: 'Location & Hours', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className="sticky top-0 z-40 w-full transition-shadow duration-300"
    >
      {/* Top Clinical Notification & Contact Strip */}
      <div className="bg-[#061524] text-stone-300 text-xs border-b border-[#0C2340] px-4 sm:px-6 lg:px-8 py-1.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5">
          <div className="flex items-center gap-2 text-stone-300">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
            <span className="font-medium text-stone-200">ISO 15189:2022 Certified &amp; CAP Accredited</span>
            <span className="hidden md:inline text-stone-400">· Carrera Building, Al Karama, Dubai</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <div className="hidden lg:flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{BUSINESS_INFO.hoursConsolidated}</span>
            </div>
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
              title="Chat with Laboratory via WhatsApp"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp: {BUSINESS_INFO.whatsappDisplay}</span>
            </a>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="font-semibold text-white hover:text-[#C5A059] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`bg-[#0C2340] text-white px-4 sm:px-6 lg:px-8 transition-all duration-200 ${
          isScrolled ? 'py-3 shadow-md border-b border-[#071726]' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#top"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C5A059] rounded-lg py-1"
            aria-label="QLABS Clinical Laboratory Homepage"
          >
            {/* Official QLABS Clinical Laboratory Logo */}
            <div className="bg-white px-2.5 py-1.5 rounded-lg border border-white/25 shadow-xs flex items-center justify-center group-hover:border-[#C5A059] transition-colors">
              <img
                src="/qlabs-logo-trimmed.png"
                alt="QLABS Clinical Laboratory"
                className="h-9 sm:h-10 w-auto object-contain"
                loading="eager"
              />
            </div>

            <div className="hidden sm:flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-bold tracking-tight text-white font-sans">QLABS</span>
                <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-semibold">
                  Reference Lab
                </span>
              </div>
              <span className="text-[10px] tracking-wider uppercase text-blue-100/70 font-medium">
                Al Karama, Dubai · ISO 15189
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav"
            className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-200"
            aria-label="Primary Navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-white hover:underline underline-offset-4 decoration-[#C5A059] transition-colors relative py-1 focus:outline-none focus:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="#find-test"
              id="header-find-test-btn"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-md border border-[#C5A059]/50 text-[#FAF6EE] hover:bg-white/10 hover:border-[#C5A059] transition-colors"
            >
              <Search className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Find a Test</span>
            </a>

            <button
              type="button"
              id="header-download-reports-btn"
              onClick={onOpenReports}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-md bg-[#C5A059] text-[#071726] hover:bg-[#d8b874] transition-colors shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-[#071726]" />
              <span>Download Reports</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-panel"
            className="lg:hidden mt-3 pt-3 border-t border-white/10 pb-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-stone-200 hover:bg-white/10 hover:text-white rounded-md transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#find-test"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-md border border-[#C5A059]/50 text-white hover:bg-white/10"
              >
                <Search className="w-4 h-4 text-[#C5A059]" />
                <span>Search Tests Catalog</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReports();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-md bg-[#C5A059] text-[#071726] hover:bg-[#d8b874]"
              >
                <FileText className="w-4 h-4" />
                <span>Download Patient Reports</span>
              </button>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 text-xs text-stone-300 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Call Desk: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
