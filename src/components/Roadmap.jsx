import React, { useState, useEffect } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import html2pdf from 'html2pdf.js';
import { useAppContext } from '../context/AppContext';
import { roadmapContent } from '../data/roadmapData';
import TaskAccordion from './TaskAccordion';

const Roadmap = () => {
  const { lang, format, setFormat, completedTasks, isPremium } = useAppContext();
  const [showPaywall, setShowPaywall] = useState(false);
  const [completedWeeksLocal, setCompletedWeeksLocal] = useState([]);

  const getVisibleTasks = (tasks) => {
    return tasks.filter(task => task.formats.includes(format) || task.formats.includes('Ambos'));
  };

  useEffect(() => {
    const newlyCompleted = [];
    roadmapContent.forEach(week => {
      if (!week.isFree && !isPremium) return;
      const visibleTasks = getVisibleTasks(week.tasks);
      if (visibleTasks.length === 0) return;
      const allCompleted = visibleTasks.every(t => completedTasks[t.id]);
      if (allCompleted && !completedWeeksLocal.includes(week.weekId)) {
        newlyCompleted.push(week.weekId);
      }
    });
    if (newlyCompleted.length > 0) {
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#d49a89', '#d4af37', '#82a896'] });
      setCompletedWeeksLocal(prev => [...prev, ...newlyCompleted]);
    }
  }, [completedTasks, format, completedWeeksLocal]);

  const handleExportPDF = () => {
    const element = document.getElementById('roadmap-printable-area');
    const opt = {
      margin: 10,
      filename: lang === 'es' ? 'Mapa-Lanzamiento-Editorial.pdf' : 'Book-Launch-Roadmap.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };

  const handlePaywallClick = () => setShowPaywall(true);

  const translations = {
    es: { roadmap: 'Tu Mapa de 10 Semanas', roadmapSub: 'Tu guía paso a paso para un lanzamiento que haga ruido', format: 'Formato', change: 'Cambiar formato', tasksOf: 'de', completed: 'completadas' },
    en: { roadmap: 'Your 10-Week Roadmap', roadmapSub: 'Your step-by-step guide to a launch that makes noise', format: 'Format', change: 'Change format', tasksOf: 'of', completed: 'completed' }
  };
  const t = translations[lang];

  const totalTasks = roadmapContent.reduce((acc, week) => {
    if (!week.isFree && !isPremium) return acc;
    return acc + getVisibleTasks(week.tasks).length;
  }, 0);
  const totalCompleted = roadmapContent.reduce((acc, week) => {
    if (!week.isFree && !isPremium) return acc;
    return acc + getVisibleTasks(week.tasks).filter(t => completedTasks[t.id]).length;
  }, 0);
  const totalPercent = totalTasks > 0 ? Math.round((totalCompleted / totalTasks) * 100) : 0;

  return (
    <div className="roadmap-container">
      <div className="roadmap-hero">
        <h2 className="roadmap-hero-title">{t.roadmap}</h2>
        <p className="roadmap-hero-sub">{t.roadmapSub}</p>
        <div className="roadmap-hero-controls">
          <span className="format-badge">{t.format}: {format}</span>
          <button className="text-button" onClick={() => setFormat(null)}>{t.change}</button>
        </div>
        <div className="global-progress">
          <div className="global-progress-info">
            <span className="global-progress-label">{totalCompleted} {t.tasksOf} {totalTasks} {t.completed}</span>
            <span className="global-progress-percent">{totalPercent}%</span>
          </div>
          <div className="global-progress-track">
            <div className="global-progress-fill" style={{ width: `${totalPercent}%` }}></div>
          </div>
        </div>
        <button className="btn-primary roadmap-pdf-btn" onClick={handleExportPDF}>
          <Download size={18} />
          {lang === 'es' ? 'Descargar Plan PDF' : 'Download PDF Plan'}
        </button>
      </div>

      <div className="roadmap-timeline" id="roadmap-printable-area">
        {roadmapContent.map((week, index) => {
          const visibleTasks = getVisibleTasks(week.tasks);
          if (visibleTasks.length === 0) return null;
          const isLocked = !week.isFree && !isPremium;
          const weekCompletedCount = visibleTasks.filter(t => completedTasks[t.id]).length;
          const weekTotalCount = visibleTasks.length;
          const weekPercent = weekTotalCount > 0 ? Math.round((weekCompletedCount / weekTotalCount) * 100) : 0;
          const isWeekDone = weekPercent === 100 && !isLocked;
          const isLastWeek = index === roadmapContent.length - 1;
          return (
            <div key={`week-${week.weekId}`} className={`timeline-item ${isLocked ? 'timeline-item--locked' : ''} ${isWeekDone ? 'timeline-item--done' : ''}`}>
              <div className="timeline-track-col">
                <div className={`timeline-node ${isWeekDone ? 'timeline-node--done' : ''} ${isLocked ? 'timeline-node--locked' : ''}`}>
                  <span className="timeline-node-number">{week.weekId}</span>
                </div>
                {!isLastWeek && <div className={`timeline-connector ${isWeekDone ? 'timeline-connector--done' : ''}`}></div>}
              </div>
              <section className={`week-card ${isLocked ? 'week-card--locked' : ''} ${isWeekDone ? 'week-card--done' : ''}`}>
                <div className="week-card-header">
                  <div className="week-card-title-row">
                    <h3 className="week-title">{week.title[lang]}</h3>
                  </div>
                  {week.subtitle && <p className="week-subtitle">{week.subtitle[lang]}</p>}
                  {!isLocked && (
                    <div className="week-progress">
                      <div className="week-progress-info">
                        <span>{weekCompletedCount} {t.tasksOf} {weekTotalCount}</span>
                        <span>{weekPercent}%</span>
                      </div>
                      <div className="week-progress-track">
                        <div className="week-progress-fill" style={{ width: `${weekPercent}%` }}></div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="tasks-list">
                  {visibleTasks.map(task => (
                    <TaskAccordion key={task.id} task={task} isLocked={isLocked} onPaywallClick={handlePaywallClick} />
                  ))}
                </div>
              </section>
            </div>
          );
        })}
      </div>

      {showPaywall && (
        <div className="paywall-modal-overlay">
          <div className="paywall-modal">
            <h3 className="modal-title">
              {lang === 'es' ? 'Desbloquea el mapa completo' : 'Unlock the full roadmap'}
            </h3>
            <p>
              {lang === 'es'
                ? 'Asegura el éxito de tu libro. Desbloquea el mapa interactivo (Semanas 8 a 1), activa la descarga a PDF y obtén acceso inmediato a todas las plantillas y recursos Premium de cada fase.'
                : 'Ensure your book\'s success. Unlock the interactive roadmap (Weeks 8 to 1), enable PDF export, and get immediate access to all Premium resources and templates.'}
            </p>
            <div className="modal-actions">
              <a href="https://buy.stripe.com/8x27sMcmHcdu6IZ37R4c802" target="_blank" rel="noreferrer" className="btn-primary mockup-btn" style={{ display: 'inline-block', textAlign: 'center' }}>
                {lang === 'es' ? 'Desbloquear Paquete Completo por $27' : 'Unlock Full Bundle for $27'}
              </a>
              <button className="text-button" onClick={() => setShowPaywall(false)}>
                {lang === 'es' ? 'Quizás más tarde' : 'Maybe later'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roadmap;
