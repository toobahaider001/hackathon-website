import React from 'react'
import Button from '../shared/Button'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'

const Trial = () => {
  return (
    <div className='flex flex-col justify-center items-center  gap-[20px] mt-[100px]'>
        <div className=' text-[20px] md:text-[40px] font-bold text-[#252B42]'>Start Your 14 days free trial</div>
        <div className='text-[14px] flex justify-center md:items-center px-6'>Met minim Moillie non desert Alamo est sit cliquey dolor <br />do met sent. RELIT official conquest.</div>
            <Button label='Try it free now' />
        <div className='flex gap-[20px]'>
        <FaTwitter  size={40} color='sky blue'/>
        <FaFacebook size={40} color='sky blue'/>
        <FaInstagram  size={40}   />
        <CiLinkedin  size={40}/>
        </div>
    </div>
  )
}

export default Trial