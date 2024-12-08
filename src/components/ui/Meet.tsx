import Image from 'next/image';
import React from 'react';
import MeetCards from './MeetCards';

const Meet = () => {
  return (
    <div className="mt-16 lg:mt-[150px] px-4 lg:px-0">
      {/* Media Section */}
      <div className="flex justify-center">
        <Image
          src="/media.png"
          alt="Media Image"
          height={540}
          width={989}
          className="w-full max-w-[989px] h-auto rounded-[20px] lg:rounded-[73.6px]"
        />
      </div>

      {/* Meet Our Team Section */}
      <div className="flex flex-col mt-16 lg:mt-[150px]">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="text-[24px] lg:text-[40px] font-bold">Meet Our Team</div>
          <div className="text-[#737373] text-[12px] lg:text-[14px] mt-2">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics, Newtonian mechanics
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-[30px] mt-10 lg:mt-[100px]">
          <MeetCards src="/user1.jpg" />
          <MeetCards src="/user3.png" />
          <MeetCards src="/user2.png" />
        </div>
      </div>
    </div>
  );
};

export default Meet;
