import React, { useState } from 'react';
import { Book, Tablet, LayoutList, ChevronDown, Lightbulb } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const faqData = {
  es: [
    {
      q: '¿Funciona para libros de no ficción?',
      a: '¡Totalmente! Aunque muchos ejemplos se centran en narrativa, las bases de un lanzamiento exitoso son universales. La estructura de marketing, el manejo de presupuesto y el calendario están diseñados para que cualquier libro llegue a su público con impacto.'
    },
    {
      q: '¿La plataforma está en inglés o en español?',
      a: 'En ambos. Queremos que conquistes el mercado que elijas sin barreras. Toda la plataforma está configurada para que puedas trabajar tanto en español como en inglés de manera fluida.'
    },
    {
      q: '¿Qué pasa si ya empecé mi lanzamiento?',
      a: '¡No pasa nada, te ayudamos a poner orden! No importa si estás a mitad del proceso; puedes saltar directamente a la etapa en la que te encuentras. La app te servirá para profesionalizar lo que queda de camino y asegurar que no se te escape ningún detalle crítico.'
    },
    {
      q: '¿Es una suscripción mensual?',
      a: 'No. Sabemos que como autor independiente cada dólar cuenta. Por eso, el acceso a Lanzamiento Editorial es un pago único de $27. Sin cobros recurrentes, sin letras pequeñas y con acceso de por vida.'
    },
    {
      q: '¿Qué incluye exactamente el paquete de $27?',
      a: 'Es tu mapa de ruta completo. Recibes la estrategia de 10 semanas, calculadoras de presupuesto, rastreadores de metas de ventas, plantillas de marketing listas para usar y el sistema de gestión de tareas diarias. Básicamente, es tener un asistente editorial en tu bolsillo.'
    },
    {
      q: '¿Necesito saber de tecnología para usar la app?',
      a: 'Para nada. La app es intuitiva y sencilla. Si sabes usar una red social, sabrás usar esta herramienta. Está pensada para que te enfoques en tu libro, no en pelearte con la pantalla.'
    },
  ],
  en: [
    {
      q: 'Does it work for non-fiction books?',
      a: 'Absolutely! Although many examples focus on fiction, the foundations of a successful launch are universal. The marketing structure, budget management, and calendar are designed so any book can reach its audience with impact.'
    },
    {
      q: 'Is the platform in English or Spanish?',
      a: 'Both. We want you to conquer whichever market you choose without barriers. The entire platform is set up so you can work in both Spanish and English seamlessly.'
    },
    {
      q: 'What if I already started my launch?',
      a: "No worries, we'll help you get organized! It doesn't matter if you're mid-process; you can jump directly to the stage you're at. The app will help you professionalize what's left and make sure no critical detail slips through."
    },
    {
      q: 'Is it a monthly subscription?',
      a: 'No. We know that as an independent author every dollar counts. That\'s why access to Lanzamiento Editorial is a one-time payment of $27. No recurring charges, no fine print, and lifetime access.'
    },
    {
      q: 'What does the $27 package include exactly?',
      a: 'It\'s your complete roadmap. You get the 10-week strategy, budget calculators, sales goal trackers, ready-to-use marketing templates, and a daily task management system. Basically, it\'s like having an editorial assistant in your pocket.'
    },
    {
      q: 'Do I need to be tech-savvy to use the app?',
      a: 'Not at all. The app is intuitive and simple. If you know how to use a social network, you\'ll know how to use this tool. It\'s designed so you focus on your book, not on fighting the screen.'
    },
  ]
};

const Onboarding = () => {
  const { lang, setFormat } = useAppContext();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (i) => setOpenIndex(prev => (prev === i ? null : i));

  const texts = {
    es: {
      title: '¿En qué formato lanzarás tu libro?',
      subtitle: 'Personaliza tu mapa de 10 semanas de acuerdo al tipo de publicación',
      digital: 'Solo Digital',
      physical: 'Solo Físico',
      both: 'Ambos',
      faqTitle: 'Preguntas frecuentes',
      brandHeadline: 'Tu historia es tuya. El plan de ventas, déjanoslo a nosotras.',
      brandBody: 'Hoy en día, hay mucho ruido sobre la IA en el mundo literario. Queremos ser claras: nuestra herramienta no escribe libros. Está diseñada para aliviar el mayor dolor de cabeza de los autores independientes: el marketing. Usamos tecnología de punta solo para organizar tus fechas, estrategias y entregables. Siéntete orgullosa de tu arte, porque el talento es todo tuyo. Nosotras solo te equipamos para que no lances a ciegas.',
      tipLabel: '💡 Nuestra promesa',
    },
    en: {
      title: 'In what format will you publish your book?',
      subtitle: 'Customize your 10-week roadmap according to your publication type',
      digital: 'Digital Only',
      physical: 'Physical Only',
      both: 'Both',
      faqTitle: 'Frequently Asked Questions',
      brandHeadline: 'Your story is yours. The sales plan? Leave it to us.',
      brandBody: 'There\'s a lot of noise about AI in the literary world. We want to be clear: our tool doesn\'t write books. It\'s designed to relieve the biggest headache of independent authors: marketing. We use cutting-edge technology only to organize your dates, strategies, and deliverables. Feel proud of your art, because the talent is all yours. We just equip you so you don\'t launch blindly.',
      tipLabel: '💡 Our promise',
    }
  };

  const t = texts[lang];
  const faqs = faqData[lang];

  return (
    <div className="onboarding-container">
      <div className="onboarding-content">
        <h2 className="title">{t.title}</h2>
        <p className="subtitle">{t.subtitle}</p>

        <div className="options-grid">
          <button className="option-card" onClick={() => setFormat('Digital')}>
            <Tablet size={48} className="icon-primary" />
            <span className="option-label">{t.digital}</span>
          </button>
          <button className="option-card" onClick={() => setFormat('Físico')}>
            <Book size={48} className="icon-primary" />
            <span className="option-label">{t.physical}</span>
          </button>
          <button className="option-card" onClick={() => setFormat('Ambos')}>
            <LayoutList size={48} className="icon-primary" />
            <span className="option-label">{t.both}</span>
          </button>
        </div>

        {/* ── 2-Column bottom section ── */}
        <div className="onboarding-bottom-grid">

          {/* LEFT — FAQ */}
          <div className="onboarding-faq-col">
            <h3 className="faq-section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>{t.faqTitle}</h3>
            <div className="faq-list">
              {faqs.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                    <button className="faq-question" onClick={() => toggleFaq(i)} aria-expanded={isOpen}>
                      <span>{item.q}</span>
                      <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'faq-chevron--open' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="faq-answer"><p>{item.a}</p></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Brand message */}
          <div className="onboarding-brand-col">
            <div className="brand-promise-card">
              <div className="brand-promise-icon">
                <Lightbulb size={28} />
              </div>
              <span className="brand-promise-label">{t.tipLabel}</span>
              <h3 className="brand-promise-headline">{t.brandHeadline}</h3>
              <p className="brand-promise-body">{t.brandBody}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Onboarding;
