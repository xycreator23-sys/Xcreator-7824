import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, MessageCircle } from "lucide-react";

type Message = { role: "bot" | "user"; text: string };

const responses: Record<string, string> = {
  default: "Je suis X CREATOR AI. Comment puis-je vous aider aujourd'hui ? Je peux vous renseigner sur nos services de développement web, mobile, IA et bien plus !",
  bonjour: "Bonjour ! Bienvenue chez X CREATOR. Que puis-je faire pour vous ?",
  site: "Nous créons des sites vitrines, e-commerce, blogs et plateformes professionnelles. Nos sites sont rapides, sécurisés et optimisés SEO. Vous souhaitez un devis ?",
  application: "Nous développons des applications Android, iOS et Web progressives. Décrivez votre projet et nous vous proposerons la meilleure solution !",
  ia: "Nous créons des chatbots intelligents, des IA pour WhatsApp/Telegram, des agents autonomes et des solutions IA sur mesure pour votre entreprise.",
  prix: "Nos tarifs sont très accessibles et adaptés à votre budget. Contactez-nous via WhatsApp ou le formulaire pour un devis gratuit !",
  contact: "Vous pouvez nous contacter via WhatsApp au +243 843 774 848, par email à xycreator23@gmail.com ou via le formulaire de contact sur cette page.",
  délai: "Un site vitrine est livré en 3-7 jours. Une application mobile prend 2-6 semaines selon la complexité. Nous respectons toujours les délais convenus !",
  jeu: "Nous créons des jeux 2D et 3D modernes, des jeux mobiles et des web games. Parlons de votre concept !",
  logo: "Nous créons des logos, identités visuelles, affiches, flyers et cartes de visite. Notre équipe graphique est créative et professionnelle.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("bonjour") || lower.includes("salut") || lower.includes("hello")) return responses.bonjour;
  if (lower.includes("site") || lower.includes("web")) return responses.site;
  if (lower.includes("app") || lower.includes("mobile")) return responses.application;
  if (lower.includes("ia") || lower.includes("intelligence") || lower.includes("chatbot") || lower.includes("robot")) return responses.ia;
  if (lower.includes("prix") || lower.includes("coût") || lower.includes("tarif") || lower.includes("combien")) return responses.prix;
  if (lower.includes("contact") || lower.includes("whatsapp") || lower.includes("email")) return responses.contact;
  if (lower.includes("délai") || lower.includes("temps") || lower.includes("durée") || lower.includes("quand")) return responses.délai;
  if (lower.includes("jeu") || lower.includes("game")) return responses.jeu;
  if (lower.includes("logo") || lower.includes("design") || lower.includes("graphique")) return responses.logo;
  return "Je comprends votre demande ! Pour un accompagnement personnalisé, contactez-nous via WhatsApp ou remplissez notre formulaire de contact. Notre équipe vous répondra dans les 24h.";
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: responses.default },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setTyping(true);
    await new Promise((r) => setTimeout(r, 800 + Math.random() * 500));
    setTyping(false);
    setMessages((prev) => [...prev, { role: "bot", text: getResponse(msg) }]);
  };

  const quickReplies = ["Prix & devis", "Nos services", "Délai de livraison", "Contacter l'équipe"];

  return (
    <div className="chatbot-widget">
      {/* Widget window */}
      {open && (
        <div
          className="mb-4 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: "#050510",
            border: "1px solid rgba(0,102,255,0.3)",
            boxShadow: "0 0 40px rgba(0,102,255,0.2)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between p-4"
            style={{ background: "linear-gradient(135deg, #0066ff, #0044cc)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
              <div>
                <div className="font-exo font-bold text-white text-sm">X CREATOR AI</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-exo text-xs text-blue-100">En ligne 24h/24</span>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-3" style={{ scrollbarWidth: "none" }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "bot" && (
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 self-end"
                    style={{ background: "linear-gradient(135deg, #0066ff, #00ccff)" }}
                  >
                    <Bot size={12} className="text-white" />
                  </div>
                )}
                <div
                  className="max-w-[75%] px-3.5 py-2.5 rounded-2xl text-sm font-exo"
                  style={{
                    background: msg.role === "bot"
                      ? "rgba(0,102,255,0.15)"
                      : "linear-gradient(135deg, #0066ff, #0044cc)",
                    color: "white",
                    borderRadius: msg.role === "bot" ? "4px 18px 18px 18px" : "18px 4px 18px 18px",
                    border: msg.role === "bot" ? "1px solid rgba(0,102,255,0.2)" : "none",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #0066ff, #00ccff)" }}
                >
                  <Bot size={12} className="text-white" />
                </div>
                <div
                  className="px-4 py-2.5 rounded-2xl"
                  style={{ background: "rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.2)", borderRadius: "4px 18px 18px 18px" }}
                >
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="px-3 pb-2 flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {quickReplies.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-exo transition-all duration-200 hover:scale-105 flex-shrink-0"
                style={{
                  background: "rgba(0,102,255,0.12)",
                  border: "1px solid rgba(0,102,255,0.25)",
                  color: "#3399ff",
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div
            className="p-3 flex gap-2"
            style={{ borderTop: "1px solid rgba(0,102,255,0.1)" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Posez votre question..."
              className="flex-1 bg-white/5 border border-blue-900/30 rounded-xl px-3 py-2 text-white text-sm font-exo placeholder-gray-600 focus:outline-none focus:border-blue-500/40"
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim()}
              className="w-9 h-9 rounded-xl flex items-center justify-center disabled:opacity-40 transition-all duration-200 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #0066ff, #00ccff)" }}
            >
              <Send size={14} className="text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 relative"
        style={{
          background: "linear-gradient(135deg, #0066ff, #00ccff)",
          boxShadow: "0 0 30px rgba(0,102,255,0.5)",
        }}
      >
        {open ? (
          <X size={22} className="text-white" />
        ) : (
          <>
            <MessageCircle size={22} className="text-white" />
            <span
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 flex items-center justify-center text-[9px] font-bold text-white animate-pulse"
            >
              IA
            </span>
          </>
        )}
      </button>
    </div>
  );
}
