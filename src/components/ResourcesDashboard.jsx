import React, { useState } from 'react';
import { Mail, Sparkles, FileDown, ArrowLeft, Download, Star, BarChart2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import EmailScripts from './EmailScripts';

const ResourcesDashboard = () => {
  const { lang, isPremium } = useAppContext();
  const [showEmailScripts, setShowEmailScripts] = useState(false);
  const navigate = useNavigate();

  if (showEmailScripts) {
    return <EmailScripts onBack={() => setShowEmailScripts(false)} />;
  }

  const freeResources = [
    {
      id: 'aplus',
      icon: <Download size={32} />,
      title: { es: 'Plantillas Amazon A+ Im\u00e1n de Ventas', en: 'Amazon A+ Sales Magnet Templates' },
      subtitle: { es: 'Descarga gratuita', en: 'Free download' },
      description: {
        es: 'Plantillas de dise\u00f1o listas para usar en tu p\u00e1gina de Amazon. Crea contenido A+ que convierta visitantes en compradores en minutos.',
        en: 'Ready-to-use design templates for your Amazon page. Create A+ content that converts visitors into buyers in minutes.'
      },
      btnText: { es: 'Descargar Plantillas', en: 'Download Templates' },
      isFree: true,
      action: () => window.open('https://drive.google.com/drive/folders/1nBA34T9U0McOGDnJfWyS-jgYUZgg53Aq?usp=drive_link', '_blank')
    }
  ];

  const premiumResources = [
    {
      id: 'success-center',
      icon: <BarChart2 size={32} />,
      title: { es: 'Centro de Control de \u00c9xito', en: 'Success Control Center' },
      subtitle: { es: 'Calculadora de lanzamiento', en: 'Launch Calculator' },
      description: {
        es: 'Calcula tus ganancias exactas, fija metas de ventas y rese\u00f1as, y toma el control total de tu lanzamiento con n\u00fameros reales.',
        en: 'Calculate your exact earnings, set sales and review goals, and take full control of your launch with real numbers.'
      },
      btnText: { es: 'Abrir Centro de Control \ud83d\ude80', en: 'Open Control Center \ud83d\ude80' },
      action: () => window.open('https://centro-de-control-de-xito-888949783352.us-west1.run.app/', '_blank')
    },
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
        es: 'Un bot de IA entrenado para generar tu psicograf\u00eda de lector, tropos principales y estrategia de contenido autom\u00e1ticamente.',
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
        es: 'Tu mapa de 10 semanas en formato PDF listo para imprimir. M\u00e1rcalo con pluma, p\u00e9galo en tu pared y conquista tu lanzamiento.',
        en: 'Your 10-week roadmap in printable PDF format. Mark it with a pen, stick it on your wall, and conquer your launch.'
      },
      btnText: { es: 'Descargar PDF', en: 'Download PDF' },
      action: () => { navigate('/'); setTimeout(() => { const btn = document.querySelector('.roadmap-pdf-btn'); if (btn) btn.click(); }, 500); }
    }
  ];

  return (
    <div className="resources-dashboard">
      <div className="resources-header">
        <button className="btn-back" onClick={() => navigate('/')}>
          <ArrowLeft size={18} />
          {lang === 'es' ? 'Volver al Mapa' : 'Back to Roadmap'}
        </button>
        <h2>{lang === 'es' ? 'Recursos' : 'Resources'}</h2>
        <p className="resources-subtitle">
          {lang === 'es'
            ? 'Descarga gratuita y herramientas exclusivas para tu lanzamiento.'
            : 'Free downloads and exclusive tools for your launch.'}
        </p>
      </div>

      <div className="resource-grid free-resource-grid">
        {freeResources.map((resource) => (
          <div key={resource.id} className="resource-card resource-card--free">
            <div className="free-badge">{lang === 'es' ? 'GRATIS' : 'FREE'}</div>
            <div className="resource-icon resource-icon--free">{resource.icon}</div>
            <h3>{resource.title[lang]}</h3>
            <span className="resource-subtitle">{resource.subtitle[lang]}</span>
            <p className="resource-description">{resource.description[lang]}</p>
            <button className="btn-primary resource-btn btn-download" onClick={resource.action}>
              <Download size={18} />
              {resource.btnText[lang]}
            </button>
          </div>
        ))}
      </div>

      <div className="resources-section-title resources-section-title--premium">
        \u2b50 {lang === 'es' ? 'Arsenal Premium' : 'Premium Arsenal'}
      </div>
      {!isPremium && (
        <div className="resources-paywall-banner">
          <Star size={20} />
          <p>{lang === 'es' ? 'Desbloquea las herramientas Premium por $27' : 'Unlock Premium tools for $27'}</p>
          <a href="https://buy.stripe.com/8x27sMcmHcdu6IZ37R4c802" target="_blank" rel="noreferrer" className="btn-primary">
            {lang === 'es' ? 'Desbloquear' : 'Unlock'}
          </a>
        </div>
      )}
      <div className={`resource-grid ${!isPremium ? 'resource-grid--locked' : ''}`}>
        {premiumResources.map((resource) => (
          <div key={resource.id} className={`resource-card ${!isPremium ? 'resource-card--locked' : ''}`}>
            <div className="resource-icon">{resource.icon}</div>
            <h3>{resource.title[lang]}</h3>
            <span className="resource-subtitle">{resource.subtitle[lang]}</span>
            <p className="resource-description">{resource.description[lang]}</p>
            <button
              className="btn-primary resource-btn"
              onClick={isPremium ? resource.action : undefined}
              disabled={!isPremium}
              style={!isPremium ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
            >
              {isPremium ? resource.btnText[lang] : '\ud83d\udd12 Premium'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesDashboard;
