import { motion } from 'motion/react';
import { socialProofImages } from '../data/mockData';
import { Instagram } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="py-12 w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Header equivalent */}
        <div className="flex flex-col mb-8 border-b border-white/5 pb-4 text-center items-center">
          <h4 className="text-[#FFC107] text-xs font-bold uppercase tracking-widest mb-2">#FLASHIMPORTS</h4>
          <h2 className="text-white text-3xl md:text-4xl font-bold">Quem usa e aprova</h2>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          
          {/* Social Proof Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-8 bg-[#121212] rounded-2xl border border-white/5 p-6 md:p-8 flex flex-col"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1 mb-6">
              {socialProofImages.slice(0, 3).map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square sm:aspect-auto rounded-lg bg-[#050505] bg-center bg-cover border border-white/5 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                  style={{ backgroundImage: `url(${img})` }}
                ></motion.div>
              ))}
            </div>
          </motion.div>

          {/* Connect CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-4 bg-[#FFC107] rounded-2xl p-6 md:p-8 flex flex-col justify-center text-center items-center relative overflow-hidden"
          >
            <div className="absolute -bottom-10 -right-10 opacity-10">
               <Instagram className="w-64 h-64 text-black" />
            </div>

            <div className="relative z-10">
              <h3 className="text-black text-2xl md:text-3xl font-black uppercase mb-4 leading-tight">Marque a gente no<br/>Instagram</h3>
              <p className="text-black/80 font-bold mb-8">E apareça aqui no nosso mural oficial.</p>
              
              <button className="flex items-center gap-2 bg-black text-white px-8 py-4 font-bold uppercase tracking-widest text-xs rounded-md mx-auto hover:bg-[#111] hover:scale-105 transition-all">
                <Instagram className="w-4 h-4 text-[#FFC107]" /> Seguir @flashimports
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
