import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center z-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-red-600/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Main loading content */}
      <div className="flex flex-col items-center space-y-8 px-6">
        {/* Logo with glow effect */}
        <div className="relative">
          <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
          <img 
            src="/Obzide Tech Supply.png" 
            alt="OBZIDE" 
            className="relative w-16 h-16 object-contain animate-pulse"
          />
        </div>

        {/* Loading animation */}
        <div className="flex flex-col items-center space-y-4">
          {/* Futuristic loading bar */}
          <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full animate-loading-bar"></div>
          </div>
          
          {/* Loading text */}
          <div className="text-white/80 text-sm font-medium tracking-wider animate-pulse">
            INICIALIZANDO...
          </div>
        </div>

        {/* Geometric elements */}
        <div className="absolute top-1/3 left-8 w-2 h-2 bg-red-500/40 transform rotate-45 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 right-8 w-2 h-2 bg-red-400/30 transform rotate-45 animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;