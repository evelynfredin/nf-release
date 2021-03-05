import Hero from './components/Welcome/Hero';
import Navbar from './components/Navbar';
import Event from './components/Event';
import Album from './components/Album';
import Clouds from './components/Clouds';

function App() {
  return (
    <div className="font-body">
        <Hero />
        <Navbar />
        <Clouds />
        <Event />
        <Album />
    </div>
  );
}

export default App;
