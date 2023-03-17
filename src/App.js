import './App.css';
import Banner from './navbar/Banner';
import Navbar from './navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderComponent from './SliderComponent';
import BannerCards from './components/BannerCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <SliderComponent />
      <BannerCards />
      <Footer />
    </div>
  );
}

export default App;
