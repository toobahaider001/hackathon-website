import Image from 'next/image';
import React from 'react';

const Pick = () => {
  return (
    <div className="flex flex-col gap-[48px] items-center mt-40 px-4">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center text-center">
        <div className="text-[20px] md:text-[24px] text-[#252B42] font-semibold">EDITOR'S PICK</div>
        <div className="text-[12px] md:text-[14px] text-[#737373]">
          Problems trying to resolve the conflict between
        </div>
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center gap-[16px] md:gap-[30px]">
        {/* Large Image */}
        <div>
          <Image
            src="/man.png"
            alt=""
            height={500}
            width={510}
            className="h-auto max-w-[100%] md:h-[500px] md:w-[510px] object-cover"
          />
        </div>

        {/* Medium Image */}
        <div>
          <Image
            src="/woman.png"
            alt=""
            height={500}
            width={240}
            className="h-auto max-w-[100%] md:h-[500px] md:w-[240px] object-cover"
          />
        </div>

        {/* Stacked Images */}
        <div className="flex flex-col gap-[16px]">
          <div>
            <Image
              src="/accessories.png"
              alt=""
              height={242}
              width={240}
              className="h-auto max-w-[100%] md:h-[242px] md:w-[240px] object-cover"
            />
          </div>
          <div>
            <Image
              src="/kids.png"
              alt=""
              height={242}
              width={240}
              className="h-auto max-w-[100%] md:h-[242px] md:w-[240px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pick;
