import Image from 'next/image';
import React from 'react';
import Button from '../shared/Button';

const Hero = () => {
  return (
    <div className="relative text-white">
      {/* Background Image */}
      <Image 
        src="/hero.jpg" 
        alt="" 
        height={716} 
        width={1440} 
        className="absolute top-0 left-0 w-full h-[716px] object-cover -z-10" 
      />

      {/* Content */}
      <div className="relative flex flex-col gap-[20px] md:gap-[35px] justify-center px-6 md:px-[150px] py-[150px]">
        <div className="text-[14px] md:text-[16px]">SUMMER 2020</div>
        <div className="text-[32px] md:text-[58px] font-bold leading-tight">
          NEW COLLECTION
        </div>
        <div className="text-[16px] md:text-[20px] leading-relaxed">
          We know how large objects will act, <br /> but things on a small scale.
        </div>
        <div>
          <Button label="SHOP NOW" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
