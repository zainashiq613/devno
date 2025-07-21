import React from 'react';

function Solutions() {
  const collabApps = [
    { id: '1', icon: '/robotic-process-automation_14511501 1.png', name: 'Automation' },
    { id: '2', icon: '/automation_7096309 1.png', name: 'Bot' },
    { id: '3', icon: '/build_17352824 1.png', name: 'Build' },
    { id: '4', icon: '/clock_15258668 1.png', name: 'Clock' },
    { id: '5', icon: '/cloud-computing_291553 1.png', name: 'Cloud' },
    { id: '6', icon: '/web-coding_4834819 1.png', name: 'Coding' },
  ];

  return (
    <section className="">
      <div className="grid grid-cols-2 gap-8 items-center">
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
              className="w-20 h-20 rounded-xl flex items-center justify-center z-10"
            >
              <img
                src={'/5P0eN6qtSxQg8Lrk6rw2GR9e7eI.jpg.png'}
                alt="brainwave"
                className="w-16 h-16"
              />
            </div>
            <ul className="absolute inset-0">
              {collabApps.map((item, index) => {
                const angle = index * (360 / collabApps.length);
                return (
                  <li
                    key={item.id}
                    className="absolute"
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
                      className="flex w-12 h-12 rounded-xl items-center justify-center"
                    >
                      <img className="w-8 h-8" src={item.icon} alt={item.name} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold">Process automation</p>
            <p className="text-base">
              We analyze your processes and implement tailored workflows to automate tasks and
              optimize operations efficiently.
            </p>
          </div>
        </div>
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
              className="w-20 h-20 rounded-xl flex items-center justify-center z-10"
            >
              <img
                src={'/5P0eN6qtSxQg8Lrk6rw2GR9e7eI.jpg.png'}
                alt="brainwave"
                className="w-16 h-16"
              />
            </div>
            <ul className="absolute inset-0">
              {collabApps.map((item, index) => {
                const angle = index * (360 / collabApps.length);
                return (
                  <li
                    key={item.id}
                    className="absolute"
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
                      className="flex w-12 h-12 rounded-xl items-center justify-center"
                    >
                      <img className="w-8 h-8" src={item.icon} alt={item.name} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold">Process automation</p>
            <p className="text-base">
              We analyze your processes and implement tailored workflows to automate tasks and
              optimize operations efficiently.
            </p>
          </div>
        </div>
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
              className="w-20 h-20 rounded-xl flex items-center justify-center z-10"
            >
              <img
                src={'/5P0eN6qtSxQg8Lrk6rw2GR9e7eI.jpg.png'}
                alt="brainwave"
                className="w-16 h-16"
              />
            </div>
            <ul className="absolute inset-0">
              {collabApps.map((item, index) => {
                const angle = index * (360 / collabApps.length);
                return (
                  <li
                    key={item.id}
                    className="absolute"
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
                      className="flex w-12 h-12 rounded-xl items-center justify-center"
                    >
                      <img className="w-8 h-8" src={item.icon} alt={item.name} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold">Process automation</p>
            <p className="text-base">
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
          <HoverIconsWithShapes />

          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold">Process automation</p>
            <p className="text-base">
              We analyze your processes and implement tailored workflows to automate tasks and
              optimize operations efficiently.
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
      gsap.to(iconsRef.current, {
        y: -120,
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
            className="rounded-full px-6 py-6 text-black opacity-0"
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
