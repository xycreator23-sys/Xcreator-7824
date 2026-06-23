import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Combien coûte un site web ?",
    a: "Le prix d'un site web dépend de sa complexité et des fonctionnalités requises. Un site vitrine commence à partir de tarifs très accessibles. Contactez-nous pour un devis gratuit et personnalisé selon votre projet.",
  },
  {
    q: "Combien de temps prend un projet ?",
    a: "Un site vitrine simple est livré en 3 à 7 jours. Une application mobile ou une plateforme complexe peut prendre 2 à 6 semaines. Nous respectons toujours les délais convenus et vous tenons informé à chaque étape.",
  },
  {
    q: "Proposez-vous la maintenance ?",
    a: "Oui, absolument ! Nous proposons des contrats de maintenance mensuelle incluant : mises à jour de sécurité, sauvegardes automatiques, corrections de bugs et support technique prioritaire.",
  },
  {
    q: "Peut-on monétiser une application ou un site ?",
    a: "Oui ! Nous intégrons des systèmes de monétisation : publicités (AdSense, etc.), abonnements, vente de produits numériques, paiements en ligne (Mobile Money, carte bancaire). Nous vous aidons à maximiser vos revenus.",
  },
  {
    q: "Créez-vous des intelligences artificielles ?",
    a: "C'est l'une de nos spécialités ! Nous créons des chatbots intelligents, des assistants IA pour WhatsApp/Telegram, des agents autonomes, des systèmes de génération de contenu et des solutions IA entièrement sur mesure.",
  },
  {
    q: "Travaillez-vous avec des clients à distance ?",
    a: "Oui, nous travaillons avec des clients partout dans le monde. Nous communiquons via WhatsApp, email et appels vidéo. La distance n'est pas un obstacle pour créer des solutions numériques d'excellence.",
  },
  {
    q: "Quelles technologies utilisez-vous ?",
    a: "Nous utilisons les technologies les plus modernes : React, Next.js, Flutter pour le mobile, Python et Node.js pour le backend, et les derniers modèles d'IA (GPT, Claude, Gemini) pour nos solutions intelligentes.",
  },
  {
    q: "Y a-t-il une garantie sur les projets ?",
    a: "Oui ! Nous offrons une garantie satisfaction. Si le résultat ne correspond pas à ce qui a été convenu, nous faisons les corrections nécessaires sans frais supplémentaires. Votre satisfaction est notre priorité absolue.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="glass rounded-xl overflow-hidden transition-all duration-300"
      style={{
        border: open ? "1px solid rgba(0,102,255,0.35)" : "1px solid rgba(0,102,255,0.12)",
      }}
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/2 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
            style={{
              background: open ? "linear-gradient(135deg, #0066ff, #00ccff)" : "rgba(0,102,255,0.15)",
              color: open ? "white" : "#0066ff",
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            {index + 1}
          </span>
          <span className="font-exo font-semibold text-white text-sm sm:text-base">{q}</span>
        </div>
        <ChevronDown
          size={18}
          className="flex-shrink-0 text-gray-400 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: open ? "#0066ff" : undefined }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "200px" : "0px" }}
      >
        <p className="font-exo text-gray-400 text-sm leading-relaxed px-5 pb-5 pt-0">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
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
      id="faq"
      ref={sectionRef}
      className="py-24 relative"
      style={{ background: "linear-gradient(180deg, #040810 0%, #000000 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 50%, rgba(0,102,255,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            FAQ
          </div>
          <h2 className="section-title text-4xl sm:text-5xl text-white mb-4">
            Questions
            <br />
            <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="font-exo text-gray-400">
            Vous avez des questions ? Nous avons les réponses.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="reveal">
              <FAQItem q={faq.q} a={faq.a} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
