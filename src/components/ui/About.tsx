import Image from 'next/image';
import React from 'react';
import Button from '../shared/Button';

const About = () => {
  return (
    <div className="flex flex-col mt-4 lg:flex-row justify-between items-center gap-8 lg:gap-[80px] px-6 lg:px-20">
      <div className="flex flex-col gap-6 lg:gap-[35px] text-center lg:text-left">
        <div className="text-[14px] lg:text-[16px] font-bold">ABOUT COMPANY</div>
        <div className="font-bold text-[32px] lg:text-[58px]">ABOUT US</div>
        <div className="text-[16px] lg:text-[20px] text-[#737373]">
          We know how large objects will act, <br /> but things on a small scale
        </div>
        <Button label="Get Quote Now" />
      </div>
      <div className="w-full lg:w-auto">
        <Image
          src="/technology 1.png"
          alt="About Us Image"
          height={668}
          width={571}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default About;
