import React from 'react';
import { motion } from 'framer-motion';
import RocketIcon from '../../assets/svgs/Rocket';

const Rocket = () => {
  return (
    <div
      style={{
        boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
      }}
      className="rounded-3xl shadow-xl px-6 py-41 flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute transform rotate-40 h-[700px] grid grid-cols-2 gap-x-40 w-[80%]">
        <div className="flex justify-around">
          <div className="h-full">
            <marquee
              className="h-[700px] w-1.5"
              behavior="smooth"
              scrollamount="70"
              direction="down"
            >
              <div className="flex flex-col gap-y-30">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-[linear-gradient(180deg,_#6B79FF_0%,_rgba(255,255,255,0)_100%)] h-[116px]"
                  ></div>
                ))}
              </div>
            </marquee>
          </div>
          <div className="h-full">
            <marquee
              className="h-[700px] w-1.5"
              behavior="smooth"
              scrollamount="70"
              direction="down"
            >
              <div className="flex flex-col gap-y-30">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-[linear-gradient(180deg,_#6B79FF_0%,_rgba(255,255,255,0)_100%)] h-[116px]"
                  ></div>
                ))}
              </div>
            </marquee>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="h-full">
            <marquee
              className="h-[700px] w-1.5"
              behavior="smooth"
              scrollamount="70"
              direction="down"
            >
              <div className="flex flex-col gap-y-30">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-[linear-gradient(180deg,_#6B79FF_0%,_rgba(255,255,255,0)_100%)] h-[116px]"
                  ></div>
                ))}
              </div>
            </marquee>
          </div>
          <div className="h-full">
            <marquee
              className="h-[700px] w-1.5"
              behavior="smooth"
              scrollamount="70"
              direction="down"
            >
              <div className="flex flex-col gap-y-30">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-[linear-gradient(180deg,_#6B79FF_0%,_rgba(255,255,255,0)_100%)] h-[116px]"
                  ></div>
                ))}
              </div>
            </marquee>
          </div>
        </div>
      </div>
      <motion.div
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="z-10 transform rotate-5"
      >
        <RocketIcon />
      </motion.div>
    </div>
  );
};

export default Rocket;
