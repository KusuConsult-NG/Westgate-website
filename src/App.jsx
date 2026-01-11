import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Insights from './pages/Insights';
import Services from './pages/Services';
import ServiceAI from './pages/services/ServiceAI';
import ServiceTraining from './pages/services/ServiceTraining';
import ServiceStrategy from './pages/services/ServiceStrategy';
import ServiceAdvisory from './pages/services/ServiceAdvisory';
import Portal from './pages/Portal';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ai" element={<ServiceAI />} />
          <Route path="/services/training" element={<ServiceTraining />} />
          <Route path="/services/strategy" element={<ServiceStrategy />} />
          <Route path="/services/advisory" element={<ServiceAdvisory />} />
          <Route path="/portal" element={<Portal />} />
        </Route>
        {/* Catch all - 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
