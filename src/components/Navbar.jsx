import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur border-b border-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-extrabold">Vivek Babu</Link>
        <div className="space-x-5 text-sm text-gray-300">
          <Link to="/" className="hover:text-teal-400">Home</Link>
          <Link to="/projects" className="hover:text-teal-400">Projects</Link>
          <Link to="/certificates" className="hover:text-teal-400">Certificates</Link>
          <Link to="/resume" className="hover:text-teal-400">Resume</Link>
        </div>
      </div>
    </nav>
  );
}
