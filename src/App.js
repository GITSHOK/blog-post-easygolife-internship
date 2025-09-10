// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Posts from "./pages/Posts";
import About from "./pages/About";
import ContactForm from "./pages/ContactForm";
import Post from "./pages/Post";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/post/:id" element={<Post/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
