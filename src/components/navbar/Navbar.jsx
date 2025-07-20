import { Link } from 'react-router';
import Button from '../small/Button';
import { FaBarsStaggered } from 'react-icons/fa6';

function Navbar() {
  return (
    <div className="w-full lg:px-[80px] py-4 xl:px-[140px] px-[20px] transition duration-500 fixed top-0 left-0 flex items-center justify-between z-10">
      <div className="w-full shadow bg-[#ECEDF1] rounded-[40px] flex items-center justify-between [box-shadow:inset_0_3px_3px_#6D7AFF40,_inset_0_-3px_8px_#FAFBFF] py-3 px-4">
        <img src="/Frame 1000004543.png" alt="" />
        <div className="hidden lg:flex items-center gap-2.5">
          <Link className="text-sm px-7 py-3 border border-primary rounded-3xl text-primary">
            Home
          </Link>
          <Link className="text-sm px-7 py-3">Process</Link>
          <Link className="text-sm px-7 py-3">Solutions</Link>
          <Link className="text-sm px-7 py-3">Services</Link>
          <Link className="text-sm px-7 py-3">Technologies</Link>
          <Link className="text-sm px-7 py-3">About</Link>
        </div>
        <div className="hidden xl:block">
          <Button />
        </div>
        <div className="xl:hidden">
          <FaBarsStaggered size={30} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
