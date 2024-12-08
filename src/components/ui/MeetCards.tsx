import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
interface MeetCardsProps{
    src:string
}
const MeetCards:React.FC<MeetCardsProps> = ({
    src
}) => {
  return (
    <div className='h-[383px] w-[313px] flex flex-col items-center gap-[10px]'>
        <Image src={src} height={231} width={316}alt=''className='h-[231px] w-[316px]' />
        <div className='text-[16px] font-bold'>Username</div>
        <div className='text-[16px] text-[#737373]'>Profession</div>
        <div className='flex gap-[20px]'>
        <div><FaFacebook color='skyblue'size={20} /></div>
        <div><FaInstagram color='skyblue' size={20} /></div>
        <div><FaTwitter color='skyblue'size={20}/></div>
        </div>
    </div>
  )
}

export default MeetCards