import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Music2, Volume2, VolumeX } from 'lucide-react';
import { FloatingPetals } from './components/FloatingPetals';
import { IntroVideo } from './components/IntroVideo';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { CeremonyDetails } from './components/CeremonyDetails';
import { CoupleDetails } from './components/CoupleDetails';
// Removed Timeline import
import { Location } from './components/Location';
import { RSVPForm } from './components/RSVPForm';
import { Footer } from './components/Footer';
import { Admin } from './components/Admin';
import { PersonalizedGreeting } from './components/PersonalizedGreeting';

export default function App() {
  const [showMain, setShowMain] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  
  const isAdmin = window.location.pathname === '/admin';
  if (isAdmin) {
    return <Admin />;
  }
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const weddingDate = new Date('2026-08-27T09:00:00');

  useEffect(() => {
    if (showMain && audioRef.current && !isMusicPlaying) {
      audioRef.current.play().then(() => {
        setIsMusicPlaying(true);
      }).catch(err => {
        console.log("Audio auto-play blocked: ", err);
      });
    }
  }, [showMain, isMusicPlaying]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play blocked: ", err));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-brand-gold selection:text-white overflow-x-hidden bg-brand-champagne-light">
      <FloatingPetals />

      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/Waramathi Remix  Prashasthi  Srilankan Traditional Song  EDM REMIX  Geesara Lankanath 2023.mp3"
        loop
      />

      <AnimatePresence mode="wait">
        {!showMain ? (
          <IntroVideo key="intro" onComplete={() => setShowMain(true)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* Music Toggle Button */}
            <button
              onClick={toggleMusic}
              className="fixed bottom-8 right-8 z-[60] w-14 h-14 glass rounded-full flex items-center justify-center text-brand-gold-deep hover:bg-stone-800 hover:text-brand-champagne transition-all active:scale-90 shadow-2xl group"
            >
              <div className="absolute inset-0 rounded-full border border-brand-gold/20 scale-110 group-hover:scale-125 transition-transform" />
              {isMusicPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
            </button>

            <section id="hero">
              <Hero />
            </section>

            <PersonalizedGreeting />

            {/* Dynamic Countdown Section */}
            <section id="countdown" className="py-20 sm:py-32 relative overflow-hidden">
              {/* Section Background Image */}
              <div className="absolute inset-0 -z-10">
                <div
                  className="hidden sm:block absolute inset-0 bg-cover bg-center opacity-100"
                  style={{ backgroundImage: "url('/ChatGPT Image Jul 14, 2026, 04_03_03 PM.png')" }}
                />
                <img 
                  src="/ChatGPT Image Jul 14, 2026, 04_03_03 PM.png" 
                  alt="Countdown Mobile Background" 
                  className="block sm:hidden w-full h-full object-cover absolute inset-0 opacity-100" 
                />
              </div>

              {/* Premium Background Ambient Glows */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] bg-brand-gold/30 blur-[120px] rounded-full" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[70%] bg-brand-gold-deep/10 blur-[120px] rounded-full" />
              </div>

              <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-brand-gold-deep/60" />
                  <span className="text-brand-gold-deep uppercase tracking-[0.5em] text-[11px] font-semibold font-sans drop-shadow-sm">The Final Countdown</span>
                  <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-brand-gold-deep/60" />
                </div>

                <h2 className="text-5xl sm:text-7xl font-display text-stone-800 tracking-tight mb-6 drop-shadow-sm">
                  Until We Say <span className="italic text-brand-gold-deep font-light">"I Do"</span>
                </h2>

                <p className="text-lg sm:text-xl font-serif italic text-stone-600/80 mb-12 sm:mb-16 max-w-2xl text-center leading-relaxed">
                  Time is standing still as we eagerly await the moment our forever begins.
                </p>

                <Countdown targetDate={weddingDate} />
              </div>
            </section>

            <section id="couple" className="pt-0 sm:pt-32 pb-0 relative overflow-hidden">
              {/* Section Background Image */}
              <div className="absolute inset-0 -z-10">
                <div
                  className="hidden sm:block absolute inset-0 bg-cover bg-center opacity-100"
                  style={{ backgroundImage: "url('/ChatGPT Image May 14, 2026, 03_54_56 PM.png')" }}
                />
                <img 
                  src="/ChatGPT Image May 14, 2026, 03_54_56 PM.png" 
                  alt="Couple Mobile Background" 
                  className="block sm:hidden w-full h-full object-cover absolute inset-0 opacity-100" 
                />
                {/* Optional: Add a subtle overlay if needed for readability, but user said "no want add as watermark" before */}
              </div>
              <CoupleDetails />
            </section>

            <section id="ceremony" className="pt-16 pb-16 sm:pt-32 sm:pb-32 relative overflow-hidden">
              {/* Section Background Image */}
              <div className="absolute inset-0 -z-10">
                <div
                  className="hidden sm:block absolute inset-0 bg-cover bg-center opacity-100"
                  style={{ backgroundImage: "url('/ChatGPT Image May 14, 2026, 03_54_56 PM.png')" }}
                />
                <img 
                  src="/ChatGPT Image May 14, 2026, 03_54_56 PM.png" 
                  alt="Ceremony Mobile Background" 
                  className="block sm:hidden w-full h-full object-cover absolute inset-0 opacity-100" 
                />
              </div>
              <CeremonyDetails />
            </section>

            {/* Timeline section removed entirely as requested */}

            <section id="location" className="pt-0 pb-16 sm:pb-32 relative overflow-hidden">
              {/* Section Background Image */}
              <div className="absolute inset-0 -z-10">
                <div
                  className="hidden sm:block absolute inset-0 bg-cover bg-center opacity-100"
                  style={{ backgroundImage: "url('/ChatGPT Image May 14, 2026, 03_54_56 PM.png')" }}
                />
                <img 
                  src="/ChatGPT Image May 14, 2026, 03_54_56 PM.png" 
                  alt="Location Mobile Background" 
                  className="block sm:hidden w-full h-full object-cover absolute inset-0 opacity-100" 
                />
              </div>
              <Location />
            </section>

            <section id="rsvp" className="py-20 sm:py-32 relative overflow-hidden">
              {/* Section Background Image */}
              <div className="absolute inset-0 -z-10">
                <div
                  className="hidden sm:block absolute inset-0 bg-cover bg-center opacity-100"
                  style={{ backgroundImage: "url('/ChatGPT Image May 14, 2026, 03_54_56 PM.png')" }}
                />
                <img 
                  src="/ChatGPT Image May 14, 2026, 03_54_56 PM.png" 
                  alt="RSVP Mobile Background" 
                  className="block sm:hidden w-full h-full object-cover absolute inset-0 opacity-100" 
                />
              </div>
              <RSVPForm />
            </section>
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

