import React, { useState } from 'react';
import Button from '../small/Button';
import UiUx from '../../assets/svgs/UiUx';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Software from '../../assets/svgs/Software';
import Web from '../../assets/svgs/Web';
import Mobile from '../../assets/svgs/Mobile';
import WordPress from '../../assets/svgs/WordPress';
import SEO from '../../assets/svgs/SEO';
import Content from '../../assets/svgs/Content';
import Graphic from '../../assets/svgs/Graphic';

const ITEMS_PER_PAGE = 3;

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
  {
    id: '4',
    icon: <Mobile />,
    title: 'Mobile Development',
    subTitle1: 'iOS and Android Apps',
    desc1:
      'Building seamless, user-friendly, and feature-rich mobile apps tailored for both iOS and Android platforms.',
    subTitle2: 'Cross-Platform Apps',
    desc2:
      'Creating high-performance apps that ensure a unified and consistent user experience across all major mobile platforms.',
  },
  {
    id: '5',
    icon: <WordPress />,
    title: 'WordPress Development',
    subTitle1: 'Custom WordPress Websites',
    desc1:
      'Designing dynamic, scalable, and easy-to-manage websites tailored to your brand and business goals.',
    subTitle2: 'Scalable & Flexible Solutions',
    desc2:
      'Delivering customized WordPress development that grows with your business and adapts to your evolving needs.',
  },
  {
    id: '6',
    icon: <SEO />,
    title: 'SEO Optimization',
    subTitle1: 'On-Page & Technical SEO',
    desc1:
      'Optimizing website structure, content, and performance to improve search engine rankings and user experience.',
    subTitle2: 'Targeted Visibility',
    desc2:
      'Implementing SEO strategies that drive organic traffic and connect your brand with the right audience.',
  },
  {
    id: '7',
    icon: <Content />,
    title: 'Content Writing',
    subTitle1: 'Creative & Impactful Content',
    desc1:
      'Crafting clear, engaging, and persuasive content that aligns with your brand voice and goals.',
    subTitle2: 'Content That Converts',
    desc2:
      'Delivering high-quality writing that resonates with your audience and inspires them to take action.',
  },
  {
    id: '8',
    icon: <Graphic />,
    title: 'Graphic Designing',
    subTitle1: 'Creative Visual Design',
    desc1:
      'Designing eye-catching graphics that reflect your brand and leave a lasting impression.',
    subTitle2: 'Effective Communication',
    desc2:
      'Creating visuals that not only look great but also clearly deliver your message to your audience.',
  },
];

function Services() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const currentTotal = data.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const start = page - 1 + 1;
  const end = Math.min(start + totalPages - 1, totalPages);

  return (
    <div className="">
      <div className="flex flex-col gap-10 items-center">
        <Button text={'Book a 15-min call'} />
        <div className="grid lg:grid-cols-3 justify-between gap-7 w-full">
          {currentTotal.map((item) => (
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
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-4 text-primary rounded-full cursor-pointer flex items-center justify-center [box-shadow:inset_0_3px_3px_#6D7AFF40,_inset_0_-3px_8px_#FAFBFF] bg-[#ECEDF1]"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="px-4 py-4 text-primary rounded-full cursor-pointer flex items-center justify-center [box-shadow:inset_0_3px_3px_#6D7AFF40,_inset_0_-3px_8px_#FAFBFF] bg-[#ECEDF1]"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
