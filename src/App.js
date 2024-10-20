import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { GlobalStyle } from './components/style/globalStyle';  // Import the GlobalStyle

import {
  BrowserRouter as Router, // Correct import: BrowserRouter, not BrowserRoute
  Routes, 
  Route, 
} from "react-router-dom"; 

import Home from "./pages/index";
import Create from "./pages/create";
import Show from "./pages/show";

function App() {
  return (
     <Router>
            <GlobalStyle />  {/* Apply the global styles */}

      <Navbar />
      <Routes>
        <Route path="/index" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/show" element={<Show />} />
      </Routes>
     </Router>
  );
}

export default App;
