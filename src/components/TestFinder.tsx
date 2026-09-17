import React, { useState, useMemo } from 'react';
import { Search, Filter, Clock, AlertCircle, ArrowRight, Check, Sparkles } from 'lucide-react';
import { DIAGNOSTIC_TESTS, BUSINESS_INFO } from '../data/labData';

interface TestFinderProps {
  selectedCategoryFilter: string;
  onSelectCategoryFilter: (category: string) => void;
  onSelectTestToBook: (testName: string) => void;
}

export const TestFinder: React.FC<TestFinderProps> = ({
  selectedCategoryFilter,
  onSelectCategoryFilter,
  onSelectTestToBook,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All Tests', 'Core Diagnostics', 'Preventive & Wellness', 'Specialized Services'];

  const filteredTests = useMemo(() => {
    return DIAGNOSTIC_TESTS.filter((test) => {
      const matchesCategory =
        selectedCategoryFilter === 'All Tests' || test.category === selectedCategoryFilter;
      
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        test.name.toLowerCase().includes(query) ||
        test.code.toLowerCase().includes(query) ||
        test.clinicalSignificance.toLowerCase().includes(query) ||
        test.sampleType.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategoryFilter, searchQuery]);

  const handleBookTest = (testName: string) => {
    onSelectTestToBook(testName);
    const bookElem = document.getElementById('book');
    if (bookElem) {
      bookElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="find-test"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#0C2340] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Integrated Test Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0C2340] font-medium tracking-tight">
              Find a Diagnostic Test or Clinical Panel
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            Directly search routine chemistry, hematology, and sub-specialty assays with verified specimen preparation rules and turnaround parameters.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                id="test-catalog-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by test name, code (e.g. CBC, HbA1c, Lipid, TSH)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#0C2340] text-sm text-stone-900 placeholder:text-stone-400 bg-stone-50/50"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 p-1"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-xs text-stone-400 mr-1 hidden sm:inline flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
              </span>
              {categories.map((cat) => {
                const isActive = selectedCategoryFilter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => onSelectCategoryFilter(cat)}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-[#0C2340] text-white shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        {/* Results Counter & Fasting Notice */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-500 mb-6">
          <span>
            Showing <strong>{filteredTests.length}</strong> verified laboratory tests
            {selectedCategoryFilter !== 'All Tests' ? ` in ${selectedCategoryFilter}` : ''}
          </span>
          <span className="text-stone-600">
            Fasting instructions are strictly laboratory-standard for analytical precision.
          </span>
        </div>

        {/* Test Cards Grid */}
        {filteredTests.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTests.map((test) => (
              <div
                key={test.id}
                className="bg-white p-6 rounded-xl border border-stone-200/90 shadow-xs flex flex-col justify-between hover:border-stone-300 transition-colors"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <span className="font-mono text-[11px] font-semibold text-[#0C2340] bg-[#0C2340]/8 px-2 py-0.5 rounded">
                      {test.code}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                        test.fastingRequired
                          ? 'bg-amber-50 text-amber-800 border border-amber-200'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {test.fastingRequired ? 'Fasting Required' : 'Non-Fasting'}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-stone-900 mb-2 leading-snug">
                    {test.name}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {test.clinicalSignificance}
                  </p>

                  <div className="space-y-1.5 text-xs text-stone-500 pt-3 border-t border-stone-100">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-400">Specimen:</span>
                      <span className="font-medium text-stone-700 text-right truncate max-w-[180px]">
                        {test.sampleType}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-stone-400">Turnaround:</span>
                      <span className="font-medium text-blue-900 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {test.turnaroundTime}
                      </span>
                    </div>

                    {test.fastingInstructions && (
                      <div className="text-[11px] text-amber-700 bg-amber-50/70 p-1.5 rounded mt-2">
                        {test.fastingInstructions}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-stone-500">{test.category}</span>
                  <button
                    type="button"
                    onClick={() => handleBookTest(test.name)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0C2340] hover:text-[#081829] hover:underline"
                  >
                    <span>Book This Test</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-10 rounded-xl border border-stone-200 text-center max-w-lg mx-auto">
            <AlertCircle className="w-8 h-8 text-stone-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-stone-800 mb-1">No Tests Match "{searchQuery}"</h3>
            <p className="text-xs text-stone-600 mb-4">
              We perform over 300+ specialized clinical pathology and reference assays at Carrera Building.
            </p>
            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  onSelectCategoryFilter('All Tests');
                }}
                className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-stone-100 text-stone-800 hover:bg-stone-200"
              >
                Reset Search Filters
              </button>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#0C2340] text-white hover:bg-[#081829]"
              >
                Call Lab Desk: {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        )}

        {/* Prescription & Specialist Assistance Callout */}
        <div className="mt-8 bg-white p-5 rounded-xl border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-md bg-[#0C2340]/10 text-[#0C2340] shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-stone-900">Have a Doctor's Prescription or Lab Order Form?</div>
              <div className="text-stone-600">
                You can upload your physician's prescription directly in our booking form below for automatic verification.
              </div>
            </div>
          </div>
          <a
            href="#book"
            className="px-4 py-2 rounded-lg bg-[#0C2340] text-white font-semibold text-center hover:bg-[#081829] transition-colors shrink-0"
          >
            Upload Prescription in Form ↓
          </a>
        </div>

      </div>
    </section>
  );
};
