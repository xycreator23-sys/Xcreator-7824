# X CREATOR — Design System

## Brand Identity
- **Nom** : X CREATOR
- **Slogan** : "Votre idée, notre création."
- **Sous-slogan** : "Créer • Innover • Réaliser"
- **Positionnement** : Studio numérique + Entreprise IA, style OpenAI/Anthropic/Google AI
- **Langue** : Français

## Couleurs
```css
--color-bg: #000000
--color-surface: #0a0a0f
--color-surface-2: #0d0d1a
--color-electric: #0066ff      /* bleu électrique primaire */
--color-electric-light: #3399ff
--color-electric-glow: #0044cc
--color-accent: #00ccff        /* cyan accent */
--color-white: #ffffff
--color-gray-100: #f0f0f0
--color-gray-400: #9ca3af
--color-gray-600: #4b5563
--color-border: rgba(0, 102, 255, 0.2)
--color-glow: rgba(0, 102, 255, 0.15)
```

## Typographie
- **Display / Logo** : `Orbitron` (Google Fonts) — futuriste, tech
- **Titres** : `Exo 2` (Google Fonts) — moderne, lisible
- **Corps** : `Inter` ou `Exo 2` — propre, professionnel
- **Tailles** : hero 5xl-7xl, section titles 3xl-4xl, body 16-18px
- **Poids** : 400 (body), 600 (medium), 700-900 (display)

## Effets Visuels
- Glassmorphism : `backdrop-blur + bg-white/5 + border border-white/10`
- Glow bleu : `box-shadow: 0 0 30px rgba(0, 102, 255, 0.4)`
- Particules flottantes : canvas ou CSS pseudo-elements
- Gradient mesh : `radial-gradient(circle at top right, #0022ff22, transparent)`
- Scan line subtil en background
- Hover : scale + glow + border couleur

## Layout
- Navigation sticky, translucide avec blur
- Sections full-width avec padding 6rem vertical
- Grid responsive : 1 col mobile, 2-3 col tablette, 4 col desktop
- Max-width container : 1200px centré

## Animations (Framer Motion / CSS)
- Entrée : fade up + stagger 0.1s par élément
- Hover cards : scale(1.03) + glow border
- Hero : text reveal + glow pulse
- Scroll : intersection observer reveals
- Chatbot : slide in depuis bas droite

## Composants clés
- NavBar : logo, liens, bouton CTA bleu
- HeroSection : titre géant, sous-titre, 3 boutons, animation particles
- ServicesGrid : 8 services en cartes glassmorphism avec icônes
- AISection : section dédiée X CREATOR AI avec features
- WhyUs : 8 avantages avec checkmarks bleus
- Testimonials : carousel d'avis
- FAQ : accordion
- ContactForm : nom, email, téléphone, type projet, description + boutons WhatsApp/Facebook/Email
- ChatBot : widget flottant simulé
- Footer : logo, liens, copyright

## Mobile-First
- Breakpoints : sm(640) md(768) lg(1024) xl(1280)
- Navigation : hamburger menu sur mobile
- Cards : scroll horizontal ou stack vertical
