import { Product } from '@/hooks/useCart';

/**
 * products.ts — Cardápio Mineiro Gourmet
 *
 * Imagens: geradas por IA (Gemini) e salvas em /public/images/cardapio/
 * Quando as fotos reais chegarem via WhatsApp (35) 99214-4176,
 * substituir os paths abaixo pelas imagens reais.
 */
export const products: Product[] = [

  // ── CLÁSSICOS DE MINAS ──────────────────────────────────────────
  {
    id: '1',
    name: 'Frango com Quiabo da Vovó',
    description: 'Frango caipira desfiado, quiabo sem baba, polenta cremosa de milho verde e farofa crocante de alho.',
    price: 48.00,
    image: '/images/cardapio/frango-quiabo.jpg',
    category: 'Clássicos de Minas',
    time: '30–40 min',
    rating: 4.9,
  },
  {
    id: '2',
    name: 'Feijão Tropeiro Genuíno',
    description: 'Feijão-carioca com linguiça calabresa, bacon, couve refogada, farinha de mandioca e ovos mexidos.',
    price: 42.00,
    image: '/images/cardapio/feijao-tropeiro.jpg',
    category: 'Clássicos de Minas',
    time: '25–35 min',
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Tutu de Feijão com Torresmo',
    description: 'Purê espesso de feijão-preto com alho tostado, couve refogada e torresmo crocante artesanal.',
    price: 38.00,
    image: '/images/cardapio/tutu-feijao.jpg',
    category: 'Clássicos de Minas',
    time: '25–30 min',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Arroz com Pequi do Cerrado',
    description: 'Arroz temperado com pequi fresco do cerrado mineiro, frango assado e pimenta-do-reino moída.',
    price: 52.00,
    image: '/images/cardapio/arroz-pequi.jpg',
    category: 'Clássicos de Minas',
    time: '35–45 min',
    rating: 4.6,
  },

  // ── EXECUTIVO MINEIRO ────────────────────────────────────────────
  {
    id: '5',
    name: 'Lombo com Linguiça Artesanal',
    description: 'Lombo de porco assado ao molho de laranja-lima, linguiça defumada artesanal e mandioca frita.',
    price: 56.00,
    image: '/images/cardapio/lombo-linguica.jpg',
    category: 'Executivo Mineiro',
    time: '35–45 min',
    rating: 4.9,
  },
  {
    id: '6',
    name: 'Canjiquinha com Costelinha',
    description: 'Canjiquinha de milho cremosa com costelinhas de porco caramelizadas e tempero de quintal.',
    price: 46.00,
    image: '/images/cardapio/canjiquinha.jpg',
    category: 'Executivo Mineiro',
    time: '30–40 min',
    rating: 4.8,
  },
  {
    id: '7',
    name: 'Frango Ensopado com Polenta',
    description: 'Frango caipira no caldo de galinha caseiro sobre polenta mole com manteiga de garrafa.',
    price: 44.00,
    image: '/images/cardapio/frango-quiabo.jpg',
    category: 'Executivo Mineiro',
    time: '30–40 min',
    rating: 4.7,
  },

  // ── FAMÍLIA MINEIRA ──────────────────────────────────────────────
  {
    id: '8',
    name: 'Feijoada Completa para a Família',
    description: 'Feijoada com carnes nobres, arroz soltinho, couve refogada, farofa de milho e laranja-cravo. Serve 4.',
    price: 129.90,
    image: '/images/cardapio/feijoada.jpg',
    category: 'Família Mineira',
    time: '50–60 min',
    rating: 5.0,
  },
  {
    id: '9',
    name: 'Leitoa à Pururuca da Serra',
    description: 'Leitoa inteira assada na brasa com pele crocante, farofa de mandioca e vinagrete de pimentão.',
    price: 189.90,
    image: '/images/cardapio/lombo-linguica.jpg',
    category: 'Família Mineira',
    time: '60–75 min',
    rating: 4.9,
  },

  // ── CAFÉ MINEIRO ─────────────────────────────────────────────────
  {
    id: '10',
    name: 'Café da Manhã Mineiro Completo',
    description: 'Café especial das montanhas, pão de queijo artesanal saído do forno, doce de leite da Serra e manteiga de garrafa.',
    price: 34.90,
    image: '/images/cardapio/cafe-manha.jpg',
    category: 'Café Mineiro',
    time: '15–20 min',
    rating: 5.0,
  },
  {
    id: '11',
    name: 'Pão de Queijo Artesanal (6 un)',
    description: 'Feito com polvilho azedo e queijo Canastra meia-cura. Crocante por fora, macio e queijoso por dentro.',
    price: 19.90,
    image: '/images/cardapio/pao-de-queijo.jpg',
    category: 'Café Mineiro',
    time: '15–20 min',
    rating: 4.9,
  },
  {
    id: '12',
    name: 'Tapioca Mineira com Queijo e Doce',
    description: 'Tapioca crocante recheada com queijo Canastra fresco e doce de leite de Araxá.',
    price: 23.00,
    image: '/images/cardapio/cafe-manha.jpg',
    category: 'Café Mineiro',
    time: '15–20 min',
    rating: 4.8,
  },

  // ── SOBREMESAS ───────────────────────────────────────────────────
  {
    id: '13',
    name: 'Bolo de Fubá da Vovó',
    description: 'Receita de 1954 com toque de erva-doce, cobertura de creme de queijo minas e calda de melado de cana.',
    price: 28.00,
    image: '/images/cardapio/bolo-fuba.jpg',
    category: 'Sobremesas',
    time: '20–30 min',
    rating: 4.9,
  },
  {
    id: '14',
    name: 'Doce de Leite de Araxá (500g)',
    description: 'Produção artesanal em tachão de cobre, leite integral e açúcar cristal. Textura cremosa e brilhante.',
    price: 22.00,
    image: '/images/cardapio/doce-de-leite.jpg',
    category: 'Sobremesas',
    time: '10–15 min',
    rating: 5.0,
  },
  {
    id: '15',
    name: 'Pudim de Leite da Serra',
    description: 'Textura acetinada sem furinhos, calda ambarada de caramelo artesanal, leite integral fresco.',
    price: 18.50,
    image: '/images/cardapio/pudim.jpg',
    category: 'Sobremesas',
    time: '15–20 min',
    rating: 4.9,
  },

  // ── FIT MINEIRO ──────────────────────────────────────────────────
  {
    id: '16',
    name: 'Salada de Abóbora com Queijo Canastra',
    description: 'Mix de folhas verdes, abóbora assada no melado de cana, queijo Canastra curado laminado e castanhas.',
    price: 36.00,
    image: '/images/cardapio/arroz-pequi.jpg',
    category: 'Fit Mineiro',
    time: '20–30 min',
    rating: 4.7,
  },
  {
    id: '17',
    name: 'Couve Refogada com Alho e Azeite',
    description: 'Couve-manteiga da horta, refogada no azeite extra-virgem com alho fatiado fino. Levinha e nutritiva.',
    price: 18.00,
    image: '/images/cardapio/tutu-feijao.jpg',
    category: 'Fit Mineiro',
    time: '15–20 min',
    rating: 4.6,
  },
];
