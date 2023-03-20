import './App.css'
import Navbar from './navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

import RechargeCheckout from './RechargeCheckout'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Login from './components/Login'

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
          <Route path="/recharge" element={<RechargeCheckout />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
