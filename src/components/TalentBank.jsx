import React, { useState } from 'react';
import { ArrowLeft, Users, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { talentProfiles } from '../data/talentData';

const TalentBank = () => {
  const { lang } = useAppContext();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: { es: 'Todos', en: 'All' } },
    { id: 'editor', label: { es: 'Editores', en: 'Editors' } },
    { id: 'designer', label: { es: 'Diseñadores', en: 'Designers' } },
    { id: 'marketer', label: { es: 'Marketers', en: 'Marketers' } },
    { id: 'proofreader', label: { es: 'Correctores', en: 'Proofreaders' } },
  ];

  const filtered = activeFilter === 'all'
    ? talentProfiles
    : talentProfiles.filter(t => t.specialty === activeFilter);

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  };

  const renderStars = (rating) => {
    return '★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '');
  };

  return (
    <div className="talent-bank">
      <div className="talent-header">
        <button className="btn-back" onClick={() => navigate('/')}>
          <ArrowLeft size={18} />
          {lang === 'es' ? 'Volver al Mapa' : 'Back to Roadmap'}
        </button>
        <h2>{lang === 'es' ? 'Banco de Talentos' : 'Talent Bank'}</h2>
        <p className="talent-subtitle">
          {lang === 'es'
            ? 'Conecta con profesionales verificados para llevar tu libro al siguiente nivel.'
            : 'Connect with verified professionals to take your book to the next level.'}
        </p>
      </div>

      {/* Filter pills */}
      <div className="talent-filters">
        {filters.map(f => (
          <button
            key={f.id}
            className={`talent-filter-pill ${activeFilter === f.id ? 'talent-filter-pill--active' : ''}`}
            onClick={() => setActiveFilter(f.id)}
          >
            {f.label[lang]}
          </button>
        ))}
      </div>

      {/* Grid or Empty State */}
      {filtered.length === 0 ? (
        <div className="talent-empty">
          <div className="talent-empty-icon">
            <Users size={48} />
          </div>
          <h3>{lang === 'es' ? 'Próximamente' : 'Coming Soon'}</h3>
          <p>
            {lang === 'es'
              ? 'Estamos seleccionando los mejores profesionales del mundo editorial para ti. Vuelve pronto.'
              : 'We are curating the best professionals in the publishing world for you. Check back soon.'}
          </p>
        </div>
      ) : (
        <div className="talent-grid">
          {filtered.map((talent) => (
            <div key={talent.id} className="talent-card">
              <div className="talent-avatar">
                {getInitials(talent.name)}
              </div>
              <h3 className="talent-name">{talent.name}</h3>
              <span className="talent-specialty">
                {filters.find(f => f.id === talent.specialty)?.label[lang] || talent.specialty}
              </span>
              <span className="talent-rating">{renderStars(talent.rating)} {talent.rating}</span>
              <div className="talent-genres">
                {talent.genres.map((g, i) => (
                  <span key={i} className="talent-genre-tag">{g}</span>
                ))}
              </div>
              <p className="talent-bio">{talent.bio[lang]}</p>
              <a
                href={talent.contact}
                target="_blank"
                rel="noreferrer"
                className="btn-primary talent-btn"
              >
                {lang === 'es' ? 'Contactar' : 'Contact'}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TalentBank;
