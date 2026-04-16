import Head from 'next/head';
import Header from '@/components/Header/index';
import { ChefHat, History, Heart, MapPin, Award } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-mineiro-white">
      <Head>
        <title>Nossa História | Mineiro Gourmet</title>
        <meta name="description" content="Conheça a história por trás do Mineiro Gourmet, nossas raízes na Serra da Mantiqueira e nosso compromisso com a tradição." />
      </Head>

      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-mineiro-dark mb-6">
              Nossa <span className="text-mineiro-gold">Essência</span>
            </h1>
            <p className="text-xl text-mineiro-barro leading-relaxed italic">
              "Cozinhar não é serviço, é um modo de amar os outros."
            </p>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10">
                <img 
                  src="/images/cardapio/frango-quiabo.jpg" 
                  alt="Nossa Cozinha" 
                  className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-mineiro-gold text-mineiro-dark p-8 rounded-2xl shadow-xl hidden md:block">
                <Award size={40} className="mb-2" />
                <p className="text-2xl font-bold">Desde 1954</p>
                <p className="text-sm font-medium">Tradição de Família</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-mineiro-gold/10 p-3 rounded-xl shrink-0 h-fit">
                  <History className="text-mineiro-gold" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-mineiro-dark mb-3">O Início na Mantiqueira</h2>
                  <p className="text-mineiro-barro leading-relaxed">
                    Tudo começou no fogão a lenha da Vovó Maria, em uma pequena fazenda escondida nas curvas da Serra da Mantiqueira. O cheiro do café coado no pano e do pão de queijo quentinho era o despertador de toda a vizinhança.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-mineiro-gold/10 p-3 rounded-xl shrink-0 h-fit">
                  <Heart className="text-mineiro-gold" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-mineiro-dark mb-3">Compromisso com o Sabor</h2>
                  <p className="text-mineiro-barro leading-relaxed">
                    Não usamos conservantes. Nossos ingredientes vêm de pequenos produtores da região, garantindo que o queijo seja Canastra real e o quiabo seja colhido no dia. Honramos cada receita que nos foi confiada.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-mineiro-gold/10 p-3 rounded-xl shrink-0 h-fit">
                  <ChefHat className="text-mineiro-gold" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-mineiro-dark mb-3">Técnica e Afeto</h2>
                  <p className="text-mineiro-barro leading-relaxed">
                    Unimos o rigor da técnica contemporânea com o afeto do tempero mineiro. Nossa missão é levar para sua mesa não apenas um prato, mas uma memória afetiva completa.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Valors */}
          <div className="bg-mineiro-dark rounded-[40px] p-12 md:p-20 text-white text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-12 italic text-mineiro-gold">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="text-mineiro-gold text-4xl font-serif">01</div>
                <h3 className="text-xl font-bold">Qualidade Raiz</h3>
                <p className="text-white/60 text-sm">Ingredientes frescos e fornecedores locais rigorosamente selecionados.</p>
              </div>
              <div className="space-y-4 border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
                <div className="text-mineiro-gold text-4xl font-serif">02</div>
                <h3 className="text-xl font-bold">Respeito ao Tempo</h3>
                <p className="text-white/60 text-sm">O fogo de lenha não tem pressa. Respeitamos o tempo de cada preparo.</p>
              </div>
              <div className="space-y-4">
                <div className="text-mineiro-gold text-4xl font-serif">03</div>
                <h3 className="text-xl font-bold">Hospitalidade</h3>
                <p className="text-white/60 text-sm">Tratamos cada cliente como uma visita especial em nossa própria cozinha.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
