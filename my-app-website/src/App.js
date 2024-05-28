import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import AboutMe from './components/aboutMe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;
