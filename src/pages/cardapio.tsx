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
  MessageSquare,
} from 'lucide-react';
import Link from 'next/link';

// ── Número real do negócio ──────────────────────────────────────
const WHATSAPP_NUMBER = '553592144176';

// ── Categorias (sync com products.ts) ──────────────────────────
const categories = [
  'Todos',
  'Clássicos de Minas',
  'Executivo Mineiro',
  'Família Mineira',
  'Café Mineiro',
  'Sobremesas',
  'Fit Mineiro',
];

export default function Cardapio() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  // Filtragem com memo para performance
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'Todos' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  /**
   * Monta mensagem WhatsApp formatada com o pedido completo.
   *
   * Aprendizado: wa.me usa encoding de URL.
   * - %0A = quebra de linha
   * - *texto* = negrito no WhatsApp
   * - _texto_ = itálico no WhatsApp
   */
  const handleWhatsAppOrder = () => {
    const separator = '%0A' + '-'.repeat(22) + '%0A';

    const itemsList = items
      .map(
        (item) =>
          `✅ ${item.quantity}x *${item.name}*%0A` +
          `   └ R$%20${(item.price * item.quantity).toFixed(2).replace('.', ',')}`
      )
      .join('%0A');

    const message = encodeURIComponent(
      [
        '🍃 *NOVO PEDIDO — Mineiro Gourmet* 🍃',
        '──────────────────────',
        items
          .map(
            (item) =>
              `✅ ${item.quantity}x *${item.name}*\n` +
              `   └ R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}`
          )
          .join('\n'),
        '──────────────────────',
        `📦 *Total: R$ ${totalPrice().toFixed(2).replace('.', ',')}*`,
        '',
        '📍 *Endereço de Entrega:* (informe aqui)',
        '',
        'Olá! Gostaria de confirmar este pedido. Pode verificar disponibilidade? 😊',
      ].join('\n')
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-mineiro-white">
      <Head>
        <title>Nosso Cardápio | Mineiro Gourmet</title>
        <meta
          name="description"
          content="Cardápio completo do Mineiro Gourmet. Pratos mineiros tradicionais para entrega: frango com quiabo, feijão tropeiro, pão de queijo, doce de leite e muito mais."
        />
      </Head>

      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">

          {/* Cabeçalho do Cardápio */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
              <Link
                href="/"
                className="text-mineiro-green flex items-center gap-2 text-sm font-bold mb-4 hover:gap-3 transition-all"
              >
                <ArrowLeft size={16} /> VOLTAR PARA HOME
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-mineiro-dark">
                Nosso <span className="text-mineiro-gold">Cardápio</span>
              </h1>
              <p className="text-mineiro-barro mt-2 text-sm">
                {filteredProducts.length} prato{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="relative md:w-80">
              <input
                id="busca-cardapio"
                type="text"
                placeholder="Buscar delícias mineiras..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-mineiro-pedra/30 rounded-full py-3 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-mineiro-gold/50 shadow-sm transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Filtros por categoria */}
          <div className="flex overflow-x-auto pb-4 mb-10 gap-3 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-mineiro-dark text-mineiro-gold shadow-lg'
                    : 'bg-white text-mineiro-dark border border-mineiro-pedra/20 hover:border-mineiro-gold shadow-sm'
                }`}
              >
                {cat === 'Café Mineiro' ? '☕ ' : ''}
                {cat}
              </button>
            ))}
          </div>

          {/* Grade de Produtos */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProdutoCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <span className="text-6xl block mb-4">🍽️</span>
              <p className="text-xl text-gray-500">
                Nenhum prato encontrado para &ldquo;{searchQuery}&rdquo;
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('Todos'); }}
                className="mt-4 text-mineiro-green font-bold hover:underline"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </main>

      {/* ── Botão Flutuante do Carrinho ────────────────────────── */}
      <button
        id="abrir-carrinho"
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-mineiro-dark text-white rounded-full p-4 shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform group"
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

      {/* ── Cart Drawer ─────────────────────────────────────────── */}
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer */}
          <div
            className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-white z-50 shadow-2xl flex flex-col animate-slide-left"
          >
            {/* Header do drawer */}
            <div className="p-6 border-b flex items-center justify-between bg-mineiro-dark">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-mineiro-gold" size={24} />
                <h2 className="text-xl font-bold font-serif text-white">Seu Pedido</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                aria-label="Fechar carrinho"
              >
                <X size={24} />
              </button>
            </div>

            {/* Itens */}
            <div className="grow overflow-y-auto p-6 space-y-6 bg-mineiro-white">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4 opacity-40">
                  <ShoppingBag size={80} className="text-mineiro-pedra" />
                  <p className="text-xl font-medium text-mineiro-dark">Seu carrinho está vazio</p>
                  <p className="text-sm text-gray-400">Adicione pratos mineiros deliciosos!</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white rounded-xl p-3 shadow-sm border border-mineiro-pedra/10">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-xl object-cover shrink-0 w-20 h-20"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect fill="%23F5EDD8" width="80" height="80"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="30">🍽️</text></svg>';
                      }}
                    />
                    <div className="grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-mineiro-dark leading-tight text-sm">{item.name}</h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-300 hover:text-red-500 transition-colors ml-2"
                          aria-label={`Remover ${item.name}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-400 mb-3">
                        Unitário: R$ {item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-mineiro-cream rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md transition-all"
                            aria-label="Diminuir quantidade"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-bold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md transition-all"
                            aria-label="Aumentar quantidade"
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

            {/* Footer do drawer com totais e botão WhatsApp */}
            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-mineiro-pedra/10 space-y-4">
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  <span>Subtotal</span>
                  <span>R$ {totalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  <span>Taxa de Entrega</span>
                  <span className="text-mineiro-green font-bold uppercase text-xs">Grátis</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <span className="text-xl font-bold font-serif text-mineiro-dark">Total</span>
                  <span className="text-2xl font-bold text-mineiro-green">
                    R$ {totalPrice().toFixed(2)}
                  </span>
                </div>

                {/* Botão WhatsApp */}
                <button
                  id="finalizar-whatsapp"
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 active:scale-[0.98] hover:scale-[1.01]"
                >
                  <MessageSquare size={22} />
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

    </div>
  );
}
