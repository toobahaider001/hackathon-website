import Image from 'next/image'
import React from 'react'
import Logos from './Logos'

const Pricing2 = () => {
  return (
    <div className='bg-[#F5F5F5] w-full md:px-10 px-4 py-5 flex flex-col gap-6 items-center'>
        <div className='text-[40px] font-bold text-[#252B42]'>Pricing</div>
        <div className='text-[#737373] text-[14px] text-center'>Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics</div>
        <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
                <div className='text-[#252B42]'>Monthly</div>
                <div>
                    <Image
                        alt=''
                        src='/Toggle.png'
                        width={45}
                        height={25}
                        className='w-[45px] h-[25px]'
                     />
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div>Yearly</div>
                <div className='px-4 py-2 bg-[#B2E3FF] text-[#23A6F0] rounded-full font-bold text-[14px]'>Save 25%</div>
            </div>
        </div>
        <div>
           <Logos />
             
        </div>
        <div>
            <Image
                alt=''
                src='/Clients.jpeg'
                width={1440}
                height={365}
                className='w-[1440px] h-[365px]'
             />
        </div>
    </div>
  )
}

export default Pricing2