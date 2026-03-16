import React from 'react';
import { Moon, Sun, Globe, Unlock, Lock } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Header = () => {
  const { theme, toggleTheme, lang, setLang, isPremium, setIsPremium } = useAppContext();

  return (
    <header className="header">
      <div className="header-container">
        <div className="brand-group">
          <img src="/logo.png" alt="Bookish Alchemy AI Studio" className="brand-logo" />
          <div className="logo-text">
            <h1 className="logo">The Bestseller Blueprint</h1>
            <span className="logo-subtitle">by Bookish Alchemy AI</span>
          </div>
        </div>
        <div className="controls">
          <button className="theme-toggle" onClick={() => setIsPremium(!isPremium)} title={lang === 'es' ? 'Alternar Premium (Pruebas)' : 'Toggle Premium (Testing)'} style={{ color: isPremium ? 'var(--accent-primary)' : 'inherit' }}>
            {isPremium ? <Unlock size={18} /> : <Lock size={18} />}
          </button>
          <div className="lang-selector">
            <Globe size={18} className="icon" />
            <select value={lang} onChange={(e) => setLang(e.target.value)}>
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
