import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0b0f19] text-[#e2e8f0] antialiased">
        {/* Sleek Floating Header */}
        <Navbar />
        
        {/* Main Content Area with padding for the fixed navbar */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
