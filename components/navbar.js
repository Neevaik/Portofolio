import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/"className="text-xl font-bold">Kev.</Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/">Accueil</Link>
          <Link href="/projects">Projets</Link>
          <Link href="/about">À propos</Link>
          <Link href="/contact">Contact</Link>
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
          <Link href="/" className="py-2 border-b border-gray-600">Accueil</Link>
          <Link href="/projects" className="py-2 border-b border-gray-600">Projets</Link>
          <Link href="/about" className="py-2 border-b border-gray-600">À propos</Link>
          <Link href="/contact" className="py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
}
