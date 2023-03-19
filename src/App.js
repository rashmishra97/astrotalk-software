import './App.css';
import Navbar from './navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Banner from './components/Banner';
import ServicesCarousel from './components/ServicesCarousel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ServicesCarousel />
      <Footer />
    </div>
  );
}

export default App;
