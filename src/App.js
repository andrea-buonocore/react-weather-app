// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
//components
import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/CustomFooter';
import Home from './components/Home';

function App() {
  return (
    <div className="App mb-5">
      <CustomNavbar/>
      <Home/>
      <CustomFooter/>
    </div>
  );
}

export default App;
