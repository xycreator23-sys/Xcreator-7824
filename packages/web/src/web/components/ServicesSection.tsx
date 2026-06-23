import { useEffect, useRef } from "react";
import {
  Globe, Smartphone, Brain, Gamepad2, Palette, DollarSign, Shield, Cpu
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Création de Sites Web",
    color: "#0066ff",
    items: ["Sites vitrines", "Commerce électronique", "Blogs", "Plateformes professionnelles sécurisées"],
  },
  {
    icon: Smartphone,
    title: "Développement d'Applications",
    color: "#0099ff",
    items: ["Android", "iOS", "Applications Web progressives"],
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    color: "#00ccff",
    items: ["Chatbots intelligents", "IA WhatsApp & Telegram", "Génération de contenu", "Automatisation des tâches"],
  },
  {
    icon: Cpu,
    title: "X CREATOR AI",
    color: "#3399ff",
    items: ["Assistant client 24h/24", "Réponses automatiques", "Assistance commerciale", "Multilingue"],
    featured: true,
  },
  {
    icon: Gamepad2,
    title: "Création de Jeux",
    color: "#0066ff",
    items: ["Jeux 2D modernes", "Jeux 3D immersifs", "Jeux mobiles", "Web games"],
  },
  {
    icon: Palette,
    title: "Conception Graphique",
    color: "#0099ff",
    items: ["Logos & identité visuelle", "Affiches & flyers", "Cartes de visite", "Branding complet"],
  },
  {
    icon: DollarSign,
    title: "Monétisation",
    color: "#00ccff",
    items: ["Publicités intégrées", "Systèmes d'abonnement", "Vente de produits", "Paiements en ligne"],
  },
  {
    icon: Shield,
    title: "Sécurité & Maintenance",
    color: "#3399ff",
    items: ["Protection des données", "Sauvegardes automatiques", "Mises à jour", "Support technique"],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;
  return (
    <div
      className="card-hover glass rounded-2xl p-6 relative overflow-hidden group cursor-default"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at top left, ${service.color}18, transparent 70%)`,
        }}
      />

      {/* Featured badge */}
      {service.featured && (
        <div
          className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-bold"
          style={{
            background: "linear-gradient(135deg, #0066ff, #00ccff)",
            fontFamily: "'Exo 2', sans-serif",
          }}
        >
          IA
        </div>
      )}

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${service.color}22, ${service.color}11)`,
          border: `1px solid ${service.color}33`,
        }}
      >
        <Icon size={22} style={{ color: service.color }} />
      </div>

      {/* Title */}
      <h3
        className="font-exo font-bold text-white text-lg mb-3"
      >
        {service.title}
      </h3>

      {/* Items */}
      <ul className="space-y-1.5">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: service.color }}
            />
            {item}
          </li>
        ))}
      </ul>

      {/* Bottom border accent */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
        style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
      />
    </div>
  );
}

export default function ServicesSection() {
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
      id="services"
      ref={sectionRef}
      className="py-24 relative"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #050510 50%, #000000 100%)",
      }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,102,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
            Nos Services
          </div>
          <h2 className="section-title text-4xl sm:text-5xl text-white mb-4">
            Tout ce dont vous avez
            <br />
            <span className="gradient-text">besoin pour réussir</span>
          </h2>
          <p className="font-exo text-gray-400 text-lg max-w-2xl mx-auto">
            De la conception à la mise en ligne, nous couvrons tous les aspects du numérique avec expertise et passion.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div key={service.title} className="reveal">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
