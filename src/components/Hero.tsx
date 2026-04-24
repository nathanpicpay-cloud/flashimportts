import { motion } from 'motion/react';
import { ShieldCheck, Truck, Award, Headphones, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full pt-24">
      
      {/* Main Hero Area */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Big Logo Recreated with Code */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start relative"
          >
            {/* Logo Silhouette/Bolt representation */}
            <div className="relative mb-6">
               <svg className="w-40 h-40 text-[#FFC107] drop-shadow-[0_0_30px_rgba(255,193,7,0.3)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
               </svg>
            </div>

            <div className="flex flex-col relative z-10 w-full lg:w-auto items-center lg:items-start">
              <h1 className="text-6xl md:text-8xl font-black font-heading uppercase italic tracking-tighter text-white leading-[0.8] drop-shadow-2xl">
                FLASH
              </h1>
              <h2 className="text-6xl md:text-8xl font-black font-heading uppercase italic tracking-tighter text-[#FFC107] leading-[0.8] drop-shadow-2xl mb-4">
                -IMPORTS
              </h2>
              <div className="flex items-center gap-4 w-full justify-center lg:justify-start">
                <div className="h-[2px] flex-1 bg-white/20"></div>
                <p className="text-lg md:text-xl font-bold tracking-[0.3em] font-heading text-white whitespace-nowrap">
                  LOJA MASCULINA
                </p>
                <div className="h-[2px] flex-1 bg-white/20"></div>
              </div>
            </div>

            <motion.a 
              href="https://wa.me/5575991148518"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 flex items-center gap-3 bg-[#111111] border border-white/10 px-6 py-3 rounded-full hover:border-[#25D366] transition-colors cursor-pointer group"
            >
              <svg className="w-8 h-8 text-[#25D366] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="text-xl md:text-3xl font-black font-heading text-white">(75) 99114-8518</span>
            </motion.a>
          </motion.div>

          {/* Right: Text and CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col lg:pl-12 text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase text-white mb-2 leading-tight">
              ESTILO, ATITUDE<br/>
              <span className="text-[#FFC107]">E QUALIDADE</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl font-medium mb-8 max-w-md mx-auto lg:mx-0">
              As melhores peças para o homem moderno.
            </p>
            <div className="flex justify-center lg:justify-start">
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="flex items-center gap-3 bg-[#FFC107] text-black px-8 py-4 font-bold uppercase text-sm tracking-widest rounded-md hover:bg-[#FDB813] transition-colors"
               >
                 VER PRODUTOS <ArrowRight className="w-5 h-5" />
               </motion.button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Feature Value Bar (Bottom of Hero) */}
      <div className="w-full bg-[#121212]/60 backdrop-blur-md border-y border-white/5 mt-8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
             
             {/* Feature 1 */}
             <div className="flex items-center gap-4 justify-center sm:justify-start">
               <ShieldCheck className="w-10 h-10 text-[#FFC107]" />
               <div>
                 <h4 className="text-white font-bold text-sm uppercase">COMPRA 100% SEGURA</h4>
                 <p className="text-white/50 text-xs mt-0.5">Seus dados protegidos</p>
               </div>
             </div>

             {/* Feature 2 */}
             <div className="flex items-center gap-4 justify-center sm:justify-start border-t sm:border-t-0 sm:border-l border-white/10 pt-6 sm:pt-0 sm:pl-6">
               <Truck className="w-10 h-10 text-[#FFC107]" />
               <div>
                 <h4 className="text-white font-bold text-sm uppercase">ENVIO RÁPIDO</h4>
                 <p className="text-white/50 text-xs mt-0.5">Para todo o Brasil</p>
               </div>
             </div>

             {/* Feature 3 */}
             <div className="flex items-center gap-4 justify-center sm:justify-start border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-6">
               <Award className="w-10 h-10 text-[#FFC107]" />
               <div>
                 <h4 className="text-white font-bold text-sm uppercase">PRODUTOS ORIGINAIS</h4>
                 <p className="text-white/50 text-xs mt-0.5">Qualidade garantida</p>
               </div>
             </div>

             {/* Feature 4 */}
             <div className="flex items-center gap-4 justify-center sm:justify-start border-t sm:border-t-0 sm:border-l sm:block lg:flex border-white/10 pt-6 sm:pt-0 sm:pl-6 hidden sm:flex">
               <Headphones className="w-10 h-10 text-[#FFC107]" />
               <div>
                 <h4 className="text-white font-bold text-sm uppercase">ATENDIMENTO</h4>
                 <p className="text-white/50 text-xs mt-0.5">Suporte dedicado</p>
               </div>
             </div>

           </div>
        </div>
      </div>
      
    </section>
  );
}
