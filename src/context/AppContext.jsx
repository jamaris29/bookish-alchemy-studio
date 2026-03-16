import { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isPremium, setIsPremium] = useState(() => {
    return localStorage.getItem('isPremium') === 'true';
  });
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'es');
  const [format, setFormat] = useState(() => localStorage.getItem('format') || null);
  const [completedTasks, setCompletedTasks] = useState(() => {
    const saved = localStorage.getItem('completedTasks');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); localStorage.setItem('theme', theme); }, [theme]);
  useEffect(() => { localStorage.setItem('lang', lang); }, [lang]);
  useEffect(() => { if (format) localStorage.setItem('format', format); }, [format]);
  useEffect(() => { localStorage.setItem('isPremium', isPremium); }, [isPremium]);
  useEffect(() => { localStorage.setItem('completedTasks', JSON.stringify(completedTasks)); }, [completedTasks]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  const toggleTask = (taskId) => setCompletedTasks(prev => ({ ...prev, [taskId]: !prev[taskId] }));

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, setLang, format, setFormat, completedTasks, toggleTask, isPremium, setIsPremium }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
