import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-mineiro-dark/90 via-mineiro-dark/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-mineiro-dark/80 via-transparent to-transparent z-10" />
        {/* Placeholder for a beautiful Minas image - I'll use a high-quality abstract or representative image */}
        <div 
          className="w-full h-full bg-cover bg-center scale-105 animate-slow-zoom"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1620050860538-4e9432d69f9e?q=80&w=2000&auto=format&fit=crop')`, // Ouro Preto / MG vibes
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-2xl text-white">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-mineiro-gold/20 border border-mineiro-gold/30 backdrop-blur-sm">
            <span className="text-mineiro-gold text-xs font-bold tracking-widest uppercase">
              Tradição & Requinte
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-[1.1]">
            Do <span className="text-mineiro-gold italic">Fogo de Lenha</span> <br />
            Para Sua Mesa
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-mineiro-white/80 max-w-lg leading-relaxed">
            Experimente a verdadeira essência da culinária mineira. Receitas centenárias preparadas com técnicas contemporâneas para o seu paladar exigente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/cardapio" 
              className="px-8 py-4 bg-mineiro-gold hover:bg-mineiro-gold/90 text-mineiro-dark font-bold rounded-lg transition-all transform hover:scale-105 text-center shadow-lg shadow-mineiro-gold/20"
            >
              FAZER PEDIDO AGORA
            </Link>
            <Link 
              href="/sobre" 
              className="px-8 py-4 border-2 border-white/30 hover:border-white text-white font-bold rounded-lg transition-all text-center backdrop-blur-sm"
            >
              NOSSA HISTÓRIA
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-mineiro-dark overflow-hidden bg-gray-300">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-mineiro-gold">
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <p className="text-mineiro-white/60">Mais de 2.500 pedidos servidos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative side element */}
      <div className="absolute right-0 bottom-0 w-1/3 h-2/3 hidden lg:block opacity-20 pointer-events-none">
        <div className="w-full h-full bg-mineiro-pattern transform rotate-12 scale-150" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-mineiro-gold rounded-full" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
