import React, { useState } from 'react';
import { Moon, Sun, Globe, BookOpen, Users, Map, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Header = () => {
  const { theme, toggleTheme, lang, setLang, format } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLangChange = (e) => {
    setLang(e.target.value);
  };

  const navItems = [
    { path: '/', label: { es: 'Mapa', en: 'Roadmap' }, icon: <Map size={16} /> },
    { path: '/recursos', label: { es: 'Recursos', en: 'Resources' }, icon: <BookOpen size={16} /> },
    { path: '/talentos', label: { es: 'Talentos', en: 'Talent Bank' }, icon: <Users size={16} /> },
  ];

  const handleNav = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
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
          {/* Desktop nav links — only show when format is selected (app started) */}
          {format && navItems.map((item) => (
            <button
              key={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => handleNav(item.path)}
            >
              {item.icon}
              <span className="nav-link-text">{item.label[lang]}</span>
            </button>
          ))}
          
          <div className="lang-selector">
            <Globe size={16} className="icon" />
            <select value={lang} onChange={handleLangChange}>
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
          </div>
          
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Mobile hamburger */}
          {format && (
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && format && (
        <div className="mobile-nav-dropdown">
          {navItems.map((item) => (
            <button
              key={item.path}
              className={`mobile-nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => handleNav(item.path)}
            >
              {item.icon}
              {item.label[lang]}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
