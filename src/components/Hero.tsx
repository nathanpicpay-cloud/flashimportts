import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-[650px] w-full overflow-hidden rounded-3xl bg-[#111] group border border-white/5 flex items-end"
      >
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1517523190886-fdf9b21fa7cb?auto=format&fit=crop&w=2000&q=80" 
            alt="Moda Lifestyle"
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 w-full p-8 md:p-12 text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-[#1E90FF] text-[12px] font-bold tracking-[0.3em] font-heading uppercase mb-4"
            >
              Drop Exclusivo 24'
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black font-heading leading-[0.85] tracking-tighter uppercase italic mb-6">
              SUA PRESENÇA<br />
              <span className="text-[#D4AF37]">COMEÇA AQUI</span>
            </h1>
            <p className="text-white/60 text-sm font-medium font-body mb-8 max-w-md italic tracking-wide">
              Vista-se como dono do ambiente. A Flash Imports entrega a curadoria essencial da moda masculina premium para quem se recusa a ser invisível.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#D4AF37] text-black font-bold uppercase text-xs tracking-widest rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all font-heading"
              >
                Explorar Coleção
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-white/20 text-white font-bold uppercase text-xs tracking-widest rounded-full backdrop-blur-md transition-all font-heading"
              >
                Monte Seu Look
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute bottom-12 right-12 flex flex-col items-end gap-1 pointer-events-none hidden md:flex"
      >
        <span className="text-[60px] font-black font-heading italic leading-none">DOMINE</span>
        <span className="text-[10px] font-bold tracking-[1em] mr-2">EST 2024</span>
      </motion.div>
    </section>
  );
}
