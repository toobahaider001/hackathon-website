import React from 'react'
import AddCard from '../shared/AddCard'
import { IoCallOutline } from 'react-icons/io5'
import { CiLocationOn } from 'react-icons/ci'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BsArrow90DegDown } from 'react-icons/bs'

const Ideas = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col text-center justify-center'>
        <div className='text-[14px] font-bold'>VISIT OUR OFFICE</div>
        <div className='text-[40px] font-bold text-[#252B42]'>
          We help small businesses <br /> with big ideas
        </div>
      </div>

      <div className='flex flex-col sm:flex-row justify-center items-center mt-10 gap-4'>
        <AddCard logo={<IoCallOutline size={60} color='skyblue' />} />
        <AddCard logo={<CiLocationOn size={60} color='skyblue' />} primary />
        <AddCard logo={<MdOutlineMailOutline size={60} color='skyblue' />} />
      </div>

      <div className='flex flex-col justify-center gap-2 items-center mt-[200px]'>
        <BsArrow90DegDown color='skyblue' size={50} />
        <div className='text-[14px] font-bold'>WE CAN'T WAIT TO MEET YOU</div>
        <div className='text-[58px] font-bold text-[#252B42]'>Let's Talk</div>
      </div>
    </div>
  )
}

export default Ideas
