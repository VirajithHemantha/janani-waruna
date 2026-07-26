import React, { useState } from 'react';

export const Admin: React.FC = () => {
  const [prefix, setPrefix] = useState('Mr.');
  const [guestName, setGuestName] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');
  const [fullMessage, setFullMessage] = useState('');

  const prefixes = ['Mr.', 'Mrs.', 'Miss', 'Mr. & Mrs.', 'Family', 'Dear'];

  const generate = () => {
    if (!guestName.trim()) return;

    const formattedName = guestName.trim().replace(/\s+/g, '-');
    const link = `${window.location.origin}/?prefix=${encodeURIComponent(prefix)}&guest=${encodeURIComponent(formattedName)}`;
    setGeneratedLink(link);

    const msg = `Dear ${prefix} ${guestName} ❤️\n\nWith joyful hearts, we warmly invite you to celebrate one of the most special days of our lives as we begin our journey together.\nඅපගේ පවුල් වල සාමාජිකයින් සමඟ එක්ව, අපගේ විවාහ මංගල උත්සවය සඳහා අප ඔබව මහත් ප්‍රීතියෙන් යුතුව ආරාධනා කර සිටිනවා.\n\nPlease view our wedding invitation and all the event details through the link below 🌐:\n\n${link}\n\nYour presence would truly mean the world to us, and we would be honored to celebrate this beautiful moment together.\n\nWith love,\n❤️ Janani & Waruna (ජනනි සහ වරුණ)`;
    setFullMessage(msg);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-brand-champagne-light p-6 sm:p-12 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white p-8 sm:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-stone-100 relative">
        {/* Top elegant line */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-champagne via-brand-gold-deep/80 to-brand-champagne rounded-t-[2rem]" />
        
        <h1 className="text-3xl sm:text-4xl font-display text-stone-800 mb-8 text-center drop-shadow-sm">Invitation Generator</h1>
        
        <div className="space-y-6">
          <div>
            <label className="block text-[11px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-3 ml-2">Invitation Type</label>
            <select 
              value={prefix} 
              onChange={(e) => setPrefix(e.target.value)}
              className="w-full bg-stone-50/50 px-6 py-4 rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 font-serif text-lg text-stone-700 shadow-inner"
            >
              {prefixes.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-[0.2em] font-bold text-stone-500 mb-3 ml-2">Guest Name</label>
            <input 
              type="text" 
              placeholder="e.g. Sanjaya" 
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full bg-stone-50/50 px-6 py-4 rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 font-serif text-lg text-stone-700 shadow-inner placeholder:text-stone-300"
            />
          </div>

          <div className="pt-4">
            <button 
              onClick={generate}
              className="w-full py-5 bg-stone-800 text-brand-champagne rounded-full font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-stone-900 transition-all shadow-lg active:scale-95"
            >
              Generate Link
            </button>
          </div>

          {generatedLink && (
            <div className="mt-10 p-8 bg-brand-champagne/20 rounded-[2rem] border border-brand-gold/20 space-y-6 animate-[fadeIn_0.5s_ease-out]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold-deep font-bold mb-2 ml-2">Generated URL:</p>
                <div className="bg-white p-4 rounded-2xl border border-stone-200 text-sm font-mono text-stone-600 break-all shadow-sm">
                  {generatedLink}
                </div>
                <button 
                  onClick={() => copyToClipboard(generatedLink)}
                  className="mt-3 ml-2 text-xs uppercase tracking-widest text-brand-gold-deep hover:text-stone-800 font-bold transition-colors"
                >
                  Copy Link Only
                </button>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold-deep font-bold mb-2 ml-2">WhatsApp Message:</p>
                <div className="bg-white p-4 rounded-2xl border border-stone-200 text-sm text-stone-700 whitespace-pre-wrap font-serif italic shadow-sm">
                  {fullMessage}
                </div>
                <button 
                  onClick={() => copyToClipboard(fullMessage)}
                  className="mt-3 ml-2 text-xs uppercase tracking-widest text-brand-gold-deep hover:text-stone-800 font-bold transition-colors"
                >
                  Copy Full Message
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
