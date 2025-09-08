import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GradientText from '@/components/ui/GradientText';
import notFoundData from '@/data/not-found.json';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-[1400px] mx-auto px-4 text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-9xl font-bold mb-4 flex justify-center">
              <GradientText className="mr-2" gradient="purple-blue">4</GradientText>
              <GradientText className="mr-2" gradient="blue-cyan">0</GradientText>
              <GradientText gradient="cyan-purple">4</GradientText>
            </div>
            <div className="w-32 h-32 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-6xl">🔍</span>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {notFoundData.title}
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              {notFoundData.description}
            </p>
            <p className="text-lg text-gray-500">
              {notFoundData.subDescription}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              {notFoundData.buttons.home}
            </Link>
            <Link 
              href="/detail"
              className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              {notFoundData.buttons.services}
            </Link>
          </div>

          {/* Help Section */}
          <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {notFoundData.help.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              {notFoundData.help.sections.map((section, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 ${section.bgColor} rounded-full mx-auto mb-2 flex items-center justify-center`}>
                    <span className="text-white text-lg">{section.icon}</span>
                  </div>
                  <h3 className="font-semibold mb-1">{section.title}</h3>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="mt-8">
            <p className="text-gray-600 mb-4">{notFoundData.search.text}</p>
            <div className="max-w-md mx-auto">
              <Link 
                href="/"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="mr-2">🔍</span>
                {notFoundData.search.button}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}