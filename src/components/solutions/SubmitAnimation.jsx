import React, { useRef, useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaComputer, FaCheck } from 'react-icons/fa6';
import gsap from 'gsap';

const SubmitAnimation = ({ title, desc }) => {
  const contentRef = useRef(null);
  const innerContainerRef = useRef(null);
  const buttonRef = useRef(null);

  const [buttonContent, setButtonContent] = useState('Submit');
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const progressInterval = useRef(null);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    if (isAnimating) return;
    setIsAnimating(true);

    gsap.to(contentRef.current, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(innerContainerRef.current, {
      width: '100px',
      height: '100px',
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(buttonRef.current, {
      width: '100px',
      height: '100px',
      position: 'absolute',
      top: 0,
      right: 0,
      borderRadius: '0.75rem',
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => startProgress(),
    });
  };

  const startProgress = () => {
    setButtonContent(<FaComputer className="text-white text-2xl" size={40} />);
    let percent = 0;
    progressInterval.current = setInterval(() => {
      percent += 5;
      setProgress(percent);
      if (percent >= 100) {
        clearInterval(progressInterval.current);
        setButtonContent(<FaCheck className="text-white text-2xl" size={40} />);
        setTimeout(() => restoreToOriginal(), 1300);
      }
    }, 200);
  };

  const restoreToOriginal = () => {
    clearInterval(progressInterval.current);
    setProgress(0);

    gsap.to(buttonRef.current, {
      width: 'auto',
      height: 'auto',
      borderRadius: '1.5rem',
      position: 'relative',
      top: 0,
      right: 0,
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(innerContainerRef.current, {
      width: '80%',
      height: '100%',
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(contentRef.current, {
      display: 'flex',
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        setButtonContent('Submit');
        setIsAnimating(false);
      },
    });
  };

  useEffect(() => {
    const handleGlobalClick = () => {
      if (isAnimating) restoreToOriginal();
    };
    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [isAnimating]);

  return (
    <div
      style={{ boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF' }}
      className="bg-[#ECEDF1] col-span-2 lg:col-span-1 py-15 flex flex-col px-7 gap-8 justify-center items-center rounded-3xl"
    >
      <div
        ref={innerContainerRef}
        style={{ boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF' }}
        className="relative rounded-3xl p-5 w-full sm:w-[80%] flex flex-col gap-7 items-center justify-start overflow-hidden"
      >
        <div ref={contentRef} className="w-full flex flex-col gap-2.5">
          <div className="grid gap-5 grid-cols-10">
            <div className="col-span-1">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
            <div className="col-span-2">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
            <div className="col-span-4">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
          </div>
          <div className="grid gap-5 grid-cols-8">
            <div className="col-span-2">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
            <div className="col-span-2">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
            <div className="col-span-2">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
            <div className="col-span-2">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
          </div>
          <div className="grid gap-5 grid-cols-9">
            <div className="col-span-2">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
            <div className="col-span-2">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
            <div className="col-span-3">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
            <div className="col-span-2">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
          </div>
          <div className="grid gap-5 grid-cols-10">
            <div className="col-span-2">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
            <div className="col-span-2">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
            <div className="col-span-2">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
            <div className="col-span-2">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
            <div className="col-span-2">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
          </div>
          <div className="grid gap-5 grid-cols-11">
            <div className="col-span-2">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
            <div className="col-span-3">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
            <div className="col-span-2">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
            <div className="col-span-2">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
            <div className="col-span-2">
              <Skeleton className="!rounded-2xl" baseColor="#D4D4D4" height={'15px'} />
            </div>
          </div>
        </div>

        <div className="flex justify-end w-full">
          <button
            ref={buttonRef}
            onClick={handleButtonClick}
            className="bg-primary text-white rounded-3xl px-4 py-2 flex items-center justify-center relative"
          >
            {buttonContent}
            {progress > 0 && progress < 100 && (
              <div
                className="absolute bottom-0 left-0 h-1 bg-white"
                style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
              />
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-base">{desc}</p>
      </div>
    </div>
  );
};

export default SubmitAnimation;
