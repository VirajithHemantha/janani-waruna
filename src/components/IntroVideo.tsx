import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroVideoProps {
  onComplete: () => void;
}

export const IntroVideo: React.FC<IntroVideoProps> = ({ onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  // Removed auto-play effect to require user interaction first
  const handlePlay = () => {
    setIsStarted(true);
  };

  const handleStart = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsStarted(true);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover scale-110 sm:scale-100 object-top"
        src="/Lotus_blooms_reveals_wedding_Poruwa_202605141543.mp4"
        playsInline
        onPlay={handlePlay}
        onEnded={onComplete}
        onError={() => setHasError(true)}
      />

      {/* Sinhala Text Overlay */}
      {isStarted && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col items-center justify-start pt-12 sm:pt-40 pointer-events-none z-10"
        >
          <h2 
            className="font-sinhala text-4xl sm:text-7xl lg:text-8xl tracking-[0.2em] text-center px-6 text-brand-gold drop-shadow-[0_4px_10px_rgba(255,255,255,0.5)] mb-4 sm:mb-8"
            style={{ WebkitTextStroke: '1px white' }}
          >
            ශ්‍රී සුභ මංගලම්
          </h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.8 }}
            className="flex flex-col items-center gap-2 sm:gap-4"
          >
             <div className="h-[1px] w-32 sm:w-48 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60" />
             <div 
               className="flex flex-row items-center justify-center gap-3 sm:gap-6 font-sinhala text-3xl sm:text-5xl lg:text-6xl text-brand-gold drop-shadow-sm tracking-wide whitespace-nowrap"
               style={{ WebkitTextStroke: '1px white' }}
             >
                <span>Janani</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-brand-gold italic" style={{ WebkitTextStroke: '1px white' }}>&</span>
                <span>Waruna</span>
             </div>
             <div className="h-[1px] w-32 sm:w-48 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60" />
          </motion.div>
        </motion.div>
      )}

      {/* Manual Start Button */}
      {!isStarted && !hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity z-50">
          <motion.button
            onClick={handleStart}
            className="px-8 py-4 bg-brand-gold-deep text-white rounded-full font-display text-2xl shadow-2xl hover:bg-brand-gold transition-colors flex flex-col items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Invitation</span>
            <span className="text-xs uppercase tracking-widest font-sans opacity-80">Tap to Play</span>
          </motion.button>
        </div>
      )}

      {/* Fallback if video fails to load */}
      {hasError && (
        <div className="flex flex-col items-center gap-4 text-white text-center px-6">
          <p className="font-serif text-xl italic">Unable to load the intro video.</p>
          <button
            onClick={onComplete}
            className="px-6 py-2 bg-brand-gold-deep rounded-full text-sm uppercase tracking-widest font-bold"
          >
            Enter Website
          </button>
        </div>
      )}

      {/* Skip Button */}
      <motion.button
        onClick={onComplete}
        className="absolute bottom-10 right-10 z-[110] px-4 py-2 text-white/50 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        Skip Intro
      </motion.button>
    </motion.div>
  );
};
