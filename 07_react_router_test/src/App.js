import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Secret from './components/Secret';
import About from './components/About';
import { Route, Routes, Link, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ul style={{listStyleType:"none"}}>
        <li><Link to="/">Home</Link></li>
        <lu><Link to="/about">About</Link></lu>
        </ul>
        <hr/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Secret" element={<Secret/>}/>
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    </div>
  );
}

export default App;
