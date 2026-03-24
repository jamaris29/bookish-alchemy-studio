import React from 'react';
import { useAppContext } from '../context/AppContext';

// ────────────────────────────────────────────────────────────────────────────
const SUCCESS_CENTER_URL = 'https://centro-de-control-de-xito-888949783352.us-west1.run.app/';
const PAYMENT_URL = 'https://buy.stripe.com/8x27sMcmHcdu6IZ37R4c802';
// ────────────────────────────────────────────────────────────────────────────

const copy = {
  es: {
    eyebrow: '\u2728 Herramienta Premium',
    title: '\u00a1Hora de hablar de n\u00fameros reales!',
    descPre: 'Conoce tu nueva herramienta favorita: El ',
    descBold: 'Centro de Control de \u00c9xito',
    descPost: '. Calcula tus ganancias exactas y fija tus metas de ventas y rese\u00f1as antes del gran d\u00eda.',
    cta: 'Abrir Centro de Control \ud83d\ude80',
    lockTitle: 'Centro de Control de \u00c9xito',
    lockBadge: 'Herramienta Premium',
    lockDescPre: 'Desbloquea la calculadora de regal\u00edas, el rastreador de ventas inteligente y la hoja de ruta completa por un pago \u00fanico de ',
    lockDescPost: '. Toma el control total de tu lanzamiento.',
    lockCta: 'Desbloquear Acceso Total por $27 \ud83d\udc8e',
  },
  en: {
    eyebrow: '\u2728 Premium Tool',
    title: 'Time to talk real numbers!',
    descPre: 'Meet your new favorite tool: The ',
    descBold: 'Success Control Center',
    descPost: '. Calculate your exact earnings and set your sales and review goals before the big day.',
    cta: 'Open Control Center \ud83d\ude80',
    lockTitle: 'Success Control Center',
    lockBadge: 'Premium Tool',
    lockDescPre: 'Unlock the royalty calculator, smart sales tracker, and the full roadmap for a one-time payment of ',
    lockDescPost: '. Take full control of your launch.',
    lockCta: 'Unlock Full Access for $27 \ud83d\udc8e',
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
          <p className="scb-description">
            {t.descPre}<strong>{t.descBold}</strong>{t.descPost}
          </p>
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
        <span className="scb-lock-icon">\ud83d\udd12</span>
        <h3 className="scb-title">
          {t.lockTitle} <span className="scb-badge">{t.lockBadge}</span>
        </h3>
        <p className="scb-description">
          {t.lockDescPre}<strong>$27</strong>{t.lockDescPost}
        </p>
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
