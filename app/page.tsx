'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 mb-8 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 py-8 sm:py-12 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-8 lg:space-y-0">
              {/* Левая часть - текст и кнопки */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
                  All services in one place.
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-white mb-6 sm:mb-8 opacity-90 leading-relaxed">
                  Find services for kids and parents: babysitting, parties, courses, camps, and more.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
                    Find a service
                  </button>
                  <button className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors text-sm sm:text-base">
                    Add service
                  </button>
                </div>
              </div>
              
              {/* Правая часть - изображение */}
              <div className="flex-1 lg:max-w-lg">
                <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-200 rounded-lg flex items-center justify-center relative">
                  <div className="text-gray-500 text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    <p className="text-xs sm:text-sm">Image placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Остальной контент */}
        <div className="max-w-[1400px] mx-auto py-4 px-4">
          {/* Browse by Category Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Browse by Category</h2>
            <p className="text-gray-600">Find exactly what you're looking for.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-orange-400 h-32 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Category 1</span>
            </div>
            <div className="bg-yellow-400 h-32 rounded-lg flex items-center justify-center">
              <span className="text-gray-800 font-semibold">Category 2</span>
            </div>
            <div className="bg-blue-400 h-32 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">Category 3</span>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">What Parents Say</h2>
            <p className="text-gray-600">Real reviews from real families</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">"Excellent service! The babysitter was professional and my kids loved her. Highly recommended!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Mother of 2</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">"The party planning service made my daughter's birthday perfect. Everything was organized beautifully!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Mike Chen</p>
                  <p className="text-sm text-gray-600">Father of 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}