import Image from 'next/image'
import React from 'react'

const Invite = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-[40px] gap-[20px]'>
        <div className='md:text-[12px]  text-[10px] font-bold'>   WHAT WE DO</div>
        <div className='md:text-[58px]  text-[#252B42] font-bold'>Innovation tailored for you </div>
        <div className='flex justify-center items-center gap-8'>Home <span>Team</span></div>
        <div className='flex md:flex-row flex-col  gap-[20px] justify-center items-center '>
            <div>  
                <Image src="/contact1.png" alt='' height={530} width={700} className='h-[500px] w-[700px]'/>
            </div>
            <div className='flex md:flex-row flex-col gap-[20px]'>
            <div className='flex flex-col gap-[20px] items-center justify-center'> 
                <div><Image src="/contact2.png" alt='' height={260}width={361} className='h-[260] w-[361]' /></div>
                <div><Image src="/contact4.png" alt='' height={260} width={361} className='h-[260] w-[361]' /></div>
            </div>
            <div className='flex flex-col items-center justify-center gap-[20px]'> 
            <div><Image src="/contact3.png" alt='' height={260} width={361} className='h-[260] w-[361]' /></div>
            <div><Image src="/contact5.png" alt='' height={260} width={361} className='h-[260] w-[361]' /></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Invite