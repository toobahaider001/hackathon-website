import Image from 'next/image'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Des = () => {
  return (
    <div className='w-full flex flex-col mt-32'>
      <div className='text-[10px] gap-[12px] flex md:text-[14px] font-bold text-[#737373] justify-center md:gap-[30px]'>
        <div>Description</div>
        <div>Additional Information</div>
        <div>Reviews (0)</div>
      </div>
      
      <div className='border-[1px] mt-5 mx-[180px] border-[#ECECEC] h-[2px] w-full flex md:flex-row flex-col justify-center md:mx-0 md:w-full'></div>

      <div className='flex justify-center items-center gap-[30px] mt-2 flex-col md:flex-row'>
        <div className='w-full md:w-auto'>
          <Image 
            src="/sed.png" 
            alt='' 
            height={372} 
            width={316} 
            className='h-[372px] w-[316px] mx-auto md:mx-0' 
          />
        </div>

        <div className='flex flex-col gap-[20px] pt-8'>
          <div className='text-[24px] font-bold'>the quick fox jumps over</div>
          <div className='text-[14px] text-[#737373] flex text-justify items-center'>
            Met Molie non desert Alamo est sit <br /> cliquey dolor do met sent. RELIT official <br /> consequent dooe ENIM RELIT Mollie. <br /> Excitation venial consequent sent nostrum <br />met.
          </div>
          <div className='text-[14px] text-[#737373] text-justify flex items-center'>
            Met Molie non desert Alamo est sit <br /> cliquey dolor do met sent. RELIT official <br /> consequent dooe ENIM RELIT Mollie. <br /> Excitation venial consequent sent nostrum <br /> met.
          </div>
          <div className='text-[14px] text-[#737373] flex items-center'>
            Met Molie non desert Alamo est sit <br /> cliquey dolor do met sent. RELIT official <br /> consequent dooe ENIM RELIT Mollie. <br /> Excitation venial consequent sent nostrum <br /> met.
          </div>
        </div>
      </div>

        
        </div>
      )
}

export default Des