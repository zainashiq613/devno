import { useRef } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Steps from '../../assets/svgs/Steps';
import Page from '../../assets/svgs/Page';
import Upward from '../../assets/svgs/Upward';
import Circle from '../../assets/svgs/Circle';
import './flipCard.css';
import Aim from '../../assets/svgs/Aim';
import Location from '../../assets/svgs/Location';
import { FaLocationDot } from 'react-icons/fa6';

gsap.registerPlugin(Flip);

function FlipCard() {
  const imgRefs = useRef([]);

  const cornerPositions = [
    { top: 10, left: 10 },
    { top: 10, left: 'calc(100% - 100px)' },
    { top: 'calc(100% - 100px)', left: 10 },
    { top: 'calc(100% - 100px)', left: 'calc(100% - 100px)' },
  ];

  const moveImages = (toCorners) => {
    const state = Flip.getState(imgRefs.current);

    imgRefs.current.forEach((img, index) => {
      if (toCorners) {
        gsap.set(img, {
          ...cornerPositions[index],
          xPercent: 0,
          yPercent: 0,
        });
      } else {
        gsap.set(img, {
          top: '50%',
          left: '50%',
          xPercent: -50,
          yPercent: -50,
        });
      }
    });

    Flip.from(state, {
      duration: 0.3,
      ease: 'power2.inOut',
      absolute: true,
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { opacity: 0, scale: 0.5, rotate: -20 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.8, ease: 'power2.out' }
        ),
      onLeave: (els) =>
        gsap.to(els, {
          opacity: 0,
          scale: 0.5,
          rotate: 20,
          duration: 0.3,
          ease: 'power2.in',
        }),
    });
  };

  return (
    <div
      className="group cursor-pointer w-full relative transition-transform duration-500 transform"
      onMouseEnter={() => moveImages(true)}
      onMouseLeave={() => moveImages(false)}
    >
      {[<Steps />, <Page />, <Upward />, <Circle />].map((item, index) => (
        <div
          key={index}
          ref={(el) => (imgRefs.current[index] = el)}
          className="shadow-[5px_5px_10px_0px_#A6ABBD40,-5px_-5px_10px_0px_#FAFBFF] p-4 rounded-2xl absolute pointer-events-none z-1"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 1,
            animation: 'wiggle 2s infinite ease-in-out',
            zIndex: 0,
          }}
        >
          {item}
        </div>
      ))}

      <div
        style={{
          boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
        }}
        className="relative w-full bg-white rounded-3xl grid grid-cols-12 gap-4 px-6 py-9 transition-transform duration-500 transform group-hover:scale-70 group-hover:-rotate-x-40 group-hover:-rotate-z-30"
      >
        <div className="flex flex-col col-span-1 gap-3 w-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i} baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
          ))}
        </div>
        <div className="z-2 absolute px-6 py-9 w-full h-full">
          <FaLocationDot
            className={`absolute top-[72px] left-[60px] animate-popUp`}
            fill="#23d8df"
            size={55}
          />
          <FaLocationDot
            className={`absolute top-[72px] right-[60px] animate-popUp`}
            fill="#23d8df"
            size={55}
          />
          <FaLocationDot
            className={`absolute bottom-[72px] right-[60px] animate-popUp`}
            fill="#23d8df"
            size={55}
          />
          <FaLocationDot
            className={`absolute left-[60px] bottom-[75px] animate-popUp`}
            fill="#23d8df"
            size={55}
          />
          <FaLocationDot
            className={`absolute left-[45%] top-[41%] animate-popUp`}
            fill="#23d8df"
            size={55}
          />
        </div>
        <div className="w-full h-full absolute z-2 px-6 py-9">
          <div className="animated-box absolute">
            <Aim />
          </div>
        </div>
        <div className="flex flex-col w-full col-span-11 gap-3">
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i} baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
