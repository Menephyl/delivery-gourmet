import Head from 'next/head';
import Header from '@/components/Header/index';
import HeroSection from '@/components/HeroSection/index';
import CategoryGrid from '@/components/CardapioCategories/index';
import ProdutoCard from '@/components/ProdutoCard/index';
import { products } from '@/data/products';
import { ArrowRight, Star, Quote } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <Head>
        <title>Mineiro Gourmet | Tradição & Sabor no Seu Tempo</title>
        <meta name="description" content="O melhor delivery de comida mineira gourmet. Receitas tradicionais com um toque de modernidade." />
      </Head>

      <div className="min-h-screen bg-mineiro-white selection:bg-mineiro-gold/30">
        <Header />
        
        <main>
          <HeroSection />
          
          <CategoryGrid />

          {/* Destaques do Dia */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                  <span className="text-mineiro-gold font-bold text-sm tracking-widest uppercase mb-2 block">Favoritos</span>
                  <h2 className="text-3xl md:text-5xl font-bold font-serif text-mineiro-dark leading-tight">
                    Pratos que fazem <br />
                    <span className="text-mineiro-green italic">o coração bater mais forte</span>
                  </h2>
                </div>
                <Link href="/cardapio" className="flex items-center gap-2 text-mineiro-terracotta font-bold hover:gap-4 transition-all">
                  VER CARDÁPIO COMPLETO <ArrowRight size={20} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredProducts.map((product) => (
                  <ProdutoCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>

          {/* Seção Sobre / História */}
          <section className="py-24 bg-mineiro-dark text-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-mineiro-gold/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-mineiro-green/10 blur-[120px] rounded-full" />
            
            <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative">
                <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white/5 shadow-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1590400030097-f5da251be213?q=80&w=800&auto=format&fit=crop" 
                    alt="Cozinha Mineira" 
                    className="w-full h-[500px] object-cover"
                   />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-mineiro-gold p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                  <p className="text-mineiro-dark font-serif text-3xl font-bold italic">Desde 1994</p>
                  <p className="text-mineiro-dark/70 font-bold uppercase tracking-widest text-xs">Mantendo a chama acesa</p>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <span className="text-mineiro-gold font-bold text-sm tracking-widest uppercase mb-4 block">Nossa Essência</span>
                <h2 className="text-4xl md:text-6xl font-bold font-serif mb-8 leading-tight">
                  A cozinha é o coração <br />da nossa casa
                </h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    O Mineiro Gourmet nasceu do desejo de unir a rapidez do mundo executivo com o carinho e a paciência do fogão a lenha. 
                  </p>
                  <p>
                    Nossas ervas vêm de hortas locais, nossos queijos são selecionados no coração da Serra da Canastra e nossos processos respeitam o tempo que o sabor precisa para se revelar.
                  </p>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                  <div>
                    <span className="text-3xl font-bold text-mineiro-gold block mb-1">100%</span>
                    <span className="text-sm text-gray-400">Ingredientes Artesanais</span>
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-mineiro-gold block mb-1">30min</span>
                    <span className="text-sm text-gray-400">Tempo Médio de Entrega</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Depoimentos */}
          <section className="py-24 bg-mineiro-cream/20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold text-mineiro-dark">Quem já provou, <span className="text-mineiro-gold italic">aprovou</span></h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-6 relative">
                  <Quote className="text-mineiro-gold/20 absolute top-8 right-8" size={60} />
                  <div className="flex gap-1 text-mineiro-gold">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="text-xl text-mineiro-dark font-medium italic leading-relaxed">
                    &ldquo;Que nostalgia! Pedi a feijoada e parecia que tava em Ouro Preto. O tempero é exatamente o da minha infância.&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200" />
                    <div>
                      <h4 className="font-bold text-mineiro-dark">Carla Martins</h4>
                      <p className="text-sm text-gray-400">Belo Horizonte, MG</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-6 relative">
                  <Quote className="text-mineiro-gold/20 absolute top-8 right-8" size={60} />
                  <div className="flex gap-1 text-mineiro-gold">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="text-xl text-mineiro-dark font-medium italic leading-relaxed">
                    &ldquo;O almoço executivo salva meus dias. Comida de verdade com rapidez. O frango com quiabo é fora de série!&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200" />
                    <div>
                      <h4 className="font-bold text-mineiro-dark">José Roberto</h4>
                      <p className="text-sm text-gray-400">Contagem, MG</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        {/* Footer Simples */}
        <footer className="bg-mineiro-dark text-gray-400 py-12 border-t border-white/5">
          <div className="container mx-auto px-4 text-center">
             <div className="flex items-center justify-center gap-2 mb-6 opacity-80">
                <div className="w-8 h-8 gold-gradient rounded-full flex items-center justify-center text-mineiro-white font-bold text-sm shadow-lg">G</div>
                <span className="text-lg font-bold font-serif text-white">Mineiro <span className="text-mineiro-gold">Gourmet</span></span>
             </div>
             <p className="mb-6">Culinária regional com alma e propósito.</p>
             <div className="text-xs tracking-widest uppercase">
               © 2024 Mineiro Gourmet - Todos os direitos reservados.
             </div>
          </div>
        </footer>
      </div>
    </>
  );
}
