import React from 'react';
import { Book, Tablet, LayoutList } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Onboarding = () => {
  const { lang, setFormat } = useAppContext();
  const texts = {
    es: { title: '¿En qué formato lanzarás tu libro?', subtitle: 'Personaliza tu mapa de 10 semanas de acuerdo al tipo de publicación', digital: 'Solo Digital', physical: 'Solo Físico', both: 'Ambos' },
    en: { title: 'In what format will you publish your book?', subtitle: 'Customize your 10-week roadmap according to your publication type', digital: 'Digital Only', physical: 'Physical Only', both: 'Both' }
  };
  const t = texts[lang];
  return (
    <div className="onboarding-container">
      <div className="onboarding-content">
        <h2 className="title">{t.title}</h2>
        <p className="subtitle">{t.subtitle}</p>
        <div className="options-grid">
          <button className="option-card" onClick={() => setFormat('Digital')}><Tablet size={48} className="icon-primary" /><span className="option-label">{t.digital}</span></button>
          <button className="option-card" onClick={() => setFormat('Físico')}><Book size={48} className="icon-primary" /><span className="option-label">{t.physical}</span></button>
          <button className="option-card" onClick={() => setFormat('Ambos')}><LayoutList size={48} className="icon-primary" /><span className="option-label">{t.both}</span></button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
