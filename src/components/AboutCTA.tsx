import { motion } from 'motion/react';
import { MessageCircle, Instagram, Mail } from 'lucide-react';

export default function AboutCTA() {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 pb-6 mt-4" id="about">
      <div className="bg-[#151515] rounded-3xl border border-white/5 p-6 md:p-12 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[80px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#1E90FF] rounded-sm flex items-center justify-center font-bold text-black font-heading">F</div>
              <span className="text-xl font-black font-heading tracking-tighter uppercase italic text-white">Flash <span className="text-[#D4AF37]">Imports</span></span>
            </div>
            
            <p className="text-xl md:text-2xl font-light text-white leading-relaxed mb-6">
              A <strong className="font-heading tracking-wider font-normal text-[#D4AF37]">Flash Imports</strong> foi desenhada para aqueles que recusam a mediocridade. Nós não vendemos roupas; entregamos a fundação da sua confiança. 
            </p>
            <p className="text-white/40 text-sm mb-8 font-medium italic">
              Cada peça do nosso arsenal passa pelo rígido escrutínio da nossa diretoria visual. Se não te fizer parecer o dono do ambiente, não entra no nosso catálogo.
            </p>
            <div className="inline-block px-4 py-2 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
              Curadoria Premium &bull; 2024
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Catálogo</h4>
              <ul className="space-y-3 text-white/60 text-sm font-medium">
                <li><motion.a whileHover={{ x: 5, color: "#fff" }} href="#" className="inline-block transition-colors">Novos Lançamentos</motion.a></li>
                <li><motion.a whileHover={{ x: 5, color: "#fff" }} href="#" className="inline-block transition-colors">T-Shirts Premium</motion.a></li>
                <li><motion.a whileHover={{ x: 5, color: "#fff" }} href="#" className="inline-block transition-colors">Calças e Bermudas</motion.a></li>
                <li><motion.a whileHover={{ x: 5, color: "#fff" }} href="#" className="inline-block transition-colors">Looks Prontos</motion.a></li>
                <li><motion.a whileHover={{ x: 5, color: "#fff" }} href="#" className="inline-block transition-colors">Acessórios</motion.a></li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Suporte</h4>
              <ul className="space-y-3 text-white/60 text-sm font-medium">
                <li><motion.a whileHover={{ x: 5, color: "#fff" }} href="#" className="inline-block transition-colors">Política de Trocas</motion.a></li>
                <li><motion.a whileHover={{ x: 5, color: "#fff" }} href="#" className="inline-block transition-colors">Rastreamento</motion.a></li>
                <li><motion.a whileHover={{ x: 5, color: "#fff" }} href="#" className="inline-block transition-colors">Guia de Tamanhos</motion.a></li>
                <li><motion.a whileHover={{ x: 5, color: "#fff" }} href="#" className="inline-block transition-colors">FAQ</motion.a></li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest font-mono">
            &copy; {new Date().getFullYear()} FLASH IMPORTS. O PADRÃO ESSENCIAL.
          </p>
          
          <div className="flex gap-4">
            <motion.a whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.05)" }} whileTap={{ scale: 0.95 }} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4 text-white/60" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.05)" }} whileTap={{ scale: 0.95 }} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center transition-colors">
              <MessageCircle className="w-4 h-4 text-white/60" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.05)" }} whileTap={{ scale: 0.95 }} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center transition-colors">
              <Mail className="w-4 h-4 text-white/60" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
