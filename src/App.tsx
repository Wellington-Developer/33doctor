// Styles
import './App.css';

// Components
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { About } from './components/About';
import { Banner } from './components/Banner';

// React Default Components
import { Testimonials } from './components/Testimonials';
import { SlideServices } from './components/SlideServices';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <SlideServices />
      <About />
      <Banner />
      <Testimonials />
    </div>
  );
}

export default App;
