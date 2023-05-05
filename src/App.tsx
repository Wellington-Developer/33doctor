// Styles
import './App.css';

// Components
import { Header } from './components/Header';

// React Default Components
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components';
import { ChangedPage } from './components/ChangedPage';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/pages/:id" element={ <ChangedPage /> } />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
