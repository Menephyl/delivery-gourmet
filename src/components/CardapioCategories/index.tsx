import Link from 'next/link';

/**
 * CardapioCategories — Grade de categorias na home.
 * Inclui a nova categoria "Café Mineiro".
 */
const categories = [
  { name: 'Clássicos de Minas', slug: 'Clássicos de Minas', icon: '🥘', desc: 'Receitas de vovó' },
  { name: 'Executivo Mineiro',  slug: 'Executivo Mineiro',  icon: '💼', desc: 'Rápido e saboroso' },
  { name: 'Família Mineira',    slug: 'Família Mineira',    icon: '🏠', desc: 'Para toda a família' },
  { name: 'Café Mineiro',       slug: 'Café Mineiro',       icon: '☕', desc: 'Pão de queijo & doce' },
  { name: 'Sobremesas',         slug: 'Sobremesas',         icon: '🍮', desc: 'Doces de Minas' },
  { name: 'Fit Mineiro',        slug: 'Fit Mineiro',        icon: '🥗', desc: 'Leve e nutritivo' },
];

const CategoryGrid = () => {
  return (
    <section className="py-20 bg-mineiro-cream/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-mineiro-terracotta font-bold text-sm tracking-widest uppercase mb-2 block">
            Nosso Cardápio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-mineiro-dark">
            Sabor que conta <span className="text-mineiro-gold italic">história</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/cardapio?cat=${encodeURIComponent(cat.slug)}`}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-mineiro-pedra/20 text-center flex flex-col items-center gap-3 hover:-translate-y-1 hover:border-mineiro-gold/40"
            >
              <span className="text-4xl group-hover:scale-125 transition-transform duration-300">
                {cat.icon}
              </span>
              <div>
                <span className="font-bold text-mineiro-dark group-hover:text-mineiro-green transition-colors leading-tight text-sm block">
                  {cat.name}
                </span>
                <span className="text-xs text-mineiro-pedra mt-0.5 block">{cat.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
