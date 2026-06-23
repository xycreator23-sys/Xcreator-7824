import { useEffect, useRef, useState } from "react";
import { Zap, MessageCircle, Bot, ArrowRight, ChevronDown } from "lucide-react";

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number; color: string }[] = [];
    const colors = ["#0066ff", "#00ccff", "#3399ff", "#0044cc"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "#0066ff";
            ctx.globalAlpha = (1 - dist / 120) * 0.2;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 60% 20%, rgba(0,102,255,0.12) 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(0,204,255,0.08) 0%, transparent 50%), #000000",
      }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Particles */}
      <Particles />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,204,255,0.1) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{
            background: "rgba(0,102,255,0.1)",
            border: "1px solid rgba(0,102,255,0.3)",
            transitionDelay: "0s",
            fontFamily: "'Exo 2', sans-serif",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-blue-300">Entreprise Technologique & IA</span>
        </div>

        {/* Logo text */}
        <div
          className={`mb-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "0.1s" }}
        >
          <h1 className="font-orbitron font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-glow">
            <span className="gradient-text">X</span>
            <span className="text-white"> CREATOR</span>
          </h1>
        </div>

        {/* Slogan */}
        <div
          className={`mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <p
            className="font-exo text-xl sm:text-2xl font-light text-blue-300 tracking-widest uppercase"
          >
            Votre idée, notre création.
          </p>
        </div>

        {/* Main title */}
        <div
          className={`mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <h2 className="font-exo font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Transformons vos idées
            <br />
            <span className="gradient-text">en réalités numériques</span>
          </h2>
        </div>

        {/* Description */}
        <div
          className={`mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "0.4s" }}
        >
          <p className="font-exo text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Nous accompagnons particuliers, entreprises et entrepreneurs dans la création de solutions numériques modernes, sécurisées et rentables.
            <br />
            <span className="text-blue-300 font-medium">
              Nous développons également des intelligences artificielles avancées, des assistants virtuels et des systèmes d'automatisation.
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "0.5s" }}
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-primary flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold w-full sm:w-auto justify-center"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            <Zap size={18} />
            Commencer un projet
            <ArrowRight size={16} />
          </button>
          <a
            href="https://wa.me/243843774848"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold w-full sm:w-auto justify-center"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <button
            onClick={() => scrollTo("#ai")}
            className="flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold w-full sm:w-auto justify-center transition-all duration-300 hover:bg-white/5"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              border: "1px solid rgba(0,204,255,0.3)",
              color: "#00ccff",
            }}
          >
            <Bot size={18} />
            Découvrir X CREATOR AI
          </button>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-6 max-w-lg mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "0.6s" }}
        >
          {[
            { value: "100+", label: "Projets" },
            { value: "24/7", label: "Support IA" },
            { value: "100%", label: "Satisfaction" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-orbitron font-black text-2xl gradient-text-blue">{s.value}</div>
              <div className="font-exo text-xs text-gray-500 mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors"
      >
        <span className="font-exo text-xs uppercase tracking-widest">Défiler</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
