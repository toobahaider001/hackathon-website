import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { IoCallOutline } from 'react-icons/io5'
interface SecHeaderProps{
    IsGreen?:boolean
}
const SecHeader: React.FC<SecHeaderProps> = ({ IsGreen }) => {
  return (
    <div className={` ${IsGreen ?"bg-[#23856D]":"bg-[#252B42]"}  hidden h-[58px] justify-between px-10 md:flex text-white items-center`}>
        {/* left */}
        <div className='w-[415px] flex gap-[10px] '>
            <div className='flex items-center gap-[5px]'>
                <div><IoCallOutline /></div>
                <div className='text-[14px]'>(225) 555-0118</div>
            </div>
            <div className='flex items-center gap-[5px]'>
                <div><IoIosMail  color='white'/></div>
                <div className='text-[16px] font-bold'>michelle.rivera@example.com</div>
            </div>
        </div>
        {/* mid */}
        <div className='text-[14px] font-bold'>Follow Us and get a chance to win 80% off</div>
        {/* left */}
        <div className='flex gap-[10px]'>
            <div className='text-[14px] font-bold'>Follow Us</div>
            <div className='text-[14px] font-bold'>:</div>
            <div><FaInstagram color='white' size={20} /></div>
            <div><FaYoutube color='white' size={20}/></div>
            <div><FaFacebook color='white'size={20} /></div>
            <div><FaTwitter color='white'size={20}/></div>
        </div>
    </div>
  )
}

export default SecHeader