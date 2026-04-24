import { motion } from 'motion/react';
import { readyOutfits } from '../data/mockData';

export default function ReadyOutfits() {
  return (
    <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-gradient-to-r from-[#1E90FF] to-[#0D47A1] rounded-3xl p-6 flex items-center justify-between mb-4 flex-wrap gap-4"
      >
        <div>
          <h4 className="text-xl md:text-2xl font-black font-heading uppercase italic tracking-tight text-white/90">Pronto Para Vestir</h4>
          <p className="text-[12px] md:text-sm text-white/70 font-medium">Combinações projetadas pela nossa diretoria</p>
        </div>
        <div className="flex -space-x-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#1E90FF] bg-gray-900 flex items-center justify-center text-[#D4AF37] font-bold text-xs uppercase">All</div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4">
        {readyOutfits.map((outfit, index) => (
          <motion.div
            key={outfit.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
            className="bg-[#151515] rounded-3xl border border-white/5 p-6 relative overflow-hidden flex flex-col group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-black font-heading uppercase italic tracking-tight mb-1 text-[#D4AF37] relative z-10">{outfit.name}</h3>
                <p className="text-[10px] text-white/40 font-bold uppercase relative z-10">Conjunto Completo</p>
              </div>
              <div className="text-2xl font-black font-heading italic text-white relative z-10">R$ {outfit.price}</div>
            </div>
            
            <div className="flex gap-2 mb-8 relative z-10">
              <span className="text-[9px] border border-white/10 px-2 py-1 rounded uppercase font-bold text-white/60 backdrop-blur-sm bg-black/20">Curadoria</span>
              <span className="text-[9px] border border-white/10 px-2 py-1 rounded uppercase font-bold text-white/60 backdrop-blur-sm bg-black/20 line-through">R$ {outfit.originalPrice}</span>
            </div>

            <div className="mt-auto relative z-10">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 bg-white text-black font-black uppercase text-[10px] tracking-[0.2em] rounded-xl hover:bg-[#D4AF37] transition-colors w-full"
              >
                Adquirir Look Completo
              </motion.button>
            </div>
            
            <img referrerPolicy="no-referrer" 
              src={outfit.image} 
              alt={outfit.name}
              className="absolute right-0 bottom-0 h-48 md:h-56 w-auto object-cover opacity-50 group-hover:opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 rounded-br-3xl pointer-events-none"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
