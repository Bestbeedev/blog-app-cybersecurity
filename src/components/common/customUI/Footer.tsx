import { SiFacebook, SiLinkedin } from 'react-icons/si';
export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-semibold">Cybersecurity & IT Resources</h2>
          <p className="text-sm mt-2">
            Master cybersecurity and IT with our dedicated resources.
          </p>
        </div>
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="#" className="hover:text-gray-400">Blog Articles</a>
          <a href="#" className="hover:text-gray-400">Training</a>
          <a href="#" className="hover:text-gray-400">Digital Products</a>
          <a href="#" className="hover:text-gray-400">Physical Products</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-400">
            <SiFacebook size={24} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
            <SiLinkedin size={24} />
          </a>
        </div>
      </div>
      <div className="mt-6 text-center text-sm">
        © {new Date().getFullYear()} Cybersecurity & IT Resources. All rights reserved.
      </div>
    </footer>
  );
}

