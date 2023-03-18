import './App.css';
import Navbar from './navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
