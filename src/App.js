import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Palmares from './pages/Palmares';
import Fans from './pages/Fans';
// import FormationView from './pages/FormationView';
import PlayerDetail from './pages/PlayerDetail';
import SplashScreen from './components/SplashScreen';
import Presidents from './pages/Presidents';
import Contact from './pages/Contact';
import './App.css';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); //3 secondes
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">Wydad AC</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">Accueil</Link>
              <Link className="nav-link" to="/team">Équipe</Link>
              <Link className="nav-link" to="/palmares">Palmarès</Link>
              {/* <Link className="nav-link" to="/formation">Formation</Link> */}
              <Link className="nav-link" to="/fans">Fans</Link>
              <Link className="nav-link" to="/presidents">Présidents</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        {/* <Route path="/formation" element={<FormationView />} /> */}
        <Route path="/palmares" element={<Palmares />} />
        <Route path="/fans" element={<Fans />} />
        <Route path="/player/:id" element={<PlayerDetail />} />
        <Route path="/presidents" element={<Presidents />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;