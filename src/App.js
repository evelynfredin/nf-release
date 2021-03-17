import Hero from './components/Welcome/Hero';
import Navbar from './components/Navbar';
import Event from './components/Event';
import Album from './components/Album';
import Clouds from './components/Clouds';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="font-body">
            <Hero />
            <Navbar />
            <Event />
            <Clouds />
            <Album />
            <Banner />
            <Switch>
                <Route exact path="/">
                    <Footer />
                </Route>
                <Route path="/rsvp">
                    <Form />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
