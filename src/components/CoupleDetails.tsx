import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

export const CoupleDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

      <div className="text-center mb-16 sm:mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-4 mb-6 mt-4">
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-brand-gold-deep/60" />
            <span className="text-brand-gold-deep uppercase tracking-[0.5em] text-[11px] font-semibold font-sans drop-shadow-sm">the happy couple | ආදරණීය යුවළ</span>
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-brand-gold-deep/60" />
          </div>
          <h2 className="text-5xl sm:text-7xl font-display text-stone-800 tracking-tight drop-shadow-sm flex flex-col items-center gap-4">
            <span>Janani <span className="italic text-brand-gold-deep font-light mx-2">&</span> Waruna</span>
            <span className="text-3xl sm:text-5xl font-sinhala font-normal text-stone-600 mt-2">ජනනි <span className="mx-2">&</span> වරුණ</span>
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 relative z-10">
        {/* Bride Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-center lg:text-right flex-1 lg:pr-10"
        >
          <div className="mb-4 flex flex-col items-center lg:items-end">
            <span className="text-brand-gold-deep uppercase tracking-widest text-[10px] font-bold mb-2 block">The Bride | මනාලිය</span>
            <h3 className="text-4xl sm:text-5xl font-display text-stone-800 mb-2 drop-shadow-sm flex flex-col items-center lg:items-end gap-2">
              <span>Janani</span>
              <span className="text-2xl sm:text-3xl font-sinhala font-normal text-stone-600">ජනනි</span>
            </h3>
            <div className="text-stone-800 font-serif italic font-bold text-base sm:text-lg flex flex-col items-center lg:items-end gap-1 mt-4">
              <span>Daughter of Mr. & Mrs. Ekanayake</span>
              <span className="text-sm font-sinhala font-normal text-stone-600">ඒකනායක මහතාගේ සහ මහත්මියගේ දියණිය</span>
            </div>
          </div>
          <div className="hidden lg:flex justify-end mt-8">
            <Heart className="w-6 h-6 text-brand-gold/60 fill-brand-gold/20 transform hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </motion.div>

        {/* Decorative Center (Image removed as requested) */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/30 to-transparent rounded-full blur-3xl opacity-40 scale-150" />
            <motion.img 
              src="/WhatsApp Image 2026-07-14 at 15.44.43 (1).jpeg" 
              alt="Couple" 
              className="relative z-10 w-full h-full object-cover rounded-full border-[6px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.15)] ring-4 ring-brand-gold/30"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <Sparkles className="absolute top-0 right-0 w-8 h-8 text-brand-gold-deep animate-pulse" />
          </div>

        {/* Groom Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-center lg:text-left flex-1 lg:pl-10"
        >
          <div className="mb-4 flex flex-col items-center lg:items-start">
            <span className="text-brand-gold-deep uppercase tracking-widest text-[10px] font-bold mb-2 block">The Groom | මනාලයා</span>
            <h3 className="text-4xl sm:text-5xl font-display text-stone-800 mb-2 drop-shadow-sm flex flex-col items-center lg:items-start gap-2">
              <span>Waruna</span>
              <span className="text-2xl sm:text-3xl font-sinhala font-normal text-stone-600">වරුණ</span>
            </h3>
            <div className="text-stone-800 font-serif italic font-bold text-base sm:text-lg flex flex-col items-center lg:items-start gap-1 mt-4 text-center lg:text-left">
              <span className="text-sm">Son of Late Mr. Ranjith Solanga Arachchi & Mrs. Suneetha Ranwala</span>
              <span className="text-xs sm:text-sm font-sinhala font-normal text-stone-600 leading-relaxed">අභාවප්‍රාප්ත රංජිත් සෝලංග ආරච්චි මහතාගේ සහ සුනීතා රන්වල මහත්මියගේ පුතණුවන්</span>
            </div>
          </div>
          <div className="hidden lg:flex justify-start mt-8">
            <Heart className="w-6 h-6 text-brand-gold/60 fill-brand-gold/20 transform hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
