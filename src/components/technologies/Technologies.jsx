import React from 'react';

const techIcons = [
  { id: 1, name: 'Figma', icon: '/icons/figma.png' },
  { id: 2, name: 'JavaScript', icon: '/icons/js.png' },
  { id: 3, name: 'PHP', icon: '/icons/php.png' },
  { id: 4, name: 'Figma', icon: '/icons/figma.png' },
  { id: 5, name: 'JavaScript', icon: '/icons/js.png' },
  { id: 6, name: 'PHP', icon: '/icons/php.png' },
  { id: 7, name: 'Figma', icon: '/icons/figma.png' },
  { id: 8, name: 'JavaScript', icon: '/icons/js.png' },
  { id: 9, name: 'PHP', icon: '/icons/php.png' },
  { id: 10, name: 'Figma', icon: '/icons/figma.png' },
  { id: 11, name: 'JavaScript', icon: '/icons/js.png' },
  { id: 12, name: 'PHP', icon: '/icons/php.png' },
  { id: 13, name: 'Figma', icon: '/icons/figma.png' },
  { id: 14, name: 'JavaScript', icon: '/icons/js.png' },
  { id: 15, name: 'PHP', icon: '/icons/php.png' },
  { id: 16, name: 'Figma', icon: '/icons/figma.png' },
  { id: 17, name: 'JavaScript', icon: '/icons/js.png' },
  { id: 18, name: 'PHP', icon: '/icons/php.png' },
  { id: 19, name: 'Figma', icon: '/icons/figma.png' },
  { id: 20, name: 'JavaScript', icon: '/icons/js.png' },
  { id: 21, name: 'PHP', icon: '/icons/php.png' },
  { id: 22, name: 'Figma', icon: '/icons/figma.png' },
  { id: 23, name: 'JavaScript', icon: '/icons/js.png' },
  { id: 24, name: 'PHP', icon: '/icons/php.png' },
  { id: 25, name: 'Figma', icon: '/icons/figma.png' },
  { id: 26, name: 'JavaScript', icon: '/icons/js.png' },
  { id: 27, name: 'PHP', icon: '/icons/php.png' },
  { id: 28, name: 'Figma', icon: '/icons/figma.png' },
  { id: 29, name: 'JavaScript', icon: '/icons/js.png' },
  { id: 30, name: 'PHP', icon: '/icons/php.png' },
  { id: 31, name: 'Figma', icon: '/icons/figma.png' },
  { id: 32, name: 'JavaScript', icon: '/icons/js.png' },
  { id: 33, name: 'PHP', icon: '/icons/php.png' },
  { id: 34, name: 'Figma', icon: '/icons/figma.png' },
  { id: 35, name: 'JavaScript', icon: '/icons/js.png' },
  { id: 36, name: 'PHP', icon: '/icons/php.png' },
  { id: 37, name: 'Figma', icon: '/icons/figma.png' },
  { id: 38, name: 'JavaScript', icon: '/icons/js.png' },
  { id: 39, name: 'PHP', icon: '/icons/php.png' },
  { id: 40, name: 'Figma', icon: '/icons/figma.png' },
  { id: 41, name: 'JavaScript', icon: '/icons/js.png' },
  { id: 42, name: 'PHP', icon: '/icons/php.png' },
  { id: 43, name: 'Figma', icon: '/icons/figma.png' },
  { id: 44, name: 'JavaScript', icon: '/icons/js.png' },
  { id: 45, name: 'PHP', icon: '/icons/php.png' },
  { id: 46, name: 'Figma', icon: '/icons/figma.png' },
  { id: 47, name: 'JavaScript', icon: '/icons/js.png' },
  { id: 48, name: 'PHP', icon: '/icons/php.png' },
  { id: 49, name: 'Figma', icon: '/icons/figma.png' },
  { id: 50, name: 'JavaScript', icon: '/icons/js.png' },
  { id: 51, name: 'PHP', icon: '/icons/php.png' },
  { id: 52, name: 'Figma', icon: '/icons/figma.png' },
];

const TechIconsGrid = () => {
  return (
    <div className="">
      <div className="flex flex-wrap gap-8 justify-center">
        {techIcons.map(({ id, name, icon }) => (
          <div
            key={id}
            style={{
              boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
            }}
            className="w-20 h-20 bg-[#ECEDF1] rounded-lg flex items-center justify-center flex-col hover:scale-120 transition-transform"
          >
            <img src={icon} alt={name} className="w-10 h-10 mb-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechIconsGrid;
