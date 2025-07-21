import { useState } from 'react';
// import { Link } from 'react-router-dom';
import Button from '../small/Button';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { Link, useLocation } from 'react-router';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useLocation();
  console.log(pathname);

  const navLinks = [
    { id: '1', link: '', title: 'Home' },
    { id: '2', link: '#process', title: 'Process' },
    { id: '3', link: '#solutions', title: 'Solutions' },
    { id: '4', link: '#services', title: 'Services' },
    { id: '5', link: '#technologies', title: 'Technologies' },
    { id: '6', link: '#about', title: 'About' },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-20 bg-transparent px-5 sm:px-10 lg:px-20 xl:px-[140px] py-4 transition duration-500">
      <div
        className="w-full shadow bg-[#ECEDF1] rounded-[40px] flex items-center justify-between py-3 px-4 
        [box-shadow:inset_0_3px_3px_#6D7AFF40,_inset_0_-3px_8px_#FAFBFF]"
      >
        <img src="/Frame 1000004543.png" alt="Logo" className="h-8 sm:h-10" />

        <div className="hidden lg:flex items-center gap-2.5">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`${item?.link || '#home'}`}
              className={`text-sm px-4 py-2 rounded-3xl ${
                item.link === pathname?.hash
                  ? 'border border-primary text-primary'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden xl:block">
          <Button />
        </div>

        {/* Mobile Menu Icon */}
        <div className="xl:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoClose size={30} /> : <FaBarsStaggered size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-3 bg-[#ECEDF1] rounded-xl shadow p-4 space-y-3 transition-all duration-300 animate-fadeIn">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={`/${link.toLowerCase()}`}
              className="block text-gray-800 hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
          <div className="mt-3">
            <Button />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
