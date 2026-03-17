import React, { useState } from 'react';
import { Mail, Sparkles, FileDown, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import AccessDenied from './AccessDenied';
import EmailScripts from './EmailScripts';

const ResourcesDashboard = () => {
  const { lang, isPremium } = useAppContext();
  const [showEmailScripts, setShowEmailScripts] = useState(false);
  const navigate = useNavigate();

  if (!isPremium) {
    return <AccessDenied />;
  }

  if (showEmailScripts) {
    return <EmailScripts onBack={() => setShowEmailScripts(false)} />;
  }

  const resources = [
    {
      id: 'emails',
      icon: <Mail size={32} />,
      title: { es: 'Pack de Plantillas PR', en: 'PR Templates Pack' },
      subtitle: { es: 'Emails profesionales', en: 'Professional Emails' },
      description: {
        es: '7 guiones de email probados para contactar lectores beta, influencers y hacer seguimiento sin sonar molesto.',
        en: '7 proven email scripts to contact beta readers, influencers, and follow up without sounding annoying.'
      },
      btnText: { es: 'Explorar Guiones', en: 'Explore Scripts' },
      action: () => setShowEmailScripts(true)
    },
    {
      id: 'prompter',
      icon: <Sparkles size={32} />,
      title: { es: 'Prompter Editorial', en: 'Editorial Prompter' },
      subtitle: { es: 'IA Gemini personalizada', en: 'Custom Gemini AI' },
      description: {
        es: 'Un bot de IA entrenado para generar tu psicografía de lector, tropos principales y estrategia de contenido automáticamente.',
        en: 'An AI bot trained to generate your reader psychographics, main tropes, and content strategy automatically.'
      },
      btnText: { es: 'Abrir Prompter IA', en: 'Open AI Prompter' },
      action: () => window.open('https://gemini.google.com/gem/d3e013f0a080', '_blank')
    },
    {
      id: 'checklist',
      icon: <FileDown size={32} />,
      title: { es: 'Checklist Imprimible', en: 'Printable Checklist' },
      subtitle: { es: 'Descarga en PDF', en: 'PDF Download' },
      description: {
        es: 'Tu mapa de 10 semanas en formato PDF listo para imprimir. Márcalo con pluma, pégalo en tu pared y conquista tu lanzamiento.',
        en: 'Your 10-week roadmap in printable PDF format. Mark it with a pen, stick it on your wall, and conquer your launch.'
      },
      btnText: { es: 'Descargar PDF', en: 'Download PDF' },
      action: () => {
        navigate('/');
        setTimeout(() => {
          const btn = document.querySelector('.btn-primary[style*="marginTop"]');
          if (btn) btn.click();
        }, 500);
      }
    }
  ];

  return (
    <div className="resources-dashboard">
      <div className="resources-header">
        <button className="btn-back" onClick={() => navigate('/')}>
          <ArrowLeft size={18} />
          {lang === 'es' ? 'Volver al Mapa' : 'Back to Roadmap'}
        </button>
        <h2>{lang === 'es' ? 'Tu Arsenal Premium' : 'Your Premium Arsenal'}</h2>
        <p className="resources-subtitle">
          {lang === 'es'
            ? 'Herramientas exclusivas diseñadas para ahorrarte horas y maximizar el impacto de tu lanzamiento.'
            : 'Exclusive tools designed to save you hours and maximize the impact of your launch.'}
        </p>
      </div>

      <div className="resource-grid">
        {resources.map((resource) => (
          <div key={resource.id} className="resource-card">
            <div className="resource-icon">{resource.icon}</div>
            <h3>{resource.title[lang]}</h3>
            <span className="resource-subtitle">{resource.subtitle[lang]}</span>
            <p className="resource-description">{resource.description[lang]}</p>
            <button className="btn-primary resource-btn" onClick={resource.action}>
              {resource.btnText[lang]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesDashboard;
