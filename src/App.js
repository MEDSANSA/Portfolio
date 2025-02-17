import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Resume from './Components/Resume';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="main">
      <Header />
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Footer />
    </main>
  );
}

export default App;
