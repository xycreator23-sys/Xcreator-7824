import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jean-Paul Mukendi",
    role: "CEO, StartupDRC",
    text: "X CREATOR a transformé notre vision en une plateforme numérique exceptionnelle. Leur équipe est professionnelle, réactive et livre des résultats dépassant nos attentes.",
    stars: 5,
    initials: "JM",
  },
  {
    name: "Marie-Claire Ntumba",
    role: "Fondatrice, BoutiqueOnline",
    text: "Grâce à X CREATOR, notre boutique en ligne génère maintenant des revenus constants. L'IA intégrée répond à nos clients automatiquement. Incroyable !",
    stars: 5,
    initials: "MN",
  },
  {
    name: "Emmanuel Kabila",
    role: "Directeur Marketing",
    text: "Le site créé par X CREATOR est rapide, moderne et professionnel. Nous avons vu notre trafic augmenter de 300% en 3 mois. Je recommande vivement !",
    stars: 5,
    initials: "EK",
  },
  {
    name: "Sandra Banza",
    role: "Entrepreneur",
    text: "Ils ont développé un chatbot IA pour notre service client. Maintenant nos clients reçoivent des réponses instantanées 24h/24. Révolutionnaire !",
    stars: 5,
    initials: "SB",
  },
  {
    name: "Patrick Lumumba",
    role: "Développeur Indépendant",
    text: "J'ai commandé un logo et une identité visuelle complète. Le résultat est époustouflant. Très professionnel, livré rapidement. Merci X CREATOR !",
    stars: 5,
    initials: "PL",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section
      ref={sectionRef}
      className="py-24 relative"
      style={{ background: "linear-gradient(180deg, #000000 0%, #040810 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 70% 30%, rgba(0,102,255,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Témoignages
          </div>
          <h2 className="section-title text-4xl sm:text-5xl text-white mb-4">
            Ce que disent
            <br />
            <span className="gradient-text">nos clients</span>
          </h2>
        </div>

        {/* Main testimonial */}
        <div
          className="reveal glass rounded-3xl p-8 sm:p-12 mb-8 relative"
          key={active}
          style={{ border: "1px solid rgba(0,102,255,0.2)" }}
        >
          <Quote
            size={48}
            className="absolute top-6 left-6 opacity-10"
            style={{ color: "#0066ff" }}
          />

          {/* Stars */}
          <div className="flex gap-1 mb-6 justify-center">
            {Array.from({ length: t.stars }).map((_, i) => (
              <Star key={i} size={18} fill="#0066ff" style={{ color: "#0066ff" }} />
            ))}
          </div>

          {/* Text */}
          <p className="font-exo text-gray-200 text-lg sm:text-xl leading-relaxed text-center mb-8 italic">
            "{t.text}"
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-orbitron font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #0066ff, #00ccff)",
              }}
            >
              {t.initials}
            </div>
            <div>
              <div className="font-exo font-semibold text-white">{t.name}</div>
              <div className="font-exo text-gray-500 text-sm">{t.role}</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === active ? "24px" : "8px",
                  height: "8px",
                  background: i === active
                    ? "linear-gradient(90deg, #0066ff, #00ccff)"
                    : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
