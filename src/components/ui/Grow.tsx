import Image from 'next/image';
import React from 'react';
import Button from '../shared/Button';

const Grow = () => {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[636px]">
      {/* Left Section */}
      <div className="bg-[#2A7CC7] flex flex-col items-center justify-center text-center lg:text-left gap-6 lg:gap-[24px] px-6 py-10 lg:px-0 lg:w-[70%]">
        <div className="text-[14px] lg:text-[16px] font-bold text-white">WORK WITH US</div>
        <div className="text-[24px] lg:text-[40px] text-white font-bold">Now Let's Grow Yours</div>
        <div className="text-[12px] lg:text-[16px] text-white">
          The gradual accumulation of information about atomic and <br />
          small-scale behaviour during the first quarter of the 20th century.
        </div>
        <Button label="Button" />
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center w-full lg:w-[30%]">
        <Image
          src="/grow.png"
          alt="Grow Image"
          height={640}
          width={590}
          className="w-full lg:w-[590px] h-auto lg:h-[640px]"
        />
      </div>
    </div>
  );
};

export default Grow;
