import { useState, useMemo } from 'react';
import Head from 'next/head';
import Header from '@/components/Header/index';
import ProdutoCard from '@/components/ProdutoCard/index';
import { products } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import { 
  Search, 
  ShoppingBag, 
  X, 
  ArrowLeft, 
  Trash2, 
  Plus, 
  Minus,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';

const categories = ['Todos', 'Clássicos de Minas', 'Executivo Mineiro', 'Família Mineira', 'Sobremesas', 'Fit Mineiro'];

export default function Cardapio() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleWhatsAppOrder = () => {
    const phone = '5531999999999'; // Substituir pelo número real
    const itemsList = items.map(item => `- ${item.quantity}x ${item.name} (R$ ${item.price.toFixed(2)})`).join('%0A');
    const message = `Olá! Gostaria de fazer um pedido:%0A%0A${itemsList}%0A%0ATotal: R$ ${totalPrice().toFixed(2)}%0A%0AEndereço de Entrega: [Inserir Endereço]`;
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-mineiro-white">
      <Head>
        <title>Nosso Cardápio | Mineiro Gourmet</title>
      </Head>

      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header do Cardápio */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
              <Link href="/" className="text-mineiro-green flex items-center gap-2 text-sm font-bold mb-4 hover:gap-3 transition-all">
                <ArrowLeft size={16} /> VOLTAR PARA HOME
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-mineiro-dark">
                Nosso <span className="text-mineiro-gold">Cardápio</span>
              </h1>
            </div>

            <div className="relative md:w-80">
              <input
                type="text"
                placeholder="Buscar delícias..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-full py-3 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-mineiro-gold/50 shadow-sm transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Categorias Sidebar/Top */}
          <div className="flex overflow-x-auto pb-4 mb-10 gap-3 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-mineiro-green text-white shadow-lg'
                    : 'bg-white text-mineiro-dark border border-gray-100 hover:border-mineiro-gold shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid de Produtos */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProdutoCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-xl text-gray-500">Nenhum prato encontrado para sua busca.</p>
            </div>
          )}
        </div>
      </main>

      {/* Botão Flutuante do Carrinho */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 left-6 z-[90] bg-mineiro-dark text-white rounded-full p-4 shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform group"
      >
        <div className="relative">
          <ShoppingBag size={24} />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-mineiro-gold text-mineiro-dark text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-mineiro-dark">
              {items.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
        </div>
        <div className="pr-2 border-l border-white/20 pl-3">
          <p className="text-[10px] uppercase font-bold tracking-tighter opacity-60">Meu Carrinho</p>
          <p className="font-bold text-sm">R$ {totalPrice().toFixed(2)}</p>
        </div>
      </button>

      {/* Cart Drawer */}
      {isCartOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] animate-fade-in" 
            onClick={() => setIsCartOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[110] shadow-2xl flex flex-col animate-slide-left">
            <div className="p-6 border-b flex items-center justify-between bg-mineiro-white">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-mineiro-green" size={24} />
                <h2 className="text-xl font-bold font-serif">Seu Pedido</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4 opacity-40">
                  <ShoppingBag size={80} />
                  <p className="text-xl font-medium">Seu carrinho está vazio</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <img src={item.image} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-mineiro-dark leading-tight">{item.name}</h4>
                        <button onClick={() => removeItem(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-sm text-gray-400 mb-3">Unitário: R$ {item.price.toFixed(2)}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-gray-100 rounded-lg p-1">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md transition-all"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md transition-all"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-bold text-mineiro-dark">
                          R$ {(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-mineiro-cream/20 border-t space-y-4">
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  <span>Subtotal</span>
                  <span>R$ {totalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  <span>Taxa de Entrega</span>
                  <span className="text-mineiro-green font-bold uppercase text-xs">Grátis</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xl font-bold font-serif text-mineiro-dark">Total</span>
                  <span className="text-2xl font-bold text-mineiro-green">R$ {totalPrice().toFixed(2)}</span>
                </div>
                
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 rounded-2xl shadow-xl shadow-green-200 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  <MessageSquare size={20} />
                  FINALIZAR NO WHATSAPP
                </button>
                <p className="text-[10px] text-center text-gray-400 uppercase font-black tracking-widest">
                  Pagamento realizado na entrega
                </p>
              </div>
            )}
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes slide-left {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-left { animation: slide-left 0.4s cubic-bezier(0, 0, 0.2, 1); }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
