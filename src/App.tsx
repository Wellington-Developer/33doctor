// Styles
import './App.css';

// Components
import { Header } from './components/Header';

// React Default Components
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components';
import { ChangedPage } from './components/ChangedPage';
import { NotFound } from './components/NotFound';
import { SinglePageProduct } from './components/SinglePageProduct';
import { Footer } from './components/Footer';
import { AboutUs } from './components/AboutUs';
import { PrivacyPolicy } from './components/PrivacyPolicy';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/pages/:id" element={ <ChangedPage /> } />
          <Route path="/*" element={<NotFound />} />
          <Route path="/singlepage/:id" element={<SinglePageProduct />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
