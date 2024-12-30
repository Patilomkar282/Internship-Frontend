
import './App.css';
import Navbar from './Components/navbar';
import Hero from './Components/hero';
import Features from './Components/feature';
import CustomerTestimonials from './Components/testimonial';
import HeroSection from './Components/bottom';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Features/>
      <CustomerTestimonials/>
      <HeroSection/>
      <Footer/>
      

    </div>
   
   
  );
}

export default App;
