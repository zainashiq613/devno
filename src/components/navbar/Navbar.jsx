import { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
import Button from '../small/Button';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { useLocation } from 'react-router';
import { GoArrowUpRight } from 'react-icons/go';

function Navbar({ setShowContactForm }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useLocation();
  console.log(pathname);

  const navLinks = [
    { id: '1', link: '#home', title: 'Home' },
    { id: '2', link: '#process', title: 'Process' },
    { id: '3', link: '#solutions', title: 'Solutions' },
    { id: '4', link: '#services', title: 'Services' },
    { id: '5', link: '#technologies', title: 'Technologies' },
    { id: '6', link: '#about', title: 'About' },
  ];

  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="w-full fixed top-0 left-0 z-20 bg-transparent px-5 sm:px-10 lg:px-20 xl:px-[140px] py-4 transition duration-500 flex flex-col items-center justify-center">
      <div
        className="w-full max-w-[1512px] shadow bg-white rounded-[40px] flex items-center justify-between py-3 px-4 
        [box-shadow:inset_0_1px_8px_#6D7AFF40,_inset_0_-1px_3px_#6D7AFF40]"
      >
        <img src="/devno-logo.png" alt="Logo" className="h-8 sm:h-10" />

        <div className="hidden lg:flex items-center gap-2.5">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`${item?.link || '#home'}`}
              className={`text-sm px-4 py-2 rounded-3xl ${
                (!pathname?.hash && item.link === '#home') || item.link === pathname?.hash
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
          <a
            href="#contact"
            className="bg-primary cursor-pointer hover:bg-black transition-all duration-500 text-white px-6 py-3 rounded-3xl text-base [box-shadow:5px_5px_10px_0px_#A6ABBD80,_-5px_-5px_10px_0px_#FAFBFF]"
            onClick={() => setShowContactForm(true)}
          >
            Book A Call
          </a>
          {/* <Button text={'Book A Call'} /> */}
        </div>

        <a
          href="#contact"
          onClick={() => setShowContactForm(true)}
          className="hidden lg:block xl:hidden !bg-primary rounded-full p-2"
        >
          <GoArrowUpRight fill="white" size={30} />
        </a>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoClose size={30} /> : <FaBarsStaggered size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden w-full mt-3 bg-[#ECEDF1] rounded-xl shadow p-4 space-y-3 transition-all duration-300 animate-fadeIn"
        >
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              href={`${item?.link || '#home'}`}
              className="block text-gray-800 hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}
          <div className="mt-3">
            <Button text={'Book A Call'} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
