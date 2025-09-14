// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Posts from "./pages/Posts";
import About from "./pages/About";
import ContactForm from "./pages/ContactForm";
import Post from "./pages/Post";
import "./App.css";

// Background component with different animations for each route
function Background() {
  const location = useLocation();
  
  return (
    <div className={`background ${location.pathname === '/' ? 'home-bg' : ''} 
                    ${location.pathname === '/about' ? 'about-bg' : ''} 
                    ${location.pathname === '/contact' ? 'contact-bg' : ''}`}>
      <div className="background-animation"></div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Background />
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/post/:id" element={<Post/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;