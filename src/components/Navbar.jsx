import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-center items-center">
      <div className="space-x-4">
        <Link to="/" className="hover:text-teal-400">Home</Link>
        <Link to="/projects" className="hover:text-teal-400">Projects</Link>
        <Link to="/certificates" className="hover:text-teal-400">Certificates</Link>
        <Link to="/resume" className="hover:text-teal-400">Resume</Link>
      </div>
    </nav>
  );
}
