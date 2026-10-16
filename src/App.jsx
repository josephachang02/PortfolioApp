import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollManager from './components/ScrollManager.jsx';
import Home from './pages/Home.jsx';
import GIS from './pages/GIS.jsx';
import UrbanPlanning from './pages/UrbanPlanning.jsx';
import Software from './pages/Software.jsx';
import Experience from './pages/Experience.jsx';
import NotFound from './pages/NotFound.jsx';

// Route paths match the original site so existing links keep working
export default function App() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/GIS" element={<GIS />} />
          <Route path="/UrbanPlanning" element={<UrbanPlanning />} />
          <Route path="/software-engineering" element={<Software />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
