import React, { useState, useEffect } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import html2pdf from 'html2pdf.js';
import { useAppContext } from '../context/AppContext';
import { roadmapContent } from '../data/roadmapData';
import TaskAccordion from './TaskAccordion';
import SuccessControlBanner from './SuccessControlBanner';

const COUNTDOWN_DURATION = 20 * 60;

const getCountdownExpiry = () => {
  const stored = sessionStorage.getItem('pw_expiry');
  if (stored) return parseInt(stored, 10);
  const expiry = Date.now() + COUNTDOWN_DURATION * 1000;
  sessionStorage.setItem('pw_expiry', expiry);
  return expiry;
};

const Roadmap = () => {
  const { lang, format, setFormat, completedTasks, isPremium } = useAppContext();
  const [showPaywall, setShowPaywall] = useState(false);
  const [completedWeeksLocal, setCompletedWeeksLocal] = useState([]);
  const [timeLeft, setTimeLeft] = useState(() => {
    const expiry = getCountdownExpiry();
    return Math.max(0, Math.round((expiry - Date.now()) / 1000));
  });

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

  const handlePaywallClick = () => setShowPaywall(true);

  useEffect(() => {
    if (!showPaywall || timeLeft <= 0) return;
    const timer = setInterval(() => {
      const expiry = getCountdownExpiry();
      setTimeLeft(Math.max(0, Math.round((expiry - Date.now()) / 1000)));
    }, 1000);
    return () => clearInterval(timer);
  }, [showPaywall, timeLeft]);

  const formatTime = (secs) => ({ m: String(Math.floor(secs / 60)).padStart(2, '0'), s: String(secs % 60).padStart(2, '0') });
  const { m, s } = formatTime(timeLeft);

  const translations = {
    es: { roadmap: 'Tu Mapa de 10 Semanas', roadmapSub: 'Tu guía paso a paso para un lanzamiento que haga ruido', format: 'Formato', change: 'Cambiar formato', tasksOf: 'de', completed: 'completadas' },
    en: { roadmap: 'Your 10-Week Roadmap', roadmapSub: 'Your step-by-step guide to a launch that makes noise', format: 'Format', change: 'Change format', tasksOf: 'of', completed: 'completed' }
  };
  const t = translations[lang];

  const totalTasks = roadmapContent.reduce((acc, week) => { if (!week.isFree && !isPremium) return acc; return acc + getVisibleTasks(week.tasks).length; }, 0);
  const totalCompleted = roadmapContent.reduce((acc, week) => { if (!week.isFree && !isPremium) return acc; return acc + getVisibleTasks(week.tasks).filter(t => completedTasks[t.id]).length; }, 0);
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
          <Download size={18} />{lang === 'es' ? 'Descargar Plan PDF' : 'Download PDF Plan'}
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
                {isLocked && week.weekId === 8 && (
                  <div className="week8-urgency-strip">
                    <span>⚡</span>
                    <span>{lang === 'es' ? 'Semanas 8→1 bloqueadas — Desbloquea ahora y empieza hoy mismo.' : 'Weeks 8→1 locked — Unlock now and start today.'}</span>
                    <button className="week8-urgency-btn" onClick={handlePaywallClick}>{lang === 'es' ? 'Ver oferta →' : 'See offer →'}</button>
                  </div>
                )}
                <div className="week-card-header">
                  <div className="week-card-title-row"><h3 className="week-title">{week.title[lang]}</h3></div>
                  {week.subtitle && <p className="week-subtitle">{week.subtitle[lang]}</p>}
                  {!isLocked && (
                    <div className="week-progress">
                      <div className="week-progress-info"><span>{weekCompletedCount} {t.tasksOf} {weekTotalCount}</span><span>{weekPercent}%</span></div>
                      <div className="week-progress-track"><div className="week-progress-fill" style={{ width: `${weekPercent}%` }}></div></div>
                    </div>
                  )}
                </div>
                <div className="tasks-list">
                  {visibleTasks.map(task => (<TaskAccordion key={task.id} task={task} isLocked={isLocked} onPaywallClick={handlePaywallClick} />))}
                </div>
                {week.weekId === 9 && <SuccessControlBanner />}
              </section>
            </div>
          );
        })}
      </div>

      {showPaywall && (
        <div className="paywall-modal-overlay" onClick={(e) => e.target === e.currentTarget && setShowPaywall(false)}>
          <div className="paywall-modal paywall-modal--urgent">
            {timeLeft > 0 ? (
              <>
                <span className="pw-urgency-badge">{lang === 'es' ? '⚡ Oferta activa ahora mismo' : '⚡ Offer active right now'}</span>
                <h3 className="modal-title">{lang === 'es' ? 'Tu libro merece llegar más lejos 📖' : 'Your book deserves to go further 📖'}</h3>
                <p className="pw-empathy">{lang === 'es' ? 'Todos los autores que publican sin un plan dejan dinero y lectores sobre la mesa.' : 'Every author who publishes without a plan leaves money and readers on the table.'}</p>
                <div className="pw-countdown-wrap">
                  <p className="pw-countdown-label">{lang === 'es' ? '🔥 Esta pantalla desaparece en' : '🔥 This screen disappears in'}</p>
                  <div className="pw-countdown">
                    <div className="pw-time-block"><span className="pw-time-digit">{m}</span><span className="pw-time-unit">{lang === 'es' ? 'min' : 'min'}</span></div>
                    <span className="pw-time-sep">:</span>
                    <div className="pw-time-block"><span className="pw-time-digit">{s}</span><span className="pw-time-unit">{lang === 'es' ? 'seg' : 'sec'}</span></div>
                  </div>
                  <p className="pw-countdown-sub">{lang === 'es' ? 'El precio no cambia. Solo queremos que lo pienses de verdad.' : "The price won't change. We just want you to think it through."}</p>
                </div>
                <div className="modal-actions">
                  <a href="https://buy.stripe.com/8x27sMcmHcdu6IZ37R4c802" target="_blank" rel="noreferrer" className="btn-primary mockup-btn pw-cta-btn">
                    {lang === 'es' ? '🚀 Desbloquear Paquete Completo por $27' : '🚀 Unlock Full Bundle for $27'}
                  </a>
                  <button className="text-button" onClick={() => setShowPaywall(false)}>{lang === 'es' ? 'Seguir explorando gratis' : 'Keep exploring for free'}</button>
                </div>
              </>
            ) : (
              <>
                <span className="pw-urgency-badge pw-urgency-badge--expired">{lang === 'es' ? '⏰ El tiempo voló…' : '⏰ Time flew by…'}</span>
                <h3 className="modal-title">{lang === 'es' ? '¡El plan sigue esperando!' : 'The plan is still waiting for you!'}</h3>
                <p className="pw-empathy">{lang === 'es' ? 'Cuando estés list@ para dar el salto, el acceso completo sigue disponible por $27.' : "When you're ready to take the leap, full access is still available at $27."}</p>
                <div className="modal-actions">
                  <a href="https://buy.stripe.com/8x27sMcmHcdu6IZ37R4c802" target="_blank" rel="noreferrer" className="btn-primary mockup-btn pw-cta-btn">
                    {lang === 'es' ? '💎 Desbloquear por $27' : '💎 Unlock for $27'}
                  </a>
                  <button className="text-button" onClick={() => setShowPaywall(false)}>{lang === 'es' ? 'Volver al mapa' : 'Back to the roadmap'}</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Roadmap;
