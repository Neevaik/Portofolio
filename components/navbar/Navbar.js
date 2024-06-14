import { useState, useEffect } from 'react';
import Link from 'next/link';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

export default function NavbarComponent() {

  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`p-4 ${isLoaded ? 'transition-loaded' : 'transition-not-loaded'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-4xl font-bold ml-20">
          <span>Kevin</span>
          <span className="text-pink-500">.</span>
        </Link>
        <div className="hidden md:flex space-x-8 mr-100">
          <DesktopNavbar />
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            Menu
          </button>
        </div>
      </div>
      {isOpen && <MobileNavbar closeMenu={closeMenu} />}
    </nav>
  );
}
