import React, { useState } from 'react';
import {
  Calendar,
  Building,
  Home,
  Upload,
  CheckCircle,
  FileCheck,
  AlertCircle,
  Phone,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/labData';

interface BookingFormProps {
  prefilledTestName?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ prefilledTestName }) => {
  const [serviceType, setServiceType] = useState<'lab_visit' | 'home_collection'>('lab_visit');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState<'Male' | 'Female' | ''>('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('09:30 AM');
  const [testRequested, setTestRequested] = useState(prefilledTestName || '');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Update testRequested if prop changes
  React.useEffect(() => {
    if (prefilledTestName) {
      setTestRequested(prefilledTestName);
    }
  }, [prefilledTestName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `QL-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(generatedRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setDob('');
    setGender('');
    setAddress('');
    setNotes('');
    setFile(null);
  };

  return (
    <section
      id="book"
      className="py-16 sm:py-20 lg:py-24 bg-[#FAFAF8] border-b border-stone-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#0C2340] mb-2">
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            <span>Diagnostic Appointment Booking</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0C2340] font-medium tracking-tight mb-4">
            Schedule a Laboratory Visit or Home Collection
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Choose between attending our 3,400 sq ft Carrera Building central laboratory in Al Karama or requesting a certified mobile phlebotomist across Dubai.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden">
          
          {submitted ? (
            /* Submission Success State */
            <div className="p-8 sm:p-12 text-center">
              <div className="w-16 h-16 bg-[#0C2340]/10 text-[#0C2340] rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-8 h-8 text-[#0C2340]" />
              </div>

              <span className="text-xs font-semibold tracking-wider uppercase text-[#886a2e] bg-[#FAF6EE] px-3 py-1 rounded-full border border-[#C5A059]/30">
                Booking Request Authenticated
              </span>

              <h3 className="text-2xl font-serif font-semibold text-[#0C2340] mt-3 mb-2">
                Thank You, {fullName}
              </h3>

              <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">
                Your appointment request for <strong>{serviceType === 'lab_visit' ? 'Lab Visit (Carrera Building)' : 'Dubai Home Collection'}</strong> has been registered with reference <strong>#{bookingRef}</strong>. Our clinical coordinator will reach out shortly to confirm preparation requirements.
              </p>

              <div className="bg-[#F7F7F4] p-5 rounded-xl border border-stone-200 text-xs text-left max-w-md mx-auto mb-8 space-y-2 text-stone-700">
                <div className="flex justify-between border-b border-stone-200 pb-1.5">
                  <span className="text-stone-500">Service Modality:</span>
                  <span className="font-semibold text-stone-900">
                    {serviceType === 'lab_visit' ? 'In-Lab Visit (Al Karama)' : 'Home Phlebotomy (AED 49)'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-1.5">
                  <span className="text-stone-500">Requested Date &amp; Slot:</span>
                  <span className="font-medium text-stone-900">{appointmentDate || 'Today'} at {appointmentTime}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-1.5">
                  <span className="text-stone-500">Contact Telephone:</span>
                  <span className="font-medium text-stone-900">{phone}</span>
                </div>
                {testRequested && (
                  <div className="flex justify-between border-b border-stone-200 pb-1.5">
                    <span className="text-stone-500">Selected Test:</span>
                    <span className="font-medium text-stone-900 truncate max-w-[200px]">{testRequested}</span>
                  </div>
                )}
                {file && (
                  <div className="flex justify-between">
                    <span className="text-stone-500">Prescription Attached:</span>
                    <span className="font-medium text-blue-900">{file.name}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={BUSINESS_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp Clinical Desk
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-lg border border-stone-300 text-stone-700 text-xs font-semibold hover:bg-stone-50 transition-colors"
                >
                  Schedule Another Appointment
                </button>
              </div>
            </div>
          ) : (
            /* Active Booking Form */
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
              
              {/* Service Type Selection */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-3">
                  1. Select Appointment Modality
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Lab Visit */}
                  <label
                    htmlFor="service-lab-visit"
                    className={`relative p-5 rounded-xl border-2 flex items-start gap-4 cursor-pointer transition-all ${
                      serviceType === 'lab_visit'
                        ? 'border-[#0C2340] bg-[#0C2340]/5 shadow-xs'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      id="service-lab-visit"
                      name="serviceType"
                      value="lab_visit"
                      checked={serviceType === 'lab_visit'}
                      onChange={() => setServiceType('lab_visit')}
                      className="mt-1 text-[#0C2340] focus:ring-[#0C2340]"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-[#0C2340]" />
                        <span className="text-sm font-semibold text-stone-900">
                          Lab Visit (Al Karama)
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 mt-1">
                        Visit Carrera Building, Office 304. Full access to sterile collection suites &amp; on-site consultation.
                      </p>
                    </div>
                  </label>

                  {/* Home Collection with AED 49 Notice */}
                  <label
                    htmlFor="service-home-collection"
                    className={`relative p-5 rounded-xl border-2 flex items-start gap-4 cursor-pointer transition-all ${
                      serviceType === 'home_collection'
                        ? 'border-[#0C2340] bg-[#0C2340]/5 shadow-xs'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <input
                      type="radio"
                      id="service-home-collection"
                      name="serviceType"
                      value="home_collection"
                      checked={serviceType === 'home_collection'}
                      onChange={() => setServiceType('home_collection')}
                      className="mt-1 text-[#0C2340] focus:ring-[#0C2340]"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <Home className="w-4 h-4 text-[#0C2340]" />
                        <span className="text-sm font-semibold text-stone-900">
                          Home Collection
                        </span>
                        <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                          +{BUSINESS_INFO.homeCollectionFee}
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 mt-1">
                        Certified phlebotomist arrives at your home or office across Dubai with certified cold-chain transport.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Patient Personal Details */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-3">
                  2. Patient Information
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="full-name" className="block text-xs font-medium text-stone-700 mb-1">
                      Full Name (as per Emirates ID / Passport) *
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Abdullah Rahman"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#0C2340]"
                    />
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label htmlFor="phone-number" className="block text-xs font-medium text-stone-700 mb-1">
                      Mobile Number (+971 format) *
                    </label>
                    <input
                      type="tel"
                      id="phone-number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 50 123 4567"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#0C2340]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email-address" className="block text-xs font-medium text-stone-700 mb-1">
                      Email Address (for confidential digital report) *
                    </label>
                    <input
                      type="email"
                      id="email-address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="patient@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#0C2340]"
                    />
                  </div>

                  {/* Date of Birth — Clean label, NO 'ID Layout Date' defect! */}
                  <div>
                    <label htmlFor="date-of-birth" className="block text-xs font-medium text-stone-700 mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="date-of-birth"
                      required
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#0C2340]"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label htmlFor="gender-select" className="block text-xs font-medium text-stone-700 mb-1">
                      Gender *
                    </label>
                    <select
                      id="gender-select"
                      required
                      value={gender}
                      onChange={(e) => setGender(e.target.value as 'Male' | 'Female')}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#0C2340] bg-white"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  {/* Test Requested */}
                  <div>
                    <label htmlFor="requested-test" className="block text-xs font-medium text-stone-700 mb-1">
                      Diagnostic Test or Health Package
                    </label>
                    <input
                      type="text"
                      id="requested-test"
                      value={testRequested}
                      onChange={(e) => setTestRequested(e.target.value)}
                      placeholder="e.g. Complete Blood Count, Lipid Profile, or As Prescribed"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#0C2340]"
                    />
                  </div>
                </div>

                {/* Conditional Home Address Field */}
                {serviceType === 'home_collection' && (
                  <div className="mt-4 p-4 rounded-xl bg-amber-50/60 border border-amber-200">
                    <label htmlFor="home-address" className="block text-xs font-medium text-amber-950 mb-1">
                      Home / Office Collection Address in Dubai * (AED 49 additional fee applies)
                    </label>
                    <input
                      type="text"
                      id="home-address"
                      required={serviceType === 'home_collection'}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. Villa 14, Street 12, Al Barsha 2, Dubai"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-amber-300 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#0C2340] bg-white"
                    />
                  </div>
                )}
              </div>

              {/* Appointment Date & Prescription Upload */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-3">
                  3. Appointment Date &amp; Doctor Prescription
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="appointment-date" className="block text-xs font-medium text-stone-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="appointment-date"
                      required
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#0C2340]"
                    />
                  </div>

                  <div>
                    <label htmlFor="appointment-time" className="block text-xs font-medium text-stone-700 mb-1">
                      Preferred Time Slot *
                    </label>
                    <select
                      id="appointment-time"
                      required
                      value={appointmentTime}
                      onChange={(e) => setAppointmentTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#0C2340] bg-white"
                    >
                      <option value="09:00 AM">09:00 AM – 10:00 AM (Fasting Ideal)</option>
                      <option value="10:00 AM">10:00 AM – 11:00 AM (Fasting Ideal)</option>
                      <option value="11:00 AM">11:00 AM – 12:00 PM</option>
                      <option value="01:00 PM">01:00 PM – 03:00 PM</option>
                      <option value="04:00 PM">04:00 PM – 06:00 PM</option>
                      <option value="06:00 PM">06:00 PM – 08:30 PM (Evening)</option>
                    </select>
                  </div>
                </div>

                {/* Prescription Upload Area */}
                <div className="mt-4">
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Upload Prescription / Doctor's Lab Order (Optional)
                  </label>
                  <div className="border-2 border-dashed border-stone-300 rounded-xl p-5 text-center hover:border-stone-400 transition-colors bg-stone-50/50">
                    <input
                      type="file"
                      id="prescription-file-upload"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setFile(e.target.files[0]);
                        }
                      }}
                      className="hidden"
                    />
                    <label
                      htmlFor="prescription-file-upload"
                      className="cursor-pointer flex flex-col items-center justify-center"
                    >
                      {file ? (
                        <div className="flex items-center gap-2 text-sm font-medium text-blue-900">
                          <FileCheck className="w-5 h-5 text-[#0C2340]" />
                          <span>{file.name}</span>
                          <span className="text-xs text-stone-400">({(file.size / 1024).toFixed(0)} KB)</span>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-6 h-6 text-stone-400 mb-2" />
                          <span className="text-xs font-semibold text-[#0C2340] hover:underline">
                            Click to upload doctor's prescription or drag &amp; drop
                          </span>
                          <span className="text-[11px] text-stone-500 mt-0.5">
                            PDF, PNG, JPG up to 10MB accepted
                          </span>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                {/* Additional Clinical Notes */}
                <div className="mt-4">
                  <label htmlFor="patient-notes" className="block text-xs font-medium text-stone-700 mb-1">
                    Clinical Notes or Inquiries (Optional)
                  </label>
                  <textarea
                    id="patient-notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Questions regarding fasting protocols, insurance reimbursement documentation, or specific symptoms..."
                    className="w-full px-3.5 py-2 rounded-lg border border-stone-300 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#0C2340]"
                  />
                </div>
              </div>

              {/* Submit Action */}
              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-stone-500 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>Your medical data is handled under strict ISO 15189:2022 patient privacy safeguards.</span>
                </div>

                <button
                  type="submit"
                  id="submit-booking-form-btn"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#0C2340] text-white font-semibold text-sm hover:bg-[#081829] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0C2340]"
                >
                  Confirm Appointment Request
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
