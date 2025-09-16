import React from 'react';

function BackgroundGrid() {
  return (
    <div className="-z-10 top-0 w-full absolute h-screen overflow-hidden">
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
        className="grid grid-cols-31 md:grid-cols-42 lg:grid-cols-50 xl:grid-cols-56 gap-[1px] w-full h-full relative"
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
      circle 300px at center,
      #176aea 0%,
      #e0e0e0 40%,
      #e0e0e0 100%
    );
    background-repeat: no-repeat;
    background-size: 200% 200%;
    animation: moveBg 10s linear infinite;
  }

  @media (min-width: 768px) {
    .animate-bg {
      background: radial-gradient(
        circle 500px at center,
        #176aea 0%,
        #e0e0e0 40%,
        #e0e0e0 100%
      );
      background-repeat: no-repeat;
      background-size: 200% 200%;
    animation: moveBg 10s linear infinite;
    }
  }

  @media (min-width: 1024px) {
    .animate-bg {
      background: radial-gradient(
        circle 900px at center,
        #176aea 0%,
        #e0e0e0 40%,
        #e0e0e0 100%
      );
      background-repeat: no-repeat;
      background-size: 200% 200%;
    animation: moveBg 10s linear infinite;
    }
  }

  @keyframes moveBg {
    0% {
      background-position: bottom left;
    }
    60% {
      background-position: top right;
    }
    100% {
      background-position: top right;
    }
  }
`}</style>
    </div>
  );
}

export default BackgroundGrid;
