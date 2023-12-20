import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/footer';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import { useTheme } from './components/utils/ThemeContext';
import './App.scss';

function App() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar />
      <About />
      <Cards />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
