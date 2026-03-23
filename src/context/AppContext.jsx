import { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Premium state (for testing/unlocking)
  const [isPremium, setIsPremium] = useState(() => {
    return localStorage.getItem('isPremium') === 'true';
  });

  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // Language state
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'es';
  });

  // Format selection (null, 'Digital', 'Físico', 'Ambos')
  const [format, setFormat] = useState(() => {
    return localStorage.getItem('format') || null;
  });

  // Completed tasks: object with task IDs as keys
  const [completedTasks, setCompletedTasks] = useState(() => {
    const saved = localStorage.getItem('completedTasks');
    return saved ? JSON.parse(saved) : {};
  });

  // Apply theme to body
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Persist language
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Persist format
  useEffect(() => {
    if (format) localStorage.setItem('format', format);
  }, [format]);

  // Detect Stripe payment success redirect (?payment=success)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('payment') === 'success') {
      setIsPremium(true);
      localStorage.setItem('isPremium', 'true');
      window.history.replaceState({}, '', window.location.pathname);
      setTimeout(() => {
        alert('🎉 ¡Pago confirmado! Todo el contenido ha sido desbloqueado. ¡Gracias por unirte a Premium!');
      }, 500);
    }
  }, []);

  // Persist premium status
  useEffect(() => {
    localStorage.setItem('isPremium', isPremium);
  }, [isPremium]);

  // Persist completed tasks
  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  const toggleTask = (taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  return (
    <AppContext.Provider value={{
      theme, toggleTheme,
      lang, setLang,
      format, setFormat,
      completedTasks, toggleTask,
      isPremium, setIsPremium
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
