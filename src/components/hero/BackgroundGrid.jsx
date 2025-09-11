// // import React from 'react';

// // function BackgroundGrid() {
// //   return (
// //     <div className="-z-10 top-0 w-full absolute h-screen overflow-hidden">
// //       {/* moving background with fade bottom */}
// //       <div
// //         className="absolute inset-0 animate-bg opacity-90"
// //         style={{
// //           WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
// //           WebkitMaskRepeat: 'no-repeat',
// //           WebkitMaskSize: '100% 100%',
// //           maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
// //           maskRepeat: 'no-repeat',
// //           maskSize: '100% 100%',
// //         }}
// //       />

// //       {/* grid overlay with same fade bottom */}
// //       <div
// //         className="grid grid-cols-50 gap-[1px] w-full h-full relative"
// //         style={{
// //           WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
// //           WebkitMaskRepeat: 'no-repeat',
// //           WebkitMaskSize: '100% 100%',
// //           maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
// //           maskRepeat: 'no-repeat',
// //           maskSize: '100% 100%',
// //         }}
// //       >
// //         {Array.from({ length: 1200 }).map((_, i) => (
// //           <div key={i} className="bg-white" />
// //         ))}
// //       </div>

// //       <style jsx>{`
// //         .animate-bg {
// //           /* Light gray (90%) + Blue (10%) */
// //           background: linear-gradient(
// //             to bottom left,
// //             #e0e0e0 0%,
// //             #e0e0e0 45%,
// //             #176aea 50%,
// //             #e0e0e0 55%,
// //             #e0e0e0 100%
// //           );
// //           background-size: 150% 250%;
// //           animation: moveBg 6s linear infinite;
// //         }

// //         @keyframes moveBg {
// //           0% {
// //             background-position: bottom left;
// //           }
// //           100% {
// //             background-position: top right;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default BackgroundGrid;

// import React from 'react';

// function BackgroundGrid() {
//   return (
//     <div className="-z-10 top-0 w-full absolute h-screen overflow-hidden">
//       {/* moving background with fade bottom */}
//       <div
//         className="absolute inset-0 animate-bg opacity-90"
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
//         className="grid grid-cols-50 gap-[1px] w-full h-full relative"
//         style={{
//           WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
//           WebkitMaskRepeat: 'no-repeat',
//           WebkitMaskSize: '100% 100%',
//           maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
//           maskRepeat: 'no-repeat',
//           maskSize: '100% 100%',
//         }}
//       >
//         {Array.from({ length: 1200 }).map((_, i) => (
//           <div key={i} className="bg-white" />
//         ))}
//       </div>

//       <style jsx>{`
//         .animate-bg {
//           background: radial-gradient(
//             circle 200px at center,
//             #176aea 0%,
//             #e0e0e0 40%,
//             #e0e0e0 100%
//           );
//           background-size: 200% 200%;
//           /* ✅ Apply BOTH animations */
//           animation: resizeRadial 6s linear infinite,
//             moveBg 6s linear infinite;
//         }

//         @keyframes resizeRadial {
//           0% {
//             background: radial-gradient(
//               circle 200px at center,
//               #176aea 0%,
//               #e0e0e0 40%,
//               #e0e0e0 100%
//             );
//           }
//           50% {
//             background: radial-gradient(
//               circle 100px at center,
//               #176aea 0%,
//               #e0e0e0 40%,
//               #e0e0e0 100%
//             );
//           }
//           100% {
//             background: radial-gradient(
//               circle 50px at center,
//               #176aea 0%,
//               #e0e0e0 40%,
//               #e0e0e0 100%
//             );
//           }
//         }

//         @keyframes moveBg {
//           0% {
//             background-position: bottom left;
//           }
//           100% {
//             background-position: top right;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default BackgroundGrid;

import React from 'react';

function BackgroundGrid() {
  return (
    <div className="-z-10 top-0 w-full absolute h-screen overflow-hidden">
      {/* moving background with fade bottom */}
      <div
        className="absolute inset-0 animate-bg opacity-90"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: '100% 100%',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
          maskRepeat: 'no-repeat',
          maskSize: '100% 100%',
        }}
      />

      {/* grid overlay with same fade bottom */}
      <div
        className="grid grid-cols-50 gap-[1px] w-full h-full relative"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: '100% 100%',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
          maskRepeat: 'no-repeat',
          maskSize: '100% 100%',
        }}
      >
        {Array.from({ length: 1200 }).map((_, i) => (
          <div key={i} className="bg-white" />
        ))}
      </div>

      <style jsx>{`
        .animate-bg {
  background: radial-gradient(
    circle 600px at center,
    #176aea 0%,
    #e0e0e0 40%,
    #e0e0e0 100%
  );
  background-repeat: no-repeat;
  background-size: 200% 200%;
  animation: moveBg 10s linear infinite; /* total = 6s move + 4s pause */
}

@keyframes moveBg {
  0% {
    background-position: bottom left;
  }
  60% {
    background-position: top right; /* reach top-right in 6s */
  }
  100% {
    background-position: top right; /* stay there for 4s */
  }
}
      `}</style>
    </div>
  );
}

export default BackgroundGrid;
