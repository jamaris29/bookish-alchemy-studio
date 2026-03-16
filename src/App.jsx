import React from 'react';
import Header from './components/Header';
import Onboarding from './components/Onboarding';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import { useAppContext } from './context/AppContext';
import './index.css';

function App() {
  const { format } = useAppContext();

  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        {!format ? <Onboarding /> : <Roadmap />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
