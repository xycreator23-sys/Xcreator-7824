import { useState, useEffect, useRef } from "react";
import { Send, MessageCircle, Facebook, Mail, Phone, CheckCircle } from "lucide-react";

const projectTypes = [
  "Site web vitrine",
  "E-commerce",
  "Application mobile",
  "Intelligence artificielle",
  "Jeu vidéo",
  "Conception graphique",
  "Monétisation",
  "Sécurité & Maintenance",
  "Autre",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
  };

  const inputClass = `
    w-full bg-white/3 border border-blue-900/30 rounded-xl px-4 py-3.5 text-white
    font-exo text-sm placeholder-gray-600
    focus:outline-none focus:border-blue-500/50 focus:bg-white/5
    transition-all duration-200
  `;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #030510 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none grid-pattern opacity-20"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 60%, rgba(0,102,255,0.07) 0%, transparent 60%)",
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
            Contact
          </div>
          <h2 className="section-title text-4xl sm:text-5xl text-white mb-4">
            Démarrons votre
            <br />
            <span className="gradient-text">projet ensemble</span>
          </h2>
          <p className="font-exo text-gray-400 max-w-xl mx-auto">
            Parlez-nous de votre idée. Nous vous répondons dans les 24 heures avec un plan d'action personnalisé.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 reveal">
            {sent ? (
              <div
                className="glass rounded-3xl p-12 text-center flex flex-col items-center gap-6"
                style={{ border: "1px solid rgba(0,102,255,0.25)" }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #0066ff22, #00ccff11)", border: "2px solid #0066ff" }}
                >
                  <CheckCircle size={36} style={{ color: "#00ccff" }} />
                </div>
                <h3 className="font-exo font-bold text-2xl text-white">Message envoyé !</h3>
                <p className="font-exo text-gray-400">
                  Merci {form.name}. Nous vous contacterons sous 24h pour discuter de votre projet.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-secondary px-6 py-3 rounded-xl font-semibold"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-3xl p-8 space-y-5"
                style={{ border: "1px solid rgba(0,102,255,0.15)" }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-exo text-xs text-gray-400 uppercase tracking-wider mb-2 block">
                      Nom complet *
                    </label>
                    <input
                      className={inputClass}
                      placeholder="Jean Dupont"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-exo text-xs text-gray-400 uppercase tracking-wider mb-2 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      className={inputClass}
                      placeholder="jean@exemple.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-exo text-xs text-gray-400 uppercase tracking-wider mb-2 block">
                      Téléphone / WhatsApp
                    </label>
                    <input
                      className={inputClass}
                      placeholder="+243 843 774 848"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-exo text-xs text-gray-400 uppercase tracking-wider mb-2 block">
                      Type de projet *
                    </label>
                    <select
                      className={inputClass}
                      required
                      value={form.project}
                      onChange={(e) => setForm({ ...form, project: e.target.value })}
                      style={{ appearance: "none" }}
                    >
                      <option value="" disabled className="bg-gray-900">Sélectionner...</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-gray-900">{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-exo text-xs text-gray-400 uppercase tracking-wider mb-2 block">
                    Description du projet *
                  </label>
                  <textarea
                    className={inputClass}
                    style={{ minHeight: "120px", resize: "vertical" }}
                    placeholder="Décrivez votre projet, vos objectifs et vos besoins spécifiques..."
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold disabled:opacity-50"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Envoyer ma demande
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6 reveal">
            <div>
              <h3 className="font-exo font-bold text-xl text-white mb-6">Nous contacter</h3>
            </div>

            {[
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "+243 843 774 848",
                href: "https://wa.me/243843774848",
                color: "#25D366",
                bg: "rgba(37,211,102,0.1)",
                border: "rgba(37,211,102,0.25)",
              },
              {
                icon: Facebook,
                label: "Facebook",
                value: "X CREATOR",
                href: "https://www.facebook.com/share/1EiNFHr3w3/",
                color: "#1877F2",
                bg: "rgba(24,119,242,0.1)",
                border: "rgba(24,119,242,0.25)",
              },
              {
                icon: Mail,
                label: "Email",
                value: "xycreator23@gmail.com",
                href: "mailto:xycreator23@gmail.com",
                color: "#0066ff",
                bg: "rgba(0,102,255,0.1)",
                border: "rgba(0,102,255,0.25)",
              },
              {
                icon: Phone,
                label: "Téléphone",
                value: "+243 843 774 848",
                href: "tel:+243843774848",
                color: "#3399ff",
                bg: "rgba(0,102,255,0.08)",
                border: "rgba(0,102,255,0.2)",
              },
            ].map(({ icon: Icon, label, value, href, color, bg, border }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] group"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: `${color}22`, border: `1px solid ${color}44` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <div className="font-exo text-xs text-gray-500 uppercase tracking-wider">{label}</div>
                  <div className="font-exo font-semibold text-white text-sm mt-0.5">{value}</div>
                </div>
              </a>
            ))}

            {/* Hours */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: "rgba(0,102,255,0.06)", border: "1px solid rgba(0,102,255,0.15)" }}
            >
              <div className="font-exo font-semibold text-white text-sm mb-3">Disponibilité</div>
              <div className="space-y-2">
                {[
                  { day: "Lun - Ven", hours: "8h00 - 20h00" },
                  { day: "Samedi", hours: "9h00 - 17h00" },
                  { day: "IA Assistant", hours: "24h/24 — 7j/7" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between font-exo text-sm">
                    <span className="text-gray-500">{day}</span>
                    <span className="text-gray-300">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
