import Image from 'next/image'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { LuAlarmClock } from 'react-icons/lu'
interface FeaturedProps{
    src:string
}
const FeaturedCard:React.FC<FeaturedProps> = (
    {
        src
    }
) => {
  return (
    <div className='flex flex-col '>
        <Image src={src} alt='' height={300} width={348}  className='h-[300px] w-[348px]'/>
        <div className='flex flex-col gap-[10px] pt-4 p-6'>
            <div className='flex gap-[15px]'>
                <div className='text-[12px] text-[#8EC2F2]'>Google</div>
                <div className='text-[#737373] text-[12px] font-normal'>Trending</div>
                <div className='text-[#737373] text-[12px] font-normal'>New</div>
            </div>
            <div className='text-[20px]'>Loudest à la Madison #1 <br />(L'integral)  </div>
            <div className='text-[14px] text-[#737373]'>We focus on ergonomics and meeting <br />you where you work. It's only  a <br />leystroke away</div>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <LuAlarmClock color='blue'/>
                    <div className='text-[12px] text-[#737373]'>22 April 2021</div>
                </div>
                <div>
                    <div className='text-[12px] text-[#737373]'>10 comments</div>
                </div>
            </div>
            <div className='flex gap-[10px] items-center'>
                <div className='text-[14px] text-[#737373] font-bold'>Learn More</div>
                <IoIosArrowForward />
            </div>
        </div>
    </div>
  )
}

export default FeaturedCard