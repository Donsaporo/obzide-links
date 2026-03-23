const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          <div className="absolute inset-0 bg-[#EC323A]/15 rounded-full blur-2xl animate-pulse" />
          <img
            src="/Obzide Tech Supply.png"
            alt="OBZIDE"
            className="relative w-16 h-16 object-contain"
          />
        </div>
        <div className="w-40 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#B72527] to-[#EC323A] rounded-full animate-loading-bar" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
