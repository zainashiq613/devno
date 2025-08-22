import { FaStar } from 'react-icons/fa';
import Button from '../small/Button';

function Hero() {
  return (
    <div id="home" className="hero h-[100vh] flex items-center pt-20 justify-center">
      <div className="flex flex-col gap-8 lg:gap-12 items-center">
        <div className="flex flex-col gap-4 lg:gap-6">
          <h1 className="text-3xl lg:text-6xl text-center text-[#176aea] font-semibold">
            Where Innovation Meets <br />
            <span className="text-primary">Excellence</span>
          </h1>
          <p className="text-[#4D4D4D] lg:text-lg text-sm text-center max-w-[1000px] font-normal">
            Combining our passion for innovation with a commitment to excellence, we craft custom
            software solutions that exceed your expectations and propel your business to new
            heights.
          </p>
        </div>
        <div>
          <Button text={'Book A Call'} />
        </div>
        <div className="flex flex-wrap items-center lg:justify-normal justify-center gap-5">
          <div
            className="flex items-center space-x-[-10px] p-2 bg-white rounded-full 
            [box-shadow:5px_5px_10px_#6D7AFF40,_-5px_-5px_10px_#FAFBFF]"
          >
            <img
              src="/5P0eN6qtSxQg8Lrk6rw2GR9e7eI.jpg.png"
              alt="Avatar 1"
              className="rounded-full border-2 border-white"
            />
            <img
              src="/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg.png"
              alt="Avatar 2"
              className="rounded-full border-2 border-white"
            />
            <img
              src="/iABb6ejla3A5ZzE4zgxiPqBaYHI.jpg.png"
              alt="Avatar 3"
              className="rounded-full border-2 border-white"
            />
            <img
              src="/LsJGvkbYbF1y4ifkFrjeNfRfzYM.jpg.png"
              alt="Avatar 4"
              className="rounded-full border-2 border-white"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="flex gap-1 items-center text-primary">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              Loved by <span className="text-primary">60+ clients</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
