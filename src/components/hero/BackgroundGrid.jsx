// import React, { useEffect, useState } from 'react';

// function BackgroundGrid() {
//   const [isBlue, setIsBlue] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsBlue((prev) => !prev);
//     }, 10000); // change every 10 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="-z-10 top-0 w-full absolute h-screen overflow-hidden">
//       <div
//         className={`absolute inset-0 opacity-90 ${isBlue ? 'animate-bg-blue' : 'animate-bg-green'}`}
//         style={{
//           WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
//           WebkitMaskRepeat: 'no-repeat',
//           WebkitMaskSize: '100% 100%',
//           maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
//           maskRepeat: 'no-repeat',
//           maskSize: '100% 100%',
//         }}
//       />

//       {/* grid overlay with same fade bottom */}
//       <div
//         className="grid grid-cols-[repeat(auto-fit,minmax(20px,1fr))] auto-rows-[20px] md:grid-cols-[repeat(auto-fit,minmax(27px,1fr))] md:auto-rows-[27px] overflow-hidden gap-[1px] w-full h-full relative"
//         style={{
//           WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
//           WebkitMaskRepeat: 'no-repeat',
//           WebkitMaskSize: '100% 100%',
//           maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
//           maskRepeat: 'no-repeat',
//           maskSize: '100% 100%',
//         }}
//       >
//         {Array.from({ length: 8200 }).map((_, i) => (
//           <div key={i} className="bg-white" />
//         ))}
//       </div>

//       <style jsx>{`
//   .animate-bg-blue {
//     background: radial-gradient(
//       circle 300px at center,
//       #176aea 0%,
//       #e0e0e0 40%,
//       #e0e0e0 100%
//     );
//     background-repeat: no-repeat;
//     background-size: 200% 200%;
//     animation: moveBg 10s linear infinite;
//   }

//   @media (min-width: 768px) {
//     .animate-bg-blue {
//       background: radial-gradient(
//         circle 500px at center,
//         #176aea 0%,
//         #e0e0e0 40%,
//         #e0e0e0 100%
//       );
//       background-repeat: no-repeat;
//       background-size: 200% 200%;
//     animation: moveBg 10s linear infinite;
//     }
//   }

//   @media (min-width: 1024px) {
//     .animate-bg-blue {
//       background: radial-gradient(
//         circle 900px at center,
//         #176aea 0%,
//         #e0e0e0 40%,
//         #e0e0e0 100%
//       );
//       background-repeat: no-repeat;
//       background-size: 200% 200%;
//     animation: moveBg 10s linear infinite;
//     }
//   }

//   @keyframes moveBg {
//     0% {
//       background-position: bottom left;
//     }
//     60% {
//       background-position: top right;
//     }
//     100% {
//       background-position: top right;
//     }
//   }

//   .animate-bg-green {
//     background: radial-gradient(
//       circle 300px at center,
//       #23d8df 0%,
//       #e0e0e0 40%,
//       #e0e0e0 100%
//     );
//     background-repeat: no-repeat;
//     background-size: 200% 200%;
//     animation: moveBg 10s linear infinite;
//   }

//   @media (min-width: 768px) {
//     .animate-bg-green {
//       background: radial-gradient(
//         circle 500px at center,
//         #23d8df 0%,
//         #e0e0e0 40%,
//         #e0e0e0 100%
//       );
//       background-repeat: no-repeat;
//       background-size: 200% 200%;
//     animation: moveBg 10s linear infinite;
//     }
//   }

//   @media (min-width: 1024px) {
//     .animate-bg-green {
//       background: radial-gradient(
//         circle 900px at center,
//         #23d8df 0%,
//         #e0e0e0 40%,
//         #e0e0e0 100%
//       );
//       background-repeat: no-repeat;
//       background-size: 200% 200%;
//     animation: moveBg 10s linear infinite;
//     }
//   }
// `}</style>
//     </div>
//   );
// }

// export default BackgroundGrid;

import React, { useEffect, useRef, useState } from 'react';

function BackgroundGrid() {
  const [isBlue, setIsBlue] = useState(true);
  const bgRef = useRef(null);

  useEffect(() => {
    const bgElement = bgRef.current;

    if (bgElement) {
      const handleAnimationEnd = () => {
        setIsBlue((prev) => !prev); // switch color after animation finishes
      };

      bgElement.addEventListener('animationiteration', handleAnimationEnd);

      return () => {
        bgElement.removeEventListener('animationiteration', handleAnimationEnd);
      };
    }
  }, []);

  return (
    <div className="-z-10 top-0 w-full absolute h-screen overflow-hidden">
      <div
        ref={bgRef}
        className={`absolute inset-0 opacity-90 ${isBlue ? 'animate-bg-blue' : 'animate-bg-green'}`}
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: '100% 100%',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
          maskRepeat: 'no-repeat',
          maskSize: '100% 100%',
        }}
      />

      {/* grid overlay */}
      <div
        className="grid grid-cols-[repeat(auto-fit,minmax(20px,1fr))] auto-rows-[20px] md:grid-cols-[repeat(auto-fit,minmax(27px,1fr))] md:auto-rows-[27px] overflow-hidden gap-[1px] w-full h-full relative"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: '100% 100%',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
          maskRepeat: 'no-repeat',
          maskSize: '100% 100%',
        }}
      >
        {Array.from({ length: 8200 }).map((_, i) => (
          <div key={i} className="bg-white" />
        ))}
      </div>

      <style jsx>{`
        .animate-bg-blue { background: radial-gradient( circle 300px at center, #176aea 0%, #e0e0e0 40%, #e0e0e0 100% ); background-repeat: no-repeat; background-size: 260% 260%; animation: moveBg 10s linear infinite; } @media (min-width: 768px) { .animate-bg-blue { background: radial-gradient( circle 500px at center, #176aea 0%, #e0e0e0 40%, #e0e0e0 100% ); background-repeat: no-repeat; background-size: 260% 260%; animation: moveBg 10s linear infinite; } } @media (min-width: 1024px) { .animate-bg-blue { background: radial-gradient( circle 900px at center, #176aea 0%, #e0e0e0 40%, #e0e0e0 100% ); background-repeat: no-repeat; background-size: 260% 260%; animation: moveBg 10s linear infinite; } } @keyframes moveBg { 0% { background-position: bottom left; } 60% { background-position: top right; } 100% { background-position: top right; } } .animate-bg-green { background: radial-gradient( circle 300px at center, #23d8df 0%, #e0e0e0 40%, #e0e0e0 100% ); background-repeat: no-repeat; background-size: 260% 260%; animation: moveBg 10s linear infinite; } @media (min-width: 768px) { .animate-bg-green { background: radial-gradient( circle 500px at center, #23d8df 0%, #e0e0e0 40%, #e0e0e0 100% ); background-repeat: no-repeat; background-size: 260% 260%; animation: moveBg 10s linear infinite; } } @media (min-width: 1024px) { .animate-bg-green { background: radial-gradient( circle 900px at center, #23d8df 0%, #e0e0e0 40%, #e0e0e0 100% ); background-repeat: no-repeat; background-size: 260% 260%; animation: moveBg 10s linear infinite;}
      `}</style>
    </div>
  );
}

export default BackgroundGrid;
