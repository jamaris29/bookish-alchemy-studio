import { Routes, Route } from 'react-router-dom';
import { useAppContext } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Onboarding from './components/Onboarding';
import Roadmap from './components/Roadmap';
import ResourcesDashboard from './components/ResourcesDashboard';
import TalentBank from './components/TalentBank';

const App = () => {
  const { format } = useAppContext();

  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        {!format ? (
          <Onboarding />
        ) : (
          <Routes>
            <Route path="/" element={<Roadmap />} />
            <Route path="/recursos" element={<ResourcesDashboard />} />
            <Route path="/talentos" element={<TalentBank />} />
          </Routes>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
