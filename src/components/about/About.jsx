import React from 'react';
import Button from '../small/Button';

function About() {
  return (
    <div className="py-10">
      <div
        style={{
          boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
        }}
        className="flex rounded-2xl flex-col gap-7 items-center p-10"
      >
        <h1 className="text-[40px] text-center text-text-dark font-semibold">
          Ready to{' '}
          <span className="text-primary">
            Transform Your <br /> Business
          </span>
          ?
        </h1>
        <p className="text-text-secondary text-[22px]">Schedule a consultation with us</p>
        <Button />
        <span className="text-text-secondary text-[22px]">
          It's <span className="text-primary">100% free</span>
        </span>
      </div>
    </div>
  );
}

export default About;
