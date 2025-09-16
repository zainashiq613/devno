import UiUx from '../../assets/svgs/UiUx';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Software from '../../assets/svgs/Software';
import Web from '../../assets/svgs/Web';
import Mobile from '../../assets/svgs/Mobile';
import WordPress from '../../assets/svgs/WordPress';
import SEO from '../../assets/svgs/SEO';
import Content from '../../assets/svgs/Content';
import Graphic from '../../assets/svgs/Graphic';
import { useKeenSlider } from 'keen-slider/react';

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
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    slides: {
      perView: 3, // default (desktop ≥1024px)
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 767px)': {
        slides: { perView: 1, spacing: 10 }, // mobile <768px
      },
      '(min-width: 768px) and (max-width: 1220px)': {
        slides: { perView: 2, spacing: 15 }, // tablet 768–1023px
      },
    },
    drag: true,
    created: (s) => {
      setInterval(() => {
        s.next();
      }, 3000);
    },
  });

  return (
    <div className="w-full py-10">
      <div className="flex flex-col gap-7 items-center">
        <a
          href="#contact"
          className="bg-primary cursor-pointer hover:bg-black transition-all duration-500 text-white px-6 py-3 rounded-3xl"
        >
          Book a 15-min call
        </a>

        <div
          ref={sliderRef}
          className="keen-slider py-6 flex !w-[90vw] overflow-hidden max-w-[1512px]"
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="keen-slider__slide p-6 rounded-2xl flex flex-col gap-5 bg-white shadow-lg"
            >
              <div className="flex flex-col gap-3 items-center">
                {item.icon}
                <h1 className="w-[330px] md:w-[275px] lg:w-[330px] font-semibold text-lg lg:text-xl text-text-dark text-center">
                  {item.title}
                </h1>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-sm lg:text-lg font-medium text-[#2B2B2B]">{item.subTitle1}</p>
                  <span className="text-xs lg:text-sm text-text-secondary">{item.desc1}</span>
                </div>
                <div>
                  <p className="text-sm lg:text-lg font-medium text-[#2B2B2B]">{item.subTitle2}</p>
                  <span className="text-xs lg:text-sm text-text-secondary">{item.desc2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="cursor-pointer [box-shadow:inset_0_1px_8px_#6D7AFF40,_inset_0_-1px_3px_#6D7AFF40] px-4 py-4 rounded-full flex items-center justify-center text-primary shadow-md bg-white"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="cursor-pointer [box-shadow:inset_0_1px_8px_#6D7AFF40,_inset_0_-1px_3px_#6D7AFF40] px-4 py-4 rounded-full flex items-center justify-center text-primary shadow-md bg-white"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
