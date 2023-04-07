// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
//components
import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/CustomFooter';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WeatherDetails from './components/WeatherDetails';
function App() {
  return (
    <div className="App mb-5">
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/details" element={<WeatherDetails />} />
        </Routes>
        <CustomFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
