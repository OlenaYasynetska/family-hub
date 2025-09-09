'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CategoryGrid from '@/components/sections/CategoryGrid';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import { getCategories, getTestimonials } from '@/lib/data';

export default function Home() {
  // Получаем данные из JSON файлов
  const categories = getCategories();
  const testimonials = getTestimonials();

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
          {/* Category Grid */}
          <CategoryGrid categories={categories} />
          
          {/* Testimonials Section */}
          <TestimonialsSection testimonials={testimonials} />
        </div>
      </main>

      <Footer />
    </div>
  );
}