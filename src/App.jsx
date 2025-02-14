import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import Home from "./components/home";
import Navbar from "./components/NavBar";
import Footer from "./components/footer";
import Learn from "./components/learnmore";
import Blog from "./components/techblog";
import ApiDocBlog from "./components/api-documentation";
import OpenSourceBlog from "./components/open-source";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Learn />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/docs" element={<ApiDocBlog />} />
            <Route path="/opensource" element={<OpenSourceBlog />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
