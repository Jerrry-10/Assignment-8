import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Secondpage from './components/Secondpage';
import Navbar from './components/Navbar';
import Third from './components/Thridpage';
function App() {
  return (
    <Router>
     <Navbar/>
      <div>
        <Routes>

          <Route exact path = "/" element = { <Home/> }  />
          <Route exact path = "/Second" element = { <Secondpage/> }  />
          <Route exact path = "/Third" element = { <Third/> }  />

        </Routes>
      </div>

    </Router>
  );
}

export default App;
