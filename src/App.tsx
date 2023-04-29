import './App.css';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { useEffect } from 'react';

// Aos
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init({ duration: 900 })
  }, []);

  return (
    <div className="App">
      <Header />
      <Intro />
    </div>
  );
}

export default App;
