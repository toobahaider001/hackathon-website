import React from 'react';

const Problems = () => {
  return (
    <div className="flex flex-col mt-16 lg:mt-[100px] px-6 lg:px-0">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center">
        <div className="text-[#E74040] text-[12px] lg:text-[14px] font-bold mb-2">
          Problems trying
        </div>
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center lg:gap-[60px] text-center lg:text-left">
          <div className="text-[18px] lg:text-[24px] font-bold">
            Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do <br />
            met sent.
          </div>
          <div className="text-[#737373] text-[12px] lg:text-[14px]">
            Problems trying to conflict between the two major realms of <br />
            Classical physics. Newtonian mechanics
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-wrap justify-center gap-8 lg:gap-[50px] mt-20 lg:mt-[140px]">
        <div className="flex flex-col items-center">
          <div className="text-[36px] lg:text-[58px] font-bold">15K</div>
          <div className="text-[14px] lg:text-[16px] text-[#737373]">
            Happy Customers
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[36px] lg:text-[58px] font-bold">150K</div>
          <div className="text-[14px] lg:text-[16px] text-[#737373]">
            Monthly Visitors
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[36px] lg:text-[58px] font-bold">15</div>
          <div className="text-[14px] lg:text-[16px] text-[#737373]">
            Country's Worldwide
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[36px] lg:text-[58px] font-bold">100+</div>
          <div className="text-[14px] lg:text-[16px] text-[#737373]">
            Top Partners
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problems;
