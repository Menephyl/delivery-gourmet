import { Product } from '@/hooks/useCart';

export const products: Product[] = [
  {
    id: '1',
    name: 'Bolo de Fubá Gourmet',
    description: 'Receita tradicional da vovó com toque de erva-doce e cobertura de creme de queijo minas.',
    price: 32.90,
    image: 'https://images.unsplash.com/photo-1605335133649-5ba328b965f7?q=80&w=600&auto=format&fit=crop',
    category: 'Clássicos de Minas',
    time: '25-35 min',
    rating: 4.9
  },
  {
    id: '2',
    name: 'Frango com Quiabo Premium',
    description: 'Frango caipira selecionado, quiabo sem baba e polenta cremosa de milho verde.',
    price: 48.00,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop',
    category: 'Executivo Mineiro',
    time: '30-40 min',
    rating: 4.8
  },
  {
    id: '3',
    name: 'Feijoada para a Família',
    description: 'Nossa feijoada completa com carnes nobres, arroz soltinho, couve crocante e farofa de milho.',
    price: 129.90,
    image: 'https://images.unsplash.com/photo-1541014741259-df549fa9ba6f?q=80&w=600&auto=format&fit=crop',
    category: 'Família Mineira',
    time: '45-60 min',
    rating: 5.0
  },
  {
    id: '4',
    name: 'Pudim de Leite Secreto',
    description: 'Textura acetinada, sem furinhos, com calda de caramelo feita com açúcar orgânico.',
    price: 18.50,
    image: 'https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?q=80&w=600&auto=format&fit=crop',
    category: 'Sobremesas',
    time: '15-20 min',
    rating: 4.9
  },
  {
    id: '5',
    name: 'Salada de Abóbora Cabotiana',
    description: 'Mix de folhas verdes, abóbora assada com melado de cana, queijo canastra e castanhas.',
    price: 36.00,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop',
    category: 'Fit Mineiro',
    time: '20-30 min',
    rating: 4.7
  }
];
