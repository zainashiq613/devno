import React from 'react';
import Button from '../small/Button';
import UiUx from '../../assets/svgs/UiUx';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Software from '../../assets/svgs/Software';
import Web from '../../assets/svgs/Web';

const data = [
  {
    id: '1',
    icon: <UiUx />,
    title: 'UI/UX Design',
    subTitle1: 'User Interface Design',
    desc1: 'Crafting intuitive and visually appealing interfaces for enhanced user engagement.',
    subTitle2: 'User Experience Optimization',
    desc2: 'Enhancing usability and accessibility to provide a superior user experience.',
  },
  {
    id: '2',
    icon: <Software />,
    title: 'Software Development',
    subTitle1: 'Medical Desktop Applications',
    desc1:
      'Development of advanced medical software to enhance patient care and streamline healthcare operations.',
    subTitle2: 'Enterprise Software Solutions',
    desc2:
      'Crafting customized desktop applications to optimize your business processes and productivity.',
  },
  {
    id: '3',
    icon: <Web />,
    title: 'Web Development',
    subTitle1: 'Website Design & Development',
    desc1:
      'Designing responsive and engaging websites that reflect your brand and captivate your audience.',
    subTitle2: 'Web Applications',
    desc2: 'Developing custom web applications tailored to your specific business needs.',
  },
];

function Services() {
  return (
    <div className="">
      <div className="flex flex-col gap-10 items-center">
        <Button />
        <div className="grid lg:grid-cols-3 justify-between gap-7 w-full">
          {data.map((item) => (
            <div
              key={item.id}
              style={{
                boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
              }}
              className="p-7 rounded-2xl flex flex-col gap-7"
            >
              <div className="flex flex-col gap-7 items-center">
                {item.icon}
                <h1 className="font-semibold text-xl text-text-dark">{item.title}</h1>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-medium text-[#2B2B2B]">{item.subTitle1}</p>
                  <span className="text-sm text-text-secondary">{item.desc1}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-medium text-[#2B2B2B]">{item.subTitle2}</p>
                  <span className="text-sm text-text-secondary">{item.desc2}</span>
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
