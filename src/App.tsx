import { useEffect, useState } from 'react';
import { ExternalLink, Download, MessageCircle, MapPin } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import { Flag } from './components/Flags';

const LOCATIONS = [
  { code: 'pa', name: 'Panama', type: 'office' as const },
  { code: 'cr', name: 'Costa Rica', type: 'virtual' as const },
  { code: 'uy', name: 'Uruguay', type: 'virtual' as const },
  { code: 'cl', name: 'Chile', type: 'virtual' as const },
];

const LINKS = [
  {
    label: 'Pagina Web Oficial',
    icon: ExternalLink,
    action: () => window.open('https://www.obzide.com', '_blank'),
  },
  {
    label: 'Servicios (PDF)',
    icon: Download,
    action: () => {
      fetch('/Obzide2026-Services.pdf')
        .then(r => {
          if (!r.ok) throw new Error('PDF not found');
          return r.blob();
        })
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'Obzide2026-Services.pdf';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        })
        .catch(() => alert('Error al descargar el PDF. Contacta con soporte.'));
    },
  },
  {
    label: 'Contactanos',
    icon: MessageCircle,
    action: () => window.open('https://wa.me/50766270927', '_blank'),
  },
];

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
      setTimeout(() => setIsLoaded(true), 100);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoading && <LoadingScreen />}

      <div className={`min-h-screen bg-black text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(236,50,58,0.06)_0%,_transparent_70%)]" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(183,37,39,0.04)_0%,_transparent_70%)]" />
        </div>

        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16">
          <div className={`flex flex-col items-center transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-10 animate-float">
              <img
                src="/Obzide Tech Supply.png"
                alt="OBZIDE"
                className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-2xl"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            <h1 className="text-center mb-2">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                OBZIDE
              </span>
            </h1>
            <p className="text-sm md:text-base font-semibold tracking-[0.35em] text-white/70 uppercase mb-10">
              Tech & Supply
            </p>

            <div className="flex items-center gap-5 md:gap-6 mb-12">
              {LOCATIONS.map((loc) => (
                <div key={loc.code} className="group flex flex-col items-center gap-2">
                  <div className="relative">
                    <div className={`
                      w-14 h-10 md:w-16 md:h-11 rounded-[4px] overflow-hidden
                      shadow-[0_2px_8px_rgba(0,0,0,0.5)]
                      transition-transform duration-300 group-hover:scale-110
                      ${loc.type === 'office' ? 'ring-2 ring-[#EC323A]/60' : 'ring-1 ring-white/10'}
                    `}>
                      <Flag code={loc.code} name={loc.name} className="w-full h-full" />
                    </div>
                    {loc.type === 'office' && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#EC323A] rounded-full flex items-center justify-center shadow-lg ring-2 ring-black">
                        <MapPin className="w-2.5 h-2.5 text-white" />
                      </div>
                    )}
                  </div>
                  <span className={`text-[10px] font-semibold tracking-wider uppercase ${loc.type === 'office' ? 'text-[#EC323A]/80' : 'text-white/30'}`}>
                    {loc.type === 'office' ? 'Oficina' : 'Virtual'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-md space-y-4">
            {LINKS.map((link, i) => (
              <button
                key={link.label}
                onClick={link.action}
                className={`
                  w-full flex items-center gap-4 px-5 py-4
                  bg-white/[0.03] hover:bg-white/[0.07]
                  border border-white/[0.06] hover:border-[#EC323A]/30
                  rounded-xl
                  transition-all duration-300 ease-out
                  hover:shadow-[0_0_30px_rgba(236,50,58,0.08)]
                  active:scale-[0.98]
                  ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                `}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="w-11 h-11 rounded-lg bg-[#EC323A]/10 flex items-center justify-center flex-shrink-0">
                  <link.icon className="w-5 h-5 text-[#EC323A]" />
                </div>
                <span className="text-white/90 font-medium text-[15px] tracking-wide">
                  {link.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        <footer className="relative py-10 px-6 border-t border-white/[0.04]">
          <div className={`flex flex-col items-center gap-4 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center gap-3">
              {LOCATIONS.map((loc) => (
                <div key={loc.code} className="w-7 h-5 rounded-[2px] overflow-hidden opacity-40 hover:opacity-80 transition-opacity">
                  <Flag code={loc.code} name={loc.name} className="w-full h-full" />
                </div>
              ))}
            </div>
            <p className="text-white/25 text-xs font-medium tracking-wider">
              &copy; 2026 OBZIDE Tech & Supply
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
