import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, Lock, Star } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const TaskAccordion = ({ task, isLocked, onPaywallClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, completedTasks, toggleTask, isPremium } = useAppContext();
  const isCompleted = completedTasks[task.id] || false;

  const handleToggleOpen = () => { if (isLocked) { onPaywallClick(); return; } setIsOpen(!isOpen); };
  const handleCheckboxClick = (e) => { e.stopPropagation(); if (isLocked) { onPaywallClick(); return; } toggleTask(task.id); };

  return (
    <div className={`task-accordion ${isOpen ? 'open' : ''} ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`}>
      <div className="task-header" onClick={handleToggleOpen}>
        <button className={`checkbox ${isCompleted ? 'checked' : ''}`} onClick={handleCheckboxClick} aria-label="Toggle task completion">{isCompleted && <Check size={16} />}</button>
        <h4 className="task-title">{task.title[lang]}</h4>
        <div className="task-icon">{isLocked ? <Lock size={18} className="icon-lock" /> : (isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />)}</div>
      </div>
      {isOpen && !isLocked && (
        <div className="task-content">
          <p className="task-description">{task.description[lang]}</p>
          {task.upsell && (
            <div className="task-upsell">
              <div className="upsell-indicator"><Star size={16} className="icon-star" /><span className="upsell-badge">Premium Resource</span></div>
              <h5 className="upsell-title">{task.upsell.title[lang]}</h5>
              <p className="upsell-text">{task.upsell.text[lang]}</p>
              {task.upsell.price === 'Próximamente' ? (
                <button className="btn-primary" disabled style={{ opacity: 0.7, cursor: 'not-allowed' }}>{lang === 'es' ? 'Próximamente' : 'Coming Soon'}</button>
              ) : isPremium ? (
                <a href={task.upsell.link} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-block', textAlign: 'center' }}>{lang === 'es' ? 'Acceder al Recurso' : 'Access Resource'}</a>
              ) : (
                <button onClick={onPaywallClick} className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}><Lock size={14} />{lang === 'es' ? 'Desbloquear con Premium' : 'Unlock with Premium'}</button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskAccordion;
