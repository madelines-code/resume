import './App.css';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Home from './Home';
import Footer from './Footer';

function App() {

  return (
    <div className="App" > 
    <Navbar />
    <Home/>
    <Routes>
    <Route path="/resume" element={<Resume />}/>
    <Route path="/portfolio" element={<Portfolio />}/>
    <Route path="/home" element={<Home />}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;