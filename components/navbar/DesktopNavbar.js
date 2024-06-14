import Link from 'next/link';

const DesktopNavbar = () => {
  return (
    <>
      <Link href="/" className="hover:text-black hover:bg-white p-2 rounded">
        Home
      </Link>
      <Link href="/projects" className="hover:text-black hover:bg-white p-2 rounded">
        Projects
      </Link>
      <Link href="/about" className="hover:text-black hover:bg-white p-2 rounded">
        About me
      </Link>
      <Link href="/contact" className="hover:text-black hover:bg-white p-2 rounded">
        Contact
      </Link>
    </>
  );
};

export default DesktopNavbar;
