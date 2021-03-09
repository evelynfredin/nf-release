import Hero from './components/Welcome/Hero';
import Navbar from './components/Navbar';
import Event from './components/Event';
import Album from './components/Album';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-body">
        <Hero />
        <Navbar />
        <Event />
        <Album />
        <Footer />
    </div>
  );
}

export default App;
