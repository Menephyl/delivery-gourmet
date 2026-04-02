import Link from 'next/link';

const categories = [
  { name: 'Clássicos de Minas', slug: 'classicos', icon: '🥘' },
  { name: 'Executivo Mineiro', slug: 'executivo', icon: '💼' },
  { name: 'Família Mineira', slug: 'familia', icon: '🏠' },
  { name: 'Sobremesas', slug: 'sobremesas', icon: '🍮' },
  { name: 'Fit Mineiro', slug: 'fit', icon: '🥗' },
];

const CategoryGrid = () => {
  return (
    <section className="py-20 bg-mineiro-cream/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-mineiro-terracotta font-bold text-sm tracking-widest uppercase mb-2 block">Nosso Cardápio</span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-mineiro-dark">
            Sabor que conta <span className="text-mineiro-gold">história</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.slug} 
              href={`/cardapio?cat=${cat.slug}`}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center flex flex-col items-center gap-4 hover:-translate-y-1"
            >
              <span className="text-4xl group-hover:scale-125 transition-transform duration-300">{cat.icon}</span>
              <span className="font-bold text-mineiro-dark group-hover:text-mineiro-green transition-colors leading-tight">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
