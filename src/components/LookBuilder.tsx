import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { shirts, shorts } from '../data/mockData';

export default function LookBuilder() {
  const [selectedShirt, setSelectedShirt] = useState(shirts[0]);
  const [selectedShorts, setSelectedShorts] = useState(shorts[0]);

  const totalInvestment = selectedShirt.price + selectedShorts.price;

  return (
    <section id="build-look" className="py-12 border-t border-white/5 w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Header matching Featured Products */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 border-b border-white/5 pb-4">
          <div>
            <h4 className="text-[#FFC107] text-xs font-bold uppercase tracking-widest mb-2">MONTE SEU LOOK</h4>
            <h2 className="text-white text-3xl md:text-4xl font-bold">Personalize seu estilo</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Preview Panel as Main Bento Item */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 bg-[#121212] rounded-2xl border border-white/5 p-6 md:p-10 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-1">Visualização</h3>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Confira as peças selecionadas</p>
              </div>
            </div>
            
            <div className="flex-1 grid md:grid-cols-2 gap-6 mb-8">
              <AnimatePresence mode="popLayout">
                <motion.div 
                  key={selectedShirt.id}
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(5px)" }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="relative aspect-square md:aspect-auto rounded-xl overflow-hidden bg-[#050505] border border-white/5 flex items-center justify-center p-4 group"
                >
                  <img referrerPolicy="no-referrer" src={selectedShirt.image} alt={selectedShirt.name} className="w-full h-full object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity mix-blend-luminosity hover:mix-blend-normal" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[#F5F5F5]">Superior</div>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="popLayout">
                <motion.div 
                  key={selectedShorts.id}
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(5px)" }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="relative aspect-square md:aspect-auto rounded-xl overflow-hidden bg-[#050505] border border-white/5 flex items-center justify-center p-4 group"
                >
                  <img referrerPolicy="no-referrer" src={selectedShorts.image} alt={selectedShorts.name} className="w-full h-full object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity mix-blend-luminosity hover:mix-blend-normal" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[#F5F5F5]">Inferior</div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col sm:flex-row items-end justify-between gap-4 mt-auto border-t border-white/5 pt-6">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#FFC107] mb-1">Preço Sugerido</div>
                <div className="text-4xl font-black">R$ {totalInvestment.toFixed(2).replace('.', ',')}</div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-[#FFC107] text-black font-bold uppercase text-xs tracking-widest rounded-md hover:bg-[#FDB813] transition-colors"
              >
                Adquirir Look
              </motion.button>
            </div>
          </motion.div>

          {/* Selection Options */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 bg-[#121212] rounded-2xl border border-white/5 p-6 flex flex-col"
            >
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse"></div>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Peças Superiores</span>
               </div>
               
               <div className="flex flex-col gap-3 overflow-y-auto pr-2 max-h-[200px] lg:max-h-[none] flex-1 scrollbar-hide">
                 {shirts.map((shirt, index) => (
                   <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.1 }}
                     key={shirt.id}
                     onClick={() => setSelectedShirt(shirt)}
                     whileHover={{ x: 4 }}
                     className={`p-3 rounded-lg border flex items-center gap-4 cursor-pointer transition-colors ${selectedShirt.id === shirt.id ? 'bg-[#1A1A1A] border-[#FFC107]' : 'bg-[#050505] border-white/5 hover:border-[#FFC107]/50'}`}
                   >
                     <img referrerPolicy="no-referrer" src={shirt.image} className="w-12 h-12 rounded object-cover" alt="" />
                     <div>
                       <div className="text-xs font-bold">{shirt.name}</div>
                       <div className="text-[10px] text-white/40 mt-1">R$ {shirt.price.toFixed(2).replace('.', ',')}</div>
                     </div>
                   </motion.div>
                 ))}
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex-1 bg-[#121212] rounded-2xl border border-white/5 p-6 flex flex-col"
            >
               <div className="flex items-center gap-3 mb-6">
                 <div className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse"></div>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Peças Inferiores</span>
               </div>
               
               <div className="flex flex-col gap-3 overflow-y-auto pr-2 max-h-[200px] lg:max-h-[none] flex-1 scrollbar-hide">
                 {shorts.map((item, index) => (
                   <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.1 }}
                     key={item.id}
                     onClick={() => setSelectedShorts(item)}
                     whileHover={{ x: 4 }}
                     className={`p-3 rounded-lg border flex items-center gap-4 cursor-pointer transition-colors ${selectedShorts.id === item.id ? 'bg-[#1A1A1A] border-[#FFC107]' : 'bg-[#050505] border-white/5 hover:border-[#FFC107]/50'}`}
                   >
                     <img referrerPolicy="no-referrer" src={item.image} className="w-12 h-12 rounded object-cover" alt="" />
                     <div>
                       <div className="text-xs font-bold">{item.name}</div>
                       <div className="text-[10px] text-white/40 mt-1">R$ {item.price.toFixed(2).replace('.', ',')}</div>
                     </div>
                   </motion.div>
                 ))}
               </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
