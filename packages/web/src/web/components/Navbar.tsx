import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "X CREATOR AI", href: "#ai" },
  { label: "Pourquoi nous", href: "#pourquoi" },
  { label: "À propos", href: "#apropos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-dark py-3 shadow-lg" : "py-5"
        }`}
        style={{ borderBottom: scrolled ? "1px solid rgba(0,102,255,0.15)" : "none" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNav("#accueil")}>
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #0066ff, #00ccff)",
                  boxShadow: "0 0 15px rgba(0,102,255,0.5)",
                }}
              >
                <span className="font-orbitron text-white font-black text-sm">X</span>
              </div>
              <span className="font-orbitron font-bold text-white text-lg hidden sm:block">
                <span className="gradient-text-blue">X</span>{" "}
                <span>CREATOR</span>
              </span>
            </div>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ background: "linear-gradient(90deg, #0066ff, #00ccff)" }}
                  />
                </button>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNav("#contact")}
                className="btn-primary hidden sm:flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold"
                style={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                <Zap size={14} />
                Commencer
              </button>
              <button
                className="lg:hidden text-white p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-nav lg:hidden">
          <div
            className="absolute top-5 left-4 flex items-center gap-2"
            onClick={() => { handleNav("#accueil"); setMobileOpen(false); }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #0066ff, #00ccff)" }}
            >
              <span className="font-orbitron text-white font-black text-sm">X</span>
            </div>
          </div>
          <button
            className="absolute top-5 right-4 text-white"
            onClick={() => setMobileOpen(false)}
          >
            <X size={24} />
          </button>
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="font-exo text-2xl font-bold text-white hover:text-blue-400 transition-colors"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { handleNav("#contact"); setMobileOpen(false); }}
            className="btn-primary px-8 py-3 rounded-xl text-base font-semibold mt-4"
          >
            Commencer un projet
          </button>
        </div>
      )}
    </>
  );
}
