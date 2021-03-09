import Hero from './components/Welcome/Hero';
import Navbar from './components/Navbar';
import Event from './components/Event';
import Album from './components/Album';
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {
  return (
    <div className="font-body">
        <Hero />
        <Navbar />
        <Event />
        <Album />
        <Banner />
        <Footer />
    </div>
  );
}

export default App;
