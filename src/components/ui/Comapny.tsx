import React from 'react';
import Logos from './Logos';

const Company = () => {
  return (
    <div className="bg-[#FAFAFA] flex flex-col py-10 lg:py-[70px] mt-10 lg:mt-[70px]">
      {/* Title Section */}
      <div className="flex flex-col items-center text-center">
        <div className="text-[24px] lg:text-[40px] font-bold">Big Companies Are Here</div>
        <div className="text-[12px] lg:text-[14px] text-[#737373] mt-4">
          Problems trying to conflict between <br />
          the two major realms of Classical physics, Newtonian mechanics
        </div>
      </div>

      {/* Logos Section */}
      <div className="mt-8 lg:mt-10">
        <Logos />
      </div>
    </div>
  );
};

export default Company;
