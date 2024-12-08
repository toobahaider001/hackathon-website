import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Touch = () => {
  return (
    <div className='w-full flex flex-col md:flex-row gap-5 md:gap-0 justify-between px-10 py-5'>
        <div className='md:w-1/2 w-full flex flex-col gap-8 pt-10'>
            <div className='text-[16px] font-bold'>CONTACT US</div>
            <div className='text-[58px] font-bold leading-none'>Get in touch <br /> today!</div>
            <div className='text-[20px]'>We know how large objects will act, 
            but things on a small scale</div>
            <div className='w-full flex flex-col gap-2 text-[24px] font-bold'>
                <div>Phone: +451 123 132</div>
                <div>Fax: +451 012 281</div>
            </div>
            <div className='flex items-center gap-4'>
                <FaTwitter size={30} color='#000' />
                <FaFacebook size={30} color='#000' />
                <FaInstagram size={30} color='#000' />
                <FaLinkedin size={30} color='#000' />
            </div>
        </div>
        <div>
            <Image
                alt=''
                src='/Touch.png'
                width={571}
                height={826}
                className='md:w-[571px] md:h-[826px]'
             />
        </div>
    </div>
  )
}

export default Touch