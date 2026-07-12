import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Market from './pages/Market';
import Kitchen from './pages/Kitchen';
import Sales from './pages/Sales';
import Catering from './pages/Catering';
import Pickup from './pages/Pickup';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/market" element={<Market />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/cafe" element={<Navigate to="/kitchen" replace />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/pickup" element={<Pickup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
