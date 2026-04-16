import Head from 'next/head';
import Header from '@/components/Header/index';
import { Calendar, User, ArrowRight, Coffee, Utensils, Mountain } from 'lucide-react';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'O Segredo da Polenta Cremosa: Milho Verde ou Milho Seco?',
    excerpt: 'Descubra por que a polenta da Vovó Maria levava 40 minutos para chegar ao ponto perfeito de veludo...',
    image: '/images/cardapio/frango-quiabo.jpg',
    category: 'Segredos da Cozinha',
    date: '14 Abr, 2026',
    author: 'Chef Beto',
    icon: <Utensils size={16} />
  },
  {
    id: 2,
    title: 'A Rota do Queijo Canastra: Uma Viagem de Sabor',
    excerpt: 'Visitamos os produtores parceiros na Serra da Canastra para entender o que torna este queijo o melhor do mundo.',
    image: '/images/cardapio/pao-de-queijo.jpg',
    category: 'Viagens & Raízes',
    date: '10 Abr, 2026',
    author: 'Luiza Mendes',
    icon: <Mountain size={16} />
  },
  {
    id: 3,
    title: 'Café das Montanhas: Por que a Altitude Importa?',
    excerpt: 'O terroir de Minas Gerais explicado através do nosso café especial servido todas as manhãs.',
    image: '/images/cafe-mineiro.jpg',
    category: 'Cultura do Café',
    date: '08 Abr, 2026',
    author: 'Mestre Cafeeiro',
    icon: <Coffee size={16} />
  },
  {
    id: 4,
    title: 'Doce de Leite: O Ponto Exato do Tacho de Cobre',
    excerpt: 'Dicas de como identificar o doce de leite artesanal verdadeiro apenas pela textura e brilho.',
    image: '/images/cardapio/doce-de-leite.jpg',
    category: 'Sobremesas',
    date: '05 Abr, 2026',
    author: 'Dona Maria',
    icon: <Heart size={16} />
  }
];

import { Heart } from 'lucide-react';

export default function Blog() {
  return (
    <div className="min-h-screen bg-mineiro-white">
      <Head>
        <title>Histórias de Minas | Mineiro Gourmet</title>
        <meta name="description" content="Explore as histórias por trás dos nossos pratos, viagens às raízes mineiras e segredos da nossa cozinha tradicional." />
      </Head>

      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-mineiro-dark mb-4">
              Histórias de <span className="text-mineiro-gold">Minas</span>
            </h1>
            <p className="text-mineiro-barro text-lg">
              Crônicas, receitas e causos do nosso jeitinho mineiro de ser.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-20">
            <div className="relative rounded-[40px] overflow-hidden group h-[500px] shadow-2xl">
              <img 
                src={posts[0].image} 
                alt={posts[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mineiro-dark via-mineiro-dark/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full max-w-3xl">
                <span className="inline-flex items-center gap-2 bg-mineiro-gold text-mineiro-dark px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
                  {posts[0].icon} {posts[0].category}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6 leading-tight">
                  {posts[0].title}
                </h2>
                <div className="flex items-center gap-6 text-white/80 text-sm mb-8">
                  <span className="flex items-center gap-2"><Calendar size={16} /> {posts[0].date}</span>
                  <span className="flex items-center gap-2"><User size={16} /> Por {posts[0].author}</span>
                </div>
                <Link 
                  href={`/blog/${posts[0].id}`}
                  className="inline-flex items-center gap-3 text-mineiro-gold font-bold hover:gap-5 transition-all"
                >
                  LER HISTÓRIA COMPLETA <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Grid Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative rounded-3xl overflow-hidden aspect-[16/10] mb-6 shadow-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-mineiro-dark px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {post.icon} {post.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-mineiro-barro font-medium">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                    <span className="w-1 h-1 bg-mineiro-pedra rounded-full" />
                    <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-mineiro-dark group-hover:text-mineiro-green transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-mineiro-barro text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-mineiro-green font-black text-xs uppercase tracking-widest hover:gap-4 transition-all"
                  >
                    CONTINUAR LENDO <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter / CTA */}
          <div className="mt-24 bg-mineiro-cream rounded-[40px] p-12 text-center border-4 border-dashed border-mineiro-gold/30">
            <h2 className="text-3xl font-bold font-serif text-mineiro-dark mb-4">Receba nossos causos & receitas</h2>
            <p className="text-mineiro-barro mb-8 max-w-xl mx-auto">Inscreva-se para receber novidades sobre pratos sazonais e curiosidades da cultura mineira direto no seu e-mail.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="grow px-6 py-4 rounded-2xl border-2 border-mineiro-gold/20 focus:border-mineiro-gold outline-none transition-all shadow-sm"
              />
              <button 
                type="submit"
                className="bg-mineiro-dark text-white font-bold px-8 py-4 rounded-2xl hover:bg-mineiro-green transition-all shadow-xl"
              >
                CADASTRAR
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
