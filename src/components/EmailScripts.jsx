import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const scriptsData = [
  { id: 1, title: { es: 'Guion 1: Convocatoria Equipo ARC', en: 'Script 1: ARC Team Call' }, when: { es: 'Semana 9', en: 'Week 9' }, hook: { es: '"Sé parte del círculo exclusivo"', en: '"Be part of the exclusive circle"' }, content: { es: '¡Hola!\n\nEstoy terminando los últimos detalles de [Nombre del Libro] y no quiero lanzarlo al mundo sin que tú lo leas primero.\n\nEstoy buscando a un grupo pequeño de lectores apasionados para unirse a mi Equipo ARC. Leerás el libro gratis antes que nadie a cambio de tu reseña honesta en la semana de lanzamiento.\n\n¿Te unes a la aventura?', en: 'Hi!\n\nI\'m finishing up the final details of [Book Name] and I don\'t want to launch it without you reading it first.\n\nI\'m looking for a small group of passionate readers to join my ARC Team. You\'ll read the book for free before anyone else in exchange for your honest review during launch week.\n\nWill you join the adventure?' } },
  { id: 2, title: { es: 'Guion 2: Entrega del Manuscrito', en: 'Script 2: Manuscript Delivery' }, when: { es: 'Semana 7', en: 'Week 7' }, hook: { es: '"Aquí tienes tu pase VIP"', en: '"Here\'s your VIP pass"' }, content: { es: '¡Bienvenido/a al equipo!\n\nMe hace muchísima ilusión que tengas [Nombre del Libro] en tus manos.\n\nAquí tienes el enlace de descarga segura.\n\nFecha clave: El lanzamiento es el [Fecha].\n\n¡Disfruta la lectura y gracias por ser parte de esto!', en: 'Welcome to the team!\n\nI\'m so thrilled that you have [Book Name] in your hands.\n\nHere\'s your secure download link.\n\nKey date: Launch day is [Date].\n\nEnjoy the read and thank you for being part of this!' } },
  { id: 3, title: { es: 'Guion 3: El Check-in Amistoso', en: 'Script 3: The Friendly Check-in' }, when: { es: 'Semana 5', en: 'Week 5' }, hook: { es: '"¿Cómo va todo?"', en: '"How\'s everything going?"' }, content: { es: '¡Hola!\n\nSolo paso por aquí para ver qué tal te está pareciendo la historia.\n\nNo hay ninguna prisa, solo quería saludarte.\n\n¡Espero que te esté atrapando tanto como a mí escribirlo!', en: 'Hi!\n\nJust stopping by to see how you\'re finding the story.\n\nThere\'s no rush at all, I just wanted to say hi.\n\nI hope it\'s gripping you as much as it gripped me writing it!' } },
  { id: 4, title: { es: 'Guion 4: Instrucciones del Día de Lanzamiento', en: 'Script 4: Launch Day Instructions' }, when: { es: 'Semana 2 o día 1', en: 'Week 2 or day 1' }, hook: { es: '"¡Llegó el gran día!"', en: '"The big day is here!"' }, content: { es: '¡Hoy es el día!\n\n[Nombre del Libro] ya es real.\n\nAquí tienes los enlaces directos de Amazon y Goodreads para que puedas copiar y pegar tu reseña.\n\n¡Vamos a hacer ruido juntos!', en: 'Today is the day!\n\n[Book Name] is now real.\n\nHere are the direct links to Amazon and Goodreads so you can copy and paste your review.\n\nLet\'s make some noise together!' } },
  { id: 5, title: { es: 'Guion 5: El "Gentle Nudge"', en: 'Script 5: The Gentle Nudge' }, when: { es: 'Semana 1 (después del lanzamiento)', en: 'Week 1 (after launch)' }, hook: { es: '"Un último favorcito..."', en: '"One last little favor..."' }, content: { es: '¡Hola!\n\nSé que la vida se complica y a veces los días vuelan.\n\nSi todavía no has tenido oportunidad de dejar tu reseña, te lo agradecería de todo corazón.\n\nNo tiene que ser un análisis literario — con un par de frases honestas me salvas el día.', en: 'Hi!\n\nI know life gets busy and sometimes the days fly by.\n\nIf you haven\'t had a chance to leave your review yet, I would truly appreciate it.\n\nIt doesn\'t have to be a literary analysis — a couple of honest sentences would save my day.' } },
  { id: 6, title: { es: 'Guion 6: Pitch para Influencers', en: 'Script 6: Influencer Pitch' }, when: { es: 'Semana 8', en: 'Week 8' }, hook: { es: '"Vi tu video y pensé en ti"', en: '"I saw your video and thought of you"' }, content: { es: '¡Hola [Nombre]!\n\nMe encanta cómo conectas con tu audiencia.\n\nAcabo de escribir [Nombre del Libro] con [Tropo principal], y me encantaría enviarte una copia si te interesa el género.\n\nSin presiones, solo si crees que a tu comunidad le gustaría.\n\n¿Te envío el resumen?', en: 'Hi [Name]!\n\nI love how you connect with your audience.\n\nI just wrote [Book Name] with [Main Trope], and I\'d love to send you a copy if you\'re into the genre.\n\nNo pressure, only if you think your community would enjoy it.\n\nShall I send you the summary?' } },
  { id: 7, title: { es: 'Guion 7: Agradecimiento Final', en: 'Script 7: Final Thank You' }, when: { es: '15 días después del lanzamiento', en: '15 days after launch' }, hook: { es: '"Lo logramos"', en: '"We did it"' }, content: { es: 'Solo quería darte las gracias una última vez.\n\nGracias a personas como tú, [Nombre del Libro] ha logrado [Hito].\n\n¡Gracias por creer en mis palabras!', en: 'I just wanted to thank you one last time.\n\nThanks to people like you, [Book Name] has achieved [Milestone].\n\nThank you for believing in my words!' } }
];

const EmailScripts = ({ onBack }) => {
  const { lang } = useAppContext();
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="email-scripts-container">
      <div className="scripts-header">
        <button className="btn-back" onClick={onBack}>← {lang === 'es' ? 'Volver al Dashboard' : 'Back to Dashboard'}</button>
        <h2>{lang === 'es' ? 'Pack de Guiones PR para Email' : 'PR Email Script Pack'}</h2>
        <p className="scripts-subtitle">{lang === 'es' ? '7 mensajes profesionales listos para copiar, personalizar y enviar.' : '7 professional messages ready to copy, customize, and send.'}</p>
      </div>
      <div className="scripts-list">
        {scriptsData.map((script) => (
          <div key={script.id} className="script-card">
            <div className="script-card-header">
              <h3>{script.title[lang]}</h3>
              <div className="script-meta">
                <span className="script-when">📅 {script.when[lang]}</span>
                <span className="script-hook">🎣 {script.hook[lang]}</span>
              </div>
            </div>
            <div className="script-content"><pre>{script.content[lang]}</pre></div>
            <button className={`copy-btn ${copiedId === script.id ? 'copied' : ''}`} onClick={() => handleCopy(script.content[lang], script.id)}>
              {copiedId === script.id ? (<><Check size={16} />{lang === 'es' ? '¡Copiado con éxito!' : 'Copied successfully!'}</>) : (<><Copy size={16} />{lang === 'es' ? 'Copiar Guion' : 'Copy Script'}</>)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailScripts;
