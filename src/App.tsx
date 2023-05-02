// Styles
import './App.css';

// Components
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { About } from './components/About';
import { Banner } from './components/Banner';

// React Default Components
import { useEffect } from 'react';

// Aos
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Testimonials } from './components/Testimonials';

function App() {
  useEffect(() => {
    Aos.init({ duration: 900 })
  }, []);

  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Banner />
      <Testimonials />
    </div>
  );
}

export default App;
