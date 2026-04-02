import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { ShoppingCart, Menu, X, Phone } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useCart((state) => state.items);
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-mineiro-white/95 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center text-mineiro-white font-bold text-xl shadow-lg border-2 border-white/20">
            G
          </div>
          <div className="flex flex-col">
            <span className={clsx(
              "text-xl font-bold font-serif leading-none tracking-tight",
              isScrolled ? "text-mineiro-green" : "text-mineiro-white"
            )}>
              Mineiro <span className="text-mineiro-gold">Gourmet</span>
            </span>
            <span className={clsx(
              "text-[10px] uppercase tracking-widest font-semibold",
              isScrolled ? "text-mineiro-terracotta" : "text-mineiro-gold/90"
            )}>
              Raízes & Sofisticação
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={twMerge(
                'text-sm font-semibold transition-colors hover:text-mineiro-gold relative group',
                isScrolled ? 'text-mineiro-dark' : 'text-white'
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mineiro-gold transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="https://wa.me/5531999999999"
            target="_blank"
            className={twMerge(
              'hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all border',
              isScrolled
                ? 'border-mineiro-green text-mineiro-green hover:bg-mineiro-green hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-mineiro-green'
            )}
          >
            <Phone size={14} />
            FALE CONOSCO
          </Link>

          <Link href="/cardapio" className="relative p-2 group">
            <ShoppingCart
              className={clsx(
                "transition-colors group-hover:text-mineiro-gold",
                isScrolled ? "text-mineiro-dark" : "text-white"
              )}
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
            className={clsx(
              "md:hidden p-2",
              isScrolled ? "text-mineiro-dark" : "text-white"
            )}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={twMerge(
          'absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 md:hidden overflow-hidden',
          isMenuOpen ? 'max-h-[300px] border-t border-gray-100' : 'max-h-0'
        )}
      >
        <div className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-mineiro-dark font-medium hover:text-mineiro-gold px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/5531999999999"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-mineiro-green text-white py-3 rounded-xl font-bold"
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
