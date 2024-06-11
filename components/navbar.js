import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-4xl font-bold ml-20">
            <span>Kevin</span>
            <span className="text-red-500">.</span>
          </Link>
          <div className="hidden md:flex space-x-8 mr-100">
            <Link href="/" className="hover:text-black hover:bg-white p-2 rounded">Accueil</Link>
            <Link href="/projects" className="hover:text-black hover:bg-white p-2 rounded">Projets</Link>
            <Link href="/about" className="hover:text-black hover:bg-white p-2 rounded">Skills</Link>
            <Link href="/contact" className="hover:text-black hover:bg-white p-2 rounded">Contact</Link>
          </div>

          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              Menu
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2 flex flex-col space-y-2 p-4 rounded-lg">
            <Link href="/" className="py-2 border-b border-gray-600 hover:text-black hover:bg-white p-2 rounded">Accueil</Link>
            <Link href="/projects" className="py-2 border-b border-gray-600 hover:text-black hover:bg-white p-2 rounded">Projets</Link>
            <Link href="/about" className="py-2 border-b border-gray-600 hover:text-black hover:bg-white p-2 rounded">À propos</Link>
            <Link href="/contact" className="py-2 hover:text-black hover:bg-white p-2 rounded">Contact</Link>
          </div>
        )}
      </nav>

    </>
  );
}
