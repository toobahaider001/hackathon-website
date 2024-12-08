import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Trials = () => {
  return (
    <div className='w-full flex flex-col items-center gap-4 md:px-10 px-4 py-10'>
        <div className='text-[40px] text-[#252B42] font-bold text-center'>Start your 14 days free trial</div>
        <div className='text-center'>Met minim Mollie non desert Alamo est sit cliquey dolor <br />
        do met sent. RELIT official consequent.</div>
        <div className='px-4 py-2 text-[14px] rounded-lg bg-[#23A6F0] font-bold text-white text-clip'>Try it free now</div>
        <div className='flex items-center gap-6'>
            <FaTwitter size={30} />
            <FaFacebook size={30} />
            <FaInstagram size={30} />
            <FaLinkedin size={30} />
        </div>
    </div>
  )
}

export default Trials