import { motion } from 'motion/react';
import { MessageCircle, Instagram, Mail } from 'lucide-react';

export default function AboutCTA() {
  return (
    <footer className="w-full pt-12 pb-6" id="sobre">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative overflow-hidden text-center sm:text-left">
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16 relative z-10 border-t border-white/5 mt-8 pt-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 p-0.5 bg-black flex items-center justify-center">
                <img referrerPolicy="no-referrer" 
                  src="https://i.imgur.com/qtIpeq8.png" 
                  alt="Flash Imports Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-2xl font-black font-heading tracking-tighter uppercase italic text-white">Flash <span className="text-[#FFC107]">Imports</span></span>
            </div>
            
            <p className="text-xl md:text-2xl font-black text-white leading-relaxed mb-6">
              A <strong className="font-heading tracking-wider text-[#FFC107]">Flash Imports</strong> foi desenhada para aqueles que não se contentam com pouco. Entregamos a base da sua atitude.
            </p>
            <p className="text-white/40 text-sm mb-8 font-medium italic">
              Peças selecionadas a dedo para garantir que você esteja impecável. A nossa curadoria separa os que apenas se vestem daqueles que têm presença.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-[#FFC107] text-[10px] font-bold uppercase tracking-widest mb-4">Catálogo</h4>
              <ul className="space-y-3 text-white/60 text-sm font-medium">
                <li><motion.a whileHover={{ x: 5, color: "#FFC107" }} href="#" className="inline-block transition-colors">Novos Lançamentos</motion.a></li>
                <li><motion.a whileHover={{ x: 5, color: "#FFC107" }} href="#" className="inline-block transition-colors">T-Shirts Premium</motion.a></li>
                <li><motion.a whileHover={{ x: 5, color: "#FFC107" }} href="#" className="inline-block transition-colors">Calças e Bermudas</motion.a></li>
                <li><motion.a whileHover={{ x: 5, color: "#FFC107" }} href="#" className="inline-block transition-colors">Looks Prontos</motion.a></li>
                <li><motion.a whileHover={{ x: 5, color: "#FFC107" }} href="#" className="inline-block transition-colors">Acessórios</motion.a></li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-[#FFC107] text-[10px] font-bold uppercase tracking-widest mb-4">Suporte</h4>
              <ul className="space-y-3 text-white/60 text-sm font-medium">
                <li><motion.a whileHover={{ x: 5, color: "#FFC107" }} href="#" className="inline-block transition-colors">Política de Trocas</motion.a></li>
                <li><motion.a whileHover={{ x: 5, color: "#FFC107" }} href="#" className="inline-block transition-colors">Rastreamento</motion.a></li>
                <li><motion.a whileHover={{ x: 5, color: "#FFC107" }} href="#" className="inline-block transition-colors">Guia de Tamanhos</motion.a></li>
                <li><motion.a whileHover={{ x: 5, color: "#FFC107" }} href="#" className="inline-block transition-colors">FAQ</motion.a></li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest font-mono">
            &copy; {new Date().getFullYear()} FLASH IMPORTS LOJA MASCULINA.
          </p>
          
          <div className="flex gap-4">
            <motion.a whileHover={{ scale: 1.1, backgroundColor: "rgba(255,193,7,0.1)" }} whileTap={{ scale: 0.95 }} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4 text-white hover:text-[#FFC107] transition-colors" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.1, backgroundColor: "rgba(255,193,7,0.1)" }} whileTap={{ scale: 0.95 }} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center transition-colors">
              <MessageCircle className="w-4 h-4 text-white hover:text-[#FFC107] transition-colors" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.1, backgroundColor: "rgba(255,193,7,0.1)" }} whileTap={{ scale: 0.95 }} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center transition-colors">
              <Mail className="w-4 h-4 text-white hover:text-[#FFC107] transition-colors" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
