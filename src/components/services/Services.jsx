import React from 'react';
import Button from '../small/Button';
import UiUx from '../../assets/svgs/UiUx';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const data = [
  { icon: '', title: '', subTitle1: '', desc1: '', subTitle2: '', desc2: '' },
  { icon: '', title: '', subTitle1: '', desc1: '', subTitle2: '', desc2: '' },
  { icon: '', title: '', subTitle1: '', desc1: '', subTitle2: '', desc2: '' },
];

function Services() {
  return (
    <div className="">
      <div className="flex flex-col gap-10 items-center">
        <Button />
        <div className="grid lg:grid-cols-3 justify-between gap-7 w-full">
          {data.map((item) => (
            <div
              style={{
                boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
              }}
              className="p-7 rounded-2xl flex flex-col gap-7"
            >
              <div className="flex flex-col gap-7 items-center">
                <UiUx />
                <h1 className="font-semibold text-xl text-text-dark">UI/UX Design</h1>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-medium text-[#2B2B2B]">User Interface Design</p>
                  <span className="text-sm text-text-secondary">
                    Crafting intuitive and visually appealing interfaces for enhanced user
                    engagement.
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-medium text-[#2B2B2B]">User Interface Design</p>
                  <span className="text-sm text-text-secondary">
                    Crafting intuitive and visually appealing interfaces for enhanced user
                    engagement.
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <div className="px-3 py-4 text-primary rounded-full cursor-pointer flex items-center justify-center [box-shadow:inset_0_3px_3px_#6D7AFF40,_inset_0_-3px_8px_#FAFBFF] bg-[#ECEDF1]">
            <FaArrowLeft />
          </div>
          <div className="px-3 py-4 text-primary rounded-full cursor-pointer flex items-center justify-center [box-shadow:inset_0_3px_3px_#6D7AFF40,_inset_0_-3px_8px_#FAFBFF] bg-[#ECEDF1]">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
