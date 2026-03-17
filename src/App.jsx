import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Onboarding from './components/Onboarding';
import Roadmap from './components/Roadmap';
import ResourcesDashboard from './components/ResourcesDashboard';
import Footer from './components/Footer';
import { useAppContext } from './context/AppContext';
import './index.css';

function App() {
  const { format } = useAppContext();

  return (
    <div className="app-layout">
      <Header />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={!format ? <Onboarding /> : <Roadmap />} />
          <Route path="/recursos" element={<ResourcesDashboard />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
