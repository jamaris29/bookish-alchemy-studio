import React, { useState } from 'react';
import { Book, Tablet, LayoutList, ChevronDown } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const faqData = {
  es: [
    { q: '¿Funciona para libros de no ficción?', a: '¡Totalmente! Aunque muchos ejemplos se centran en narrativa, las bases de un lanzamiento exitoso son universales. La estructura de marketing, el manejo de presupuesto y el calendario están diseñados para que cualquier libro llegue a su público con impacto.' },
    { q: '¿La plataforma está en inglés o en español?', a: 'En ambos. Queremos que conquistes el mercado que elijas sin barreras. Toda la plataforma está configurada para que puedas trabajar tanto en español como en inglés de manera fluida.' },
    { q: '¿Qué pasa si ya empecé mi lanzamiento?', a: '¡No pasa nada, te ayudamos a poner orden! No importa si estás a mitad del proceso; puedes saltar directamente a la etapa en la que te encuentras. La app te servirá para profesionalizar lo que queda de camino y asegurar que no se te escape ningún detalle crítico.' },
    { q: '¿Es una suscripción mensual?', a: 'No. Sabemos que como autor independiente cada dólar cuenta. Por eso, el acceso a Lanzamiento Editorial es un pago único de $27. Sin cobros recurrentes, sin letras pequeñas y con acceso de por vida.' },
    { q: '¿Qué incluye exactamente el paquete de $27?', a: 'Es tu mapa de ruta completo. Recibes la estrategia de 10 semanas, calculadoras de presupuesto, rastreadores de metas de ventas, plantillas de marketing listas para usar y el sistema de gestión de tareas diarias.' },
    { q: '¿Necesito saber de tecnología para usar la app?', a: 'Para nada. La app es intuitiva y sencilla. Si sabes usar una red social, sabrás usar esta herramienta.' },
  ],
  en: [
    { q: 'Does it work for non-fiction books?', a: 'Absolutely! Although many examples focus on fiction, the foundations of a successful launch are universal.' },
    { q: 'Is the platform in English or Spanish?', a: 'Both. We want you to conquer whichever market you choose without barriers.' },
    { q: 'What if I already started my launch?', a: "No worries, we'll help you get organized! It doesn't matter if you're mid-process." },
    { q: 'Is it a monthly subscription?', a: 'No. Access to Lanzamiento Editorial is a one-time payment of $27. No recurring charges, no fine print, and lifetime access.' },
    { q: 'What does the $27 package include exactly?', a: "It's your complete roadmap. You get the 10-week strategy, budget calculators, sales goal trackers, ready-to-use marketing templates, and a daily task management system." },
    { q: 'Do I need to be tech-savvy to use the app?', a: "Not at all. The app is intuitive and simple." },
  ]
};

const Onboarding = () => {
  const { lang, setFormat } = useAppContext();
  const [openIndex, setOpenIndex] = useState(null);

  const handleSelect = (selectedFormat) => { setFormat(selectedFormat); };
  const toggleFaq = (i) => { setOpenIndex(prev => (prev === i ? null : i)); };

  const texts = {
    es: { title: '¿En qué formato lanzarás tu libro?', subtitle: 'Personaliza tu mapa de 10 semanas de acuerdo al tipo de publicación', digital: 'Solo Digital', physical: 'Solo Físico', both: 'Ambos', faqTitle: '¿Dudas antes de empezar? Te las aclaramos todas.' },
    en: { title: 'In what format will you publish your book?', subtitle: 'Customize your 10-week roadmap according to your publication type', digital: 'Digital Only', physical: 'Physical Only', both: 'Both', faqTitle: 'Questions before you start? We answer them all.' }
  };

  const t = texts[lang];
  const faqs = faqData[lang];

  return (
    <div className="onboarding-container">
      <div className="onboarding-content">
        <h2 className="title">{t.title}</h2>
        <p className="subtitle">{t.subtitle}</p>
        <div className="options-grid">
          <button className="option-card" onClick={() => handleSelect('Digital')}>
            <Tablet size={48} className="icon-primary" />
            <span className="option-label">{t.digital}</span>
          </button>
          <button className="option-card" onClick={() => handleSelect('Físico')}>
            <Book size={48} className="icon-primary" />
            <span className="option-label">{t.physical}</span>
          </button>
          <button className="option-card" onClick={() => handleSelect('Ambos')}>
            <LayoutList size={48} className="icon-primary" />
            <span className="option-label">{t.both}</span>
          </button>
        </div>
        <div className="faq-section">
          <h3 className="faq-section-title">{t.faqTitle}</h3>
          <div className="faq-list">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                  <button className="faq-question" onClick={() => toggleFaq(i)} aria-expanded={isOpen}>
                    <span>{item.q}</span>
                    <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'faq-chevron--open' : ''}`} />
                  </button>
                  {isOpen && (<div className="faq-answer"><p>{item.a}</p></div>)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
