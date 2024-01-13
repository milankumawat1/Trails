import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Popular from './Components/Categories/Popular';
import Quick from './Components/QuickGateways/Quick';
import Valentines from './Components/Categories/Valentines';
import Visa from './Components/Categories/Visa';
import Middleeast from './Components/Categories/Middleeast';
import Tourism from './Components/Categories/Tourism';
import Oceania from './Components/Categories/Oceania';
import European from './Components/Categories/European';
import SouthEast from './Components/Categories/SouthEast';
import Scandinavia from './Components/Categories/Scandinavia';
import Guide from './Components/Categories/Guide';
import ExplorationFar from './Components/QuickGateways/ExplorationFar';
import VacationAll from './Components/VacationForAll/VacationAll';
import Budget from './Components/Budget/Budget';
import Picadvertisement from './Components/Advertisement/Picadvertisement';
import Videosadvertisement from './Components/Advertisement/Videosadvertisement';
import Footer from './Components/Footer/Footer';
import Press from './Components/TabandTour/Press';
import Card from './Components/Card/Card'
import Testimonial from './Components/Testimonials/Testimonial';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from './Components/Card/Data';
function App() {
  return (
    <Router className="App">
      <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<>
          <Hero />
          <Popular />
          <Valentines />
          <Visa />
          <Quick />
          <VacationAll />
          <ExplorationFar />
          <Middleeast />
          <Videosadvertisement />
          <Tourism />
          <Oceania />
          <European />
          <Budget />
          <SouthEast />
          <Picadvertisement />
          <Scandinavia />
          <Guide />
          <Press />
          <Footer />
        </>} />

       
        
      <Route path="/category/:category" element={<Card data={data} />} />

      <Route path="/testimonial" element={<Testimonial />} />
    </Routes>
    
    </Router>
  );
}

export default App;
