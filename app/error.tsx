'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          {/* Error Illustration */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-red-600 mb-4">500</div>
            <div className="w-32 h-32 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-6xl">⚠️</span>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Произошла ошибка
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Что-то пошло не так на сервере.
            </p>
            <p className="text-lg text-gray-500 mb-4">
              Мы уже работаем над исправлением проблемы.
            </p>
            
            {/* Error Details (only in development) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-2xl mx-auto mb-4">
                <p className="text-sm text-red-800 font-mono">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-xs text-red-600 mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={reset}
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Попробовать снова
            </button>
            <Link 
              href="/"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Вернуться на главную
            </Link>
          </div>

          {/* Help Section */}
          <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Что можно сделать?
            </h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">1.</span>
                <div>
                  <p className="font-medium">Обновите страницу</p>
                  <p className="text-gray-600 text-sm">Нажмите F5 или Ctrl+R</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">2.</span>
                <div>
                  <p className="font-medium">Проверьте интернет-соединение</p>
                  <p className="text-gray-600 text-sm">Убедитесь, что у вас стабильное подключение</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">3.</span>
                <div>
                  <p className="font-medium">Обратитесь в поддержку</p>
                  <p className="text-gray-600 text-sm">Если проблема повторяется</p>
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
