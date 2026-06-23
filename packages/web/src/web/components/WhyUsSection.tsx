import { useEffect, useRef } from "react";
import { CheckCircle, Award, Settings, Shield, Headphones, Clock, Tag, Star } from "lucide-react";

const reasons = [
  { icon: Award, title: "Travail professionnel", desc: "Chaque projet est réalisé avec les plus hauts standards de qualité." },
  { icon: Settings, title: "Solutions sur mesure", desc: "Des solutions adaptées précisément à vos besoins et objectifs." },
  { icon: Shield, title: "Sites rapides et sécurisés", desc: "Performance optimale et sécurité avancée pour tous vos projets." },
  { icon: CheckCircle, title: "Développement IA avancé", desc: "Intelligence artificielle de pointe intégrée dans vos solutions." },
  { icon: Headphones, title: "Accompagnement complet", desc: "Nous vous guidons à chaque étape de votre transformation numérique." },
  { icon: Clock, title: "Livraison rapide", desc: "Respect des délais avec une qualité constante et irréprochable." },
  { icon: Tag, title: "Prix accessible", desc: "Des tarifs compétitifs sans compromis sur la qualité du travail." },
  { icon: Star, title: "Garantie satisfaction", desc: "Votre satisfaction est notre priorité absolue, toujours." },
];

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 70);
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
      id="pourquoi"
      ref={sectionRef}
      className="py-24 relative"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #03050f 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, rgba(0,102,255,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-medium uppercase tracking-widest"
            style={{
              background: "rgba(0,102,255,0.1)",
              border: "1px solid rgba(0,102,255,0.2)",
              color: "#3399ff",
              fontFamily: "'Exo 2', sans-serif",
            }}
          >
            Nos Avantages
          </div>
          <h2 className="section-title text-4xl sm:text-5xl text-white mb-4">
            Pourquoi choisir
            <br />
            <span className="gradient-text">X CREATOR ?</span>
          </h2>
          <p className="font-exo text-gray-400 text-lg max-w-xl mx-auto">
            8 raisons qui font de nous le partenaire idéal pour votre transformation numérique.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="card-hover glass rounded-2xl p-6 group reveal"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: "rgba(0,102,255,0.12)",
                    border: "1px solid rgba(0,102,255,0.25)",
                  }}
                >
                  <Icon size={18} style={{ color: "#0066ff" }} />
                </div>
                <div>
                  <h3 className="font-exo font-bold text-white text-sm mb-1.5">{title}</h3>
                  <p className="font-exo text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div
          className="reveal mt-16 rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(0,102,255,0.12), rgba(0,204,255,0.06))",
            border: "1px solid rgba(0,102,255,0.2)",
          }}
        >
          <h3 className="font-exo font-bold text-2xl text-white mb-3">
            Prêt à concrétiser votre projet ?
          </h3>
          <p className="font-exo text-gray-400 mb-6">
            Contactez-nous maintenant et obtenez un devis gratuit sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary px-8 py-3 rounded-xl font-semibold"
              style={{ fontFamily: "'Exo 2', sans-serif" }}
            >
              Démarrer mon projet
            </button>
            <a
              href="https://wa.me/243843774848"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-3 rounded-xl font-semibold"
              style={{ fontFamily: "'Exo 2', sans-serif" }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
