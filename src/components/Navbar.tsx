import { motion } from 'motion/react';
import { ShoppingBag, Menu, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button className="lg:hidden text-[#F5F5F5] hover:text-[#D4AF37] transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-2">
            <motion.div 
              whileHover={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#1E90FF] rounded-sm flex items-center justify-center font-bold text-black"
            >
              F
            </motion.div>
            <span className="text-2xl font-black font-heading tracking-tighter uppercase italic text-white hidden sm:block">Flash <span className="text-[#D4AF37]">Imports</span></span>
          </div>
        </div>

        <div className="hidden lg:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium font-body">
          <a href="#collection" className="text-[#D4AF37] border-b border-[#D4AF37] pb-1">Coleção</a>
          <a href="#build-look" className="hover:text-[#D4AF37] transition-colors pb-1">Monte seu Look</a>
          <a href="#about" className="hover:text-[#D4AF37] transition-colors pb-1">Sobre Nós</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center cursor-pointer hover:border-[#D4AF37] transition-colors text-white hidden sm:flex">
            <Search className="w-4 h-4" />
          </button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 h-10 border border-[#D4AF37] rounded-full flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors"
          >
            Carrinho [0]
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
