import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Accreditations } from './components/Accreditations';
import { TestFinder } from './components/TestFinder';
import { BookingForm } from './components/BookingForm';
import { Reviews } from './components/Reviews';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { MobileBar } from './components/MobileBar';
import { ReportsModal } from './components/ReportsModal';

export default function App() {
  const [reportsModalOpen, setReportsModalOpen] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All Tests');
  const [prefilledTestName, setPrefilledTestName] = useState('');

  const handleSelectCategoryFromServices = (category: string) => {
    setSelectedCategoryFilter(category);
  };

  const handleSelectTestToBook = (testName: string) => {
    setPrefilledTestName(testName);
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1D241C]">
      {/* 1. Sticky Header */}
      <Header onOpenReports={() => setReportsModalOpen(true)} />

      <main className="flex-1 pb-16 lg:pb-0">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Services Section */}
        <Services onSelectCategoryFilter={handleSelectCategoryFromServices} />

        {/* 5. Accreditations & Awards Section */}
        <Accreditations />

        {/* 6. Find a Test Section */}
        <TestFinder
          selectedCategoryFilter={selectedCategoryFilter}
          onSelectCategoryFilter={setSelectedCategoryFilter}
          onSelectTestToBook={handleSelectTestToBook}
        />

        {/* 7. Book an Appointment Section */}
        <BookingForm prefilledTestName={prefilledTestName} />

        {/* 8. Reviews Section */}
        <Reviews />

        {/* 9. Location & Hours Section */}
        <LocationHours />
      </main>

      {/* 10. Footer */}
      <Footer onOpenReports={() => setReportsModalOpen(true)} />

      {/* Mobile Sticky Action Bar */}
      <MobileBar />

      {/* Patient & Doctor Reports Portal Modal */}
      <ReportsModal
        isOpen={reportsModalOpen}
        onClose={() => setReportsModalOpen(false)}
      />
    </div>
  );
}
