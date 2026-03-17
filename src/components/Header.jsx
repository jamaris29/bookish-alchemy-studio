import React from 'react';
import { Moon, Sun, Globe, BookOpen } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Header = () => {
  const { theme, toggleTheme, lang, setLang, isPremium } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLangChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="brand-group">
          <img src="/logo.png" alt="Bookish Alchemy AI Studio" className="brand-logo" />
          <div className="logo-text">
            <h1 className="logo">
              {lang === 'es' ? 'The Bestseller Blueprint' : 'The Bestseller Blueprint'}
            </h1>
            <span className="logo-subtitle">by Bookish Alchemy AI</span>
          </div>
        </div>
        
        <div className="controls">
          {isPremium && (
            <button
              className={`nav-link ${location.pathname === '/recursos' ? 'active' : ''}`}
              onClick={() => navigate(location.pathname === '/recursos' ? '/' : '/recursos')}
              title={lang === 'es' ? 'Recursos Premium' : 'Premium Resources'}
            >
              <BookOpen size={18} />
              <span className="nav-link-text">
                {location.pathname === '/recursos'
                  ? (lang === 'es' ? 'Mapa' : 'Roadmap')
                  : (lang === 'es' ? 'Recursos' : 'Resources')}
              </span>
            </button>
          )}
          
          <div className="lang-selector">
            <Globe size={18} className="icon" />
            <select value={lang} onChange={handleLangChange}>
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </div>
          
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
