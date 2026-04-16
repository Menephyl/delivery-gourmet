import Head from 'next/head';
import Header from '@/components/Header/index';
import HeroSection from '@/components/HeroSection/index';
import CategoryGrid from '@/components/CardapioCategories/index';
import ProdutoCard from '@/components/ProdutoCard/index';
import { products } from '@/data/products';
import { ArrowRight, Star, Quote, Coffee, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  // Destaques: pegar 3 produtos com maior rating de categorias variadas
  const featuredProducts = products
    .filter((p) => (p.rating ?? 0) >= 4.9)
    .slice(0, 3);

  return (
    <>
      <Head>
        <title>Mineiro Gourmet | Tradição &amp; Sabor no Seu Tempo</title>
        <meta
          name="description"
          content="O melhor delivery de comida mineira gourmet. Pão de queijo, doce de leite, feijão tropeiro e muito mais. Direto do fogão a lenha para você."
        />
      </Head>

      <div className="min-h-screen bg-mineiro-white selection:bg-mineiro-gold/30">
        <Header />

        <main>
          {/* ── Hero com Cachoeira de São Tomé ─────────────────── */}
          <HeroSection />

          {/* ── Grade de Categorias ────────────────────────────── */}
          <CategoryGrid />

          {/* ── SEÇÃO CAFÉ DA MANHÃ MINEIRO ────────────────────── */}
          <section className="py-24 bg-mineiro-cream relative overflow-hidden" id="cafe-mineiro">
            {/* Textura de fundo */}
            <div className="absolute inset-0 bg-mineiro-pattern opacity-40 pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Imagem do café */}
                <div className="relative order-2 lg:order-1">
                  <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] border-4 border-mineiro-gold/20">
                    <img
                      src="/images/cafe-mineiro.jpg"
                      alt="Café da manhã mineiro com pão de queijo, doce de leite e café"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Badge flutuante — Pão de Queijo */}
                  <div className="absolute -bottom-5 -right-4 md:-right-8 bg-mineiro-gold text-mineiro-dark p-5 rounded-2xl shadow-2xl hidden md:flex flex-col items-center gap-1 border-2 border-white">
                    <span className="text-3xl">🧀</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-center leading-tight">
                      Pão de<br/>Queijo
                    </span>
                  </div>

                  {/* Badge flutuante — Doce de Leite */}
                  <div className="absolute -top-5 -left-4 md:-left-8 bg-mineiro-dark text-white p-4 rounded-2xl shadow-2xl hidden md:flex flex-col items-center gap-1 border-2 border-mineiro-gold/30">
                    <span className="text-2xl">🍯</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-center leading-tight text-mineiro-gold">
                      Doce<br/>de Leite
                    </span>
                  </div>
                </div>

                {/* Texto */}
                <div className="order-1 lg:order-2">
                  <span className="text-mineiro-terracotta font-bold text-sm tracking-widest uppercase mb-3 block flex items-center gap-2">
                    <Coffee size={16} className="inline" /> O Ritual da Manhã Mineira
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold font-serif text-mineiro-dark mb-6 leading-tight">
                    Pão de Queijo,{' '}
                    <span className="text-mineiro-gold italic">Doce de Leite</span>{' '}
                    <br />e Muito Café
                  </h2>
                  <p className="text-lg text-mineiro-dark/70 leading-relaxed mb-8">
                    Começar o dia com o aroma de pão de queijo saindo do forno é uma
                    experiência que só Minas sabe proporcionar. Nosso café da manhã
                    traz essa memória afetiva até a sua mesa.
                  </p>

                  {/* Lista de itens */}
                  <div className="space-y-5 mb-10">
                    {[
                      {
                        icon: '🧀',
                        nome: 'Pão de Queijo Artesanal',
                        desc: 'Polvilho azedo + queijo Canastra. Crocante por fora, derretendo por dentro.',
                      },
                      {
                        icon: '🍯',
                        nome: 'Doce de Leite da Serra',
                        desc: 'Produção artesanal de Araxá, batido em tachão de cobre. Cremoso e brilhante.',
                      },
                      {
                        icon: '☕',
                        nome: 'Café Especial das Montanhas',
                        desc: 'Grãos da Mantiqueira mineira, torra média-clara, coado na hora.',
                      },
                    ].map((item) => (
                      <div key={item.nome} className="flex items-start gap-4 bg-white/60 rounded-xl p-4 border border-mineiro-pedra/20">
                        <span className="text-2xl shrink-0">{item.icon}</span>
                        <div>
                          <h4 className="font-bold text-mineiro-dark text-sm">{item.nome}</h4>
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                        </div>
                        <CheckCircle size={16} className="text-mineiro-green shrink-0 mt-0.5 ml-auto" />
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/cardapio?cat=Caf%C3%A9+Mineiro"
                    className="inline-flex items-center gap-3 bg-mineiro-terracotta hover:bg-mineiro-cafe text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    id="ver-cafe-mineiro"
                  >
                    <Coffee size={18} />
                    VER CAFÉ DA MANHÃ
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ── Destaques do Dia ───────────────────────────────── */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                  <span className="text-mineiro-gold font-bold text-sm tracking-widest uppercase mb-2 block">
                    Favoritos
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold font-serif text-mineiro-dark leading-tight">
                    Pratos que fazem <br />
                    <span className="text-mineiro-green italic">o coração bater mais forte</span>
                  </h2>
                </div>
                <Link
                  href="/cardapio"
                  className="flex items-center gap-2 text-mineiro-terracotta font-bold hover:gap-4 transition-all"
                >
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

          {/* ── Seção Sobre / História ─────────────────────────── */}
          <section className="py-24 bg-mineiro-dark text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-mineiro-gold/10 blur-[140px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-mineiro-green/15 blur-[140px] rounded-full" />

            <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative">
                <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img
                    src="/images/cardapio/feijoada.jpg"
                    alt="Fogão a lenha — cozinha mineira"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-mineiro-gold p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                  <p className="text-mineiro-dark font-serif text-3xl font-bold italic">Desde 1994</p>
                  <p className="text-mineiro-dark/70 font-bold uppercase tracking-widest text-xs">
                    Mantendo a chama acesa
                  </p>
                </div>
              </div>

              <div className="lg:w-1/2">
                <span className="text-mineiro-gold font-bold text-sm tracking-widest uppercase mb-4 block">
                  Nossa Essência
                </span>
                <h2 className="text-4xl md:text-6xl font-bold font-serif mb-8 leading-tight">
                  A cozinha é o coração <br />da nossa casa
                </h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    O Mineiro Gourmet nasceu do desejo de unir a rapidez do mundo executivo
                    com o carinho e a paciência do fogão a lenha.
                  </p>
                  <p>
                    Nossas ervas vêm de hortas locais, nossos queijos são selecionados no
                    coração da Serra da Canastra e nossos processos respeitam o tempo que
                    o sabor precisa para se revelar.
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

          {/* ── Depoimentos ───────────────────────────────────── */}
          <section className="py-24 bg-mineiro-cream/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold text-mineiro-dark">
                  Quem já provou,{' '}
                  <span className="text-mineiro-gold italic">aprovou</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    text: '&ldquo;Que nostalgia! Pedi a feijoada e parecia que tava em Ouro Preto. O tempero é exatamente o da minha infância.&rdquo;',
                    name: 'Carla Martins',
                    city: 'Belo Horizonte, MG',
                    avatar: 21,
                  },
                  {
                    text: '&ldquo;O café da manhã é outro nível! O pão de queijo chegou quentinho e o doce de leite... meu Deus. Já pedi 3 vezes essa semana!&rdquo;',
                    name: 'José Roberto',
                    city: 'Contagem, MG',
                    avatar: 33,
                  },
                ].map((dep) => (
                  <div
                    key={dep.name}
                    className="bg-white p-10 rounded-3xl shadow-sm border border-mineiro-pedra/20 flex flex-col gap-6 relative"
                  >
                    <Quote className="text-mineiro-gold/20 absolute top-8 right-8" size={60} />
                    <div className="flex gap-1 text-mineiro-gold">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p
                      className="text-xl text-mineiro-dark font-medium italic leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: dep.text }}
                    />
                    <div className="flex items-center gap-4">
                      <img
                        src={`https://i.pravatar.cc/100?img=${dep.avatar}`}
                        alt={dep.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-mineiro-gold/30"
                      />
                      <div>
                        <h4 className="font-bold text-mineiro-dark">{dep.name}</h4>
                        <p className="text-sm text-gray-400">{dep.city}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* ── Footer ────────────────────────────────────────── */}
        <footer className="bg-mineiro-dark text-gray-400 py-12 border-t border-white/5">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-6 opacity-80">
              <div className="w-8 h-8 gold-gradient rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                G
              </div>
              <span className="text-lg font-bold font-serif text-white">
                Mineiro <span className="text-mineiro-gold">Gourmet</span>
              </span>
            </div>
            <p className="mb-2">Culinária regional com alma e propósito.</p>
            <p className="mb-6 text-sm">
              📱{' '}
              <a
                href="https://wa.me/553592144176"
                className="text-mineiro-gold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                (35) 99214-4176
              </a>
            </p>
            <div className="text-xs tracking-widest uppercase">
              © 2024 Mineiro Gourmet — Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
