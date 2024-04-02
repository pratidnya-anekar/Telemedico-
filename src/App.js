
import './App.css';
import Navbar from "./componet/Navbar";
import Home from "./componet/Home";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>
        <Navbar />
        <Home />
        </div>
    </Router>
    
  );
}

export default App;
