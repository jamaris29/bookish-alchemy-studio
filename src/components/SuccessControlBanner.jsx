import React from 'react';
import { useAppContext } from '../context/AppContext';

// ────────────────────────────────────────────────────────────────────────────
const SUCCESS_CENTER_URL = 'https://centro-de-control-de-xito-888949783352.us-west1.run.app/';
const PAYMENT_URL = 'https://buy.stripe.com/8x27sMcmHcdu6IZ37R4c802';
// ────────────────────────────────────────────────────────────────────────────

const copy = {
  es: {
    eyebrow: '✨ Herramienta Premium',
    title: '¡Hora de hablar de números reales!',
    description: (
      <>
        Conoce tu nueva herramienta favorita: El{' '}
        <strong>Centro de Control de Éxito</strong>.
        Calcula tus ganancias exactas y fija tus metas de ventas y reseñas antes del gran día.
      </>
    ),
    cta: 'Abrir Centro de Control 🚀',
    lockTitle: 'Centro de Control de Éxito',
    lockBadge: 'Herramienta Premium',
    lockDesc: (
      <>
        Desbloquea la calculadora de regalías, el rastreador de ventas inteligente y la hoja de ruta
        completa por un pago único de <strong>$27</strong>. Toma el control total de tu lanzamiento.
      </>
    ),
    lockCta: 'Desbloquear Acceso Total por $27 💎',
  },
  en: {
    eyebrow: '✨ Premium Tool',
    title: "Time to talk real numbers!",
    description: (
      <>
        Meet your new favorite tool: The{' '}
        <strong>Success Control Center</strong>.
        Calculate your exact earnings and set your sales and review goals before the big day.
      </>
    ),
    cta: 'Open Control Center 🚀',
    lockTitle: 'Success Control Center',
    lockBadge: 'Premium Tool',
    lockDesc: (
      <>
        Unlock the royalty calculator, smart sales tracker, and the full roadmap for a
        one-time payment of <strong>$27</strong>. Take full control of your launch.
      </>
    ),
    lockCta: 'Unlock Full Access for $27 💎',
  },
};

const SuccessControlBanner = () => {
  const { isPremium, lang } = useAppContext();
  const t = copy[lang] || copy.es;

  if (isPremium) {
    return (
      <div className="scb-banner scb-banner--premium">
        <div className="scb-glow-ring" />
        <div className="scb-content">
          <span className="scb-eyebrow">{t.eyebrow}</span>
          <h3 className="scb-title">{t.title}</h3>
          <p className="scb-description">{t.description}</p>
          <a
            href={SUCCESS_CENTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="scb-btn scb-btn--premium"
          >
            {t.cta}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="scb-banner scb-banner--locked">
      <div className="scb-blur-overlay" />
      <div className="scb-content scb-content--locked">
        <span className="scb-lock-icon">🔒</span>
        <h3 className="scb-title">
          {t.lockTitle} <span className="scb-badge">{t.lockBadge}</span>
        </h3>
        <p className="scb-description">{t.lockDesc}</p>
        <a
          href={PAYMENT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="scb-btn scb-btn--locked"
        >
          {t.lockCta}
        </a>
      </div>
    </div>
  );
};

export default SuccessControlBanner;
