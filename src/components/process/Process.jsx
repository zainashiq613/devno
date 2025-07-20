import FlipCard from './FlipCard';
import Rocket from './Rocket';
import SkeletonScroll from './SkeletonScroll';

function Process() {
  return (
    <div className="pb-13">
      <div className="grid grid-cols-2 gap-x-15 gap-y-25 items-center">
        <div className="col-span-2 lg:col-span-1">
          <FlipCard />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col box-border gap-2">
          <p className="text-[#2E3192] font-semibold text-6xl lg:text-[80px] leading-17">01</p>
          <h3 className="font-semibold text-2xl lg:text-4xl">Discovery & Analysis</h3>
          <p className="text-sm lg:text-lg">
            We take a deep dive into your business needs and objectives, analyzing workflows and
            identifying key areas where custom software solutions can provide the most value. Our
            team collaborates closely with you to ensure every aspect is addressed for optimal
            results.
          </p>
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col box-border gap-2">
          <span className="text-[#2E3192] text-6xl lg:text-[80px] font-semibold leading-17">
            02
          </span>
          <h3 className="font-semibold text-2xl lg:text-4xl">Development</h3>
          <p className="text-sm lg:text-lg">
            This is where our expertise shines. We design and develop bespoke software solutions
            that seamlessly integrate with your existing systems. Whether it’s a medical desktop
            application, IoT system, or financial platform, we ensure the software is robust,
            scalable, and tailored to your needs.
          </p>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <SkeletonScroll />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Rocket />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col box-border gap-2">
          <span className="text-[#2E3192] text-6xl lg:text-[80px] font-semibold leading-17">
            03
          </span>
          <h3 className="font-semibold text-2xl lg:text-4xl">Deployment</h3>
          <p className="text-sm lg:text-lg">
            We implement the solution with precision, ensuring a smooth rollout into your
            operations. Our team provides comprehensive training and offers ongoing support, so your
            business can thrive with minimal disruption and maximum impact.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Process;
