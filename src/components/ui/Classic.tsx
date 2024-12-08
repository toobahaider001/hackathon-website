import Image from 'next/image';
import React from 'react';
import Button from '../shared/Button';

const Classic = () => {
  return (
    <div>
      {/* First Section */}
      <div className="md:h-[711px] bg-[#23856D] mt-40 px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-[70px] justify-center  pt-[25px]">
          <div className="flex flex-col gap-[30px] pt-[120px] text-center md:text-left">
            <div className="text-[20px] text-white">SUMMER 2020</div>
            <div className="text-[40px] md:text-[58px] font-bold text-white">Vita Classic <br />Product</div>
            <div className="text-[14px] text-white font-normal">
              We know how large object will act, We know <br />how are objects will act, We know
            </div>
            <div className="flex flex-col md:flex-row items-center gap-[20px] md:gap-[34px]">
              <div className="text-[24px] text-white font-bold">$16.48</div>
              <div>
                <Button label="ADD TO CART" />
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end pt-[20px] md:pt-[0]">
            <Image src="/per.png" alt="" height={685} width={510}  className="md:h-[685px] md:w-[510px] h-[681px] w-[416px]" />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row justify-center">
  {/* Text Section */}
  <div className="flex flex-col gap-[30px] pt-[40px] text-center md:text-left">
    <div className="text-[16px] text-[#BDBDBD] font-bold">SUMMER 2020</div>
    <div className="text-[40px] md:text-[40px] font-bold">Part Of Neutral <br />Universe</div>
    <div className="text-[20px]">
      We know how large object will act, <br />but things on a small scale
    </div>
    <div className="flex flex-col items-center md:flex-row gap-[10px] justify-center md:justify-start">
      <Button label="Buy Now" />
      <Button label="Read More" secondary />
    </div>
  </div>

  {/* Image Section */}
  <div className="flex justify-center mt-[40px] md:mt-0">
    <Image
      src="/girl.png"
      alt=""
      height={774}
      width={725}
      className="h-[774px] w-[725px]"
    />
  </div>
</div>


      </div>
  );
};

export default Classic;
