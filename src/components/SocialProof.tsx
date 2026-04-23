import { motion } from 'motion/react';
import { socialProofImages } from '../data/mockData';

export default function SocialProof() {
  return (
    <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid md:grid-cols-12 gap-4">
        
        {/* Social Proof Bento */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="md:col-span-8 bg-[#151515] rounded-3xl border border-white/5 p-6 md:p-8 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#1E90FF] animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Aqueles Que Vestem</span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 flex-1 mb-6">
            {socialProofImages.slice(0, 3).map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square sm:aspect-auto rounded-2xl bg-[#0A0A0A] bg-center bg-cover border border-white/5 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                style={{ backgroundImage: `url(${img})` }}
              ></motion.div>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between text-[10px] font-bold uppercase">
            <span className="text-[#D4AF37] tracking-widest">#FLASHSTREET</span>
            <span className="text-white/40 italic">Junte-se ao padrão</span>
          </div>
        </motion.div>

        {/* CTA Bento */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="md:col-span-4 bg-white rounded-3xl p-6 md:p-8 flex flex-col justify-between"
        >
          <div className="mb-8">
            <h3 className="text-black text-2xl md:text-3xl font-black font-heading uppercase italic leading-none mb-3">Pronto para<br/>elevar seu nível?</h3>
            <p className="text-black/60 text-xs font-medium">Conecte-se conosco para consultoria de estilo e pré-vendas exclusivas.</p>
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between px-5 py-4 bg-[#0A0A0A] rounded-2xl cursor-pointer group hover:bg-[#D4AF37] transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white group-hover:text-black">Suporte via WhatsApp</span>
              <svg className="w-4 h-4 text-[#D4AF37] group-hover:text-black group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </div>
            <div className="flex items-center justify-between px-5 py-4 border border-black/10 rounded-2xl cursor-pointer hover:bg-black/5 transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">Visite nosso Instagram</span>
              <div className="w-1.5 h-1.5 rounded-full bg-black/20"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
