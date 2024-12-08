import React from 'react';
import FeaturedCard from '../shared/FeaturedCard';

const Featured = () => {
  return (
    <div className="flex flex-col mt-40 px-4 md:px-0">
      <div className="flex flex-col items-center gap-[10px]">
        <div className="text-[14px] text-[#23A6F0] font-bold">Practice Advice</div>
        <div className="text-[32px] md:text-[40px] font-bold">Featured Posts</div>
        <div className="text-center text-[14px] text-[#737373] font-normal">
          Problems trying to resolve the conflict between <br />the two major realms of Classical physics. Newtonian mechanics.
        </div>
      </div>
      <div className="flex flex-wrap gap-[50px] md:gap-[30px] justify-center pt-12">
        <FeaturedCard src="/feature2.png" />
        <FeaturedCard src="/feature1.png" />
        <FeaturedCard src="/feature3.png" />
      </div>
    </div>
  );
};

export default Featured;
