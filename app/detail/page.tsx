'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SearchAndFilter from '@/components/shared/SearchAndFilter';
import ServicesGrid from '@/components/shared/ServicesGrid';
import { getServices } from '@/lib/data';

export default function DetailPage() {
  const allServices = getServices();
  const [filteredServices, setFilteredServices] = React.useState(allServices);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
          <div className="max-w-[1400px] mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Service Details
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Discover all available services and find the perfect match for your family
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="max-w-[1400px] mx-auto py-8 px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Available Services</h2>
            <p className="text-gray-600">Choose from our verified service providers</p>
          </div>

          {/* Search and Filter Component */}
          <div className="mb-8">
            <SearchAndFilter 
              services={allServices}
              onFilteredServices={setFilteredServices}
            />
          </div>

          {/* Services Grid */}
          <ServicesGrid services={filteredServices} />
        </div>

        {/* Additional Info Section */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Choose Us?</h2>
              <p className="text-gray-600">We ensure quality and safety for your family</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Verified Providers</h3>
                <p className="text-gray-600">All service providers are background checked and verified</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Booking</h3>
                <p className="text-gray-600">Book services instantly with our easy-to-use platform</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600">We guarantee the quality of all services on our platform</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}