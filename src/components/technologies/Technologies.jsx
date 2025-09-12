import { div } from 'framer-motion/client';
import React from 'react';

const techIcons = [
  { id: 1, name: 'Figma', icon: '/figma (1) 1.png' },
  { id: 2, name: 'JavaScript', icon: '/javascript 1.png' },
  { id: 3, name: 'PHP', icon: '/php 2.png' },
  { id: 4, name: 'Apache', icon: '/Group 1000002204.png' },
  { id: 5, name: 'Sensor', icon: '/Group 1000002175.png' },
  { id: 6, name: 'SQL', icon: '/sql 1.png' },
  { id: 7, name: 'Kotlin', icon: '/kotlin 1.png' },
  { id: 8, name: 'CapCut', icon: '/capcut 1.png' },
  { id: 9, name: 'Three js', icon: '/Group 1000002161.png' },
  { id: 10, name: 'Python', icon: '/python 2.png' },
  { id: 11, name: 'Framer Motion', icon: '/Group 1000002172.png' },
  { id: 12, name: 'Framer', icon: '/Group 1000002140.png' },
  { id: 13, name: 'Linear', icon: '/Group 1000002168.png' },
  { id: 14, name: 'Photoshop', icon: '/adobe-photoshop 1.png' },
  { id: 15, name: 'React', icon: '/react 1.png' },
  { id: 16, name: 'Laravel', icon: '/Group 1000002200.png' },
  { id: 17, name: 'Nginx', icon: '/Group 1000002205.png' },
  { id: 18, name: 'Map/Location', icon: '/Group 1000002177.png' },
  { id: 19, name: 'Postgre SQL', icon: '/Group 1000002203.png' },
  { id: 20, name: 'Swift', icon: '/swift 1.png' },
  { id: 21, name: 'Audition', icon: '/Group 1000002151.png' },
  { id: 22, name: 'Bootstrap', icon: '/Group 1000002163.png' },
  { id: 23, name: 'AI', icon: '/Group 1000002201.png' },
  { id: 24, name: 'Vercel', icon: '/Group 1000002178.png' },
  { id: 25, name: 'Sketch', icon: '/Group 1000002141.png' },
  { id: 26, name: 'Lightroom', icon: '/adobe-lightroom 1.png' },
  { id: 27, name: 'Next', icon: '/Group 1000002158.png' },
  { id: 28, name: 'Express', icon: 'Group 1000002198.png' },
  { id: 29, name: 'Linux', icon: 'Group 1000002206.png' },
  { id: 30, name: 'Camera', icon: 'Group 1000002174.png' },
  { id: 31, name: 'Mongodb', icon: 'mongo-db 1.png' },
  { id: 32, name: 'Flutter', icon: 'flutter 3.png' },
  { id: 33, name: 'Lightroom', icon: 'adobe-lightroom 1.png' },
  { id: 34, name: 'Tailwind', icon: 'tailwind 1.png' },
  { id: 35, name: 'Django', icon: 'Group 1000002202.png' },
  { id: 36, name: 'Canva', icon: 'canva 1.png' },
  { id: 37, name: 'Illustrator', icon: 'adobe-illustrator 1.png' },
  { id: 38, name: 'Angular', icon: 'angularjs 1.png' },
  { id: 39, name: 'Node', icon: 'nodejs 2.png' },
  { id: 40, name: 'AWS', icon: 'Group 1000002207.png' },
  { id: 41, name: 'Jira', icon: 'Group 1000002176.png' },
  { id: 42, name: 'Firebase', icon: 'Group 1000002173.png' },
  { id: 43, name: 'Indesign', icon: 'adobe-indesign 1.png' },
  { id: 44, name: 'Material UI', icon: 'Group 1000002165.png' },
  { id: 45, name: 'After Effects', icon: 'adobe-after-effects 1.png' },
  { id: 46, name: 'Adobe-XD', icon: 'adobe-xd 1.png' },
  { id: 47, name: 'Vue', icon: 'vue 1.png' },
  { id: 48, name: 'Nest', icon: 'nestjs 2.png' },
  { id: 49, name: 'Stripe', icon: 'Group 1000002179.png' },
  { id: 50, name: 'Premier', icon: 'adobe-premier 1.png' },
  { id: 51, name: 'SASS', icon: 'sass 1.png' },
  { id: 52, name: 'Creative Cloud', icon: 'adobe-creative-cloud 1.png' },
];

const TechIconsGrid = () => {
  return (
    <div className="py-10">
      <div className="flex flex-wrap gap-8 justify-center">
        {techIcons.map(({ id, name, icon }) => (
          <div
            key={id}
            style={{
              boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
            }}
            className="bg-white cursor-pointer rounded-xl flex items-center justify-center flex-col hover:scale-110 transition-transform p-5"
          >
            <img src={icon} alt={name} className="w-10 h-10 mb-1" />
            <p className="text-center text-sm font-semibold text-text-secondary truncate w-13">
              {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechIconsGrid;
