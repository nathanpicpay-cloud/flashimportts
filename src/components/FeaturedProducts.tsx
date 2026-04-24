import { motion } from 'motion/react';
import { Heart, ArrowRight } from 'lucide-react';
import { featuredProducts } from '../data/mockData';

export default function FeaturedProducts() {
  return (
    <section id="produtos" className="py-12 w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 border-b border-white/5 pb-4">
          <div>
            <h4 className="text-[#FFC107] text-xs font-bold uppercase tracking-widest mb-2">PRODUTOS EM DESTAQUE</h4>
            <h2 className="text-white text-3xl md:text-4xl font-bold">Os mais vendidos</h2>
          </div>
          <button className="mt-4 sm:mt-0 flex items-center gap-2 text-[#FFC107] font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
            VER TODOS <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-[#121212] rounded-lg overflow-hidden border border-white/5 mb-4 isolate">
                
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-3 left-3 z-20 bg-[#FFC107] text-black text-[10px] font-bold px-2 py-0.5 rounded-sm">
                    {product.discount}
                  </div>
                )}

                {/* Like Button */}
                <button className="absolute top-3 right-3 z-20 text-white/50 hover:text-white transition-colors">
                  <Heart className="w-5 h-5" />
                </button>

                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal"
                />
                
                {/* Overlay gradient for better shadow/depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-40"></div>
              </div>
              
              {/* Product Info */}
              <div className="flex flex-col items-center text-center">
                <span className="text-[#FFC107] text-[9px] uppercase font-bold tracking-widest mb-1">{product.category}</span>
                <h3 className="text-white/90 text-sm font-bold uppercase tracking-wider mb-2 group-hover:text-white transition-colors">{product.name}</h3>
                
                {/* Price (simplified for visual match) */}
                <span className="text-white font-bold text-lg border-t border-white/10 pt-2 w-full text-center">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
