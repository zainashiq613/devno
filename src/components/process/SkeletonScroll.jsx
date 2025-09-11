import { useRef } from 'react';
import Skeleton from 'react-loading-skeleton';

function SkeletonScroll() {
  const ref = useRef();

  const handleScroll = () => {
    if (ref.current) {
      ref.current.scrollBy({
        top: 350,
        behavior: 'smooth',
      });
    }
  };

  const backScroll = () => {
    if (ref.current) {
      ref.current.scrollBy({
        top: -350,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      onMouseEnter={handleScroll}
      onMouseLeave={backScroll}
      className="rounded-3xl group cursor-pointer w-full relative"
    >
      <div
        style={{
          boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
        }}
        className="pt-9 rounded-3xl flex flex-col"
      >
        <div className="flex gap-5 border-b-3 pb-5 border-gray-300 px-6 ">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
        <div
          ref={ref}
          className="scroll h-[328px] overflow-auto overflow-y-auto scroll flex flex-col gap-3 py-9 px-6"
        >
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-1 flex flex-col gap-3">
              {Array.from({ length: 2 }).map((_, i) => (
                <Skeleton key={i} baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
              ))}
            </div>
            <div className="col-span-3 flex flex-col gap-3">
              {Array.from({ length: 2 }).map((_, i) => (
                <Skeleton key={i} baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
              ))}
            </div>
            <div className="col-span-5 flex flex-col gap-3">
              {Array.from({ length: 2 }).map((_, i) => (
                <Skeleton key={i} baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="grid grid-cols-12 gap-5">
                  <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
                </div>
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-1">
                    <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
                  </div>
                  <div className="col-span-3">
                    <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
                  </div>
                  <div className="col-span-5">
                    <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-1">
                    <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
                  </div>
                  <div></div>
                  <div className="col-span-3">
                    <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
                  </div>
                  <div className="col-span-5">
                    <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-1">
                    <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
                  </div>
                  <div className="col-span-2"></div>
                  <div className="col-span-3">
                    <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
                  </div>
                  <div className="col-span-5">
                    <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-1">
                    <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
                  </div>
                  <div></div>
                  <div className="col-span-3">
                    <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
                  </div>
                  <div className="col-span-5">
                    <Skeleton baseColor="#D4D4D4" className="!rounded-3xl" height="15px" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonScroll;
