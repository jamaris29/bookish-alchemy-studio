import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import html2pdf from 'html2pdf.js';
import { useAppContext } from '../context/AppContext';
import { roadmapContent } from '../data/roadmapData';
import TaskAccordion from './TaskAccordion';

const Roadmap = () => {
  const { lang, format, setFormat, completedTasks, isPremium } = useAppContext();
  const [showPaywall, setShowPaywall] = useState(false);
  const [completedWeeksLocal, setCompletedWeeksLocal] = useState([]);

  const getVisibleTasks = (tasks) => tasks.filter(task => task.formats.includes(format) || task.formats.includes('Ambos'));

  useEffect(() => {
    const newlyCompleted = [];
    roadmapContent.forEach(week => {
      if (!week.isFree && !isPremium) return;
      const visibleTasks = getVisibleTasks(week.tasks);
      if (visibleTasks.length === 0) return;
      const allCompleted = visibleTasks.every(t => completedTasks[t.id]);
      if (allCompleted && !completedWeeksLocal.includes(week.weekId)) newlyCompleted.push(week.weekId);
    });
    if (newlyCompleted.length > 0) {
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#d49a89', '#d4af37', '#82a896'] });
      setCompletedWeeksLocal(prev => [...prev, ...newlyCompleted]);
    }
  }, [completedTasks, format, completedWeeksLocal]);

  const handleExportPDF = () => {
    const element = document.getElementById('roadmap-printable-area');
    const opt = { margin: 10, filename: lang === 'es' ? 'Mapa-Lanzamiento-Editorial.pdf' : 'Book-Launch-Roadmap.pdf', image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } };
    html2pdf().from(element).set(opt).save();
  };

  const t = {
    es: { roadmap: 'Tu Mapa de 10 Semanas', format: 'Formato', change: 'Cambiar formato' },
    en: { roadmap: 'Your 10-Week Roadmap', format: 'Format', change: 'Change format' }
  }[lang];

  return (
    <div className="roadmap-container">
      <div className="roadmap-header">
        <h2>{t.roadmap}</h2>
        <div className="roadmap-meta">
          <span className="format-badge">{t.format}: {format}</span>
          <button className="text-button" onClick={() => setFormat(null)}>{t.change}</button>
          <button className="btn-primary" onClick={handleExportPDF} style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Download size={18} />
            {lang === 'es' ? 'Descargar Plan PDF' : 'Download PDF Plan'}
          </button>
        </div>
      </div>
      <div className="roadmap-content" id="roadmap-printable-area">
        {roadmapContent.map((week) => {
          const visibleTasks = getVisibleTasks(week.tasks);
          if (visibleTasks.length === 0) return null;
          const isLocked = !week.isFree && !isPremium;
          return (
            <section key={`week-${week.weekId}`} className={`week-section ${isLocked ? 'locked-week' : ''}`}>
              <h3 className="week-title">{week.title[lang]}</h3>
              <div className="tasks-list">
                {visibleTasks.map(task => <TaskAccordion key={task.id} task={task} isLocked={isLocked} onPaywallClick={() => setShowPaywall(true)} />)}
              </div>
            </section>
          );
        })}
      </div>
      {showPaywall && (
        <div className="paywall-modal-overlay">
          <div className="paywall-modal">
            <h3 className="modal-title">{lang === 'es' ? 'Desbloquea el mapa completo' : 'Unlock the full roadmap'}</h3>
            <p>{lang === 'es' ? 'Asegura el éxito de tu libro. Desbloquea el mapa interactivo (Semanas 8 a 1), activa la descarga a PDF y obtén acceso inmediato a todas las plantillas y recursos Premium de cada fase.' : 'Ensure your book\'s success. Unlock the interactive roadmap (Weeks 8 to 1), enable PDF export, and get immediate access to all Premium resources and templates.'}</p>
            <div className="modal-actions">
              <button className="btn-primary mockup-btn">{lang === 'es' ? 'Desbloquear Paquete Completo por $27' : 'Unlock Full Bundle for $27'}</button>
              <button className="text-button" onClick={() => setShowPaywall(false)}>{lang === 'es' ? 'Quién sabe' : 'Maybe later'}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roadmap;
