import Image from 'next/image';
import React from 'react';
import { MdOutlineArrowForwardIos, MdOutlineChecklist, MdWindow } from 'react-icons/md';
import Button from '../shared/Button';
import { IoIosArrowDown } from 'react-icons/io';

const Shop = () => {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <div className="bg-[#FAFAFA] py-6">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-36">
          <div className="text-[20px] md:text-[24px] font-bold">Shop</div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <div className="text-[14px] font-bold">Home</div>
            <MdOutlineArrowForwardIos className="text-gray-400" />
            <div className="text-[14px] text-[#BDBDBD] font-bold">Shop</div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex md:flex-row flex-col justify-center gap-4 py-6 bg-[#FAFAFA] px-8 md:px-8  lg:px-20">
        <Image src="/card1.png" alt="Card 1" height={223} width={205}  />
        <Image src="/card2.png" alt="Card 2" height={223} width={205}  />
        <Image src="/card3.png" alt="Card 3" height={223} width={205} />
        <Image src="/card4.png" alt="Card 4" height={223} width={205}  />
        <Image src="/card5.png" alt="Card 5" height={223} width={205}  />
      </div>

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-8 lg:px-36 mt-6">
        <div className="text-[#737373] font-bold text-[14px]">Showing all 12 results</div>
        <div className="flex items-center gap-4">
          <div className="text-[14px] text-[#737373] font-bold">Views:</div>
          <div className="h-[46px] w-[46px] flex justify-center items-center rounded-[5px] border-[1px] border-[#ECECEC]">
            <MdWindow size={20} />
          </div>
          <div className="h-[46px] w-[46px] flex justify-center items-center rounded-[5px] border-[1px] border-[#ECECEC]">
            <MdOutlineChecklist size={20} />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-full md:w-[141px] flex items-center justify-center gap-2 h-[50px] border-[1px] rounded-[2px] bg-[#F9F9F9] text-[#737373]">
            Popularity
            <IoIosArrowDown />
          </div>
          <Button label="Filter" primary />
        </div>
      </div>
    </div>
  );
};

export default Shop;
