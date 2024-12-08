import Image from 'next/image';
import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import Button from '../shared/Button';

const Phone = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div className="bg-[#FAFAFA] h-auto lg:h-[92px] flex flex-wrap items-center px-6 lg:px-[100px] gap-3 lg:gap-5 ">
        <div className="text-[12px] lg:text-[14px] font-bold">Home</div>
        <MdOutlineArrowForwardIos color="gray" />
        <div className="text-[12px] lg:text-[14px] text-[#BDBDBD] font-bold">Shop</div>
      </div>

      {/* Product Section */}
      <div className="bg-[#FAFAFA] flex flex-col lg:flex-row gap-6 lg:gap-[30px] justify-center items-center py-6 lg:py-0">
        {/* Image Section */}
        <div className="flex flex-col gap-4 lg:gap-[20px] items-center">
          <div>
            <Image
              src="/sofa.png"
              alt="Main Product"
              height={450}
              width={506}
              className="w-full max-w-[506px] h-auto lg:h-[450px]"
            />
          </div>
          <div className="flex gap-4 lg:gap-[20px] justify-center">
            <Image
              src="/chair.png"
              alt="Thumbnail 1"
              height={75}
              width={100}
              className="w-[80px] lg:w-[100px] h-auto lg:h-[75px]"
            />
            <Image
              src="/sofa2.png"
              alt="Thumbnail 2"
              height={75}
              width={100}
              className="w-[80px] lg:w-[100px] h-auto lg:h-[75px]"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-4 lg:gap-6 px-4 lg:px-0">
          <div className="text-[18px] lg:text-[20px] font-normal">Floating Phone</div>
          <div className="flex gap-3 lg:gap-[10px] items-center">
            <Image
              src="/stars.png"
              alt="Ratings"
              height={22.01}
              width={130.07}
              className="w-[100px] lg:w-[130.07px] h-auto lg:h-[22.01px]"
            />
            <div className="text-[12px] lg:text-[14px] text-[#737373] font-bold">10 Reviews</div>
          </div>
          <div className="text-[20px] lg:text-[24px] font-bold">$1,139.33</div>
          <div className="text-[12px] lg:text-[14px] text-[#737373] font-bold">
            Availability: <span className="text-[#23A6F0] font-bold">In Stock</span>
          </div>
          <div className="text-[12px] lg:text-[14px] text-[#737373]">
            Met Molie non desert Alamo est sit cliquey dolor <br />
            do met sent. RELIT official consequent dooe ENIM RELIT Mollie. <br />
            Excitation venial consequent sent nostrum met.
          </div>
          <div className="border-t border-[#BDBDBD] w-full lg:w-[445px]"></div>
          <div className="flex gap-2 lg:gap-[10px]">
            <div className="w-[20px] lg:w-[30px] h-[20px] lg:h-[30px] rounded-full bg-[#23A6F0]"></div>
            <div className="w-[20px] lg:w-[30px] h-[20px] lg:h-[30px] rounded-full bg-[#23856D]"></div>
            <div className="w-[20px] lg:w-[30px] h-[20px] lg:h-[30px] rounded-full bg-[#E77C40]"></div>
            <div className="w-[20px] lg:w-[30px] h-[20px] lg:h-[30px] rounded-full bg-[#252B42]"></div>
          </div>
          <div>
            <Button label="Select Options" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
