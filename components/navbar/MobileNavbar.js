import Link from 'next/link';

const MobileNavbar = ({ closeMenu }) => {
  return (
    <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-3/4 bg-black bg-opacity-90 p-4 z-50 rounded-lg shadow-lg">
      <div className="flex flex-col space-y-2">
        <Link href="/" className="py-2 border-b border-gray-600 hover:text-black hover:bg-white p-2 rounded" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/projects" className="py-2 border-b border-gray-600 hover:text-black hover:bg-white p-2 rounded" onClick={closeMenu}>
          Projects
        </Link>
        <Link href="/about" className="py-2 border-b border-gray-600 hover:text-black hover:bg-white p-2 rounded" onClick={closeMenu}>
          About me
        </Link>
        <Link href="/contact" className="py-2 hover:text-black hover:bg-white p-2 rounded" onClick={closeMenu}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
