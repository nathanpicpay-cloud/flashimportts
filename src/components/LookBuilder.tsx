import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { shirts, shorts } from '../data/mockData';

export default function LookBuilder() {
  const [selectedShirt, setSelectedShirt] = useState(shirts[0]);
  const [selectedShorts, setSelectedShorts] = useState(shorts[0]);

  const totalInvestment = selectedShirt.price + selectedShorts.price;

  return (
    <section id="build-look" className="py-6 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-12 gap-4">
        
        {/* Preview Panel as Main Bento Item */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 bg-[#151515] rounded-3xl border border-white/5 p-6 md:p-10 flex flex-col"
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-black font-heading uppercase italic tracking-tight text-white mb-1">Crie Seu Look</h3>
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Selecione suas peças</p>
            </div>
            <span className="text-[10px] bg-white/10 px-3 py-1.5 rounded-md text-white/50 uppercase tracking-widest font-bold italic border border-white/5">Beta</span>
          </div>
          
          <div className="flex-1 grid md:grid-cols-2 gap-6 mb-8">
            <AnimatePresence mode="popLayout">
              <motion.div 
                key={selectedShirt.id}
                initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(5px)" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative aspect-square md:aspect-auto rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/5 flex items-center justify-center p-4 group"
              >
                <img src={selectedShirt.image} alt={selectedShirt.name} className="w-full h-full object-cover rounded-xl opacity-90 group-hover:opacity-100 transition-opacity mix-blend-luminosity hover:mix-blend-normal" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[#F5F5F5]">Superior</div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              <motion.div 
                key={selectedShorts.id}
                initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(5px)" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative aspect-square md:aspect-auto rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/5 flex items-center justify-center p-4 group"
              >
                <img src={selectedShorts.image} alt={selectedShorts.name} className="w-full h-full object-cover rounded-xl opacity-90 group-hover:opacity-100 transition-opacity mix-blend-luminosity hover:mix-blend-normal" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[#F5F5F5]">Inferior</div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row items-end justify-between gap-4 mt-auto">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mb-1">Investimento Total</div>
              <div className="text-4xl font-black font-heading italic">R$ {totalInvestment}</div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-xl hover:bg-[#D4AF37] transition-colors"
            >
              Adquirir Look
            </motion.button>
          </div>
        </motion.div>

        {/* Selection Options */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 bg-[#151515] rounded-3xl border border-white/5 p-6 flex flex-col"
          >
             <div className="flex items-center gap-3 mb-6">
               <div className="w-2 h-2 rounded-full bg-[#1E90FF] animate-pulse"></div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Peças Superiores</span>
             </div>
             
             <div className="flex flex-col gap-3 overflow-y-auto pr-2 max-h-[200px] lg:max-h-[none] flex-1">
               {shirts.map((shirt, index) => (
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1 }}
                   key={shirt.id}
                   onClick={() => setSelectedShirt(shirt)}
                   whileHover={{ x: 4 }}
                   className={`p-3 rounded-xl border flex items-center gap-4 cursor-pointer transition-colors ${selectedShirt.id === shirt.id ? 'bg-[#111] border-[#D4AF37]' : 'bg-[#0A0A0A] border-white/5 hover:border-white/20'}`}
                 >
                   <img src={shirt.image} className="w-12 h-12 rounded object-cover" alt="" />
                   <div>
                     <div className="text-xs font-bold uppercase">{shirt.name}</div>
                     <div className="text-[10px] text-white/40 font-mono">R$ {shirt.price}</div>
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
            className="flex-1 bg-[#151515] rounded-3xl border border-white/5 p-6 flex flex-col"
          >
             <div className="flex items-center gap-3 mb-6">
               <div className="w-2 h-2 rounded-full bg-[#1E90FF] animate-pulse"></div>
               <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Peças Inferiores</span>
             </div>
             
             <div className="flex flex-col gap-3 overflow-y-auto pr-2 max-h-[200px] lg:max-h-[none] flex-1">
               {shorts.map((item, index) => (
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1 }}
                   key={item.id}
                   onClick={() => setSelectedShorts(item)}
                   whileHover={{ x: 4 }}
                   className={`p-3 rounded-xl border flex items-center gap-4 cursor-pointer transition-colors ${selectedShorts.id === item.id ? 'bg-[#111] border-[#D4AF37]' : 'bg-[#0A0A0A] border-white/5 hover:border-white/20'}`}
                 >
                   <img src={item.image} className="w-12 h-12 rounded object-cover" alt="" />
                   <div>
                     <div className="text-xs font-bold uppercase">{item.name}</div>
                     <div className="text-[10px] text-white/40 font-mono">R$ {item.price}</div>
                   </div>
                 </motion.div>
               ))}
             </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
