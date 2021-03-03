import Hero from './components/Welcome/Hero';
import Navbar from './components/Navbar';
import Event from './components/Event';
import Album from './components/Album';

function App() {
  return (
    <div className="font-body">
        <Hero />
        <Navbar />
        <Event />
        <Album />
    </div>
  );
}

export default App;
