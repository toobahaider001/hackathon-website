import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const Pricing = () => {
  return (
    <div className="w-full flex justify-center items-center px-5 md:px-10 py-5">
      <div className="flex flex-col items-center gap-3 sm:gap-4">
        <div className="text-[14px] sm:text-[16px] font-bold text-[#737373] tracking-[0.2px]">
          PRICING
        </div>
        <div className="text-[36px] sm:text-[58px] font-bold text-[#252B42] text-center">
          Simple Pricing
        </div>
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4 text-[12px] sm:text-[14px]">
          <div className="text-[#252B42] font-bold">Home</div>
          <div>
            <RiArrowRightSLine size={25} />
          </div>
          <div className="text-[#737373] font-bold">Pricing</div>
        </div>
      </div>
    </div>
  )
}

export default Pricing