import Image from 'next/image';
import { useCart, Product } from '@/hooks/useCart';
import { Plus, Star, Clock } from 'lucide-react';

interface ProdutoCardProps {
  product: Product;
}

const ProdutoCard = ({ product }: ProdutoCardProps) => {
  const addItem = useCart((state) => state.addItem);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-mineiro-green/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-serif text-mineiro-dark group-hover:text-mineiro-green transition-colors">
            {product.name}
          </h3>
          {product.rating && (
            <div className="flex items-center gap-1 text-mineiro-gold">
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
            className="w-12 h-12 rounded-full bg-mineiro-green hover:bg-mineiro-gold text-white flex items-center justify-center transition-colors shadow-lg hover:shadow-mineiro-gold/20"
            title="Adicionar ao carrinho"
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
