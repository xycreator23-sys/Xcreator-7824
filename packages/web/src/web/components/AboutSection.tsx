import { useEffect, useRef } from "react";
import { Target, Lightbulb, TrendingUp, Globe } from "lucide-react";

const pillars = [
  { icon: Target, label: "Créer", desc: "Des solutions numériques innovantes" },
  { icon: Lightbulb, label: "Innover", desc: "Avec les dernières technologies" },
  { icon: TrendingUp, label: "Réaliser", desc: "Vos ambitions les plus grandes" },
  { icon: Globe, label: "Accompagner", desc: "À chaque étape de votre croissance" },
];

export default function AboutSection() {
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
      id="apropos"
      ref={sectionRef}
      className="py-24 relative"
      style={{
        background: "linear-gradient(180deg, #03050f 0%, #000000 100%)",
      }}
    >
      <div
        className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at right, rgba(0,204,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-medium uppercase tracking-widest reveal"
              style={{
                background: "rgba(0,102,255,0.1)",
                border: "1px solid rgba(0,102,255,0.2)",
                color: "#3399ff",
                fontFamily: "'Exo 2', sans-serif",
              }}
            >
              À propos de nous
            </div>

            <h2 className="section-title text-4xl sm:text-5xl text-white mb-6 reveal">
              Qui est
              <br />
              <span className="gradient-text">X CREATOR ?</span>
            </h2>

            <p className="font-exo text-gray-300 text-lg leading-relaxed mb-6 reveal">
              X CREATOR est une entreprise technologique spécialisée dans la création de solutions numériques innovantes.
            </p>

            <p className="font-exo text-gray-400 leading-relaxed mb-6 reveal">
              Nous développons des sites web, des applications mobiles, des jeux, des identités visuelles et des intelligences artificielles avancées pour accompagner les particuliers, les entreprises et les organisations dans leur transformation numérique.
            </p>

            <p
              className="font-exo font-semibold text-blue-300 text-lg leading-relaxed reveal"
              style={{ borderLeft: "3px solid #0066ff", paddingLeft: "1rem" }}
            >
              Notre mission est de transformer les idées en projets modernes, performants et rentables.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-2 gap-5">
            {pillars.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                className="card-hover glass rounded-2xl p-6 text-center group reveal"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,102,255,0.2), rgba(0,204,255,0.1))",
                    border: "1px solid rgba(0,102,255,0.3)",
                  }}
                >
                  <Icon size={24} style={{ color: "#0099ff" }} />
                </div>
                <div className="font-orbitron font-bold text-white text-xl mb-2">{label}</div>
                <div className="font-exo text-gray-500 text-sm">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
