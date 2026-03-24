import React from 'react';
import { Moon, Sun, Globe, BookOpen } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

// Logo inline como SVG para evitar dependencia de archivos externos
const LogoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{borderRadius:'8px',background:'linear-gradient(135deg,#0d9488,#134e4a)'}}>
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="22" fill="#ccfbf1">📖</text>
  </svg>
);

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
          <LogoIcon />
          <div className="logo-text">
            <h1 className="logo">
              The Bestseller Blueprint
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
