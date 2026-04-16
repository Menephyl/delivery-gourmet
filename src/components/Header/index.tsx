import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { ShoppingCart, Menu, X, Phone } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Número real do negócio
const WHATSAPP_NUMBER = '553592144176';

/**
 * Header — Navbar com vídeo de fundo (YouTube iframe) quando no topo.
 *
 * Aprendizado sobre Hydration Error:
 *   O iframe do YouTube é renderizado condicionalmente com base em
 *   `isScrolled` (estado do cliente). O servidor renderiza o iframe,
 *   mas durante a hidratação o React pode gerar hashes JSX diferentes
 *   (especialmente com Turbopack). Solução: usar `isMounted` via
 *   useEffect para garantir que o iframe só renderize no cliente,
 *   eliminando qualquer divergência server/client.
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useCart((state) => state.items);
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    // Marca que o componente passou pela hidratação — seguro para renderizar iframes
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Cardápio', href: '/cardapio' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Histórias', href: '/blog' },
  ];

  return (
    <header
      className={twMerge(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled
          ? 'bg-mineiro-dark/95 backdrop-blur-md shadow-2xl py-3'
          : 'bg-transparent py-5'
      )}
    >
      {/* ── Vídeo de fundo (YouTube) — apenas client-side ── */}
      {isMounted && !isScrolled && (
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <iframe
            src="https://www.youtube.com/embed/U0wgBQzVVMs?autoplay=1&mute=1&loop=1&playlist=U0wgBQzVVMs&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&iv_load_policy=3&start=5"
            title="Fundo do menu — Cozinha Mineira"
            allow="autoplay; encrypted-media"
            className="absolute pointer-events-none"
            style={{
              border: 'none',
              width: '300%',
              height: '600%',
              top: '-250%',
              left: '-100%',
              opacity: 0.35,
            }}
          />
          {/* Overlay escuro para legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-mineiro-dark/80 via-mineiro-dark/60 to-mineiro-dark/80" />
        </div>
      )}

      {/* Overlay sólido quando não tiver vídeo (SSR + before mount) */}
      {!isMounted && (
        <div className="absolute inset-0 bg-gradient-to-b from-mineiro-dark/80 to-mineiro-dark/60 pointer-events-none" />
      )}

      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-white/20">
            G
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold font-serif leading-none tracking-tight text-white">
              Mineiro <span className="text-mineiro-gold">Gourmet</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-mineiro-gold/80">
              Raízes &amp; Sofisticação
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-white/90 hover:text-mineiro-gold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mineiro-gold transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all border border-mineiro-gold text-mineiro-gold hover:bg-mineiro-gold hover:text-mineiro-dark"
          >
            <Phone size={14} />
            FALE CONOSCO
          </Link>

          <Link href="/cardapio" className="relative p-2 group">
            <ShoppingCart
              className="text-white transition-colors group-hover:text-mineiro-gold"
              size={24}
            />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-mineiro-terracotta text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={twMerge(
          'absolute top-full left-0 w-full bg-mineiro-dark shadow-xl transition-all duration-300 md:hidden overflow-hidden',
          isMenuOpen ? 'max-h-[350px] border-t border-white/10' : 'max-h-0'
        )}
      >
        <div className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/80 font-medium hover:text-mineiro-gold px-2 py-1 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-mineiro-gold text-mineiro-dark py-3 rounded-xl font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone size={16} />
            CHAMAR NO WHATSAPP
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
