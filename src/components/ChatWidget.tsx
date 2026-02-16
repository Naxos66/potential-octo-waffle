import { useState, useEffect } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Charger le script Voiceflow seulement si le chat est ouvert et non chargé auparavant
    if (isOpen && !window.voiceflowLoaded) {
      const v = document.createElement('script');
      v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
      v.type = "text/javascript";
      v.onload = () => {
        window.voiceflow.chat.load({
          verify: { projectID: '6993392cad39bc7a14b8abae' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: { url: "https://runtime-api.voiceflow.com" },
        });
      };
      document.body.appendChild(v);
      window.voiceflowLoaded = true; // Empêche le rechargement du script
    }
  }, [isOpen]);

  return (
    <div id="chat-widget" className="fixed bottom-5 right-5 z-50">
      {/* Container du widget */}
      {isOpen && (
        <section className="mb-3 flex h-[26rem] w-[20rem] flex-col overflow-hidden rounded-2xl border border-gold/40 bg-slate-900 shadow-gold">
          <header className="border-b border-gold/20 px-4 py-3 text-sm font-semibold text-gold-soft">
            Assistant temporel
          </header>
          {/* Le widget Voiceflow sera injecté automatiquement */}
          <div id="vf-widget" className="flex-1"></div>
        </section>
      )}

      {/* Bouton flottant pour ouvrir/fermer le chat */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-full border border-gold bg-slate-900 px-4 py-3 font-medium text-gold-soft shadow-gold transition hover:scale-105"
      >
        {isOpen ? 'Fermer le chat' : '💬 Chat'}
      </button>
    </div>
  );
}
