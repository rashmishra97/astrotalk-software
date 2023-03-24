import './App.css'
import Navbar from './navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
// import RechargeCheckout from './RechargeCheckout'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Login from './components/Login'
import AstroList from './pages/AstroList'
import Profile from './pages/Profile'
import AddToWallet from './pages/AddToWallet'
import PaymentDetails from './components/PaymentDetails'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Footer />} />
          <Route path="/terms" element={<Footer />} />
          <Route path="/privacy" element={<Footer />} />
          <Route path="/forgotPassword" element={<Footer />} />
          <Route path="/changePassword" element={<Footer />} />
          <Route path="/addtowallet" element={<AddToWallet />} />
          <Route path="/list" element={<AstroList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/paymentdetails" element={<PaymentDetails />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
