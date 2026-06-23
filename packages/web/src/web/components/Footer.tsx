import { Globe, MessageCircle, Facebook, Mail, Zap } from "lucide-react";

const footerLinks = {
  Services: [
    "Création de sites web",
    "Applications mobiles",
    "Intelligence artificielle",
    "Création de jeux",
    "Conception graphique",
    "Monétisation",
    "Sécurité & Maintenance",
  ],
  "X CREATOR AI": [
    "Chatbots intelligents",
    "IA WhatsApp",
    "Agents autonomes",
    "IA sur mesure",
    "Assistants virtuels",
  ],
  Entreprise: [
    "À propos",
    "Nos services",
    "Témoignages",
    "FAQ",
    "Contact",
  ],
};

const socials = [
  { icon: MessageCircle, href: "https://wa.me/243843774848", label: "WhatsApp" },
  { icon: Facebook, href: "https://www.facebook.com/share/1EiNFHr3w3/", label: "Facebook" },
  { icon: Mail, href: "mailto:xycreator23@gmail.com", label: "Email" },
  { icon: Globe, href: "#", label: "Site web" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #020510 100%)",
        borderTop: "1px solid rgba(0,102,255,0.1)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, #0066ff44, transparent)" }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #0066ff, #00ccff)",
                  boxShadow: "0 0 20px rgba(0,102,255,0.4)",
                }}
              >
                <span className="font-orbitron text-white font-black text-sm">X</span>
              </div>
              <div>
                <div className="font-orbitron font-black text-white text-xl">
                  <span className="gradient-text-blue">X</span> CREATOR
                </div>
                <div className="font-exo text-xs text-gray-500">Créer • Innover • Réaliser</div>
              </div>
            </div>

            <p className="font-exo text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Votre partenaire de confiance pour toutes vos solutions numériques. Du site web à l'intelligence artificielle, nous transformons vos idées en réalités.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:border-blue-500/30 transition-all duration-200"
                  title={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="font-exo font-bold text-white text-sm uppercase tracking-wider mb-4"
                style={{ color: "#3399ff" }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo("#services")}
                      className="font-exo text-gray-500 text-sm hover:text-gray-200 transition-colors duration-200 text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(0,102,255,0.08)" }}
        >
          <p className="font-exo text-gray-600 text-sm text-center sm:text-left">
            © 2026 X CREATOR. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2">
            <Zap size={12} style={{ color: "#0066ff" }} />
            <span className="font-exo text-gray-600 text-xs">
              Votre idée, notre création.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
