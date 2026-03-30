import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Footer = () => {
  const { lang } = useAppContext();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="copyright">
            &copy; {currentYear} The Bestseller Blueprint. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
          <p className="credits">
            {lang === 'es' ? 'Un producto exclusivo de' : 'An exclusive product by'}{' '}
            <span className="brand-highlight">Bookish Alchemy AI Studio</span>
          </p>
        </div>
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/bookishalchemy.ai/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
          <a
            href="mailto:bookish@thebestsellerblueprint.projectalchemylab.com"
            className="social-link"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
