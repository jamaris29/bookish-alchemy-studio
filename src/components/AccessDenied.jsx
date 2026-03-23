import React from 'react';
import { Lock } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const AccessDenied = () => {
  const { lang } = useAppContext();

  return (
    <div className="access-denied">
      <div className="access-denied-card">
        <div className="access-denied-icon">
          <Lock size={48} />
        </div>
        <h2>{lang === 'es' ? 'Contenido Exclusivo Premium' : 'Exclusive Premium Content'}</h2>
        <p>
          {lang === 'es'
            ? 'Esta sección contiene recursos exclusivos para miembros Premium. Desbloquea el paquete completo para acceder a plantillas, guiones de email, el Prompter Editorial de IA y mucho más.'
            : 'This section contains exclusive resources for Premium members. Unlock the full bundle to access templates, email scripts, the AI Editorial Prompter, and much more.'}
        </p>
        <a
          href="https://buy.stripe.com/8x27sMcmHcdu6IZ37R4c802"
          target="_blank"
          rel="noreferrer"
          className="btn-primary access-denied-btn"
        >
          {lang === 'es' ? '🔓 Obtener Acceso Premium — $27' : '🔓 Get Premium Access — $27'}
        </a>
      </div>
    </div>
  );
};

export default AccessDenied;
