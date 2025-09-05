import React, { useEffect, useState } from 'react';
import { ExternalLink, Download, MessageCircle } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 2 seconds, then fade in content
    const loadingTimer = setTimeout(() => {
      setShowLoading(false);
      setTimeout(() => setIsLoaded(true), 100);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  const handleVisitWebsite = () => {
    window.open('https://www.obzide.com', '_blank');
  };

  const handleDownloadPDF = () => {
    // Use fetch to ensure the PDF is properly downloaded
    fetch('/Obzide2026-Services.pdf')
      .then(response => {
        if (!response.ok) {
          throw new Error('PDF not found');
        }
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Obzide2026-Services.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Error downloading PDF:', error);
        alert('Error al descargar el PDF. Por favor contacta con soporte.');
      });
  };

  const handleContact = () => {
    // Open WhatsApp with the specified number
    window.open('https://wa.me/50766270927', '_blank');
  };

  return (
    <>
      {/* Loading Screen */}
      {showLoading && <LoadingScreen />}

      {/* Main Content */}
      <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden relative transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large geometric shapes */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-red-500/8 to-red-600/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(rgba(236, 50, 58, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 50, 58, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating logo elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500/20 transform rotate-45 animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-red-400/15 transform rotate-45 animate-bounce" style={{animationDelay: '4s', animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-red-600/25 transform rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
      </div>

      {/* Geometric Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border border-red-500/30 rotate-45 rounded-lg"></div>
        <div className="absolute top-32 right-16 w-24 h-24 border border-red-500/25 rotate-12 rounded-lg"></div>
        <div className="absolute top-64 left-1/4 w-16 h-16 border border-red-500/35 -rotate-12 rounded-lg"></div>
        <div className="absolute bottom-32 right-8 w-20 h-20 border border-red-500/30 rotate-45 rounded-lg"></div>
        <div className="absolute bottom-48 left-12 w-28 h-28 border border-red-500/25 -rotate-25 rounded-lg"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-red-500/40 rotate-90 rounded-lg"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative">
        <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/Obzide Tech Supply.png" 
              alt="OBZIDE Logo" 
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
              onError={(e) => {
                // Fallback if logo doesn't load
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          {/* Main Title */}
          <h1 className="text-center mb-6 leading-tight">
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              OBZIDE
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Tech & Supply
            </div>
          </h1>
        </div>

        
        {/* Links Hub Section - moved inside hero */}
        <div className="max-w-md mx-auto space-y-6">
          {/* Página Web Oficial Button */}
          <button
            onClick={handleVisitWebsite}
            className={`w-full group bg-gray-900/50 hover:bg-gray-800/60 border border-gray-700 hover:border-red-500/50 text-white py-6 px-6 rounded-2xl font-medium text-lg transition-all duration-300 ease-out hover:shadow-xl hover:shadow-red-500/10 active:scale-95 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center justify-start">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-red-400" />
                </div>
                <span>Página Web Oficial</span>
              </div>
            </div>
          </button>

          {/* Download PDF Button */}
          <button
            onClick={handleDownloadPDF}
            className={`w-full group bg-gray-900/50 hover:bg-gray-800/60 border border-gray-700 hover:border-red-500/50 text-white py-6 px-6 rounded-2xl font-medium text-lg transition-all duration-300 ease-out hover:shadow-xl hover:shadow-red-500/10 active:scale-95 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center justify-start">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                  <Download className="w-6 h-6 text-red-400" />
                </div>
                <span>Servicios (PDF)</span>
              </div>
            </div>
          </button>

          {/* Contact Button */}
          <button
            onClick={handleContact}
            className={`w-full group bg-gray-900/50 hover:bg-gray-800/60 border border-gray-700 hover:border-red-500/50 text-white py-6 px-6 rounded-2xl font-medium text-lg transition-all duration-300 ease-out hover:shadow-xl hover:shadow-red-500/10 active:scale-95 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center justify-start">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-red-400" />
                </div>
                <span>Contáctanos</span>
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800/50">
        <div className={`text-center transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-400 text-sm">
            © 2025 <span className="text-red-400 font-medium">OBZIDE</span> – Tech & Supply. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}

export default App;