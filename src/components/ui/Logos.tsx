import Image from 'next/image';
import React from 'react';

const Logos = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-8 gap-4 md:gap-6 bg-[#FAFAFA] py-6 mt-8 md:mt-2">
      <Image
        src="/logo1.png"
        alt="Logo 1"
        height={59}
        width={146}
        className="h-auto w-[40%] md:w-[146px]"
      />
      <Image
        src="/logo2.png"
        alt="Logo 2"
        height={59}
        width={146}
        className="h-auto w-[40%] md:w-[146px]"
      />
      <Image
        src="/logo3.png"
        alt="Logo 3"
        height={59}
        width={146}
        className="h-auto w-[40%] md:w-[146px]"
      />
      <Image
        src="/logo4.png"
        alt="Logo 4"
        height={59}
        width={146}
        className="h-auto w-[40%] md:w-[146px]"
      />
      <Image
        src="/logo5.png"
        alt="Logo 5"
        height={59}
        width={146}
        className="h-auto w-[40%] md:w-[146px]"
      />
      <Image
        src="/logo6.png"
        alt="Logo 6"
        height={59}
        width={146}
        className="h-auto w-[40%] md:w-[146px]"
      />
    </div>
  );
};

export default Logos;
