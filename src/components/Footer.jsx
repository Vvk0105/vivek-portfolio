import React from 'react'

function Footer() {
  return (
      <footer className="bg-gray-900 text-gray-400 py-6 mt-auto border-t border-t-gray-700">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="flex gap-6">
            <a
              href="https://github.com/Vvk0105"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
            <a
              href="mailto:vivekbabu0105@gmail.com"
              className="hover:text-white"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-babu-151442248/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
  )
}

export default Footer
