import { useState } from 'react';
import { MessageCircle, X, Send, Phone } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOptions = [
    { text: 'Fazer um pedido', action: () => window.location.href = '/cardapio' },
    { text: 'Acompanhar pedido', action: () => alert('Funcionalidade em desenvolvimento!') },
    { text: 'Promoções de hoje', action: () => alert('Confira nossos combos na página de cardápio!') },
    { text: 'Falar com atendente', action: () => window.open('https://wa.me/5531999999999', '_blank') },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[110] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-slide-up">
          <div className="bg-mineiro-green p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                G
              </div>
              <div>
                <p className="font-bold text-sm">Mineiro Gourmet</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-[10px] opacity-80">Online agora</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <X size={20} />
            </button>
          </div>
          
          <div className="p-4 bg-mineiro-cream/10">
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-gray-600 mb-4 border border-gray-50">
              Oi! 👋 Bem-vindo à Mineiro Gourmet! Como podemos adoçar ou temperar o seu dia hoje?
            </div>
            
            <div className="space-y-2">
              {menuOptions.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={opt.action}
                  className="w-full text-left p-3 text-xs font-bold text-mineiro-green bg-white hover:bg-mineiro-green hover:text-white rounded-xl border border-mineiro-green/20 transition-all flex items-center justify-between group"
                >
                  {opt.text}
                  <Send size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-3 text-center bg-gray-50">
            <p className="text-[10px] text-gray-400 font-medium">Resposta instantânea via WhatsApp</p>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 group relative border-4 border-white"
      >
        {!isOpen && (
          <span className="absolute -top-12 right-0 bg-white text-mineiro-green text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg border border-green-100 whitespace-nowrap animate-bounce">
            DÚVIDAS?
          </span>
        )}
        {isOpen ? <X size={28} /> : <MessageCircle size={32} />}
      </button>

      <style jsx>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};

export default WhatsAppChat;
