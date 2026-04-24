import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useSiteStore } from '../store/useSiteStore';

export default function Categories() {
  const categories = useSiteStore(state => state.categories);

  return (
    <section id="categorias" className="py-12 w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 border-b border-white/5 pb-4">
          <div>
            <h4 className="text-[#FFC107] text-xs font-bold uppercase tracking-widest mb-2">CATEGORIAS</h4>
            <h2 className="text-white text-3xl md:text-4xl font-bold">Encontre o seu estilo</h2>
          </div>
          <button className="mt-4 sm:mt-0 flex items-center gap-2 border border-[#FFC107] text-[#FFC107] px-6 py-2 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-[#FFC107] hover:text-black transition-colors">
            VER TODAS <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
            <motion.a
              href={`#${cat.name.toLowerCase()}`}
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="group relative bg-[#121212] border border-white/5 rounded-lg overflow-hidden flex flex-col aspect-[4/5] hover:border-[#FFC107]/50 transition-colors"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => { 
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80"; 
                  }}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent"></div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center justify-end h-full p-4 pb-6">
                <div className="flex items-center gap-2 text-white group-hover:text-[#FFC107] transition-colors">
                  <span className="text-xl">{cat.icon}</span>
                  <span className="font-bold text-sm tracking-wider">{cat.name}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
