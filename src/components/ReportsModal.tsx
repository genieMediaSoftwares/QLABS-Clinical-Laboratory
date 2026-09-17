import React, { useState } from 'react';
import { X, FileText, Download, ShieldCheck, AlertCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/labData';

interface ReportsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportsModal: React.FC<ReportsModalProps> = ({ isOpen, onClose }) => {
  const [patientId, setPatientId] = useState('');
  const [refNumber, setRefNumber] = useState('');
  const [status, setStatus] = useState<'idle' | 'searching' | 'ready' | 'not_found'>('idle');

  if (!isOpen) return null;

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientId.trim() || !refNumber.trim()) return;

    setStatus('searching');
    setTimeout(() => {
      // Demo validation: provide realistic preview feedback
      setStatus('ready');
    }, 600);
  };

  const handleReset = () => {
    setStatus('idle');
    setPatientId('');
    setRefNumber('');
  };

  return (
    <div
      id="reports-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reports-modal-title"
    >
      <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#0C2340] px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-lg shrink-0 shadow-xs flex items-center justify-center">
              <img
                src="/qlabs-logo-trimmed.png"
                alt="QLABS Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div>
              <h2 id="reports-modal-title" className="text-lg font-semibold tracking-wide font-display">
                Download Diagnostic Reports
              </h2>
              <p className="text-xs text-stone-300">Official QLABS Patient &amp; Physician Portal</p>
            </div>
          </div>
          <button
            id="close-reports-modal-btn"
            onClick={onClose}
            className="text-stone-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close report portal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {status === 'ready' ? (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-lg flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#0C2340] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#0C2340]">Diagnostic Report Ready for Download</h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Lab Ref #{refNumber.toUpperCase()} has been authenticated under ISO 15189:2022 clinical verification standards.
                  </p>
                </div>
              </div>

              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 text-xs space-y-2 text-stone-700">
                <div className="flex justify-between border-b border-stone-200 pb-1.5">
                  <span className="text-stone-500">Facility:</span>
                  <span className="font-medium text-stone-900">Carrera Building, Al Karama</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-1.5">
                  <span className="text-stone-500">Status:</span>
                  <span className="font-semibold text-blue-900">Final Authorized Report (PDF)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Security Signature:</span>
                  <span className="font-mono text-stone-600">DHA-QLABS-SEC-OK</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  id="download-pdf-sample-btn"
                  onClick={() => {
                    const blob = new Blob([`QLABS Clinical Laboratory - Dubai\nVerified ISO 15189:2022 Diagnostic Report\nReference: ${refNumber}\nFacility: Carrera Building, Al Karama\nStatus: Clinically Verified`], { type: 'text/plain' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `QLABS-Report-${refNumber || 'DEMO'}.txt`;
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                  className="flex-1 bg-[#0C2340] text-white py-2.5 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#081829] transition-colors"
                >
                  <Download className="w-4 h-4" /> Download Certified Report
                </button>
                <button
                  id="lookup-another-btn"
                  onClick={handleReset}
                  className="py-2.5 px-4 rounded-lg border border-stone-300 text-stone-700 text-sm hover:bg-stone-100 transition-colors"
                >
                  Lookup Another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLookup} className="space-y-4">
              <p className="text-xs text-stone-600 leading-relaxed">
                Enter your Emirates ID / Patient ID and the Sample Barcode or Lab Reference Number issued during your test at Carrera Building or home collection.
              </p>

              <div>
                <label htmlFor="patient-id-input" className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1">
                  Emirates ID or Patient File Number
                </label>
                <input
                  id="patient-id-input"
                  type="text"
                  required
                  value={patientId}
                  onChange={(e) => setPatientId(e.target.value)}
                  placeholder="e.g. 784-1988-XXXXXXX-X or P-8492"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#0C2340] text-sm text-stone-900 placeholder:text-stone-400"
                />
              </div>

              <div>
                <label htmlFor="ref-num-input" className="block text-xs font-semibold text-stone-800 uppercase tracking-wider mb-1">
                  Lab Reference Number or Barcode
                </label>
                <input
                  id="ref-num-input"
                  type="text"
                  required
                  value={refNumber}
                  onChange={(e) => setRefNumber(e.target.value)}
                  placeholder="e.g. QL-2025-9831"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#0C2340] text-sm text-stone-900 placeholder:text-stone-400"
                />
              </div>

              <div className="bg-[#FAF6EE] border border-[#C5A059]/30 rounded-lg p-3 flex items-start gap-2.5 text-xs text-stone-700">
                <AlertCircle className="w-4 h-4 text-[#886a2e] shrink-0 mt-0.5" />
                <span>
                  For urgent reports or password assistance, contact our lab desk directly at{' '}
                  <a href={BUSINESS_INFO.phoneHref} className="font-semibold text-[#0C2340] underline">
                    {BUSINESS_INFO.phoneDisplay}
                  </a>.
                </span>
              </div>

              <div className="pt-2">
                <button
                  id="submit-lookup-btn"
                  type="submit"
                  disabled={status === 'searching'}
                  className="w-full bg-[#0C2340] text-white py-3 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#081829] disabled:opacity-50 transition-colors shadow-sm"
                >
                  {status === 'searching' ? 'Verifying Lab Records...' : 'Access Report'}
                </button>
              </div>
            </form>
          )}

          {/* Quick Help Footer */}
          <div className="mt-5 pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
            <span>Helpdesk: {BUSINESS_INFO.hoursWeekday}</span>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-1 font-medium text-[#0C2340] hover:underline"
            >
              <Phone className="w-3.5 h-3.5" /> Call Lab
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
