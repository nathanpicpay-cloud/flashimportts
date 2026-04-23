import { motion } from 'motion/react';
import { featuredProducts } from '../data/mockData';

export default function FeaturedProducts() {
  return (
    <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6">
      
      <div className="grid lg:grid-cols-12 gap-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-12 bg-white rounded-3xl p-6 flex flex-col sm:flex-row justify-between sm:items-center"
        >
            <div>
              <h3 className="text-black text-2xl font-black font-heading uppercase italic tracking-tight mb-2">O Arsenal</h3>
              <p className="text-black/60 text-xs font-medium max-w-md">Acessórios e peças essenciais que transformam o básico em uma declaração de intenções.</p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 sm:mt-0 px-6 py-3 bg-black text-white font-black uppercase text-[10px] tracking-[0.2em] rounded-xl flex-shrink-0 hover:bg-[#D4AF37] hover:text-black transition-colors"
            >
              Explorar Arsenal
            </motion.button>
        </motion.div>

        <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="bg-[#151515] rounded-3xl border border-white/5 p-4 flex flex-col group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/5 relative mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-black bg-[#D4AF37] px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
              </div>
              <h3 className="font-bold uppercase text-xs tracking-wider mb-1 text-white/90 group-hover:text-white">{product.name}</h3>
              <p className="font-black font-heading italic text-sm text-[#D4AF37]">R$ {product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
