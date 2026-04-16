import { useState } from 'react';
import { useCart, Product } from '@/hooks/useCart';
import { Plus, Star, Clock } from 'lucide-react';

interface ProdutoCardProps {
  product: Product;
}

/**
 * Fallback visual usado quando a imagem do produto não carrega.
 * Mantém o layout sem quebrar mesmo antes das fotos reais chegarem.
 */
function ImageWithFallback({
  src,
  alt,
  category,
}: {
  src: string;
  alt: string;
  category: string;
}) {
  const [hasError, setHasError] = useState(false);

  const categoryEmoji: Record<string, string> = {
    'Clássicos de Minas': '🥘',
    'Executivo Mineiro': '💼',
    'Família Mineira': '🏠',
    'Café Mineiro': '☕',
    'Sobremesas': '🍮',
    'Fit Mineiro': '🥗',
  };

  if (hasError) {
    return (
      <div className="w-full h-full bg-mineiro-cream flex flex-col items-center justify-center gap-2">
        <span className="text-5xl">{categoryEmoji[category] ?? '🍽️'}</span>
        <span className="text-xs font-bold uppercase tracking-widest text-mineiro-barro">
          {category}
        </span>
        <span className="text-[10px] text-mineiro-pedra">Foto em breve</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
    />
  );
}

const ProdutoCard = ({ product }: ProdutoCardProps) => {
  const addItem = useCart((state) => state.addItem);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-mineiro-pedra/15 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          category={product.category}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-mineiro-dark/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        {/* Badge de destaque para itens 5 estrelas */}
        {(product.rating ?? 0) >= 5.0 && (
          <div className="absolute top-4 right-4">
            <span className="bg-mineiro-gold text-mineiro-dark text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-wider">
              ⭐ Top
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-serif text-mineiro-dark group-hover:text-mineiro-green transition-colors leading-tight pr-2">
            {product.name}
          </h3>
          {typeof product.rating === 'number' && (
            <div className="flex items-center gap-1 text-mineiro-gold shrink-0">
              <Star size={14} fill="currentColor" />
              <span className="text-sm font-bold">{product.rating}</span>
            </div>
          )}
        </div>

        <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium">Preço</span>
            <span className="text-xl font-bold text-mineiro-dark">
              R$ {product.price.toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => addItem(product)}
            className="w-12 h-12 rounded-full bg-mineiro-green hover:bg-mineiro-gold text-white flex items-center justify-center transition-all shadow-lg hover:shadow-mineiro-gold/30 hover:scale-110 active:scale-95"
            title={`Adicionar ${product.name} ao carrinho`}
            id={`add-to-cart-${product.id}`}
          >
            <Plus size={24} />
          </button>
        </div>

        {product.time && (
          <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-2 text-xs text-gray-400">
            <Clock size={14} />
            <span>{product.time}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProdutoCard;
