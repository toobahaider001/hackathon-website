  import React from 'react'
  import MeetCards from './MeetCards'

  const User = () => {
    return (
      <div className='flex flex-col justify-center items-center mt-[200px]  md:mt-[100px]'>
        <div className='text-[#252B42]  font-bold md:text-[42px]'>Meet Our Team</div>
        <div className='flex mt-[80px] md:flex-row flex-col justify-center gap-[20px]'>
        <MeetCards 
          src='/pro1.jpg' />
          <MeetCards 
          src='/pro2.png' />
          <MeetCards 
          src='/pro3.png' />
        </div>
        <div className='flex md:flex-row flex-col justify-center gap-[20px]'>
        <MeetCards 
          src='/user2.png' />
          <MeetCards 
          src='/per6.png' />
          <MeetCards 
          src='/user1.jpg' />
        </div>
        <div className='flex md:flex-row flex-col justify-center gap-[20px]'>
        <MeetCards 
          src='/user3.png' />
          <MeetCards 
          src='/per5.jpg' />
          <MeetCards 
          src='/pro4.png' />
        </div>
        
      </div>
    )
  }

  export default User