import { useEffect, useRef } from "react";
import { Bot, MessageSquare, Globe, FileText, Repeat, Users, Cpu, Zap, CheckCircle } from "lucide-react";

const aiFeatures = [
  { icon: Users, label: "Assistance client intelligente" },
  { icon: MessageSquare, label: "Réponses automatiques 24h/24" },
  { icon: Zap, label: "Assistance commerciale" },
  { icon: FileText, label: "Génération de textes" },
  { icon: Cpu, label: "Aide aux entreprises" },
  { icon: Globe, label: "Multilingue (FR, EN, ES...)" },
  { icon: Repeat, label: "Automatisation des tâches" },
  { icon: Bot, label: "Intégration WhatsApp & Telegram" },
];

const aiProducts = [
  { name: "Chatbots intelligents", desc: "IA conversationnelle personnalisée pour votre marque" },
  { name: "IA WhatsApp & Telegram", desc: "Assistants automatiques sur vos messageries préférées" },
  { name: "Agents IA avancés", desc: "Systèmes autonomes capables de prendre des décisions" },
  { name: "Solutions sur mesure", desc: "IA développée selon vos besoins spécifiques" },
  { name: "IA générative", desc: "Création de contenu texte, image et code automatisée" },
  { name: "Assistants virtuels", desc: "Collaborateurs numériques disponibles en permanence" },
];

export default function AISection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ai"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #000820 50%, #000000 100%)",
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at right, rgba(0,102,255,0.08) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,204,255,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section badge */}
        <div className="text-center mb-16 reveal">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-bold uppercase tracking-widest"
            style={{
              background: "linear-gradient(135deg, rgba(0,102,255,0.2), rgba(0,204,255,0.1))",
              border: "1px solid rgba(0,204,255,0.3)",
              color: "#00ccff",
              fontFamily: "'Exo 2', sans-serif",
            }}
          >
            <Bot size={12} />
            Intelligence Artificielle
          </div>
          <h2 className="section-title text-4xl sm:text-5xl text-white mb-4">
            <span className="gradient-text-blue font-orbitron">X CREATOR AI</span>
          </h2>
          <p className="font-exo text-xl text-blue-300 font-medium mb-4">
            L'intelligence artificielle au service de vos projets
          </p>
          <p className="font-exo text-gray-400 max-w-2xl mx-auto">
            Notre assistant IA répond à vos visiteurs 24h/24 directement sur votre site. Nous créons des solutions IA avancées adaptées à chaque besoin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: AI Visual */}
          <div className="reveal">
            <div
              className="relative rounded-3xl p-8 sm:p-12 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(0,102,255,0.1), rgba(0,204,255,0.05))",
                border: "1px solid rgba(0,102,255,0.25)",
              }}
            >
              {/* Animated circle */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div
                    className="w-32 h-32 rounded-full flex items-center justify-center animate-pulse-glow"
                    style={{
                      background: "linear-gradient(135deg, #0066ff22, #00ccff11)",
                      border: "2px solid rgba(0,102,255,0.4)",
                    }}
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #0066ff33, #00ccff22)",
                        border: "2px solid rgba(0,204,255,0.4)",
                      }}
                    >
                      <Bot size={36} style={{ color: "#00ccff" }} />
                    </div>
                  </div>
                  {/* Orbiting dots */}
                  <div
                    className="absolute inset-0 animate-rotate"
                    style={{ transformOrigin: "center" }}
                  >
                    <div
                      className="absolute w-3 h-3 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1.5"
                      style={{ background: "#0066ff", boxShadow: "0 0 8px #0066ff" }}
                    />
                  </div>
                  <div
                    className="absolute inset-[-20px] animate-rotate"
                    style={{ transformOrigin: "center", animationDuration: "15s", animationDirection: "reverse" }}
                  >
                    <div
                      className="absolute w-2 h-2 rounded-full top-0 right-0"
                      style={{ background: "#00ccff", boxShadow: "0 0 6px #00ccff" }}
                    />
                  </div>
                </div>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-2 gap-3">
                {aiFeatures.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-sm text-gray-300 p-2 rounded-lg transition-colors duration-200 hover:bg-white/5"
                  >
                    <Icon size={14} style={{ color: "#0099ff", flexShrink: 0 }} />
                    <span className="font-exo">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Products */}
          <div className="reveal space-y-4">
            <h3 className="font-exo font-bold text-2xl text-white mb-6">
              Ce que nous créons
            </h3>
            {aiProducts.map((product, i) => (
              <div
                key={product.name}
                className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/3 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{
                    background: "rgba(0,102,255,0.15)",
                    border: "1px solid rgba(0,102,255,0.3)",
                  }}
                >
                  <CheckCircle size={16} style={{ color: "#0066ff" }} />
                </div>
                <div>
                  <div className="font-exo font-semibold text-white text-sm">{product.name}</div>
                  <div className="font-exo text-gray-500 text-sm mt-0.5">{product.desc}</div>
                </div>
              </div>
            ))}

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold mt-6"
              style={{ fontFamily: "'Exo 2', sans-serif" }}
            >
              <Bot size={18} />
              Créer votre IA maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
