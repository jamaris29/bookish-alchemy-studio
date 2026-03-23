# The Bestseller Blueprint — Web App

**Bookish Alchemy AI Studio** | React 19 + Vite

## 🚀 Sobre el Proyecto

The Bestseller Blueprint es una web app de guía editorial para escritores independientes. Permite a los usuarios seguir un roadmap de 10 semanas personalizado para lanzar su libro (digital, físico o ambos) de manera profesional.

## ✨ Características

- **Onboarding de formato** — Elige entre Digital, Físico o Ambos
- **Roadmap de 10 semanas** — Timeline interactivo con progreso visual
- **Sistema de tareas** — Checkboxes persistentes con localStorage
- **Modelo Freemium** — Semanas 10 y 9 gratuitas; semanas 8→1 con paywall de $27
- **Modal de urgencia** — Countdown timer de 20 minutos con integración Stripe
- **Dashboard de recursos** — Incluye plantillas A+, guiones de email PR y Prompter IA
- **Exportar a PDF** — Descarga el plan completo via html2pdf.js
- **Confetti al completar una semana** — canvas-confetti
- **Tema claro/oscuro** — Persistido en localStorage
- **Bilingüe (ES/EN)** — Interfaz completa en español e inglés

## 🛠️ Stack Tecnológico

| Tecnología | Versión |
|---|---|
| React | 19.x |
| Vite | 8.x |
| React Router DOM | 7.x |
| Lucide React | 0.577+ |
| canvas-confetti | 1.9+ |
| html2pdf.js | 0.14+ |

## 📂 Estructura

```
bookish-alchemy-studio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Onboarding.jsx
│   │   ├── Roadmap.jsx
│   │   ├── ResourcesDashboard.jsx
│   │   ├── EmailScripts.jsx
│   │   ├── TaskAccordion.jsx
│   │   ├── SuccessControlBanner.jsx
│   │   └── AccessDenied.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── data/
│   │   └── roadmapData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── logo.png
├── index.html
├── vite.config.js
└── vercel.json
```

## 🔧 Desarrollo Local

```bash
npm install
npm run dev
```

## 🔑 Integraciones

- **Stripe** — Pago único de $27 para acceso Premium
- **Google Gemini** — Prompter Editorial personalizado
- **Centro de Control de Éxito** — Calculadora de regalías (Google Cloud Run)

## 📦 Deploy

Preconfigurado para **Vercel** con SPA routing (`vercel.json`).
