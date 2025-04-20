import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './component/navbar.css';
import './component/Login.css';
import './component/Breakfast.css'
import logo from './assets/img2.png';
import loginImage from './assets/login-logo.png';

import Navbar from './component/Navbar';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import Service from './component/Service';
import Menu from './component/Menu';
import Lunch from './component/Lunch';
import Breakfast from './component/Breakfast';
import Sweet from './component/Sweet';
import Login from './component/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar logo={logo} />
      
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default Home route */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/sweet" element={<Sweet />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/login" element={<Login loginImage={loginImage} />} /> {/* Login page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
