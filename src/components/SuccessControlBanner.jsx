import React from 'react';
import { useAppContext } from '../context/AppContext';

const SUCCESS_CENTER_URL = 'https://centro-de-control-de-xito-888949783352.us-west1.run.app/';
const PAYMENT_URL = 'https://buy.stripe.com/8x27sMcmHcdu6IZ37R4c802';

const SuccessControlBanner = () => {
  const { isPremium, lang } = useAppContext();

  if (isPremium) {
    return (
      <div className="scb-banner scb-banner--premium">
        <div className="scb-glow-ring" />
        <div className="scb-content">
          <span className="scb-eyebrow">✨ Herramienta Premium</span>
          <h3 className="scb-title">¡Hora de hablar de números reales!</h3>
          <p className="scb-description">
            Conoce tu nueva herramienta favorita: El <strong>Centro de Control de Éxito</strong>.
            Calcula tus ganancias exactas y fija tus metas de ventas y reseñas antes del gran día.
          </p>
          <a
            href={SUCCESS_CENTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="scb-btn scb-btn--premium"
          >
            Abrir Centro de Control 🚀
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
        <h3 className="scb-title">Centro de Control de Éxito <span className="scb-badge">Herramienta Premium</span></h3>
        <p className="scb-description">
          Desbloquea la calculadora de regalías, el rastreador de ventas inteligente y la hoja de ruta
          completa por un pago único de <strong>$27</strong>. Toma el control total de tu lanzamiento.
        </p>
        <a
          href={PAYMENT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="scb-btn scb-btn--locked"
        >
          Desbloquear Acceso Total por $27 💎
        </a>
      </div>
    </div>
  );
};

export default SuccessControlBanner;
