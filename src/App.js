import './App.css';
import { Link } from 'react-router-dom';
import Home from './Home';
import {Route, Routes} from 'react-router';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/Weather'>Weather</Link>
        </nav>
        
      </header>
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/Weather" element={<Weather/>}>Weather App</Route>
      </Routes>
    </div>
  );
}

export default App;
