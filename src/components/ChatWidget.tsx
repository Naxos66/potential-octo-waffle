import { FormEvent, useMemo, useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const faqRules: Array<{ keywords: string[]; answer: string }> = [
  { keywords: ['prix', 'tarif', 'coût'], answer: 'Nos expéditions démarrent autour de 8 900 crédits temporels selon la destination.' },
  { keywords: ['sécurité', 'danger'], answer: 'Chaque voyage inclut un sas chrono-protecteur et un guide certifié anti-paradoxes.' },
  { keywords: ['météo', 'climat'], answer: 'La météo varie selon les ères : prévoir un kit adaptatif fourni par l’agence.' },
  { keywords: ['dinosaure', 'crétacé'], answer: 'Au Crétacé, les sorties se font en convoi blindé avec zone d’observation sécurisée.' },
  { keywords: ['tour eiffel', 'eiffel', 'paris'], answer: 'Paris 1889 vous permet de vivre l’inauguration de la Tour Eiffel en accès privilégié.' },
  { keywords: ['michel-ange', 'florence'], answer: 'À Florence 1504, un atelier immersif retrace la création du David de Michel-Ange.' },
];

function generateAnswer(input: string): string {
  const normalized = input.toLowerCase();
  const match = faqRules.find((rule) => rule.keywords.some((keyword) => normalized.includes(keyword)));
  return match?.answer ?? 'Je peux vous renseigner sur les prix, la sécurité, la météo temporelle et nos destinations phares.';
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Bonjour, je suis Chrona, votre assistante voyage temporel. ✨' },
  ]);

  const hasMessages = useMemo(() => messages.length > 0, [messages]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    const assistantMessage: Message = { role: 'assistant', content: generateAnswer(input.trim()) };
    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput('');
  };

  return (
    <div id="chat" className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <section className="mb-3 flex h-[26rem] w-[20rem] flex-col overflow-hidden rounded-2xl border border-gold/40 bg-slate-900 shadow-gold">
          <header className="border-b border-gold/20 px-4 py-3 text-sm font-semibold text-gold-soft">Assistant temporel</header>
          <div className="flex-1 space-y-3 overflow-y-auto px-3 py-3 text-sm">
            {hasMessages &&
              messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`max-w-[85%] rounded-xl px-3 py-2 ${
                    message.role === 'assistant' ? 'bg-slate-800 text-slate-100' : 'ml-auto bg-gold text-slate-900'
                  }`}
                >
                  {message.content}
                </div>
              ))}
          </div>
          <form onSubmit={onSubmit} className="border-t border-gold/20 p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Posez-moi vos questions sur les voyages temporels…"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white"
            />
          </form>
        </section>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-full border border-gold bg-slate-900 px-4 py-3 font-medium text-gold-soft shadow-gold transition hover:scale-105"
      >
        {isOpen ? 'Fermer le chat' : '💬 Chat'}
      </button>
    </div>
  );
}
