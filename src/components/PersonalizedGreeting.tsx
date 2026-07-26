import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const PersonalizedGreeting: React.FC = () => {
  const [guestName, setGuestName] = useState<string | null>(null);
  const [prefixStr, setPrefixStr] = useState<string>('');
  const [greeting, setGreeting] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const prefix = params.get('prefix');
    const guest = params.get('guest');

    if (prefix && guest) {
      // Decode and replace hyphens with spaces for display
      const formattedName = decodeURIComponent(guest).replace(/-/g, ' ');
      setGuestName(formattedName);
      setPrefixStr(prefix);

      // Mapping
      if (prefix === "Mr.") setGreeting("Dear");
      else if (prefix === "Mrs.") setGreeting("Dear");
      else if (prefix === "Miss") setGreeting("Dear");
      else if (prefix === "Dear") setGreeting("Dear");
      else if (prefix === "Mr. & Mrs.") setGreeting("Dear");
      else if (prefix === "Family") setGreeting("Dear");
      else setGreeting("Dear");
    }
  }, []);

  if (!guestName) return null;

  return (
    <div className="w-full relative py-16 px-6 text-center overflow-hidden">
      {/* Section Background Image */}
      <div className="absolute inset-0 -z-10">
        <div
          className="hidden sm:block absolute inset-0 bg-cover bg-center opacity-100"
          style={{ backgroundImage: "url('/ChatGPT Image May 14, 2026, 03_54_56 PM.png')" }}
        />
        <img 
          src="/ChatGPT Image May 14, 2026, 03_54_56 PM.png" 
          alt="Greeting Background" 
          className="block sm:hidden w-full h-full object-cover absolute inset-0 opacity-100" 
        />
      </div>

      {/* Decorative ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] sm:w-[80%] h-[150%] sm:h-[120%] bg-gradient-radial from-brand-gold/20 to-transparent blur-[80px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative max-w-2xl mx-auto bg-white/75 backdrop-blur-xl p-10 sm:p-14 rounded-[3rem] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-brand-gold/30"
      >
        <Sparkles className="absolute top-8 right-8 w-6 h-6 text-brand-gold/50 animate-pulse" />
        <Sparkles className="absolute bottom-8 left-8 w-4 h-4 text-brand-gold/40 animate-pulse" />

        <div className="inline-flex items-center gap-4 mb-6">
          <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-brand-gold-deep/60" />
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-brand-gold-deep font-bold font-sans drop-shadow-sm">
            WE CORDIALLY INVITE
          </p>
          <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-brand-gold-deep/60" />
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-stone-800 mb-6 drop-shadow-sm capitalize flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span className="text-xl sm:text-3xl font-serif italic text-brand-gold-deep/80">{prefixStr}</span>
          <span className="bg-gradient-to-r from-stone-800 to-stone-600 bg-clip-text text-transparent font-bold">
            {guestName}
          </span>
        </h2>

        <div className="font-serif text-lg sm:text-2xl text-stone-700 leading-relaxed space-y-4">
          <p className="text-brand-gold-deep font-bold text-xl sm:text-3xl">{greeting},</p>
          <p className="max-w-md mx-auto">
            We joyfully invite you to share in our happiness on our wedding day.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
