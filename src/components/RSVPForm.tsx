import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { submitToGoogleSheet } from '../googleSheets';
import { CheckCircle, Loader2, Heart, Sparkles } from 'lucide-react';

export const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    attendance: 'Joyfully Accepts',
    wishes: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await submitToGoogleSheet('rsvp', {
        fullName: formData.fullName,
        attendance: formData.attendance,
        wishes: formData.wishes,
        submittedAt: new Date().toISOString(),
      });

      setStatus('success');
      setFormData({ fullName: '', attendance: 'Joyfully Accepts', wishes: '' });
    } catch (error) {
      console.error('Error sending RSVP to Google Sheets: ', error);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 relative py-10">
      {/* Premium ambient backdrop & glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-brand-gold/15 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="glass p-10 sm:p-14 lg:p-16 rounded-[3rem] border border-white/40 shadow-[0_30px_60px_rgba(212,175,55,0.1)] relative overflow-hidden bg-white/60 backdrop-blur-3xl lg:flex items-center gap-16"
      >
        {/* Soft top border line */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-champagne via-brand-gold-deep/80 to-brand-champagne" />

        {/* Left Side: Elegant Text */}
        <div className="lg:w-1/2 lg:pr-10 mb-12 lg:mb-0 relative text-center lg:text-left">
          <Sparkles className="absolute -top-6 -left-6 w-12 h-12 text-brand-gold/30 animate-pulse" />

          <div className="inline-flex items-center justify-center lg:justify-start gap-4 mb-6">
            <span className="text-brand-gold-deep uppercase tracking-[0.5em] text-[10px] sm:text-[11px] font-bold drop-shadow-sm">
              Kindly Respond
            </span>
            <div className="hidden lg:block w-16 h-[1px] bg-gradient-to-r from-brand-gold-deep/60 to-transparent" />
          </div>

          <h2 className="text-5xl sm:text-6xl font-display text-stone-800 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
            Confirm <span className="italic font-light text-brand-gold-deep">Your</span> Presence
          </h2>

          <p className="text-stone-500/90 font-serif text-lg leading-relaxed mb-6">
            Your presence means the world to us. Please kindly let us know if you will be able to join our celebration.
          </p>
          <div className="w-12 h-[1px] bg-brand-gold/50 mx-auto lg:mx-0" />
        </div>

        {/* Right Side: Flowing Form */}
        <div className="lg:w-1/2 relative z-10">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-16 px-8 bg-white/70 rounded-[2rem] border border-white shadow-xl"
              >
                <div className="w-24 h-24 bg-green-50/80 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-green-100">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-4xl font-display text-stone-800 mb-4 tracking-tight drop-shadow-sm">With Gratitude</h3>
                <p className="text-stone-500/90 leading-relaxed font-serif text-lg mb-8">
                  Your response has been warmly received. We cannot wait to celebrate with you!
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 rounded-full border border-brand-gold/30 text-brand-gold-deep font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-brand-gold/10 transition-all duration-300 shadow-sm"
                >
                  Update Response
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6 bg-white/40 p-8 sm:p-10 rounded-[2.5rem] border border-white shadow-[0_15px_30px_rgba(0,0,0,0.05)]"
              >
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-3 ml-2">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="E.g., John & Jane Doe"
                    className="w-full bg-white/80 px-6 py-4 rounded-full border border-stone-200/60 focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold-deep/40 outline-none transition-all duration-300 font-serif italic text-lg shadow-inner placeholder:text-stone-300"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-4 ml-2">Will you be joining us?</label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'Joyfully Accepts' })}
                      className={`flex-1 py-4 px-6 rounded-full border transition-all duration-300 flex items-center justify-center gap-2 ${
                        formData.attendance === 'Joyfully Accepts'
                          ? 'bg-brand-gold/10 border-brand-gold-deep text-brand-gold-deep shadow-inner'
                          : 'bg-white/80 border-stone-200/60 text-stone-500 hover:border-brand-gold/30 hover:bg-white'
                      }`}
                    >
                      <span className="font-serif italic text-lg">Joyfully Accepts</span>
                      {formData.attendance === 'Joyfully Accepts' && <Heart className="w-4 h-4 fill-brand-gold-deep" />}
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'Regretfully Declines' })}
                      className={`flex-1 py-4 px-6 rounded-full border transition-all duration-300 flex items-center justify-center gap-2 ${
                        formData.attendance === 'Regretfully Declines'
                          ? 'bg-stone-100 border-stone-400 text-stone-700 shadow-inner'
                          : 'bg-white/80 border-stone-200/60 text-stone-500 hover:border-stone-300 hover:bg-white'
                      }`}
                    >
                      <span className="font-serif italic text-lg">Regretfully Declines</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-3 ml-2">Wishes for the Couple (Optional)</label>
                  <textarea
                    placeholder="Leave a message or wish for the couple..."
                    className="w-full bg-white/80 px-6 py-4 rounded-[2rem] border border-stone-200/60 focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold-deep/40 outline-none transition-all duration-300 h-32 resize-none font-serif italic text-lg shadow-inner placeholder:text-stone-300"
                    value={formData.wishes}
                    onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                  />
                </div>

                <div className="pt-4">
                  <button
                    disabled={status === 'loading'}
                    type="submit"
                    className="w-full bg-stone-800 text-brand-champagne py-5 rounded-full font-sans tracking-[0.3em] font-bold text-[11px] uppercase hover:bg-stone-900 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      'Confirm Attendance'
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
