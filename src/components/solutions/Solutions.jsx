import React from 'react';
import Button from '../../components/small/Button';
import './solutions.css';

function Solutions() {
  const collabApps = [
    { id: '1', icon: '/robotic-process-automation_14511501 1.png', name: 'Automation' },
    { id: '2', icon: '/automation_7096309 1.png', name: 'Bot' },
    { id: '3', icon: '/build_17352824 1.png', name: 'Build' },
    { id: '4', icon: '/clock_15258668 1.png', name: 'Clock' },
    { id: '5', icon: '/cloud-computing_291553 1.png', name: 'Cloud' },
    { id: '6', icon: '/web-coding_4834819 1.png', name: 'Coding' },
  ];

  const ref = useRef();

  const handleScroll = () => {
    if (ref.current) {
      ref.current.scrollBy({
        top: 350,
        behavior: 'smooth',
      });
    }
  };

  const backScroll = () => {
    if (ref.current) {
      ref.current.scrollBy({
        top: -350,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="">
      <div className="grid grid-cols-2 gap-8">
        <div
          style={{
            boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
          }}
          className="bg-[#ECEDF1] col-span-2 lg:col-span-1 py-15 flex flex-col px-7 gap-8 justify-center items-center rounded-3xl"
        >
          <div className="relative w-[316px] aspect-square rounded-xl flex items-center justify-center">
            <div
              style={{
                boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
              }}
              className="px-5 py-5 bg-[#ECEDF1] rounded-xl flex items-center justify-center z-10 transition-all transform duration-300 hover:scale-120 cursor-pointer"
            >
              <img src={'/public/Frame 1171274976.png'} alt="brainwave" />
            </div>
            <ul className="absolute inset-0">
              {collabApps.map((item, index) => {
                const angle = index * (360 / collabApps.length);
                return (
                  <>
                    <div
                      style={{ transform: `rotate(${angle + 30}deg)` }}
                      className="absolute flex gap-1 top-0 h-full w-[9px] left-1/2"
                    >
                      {[...Array(2)].map((_, pulseIndex) => (
                        <div className="h-full w-full bg-[#D9D9D9]">
                          <div
                            key={pulseIndex}
                            className="absolute top-0 w-[3px] h-[31px] bg-[linear-gradient(180deg,_#6B79FF_0%,_rgba(255,255,255,0)_100%)]"
                            style={{
                              top: '0%',
                              animation: `scroll-up 3s linear infinite`,
                              animationDelay: `0s`,
                            }}
                          ></div>
                        </div>
                      ))}
                    </div>

                    <li
                      key={item.id}
                      className="bg-[#ECEDF1] z-2 absolute"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg) translate(-50%, -50%)`,
                      }}
                    >
                      <div
                        style={{
                          boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
                        }}
                        className="flex px-5 py-5 rounded-xl items-center justify-center transition-all transform duration-300 hover:scale-120 cursor-pointer"
                      >
                        <img src={item.icon} alt={item.name} />
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-lg md:text-xl font-semibold">Process automation</p>
            <p className="lg:text-base text-sm">
              We analyze your processes and implement tailored workflows to automate tasks and
              optimize operations efficiently.
            </p>
          </div>
        </div>
        <div
          style={{
            boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
          }}
          className="bg-[#ECEDF1] col-span-2 lg:col-span-1 py-12 flex flex-col px-7 gap-8 justify-center items-center rounded-3xl"
        >
          <div
            onMouseEnter={handleScroll}
            onMouseLeave={backScroll}
            className="rounded-3xl group cursor-pointer w-full relative"
          >
            <div className="mx-auto p-4 flex flex-col justify-between">
              <div ref={ref} className="flex flex-col pt-15 h-[240px] overflow-hidden gap-12">
                <div className="bg-indigo-500 text-white p-3 rounded-2xl self-start max-w-[80%] shadow">
                  Hi! How can I help you?
                </div>
                <div className="bg-white text-gray-800 p-3 rounded-2xl self-end max-w-[80%] shadow">
                  Hi, can you tell me about Lucy- Medical Software solution?
                </div>
                <div className="bg-indigo-500 text-white p-3 rounded-2xl self-start max-w-[80%] shadow">
                  Sure, We’ve built an advanced healthcare software solution,
                  <br />
                  meticulously crafted for today’s medical practitioners.
                </div>
              </div>

              <div className="flex items-center bg-[#ECEDF1] px-2 py-2 rounded-full mt-6 shadow [box-shadow:inset_0_3px_3px_#6D7AFF40,_inset_0_-3px_8px_#FAFBFF]">
                <input
                  type="text"
                  className="flex-1 border-none outline-none bg-transparent px-3 text-sm"
                  disabled
                />
                <button className="text-indigo-500 p-5 rounded-full bg-white text-xl cursor-not-allowed">
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg md:text-xl font-semibold">Quick Response</p>
            <p className="lg:text-base text-sm">
              Delivering swift solutions with our quick response team for all your software needs!
            </p>
          </div>
        </div>
        <SubmitAnimation
          title={'Personalized solutions'}
          desc={
            'Get personalized software solutions tailored to your unique business needs, ensuring precision and efficiency.'
          }
        />
        <div
          style={{
            boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
          }}
          className="bg-[#ECEDF1] col-span-2 lg:col-span-1 py-12 flex flex-col px-7 gap-8 justify-center items-center rounded-3xl"
        >
          <HoverIconsWithShapes />

          <div className="flex flex-col gap-2">
            <p className="text-lg md:text-xl font-semibold">Innovative solutions</p>
            <p className="lg:text-base text-sm">
              Unlock the future with innovative software solutions designed to drive growth and
              efficiency for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Skeleton from 'react-loading-skeleton';
import { CiLinkedin, CiTwitter } from 'react-icons/ci';
import { PiYoutubeLogo } from 'react-icons/pi';
import { ImNewspaper } from 'react-icons/im';
import { div } from 'framer-motion/client';
import SubmitAnimation from './SubmitAnimation';
import { FaPaperPlane } from 'react-icons/fa6';

export function HoverIconsWithShapes() {
  const [hovered, setHovered] = useState(false);
  const iconsRef = useRef([]);
  const containerRef = useRef(null);
  const shapesRef = useRef([]);

  useEffect(() => {
    if (hovered) {
      // Move the main container down
      gsap.to(containerRef.current, {
        y: 170,
        duration: 0.3,
        ease: 'power2.out',
      });

      // Animate icons up
      gsap.to(iconsRef.current[0], {
        y: -100,
        opacity: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        duration: 0.5,
      });
      gsap.to(iconsRef.current[1], {
        y: -125,
        opacity: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        duration: 0.5,
      });
      gsap.to(iconsRef.current[2], {
        y: -125,
        opacity: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        duration: 0.5,
      });
      gsap.to(iconsRef.current[3], {
        y: -100,
        opacity: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        duration: 0.5,
      });

      // Animate extra shapes up with scale
      gsap.to(shapesRef.current[0], {
        y: 20,
        scale: 1,
        opacity: 1,
        stagger: 0.15,
        ease: 'elastic.out(1, 0.5)',
        duration: 0.5,
      });

      gsap.to(shapesRef.current[1], {
        y: -20,
        scale: 1,
        opacity: 1,
        stagger: 0.15,
        ease: 'elastic.out(1, 0.5)',
        duration: 0.5,
      });
    } else {
      // Reset container position
      gsap.to(containerRef.current, {
        y: 0,
        duration: 0.3,
        ease: 'power2.inOut',
      });

      // Animate icons back to center & hide
      gsap.to(iconsRef.current, {
        y: 0,
        opacity: 0,
        stagger: 0.05,
        ease: 'power2.inOut',
        duration: 0.3,
      });

      // Hide shapes
      gsap.to(shapesRef.current, {
        y: 0,
        scale: 0.5,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.inOut',
        duration: 0.3,
      });
    }
  }, [hovered]);

  const icons = [
    <CiLinkedin size={40} key={'linkedin'} />,
    <PiYoutubeLogo size={40} key={'youtube'} />,
    <ImNewspaper size={40} key={'news'} />,
    <CiTwitter size={40} key={'twitter'} />,
  ];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center cursor-pointer overflow-hidden justify-center w-full"
    >
      <div
        style={{
          boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
        }}
        ref={containerRef}
        className="bg-[#ECEDF1] border border-[#89898938] rounded-2xl p-5 w-full flex flex-col gap-2.5  relative z-10"
      >
        <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
        <div className="grid grid-cols-8 gap-5 grid-rows-3">
          <div className="col-span-3 row-span-3">
            <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'100%'} />
          </div>
          <div className="col-span-5 row-span-3 flex flex-col gap-2.5">
            <div className="grid grid-cols-3 gap-5">
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
            </div>
            <div className="grid grid-cols-4 gap-5">
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
              <div className="col-span-2">
                <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
              </div>
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
            </div>
            <div className="grid grid-cols-3 gap-5">
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
            </div>
            <div className="grid grid-cols-4 gap-5">
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
              <div className="col-span-2">
                <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
              </div>
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-5 grid-rows-3">
          <div className="col-span-5 row-span-3 flex flex-col gap-2.5">
            <div className="grid grid-cols-3 gap-5">
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
            </div>
            <div className="grid grid-cols-4 gap-5">
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
              <div className="col-span-2">
                <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
              </div>
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
            </div>
            <div className="grid grid-cols-3 gap-5">
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
            </div>
            <div className="grid grid-cols-4 gap-5">
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
              <div className="col-span-2">
                <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
              </div>
              <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'15px'} />
            </div>
          </div>
          <div className="col-span-3 row-span-3">
            <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height={'100%'} />
          </div>
        </div>
      </div>

      <div className="absolute flex gap-3 z-0">
        {icons.map((Icon, index) => (
          <div
            key={index}
            style={{
              boxShadow: '8px 8px 20px 0px #A6ABBD40, -2px -2px 15px 0px #FAFBFF',
            }}
            ref={(el) => (iconsRef.current[index] = el)}
            className="rounded-full p-3 sm:px-6 sm:py-6 text-black opacity-0"
          >
            {Icon}
          </div>
        ))}
      </div>

      <div className="absolute flex flex-col items-center w-full -space-y-3 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          ref={(el) => (shapesRef.current[0] = el)}
          className="w-[80%] border border-[#89898938] h-20 bg-[#ECEDF1] rounded-3xl opacity-0 scale-50"
        />
        <div
          ref={(el) => (shapesRef.current[1] = el)}
          className="w-[90%] border border-[#89898938] h-20 bg-[#ECEDF1] rounded-3xl opacity-0 scale-50"
        />
      </div>
    </div>
  );
}
