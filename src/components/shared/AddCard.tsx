import React from 'react'

interface AddCardProps {
  logo: any
  primary?: boolean
}

const AddCard: React.FC<AddCardProps> = ({
  logo,
  primary
}) => {
  return (
    <div className={`h-[403px] w-[328px] flex flex-col items-center justify-center gap-6 ${primary ? "bg-[#252B42] text-white" : "bg-white text-black"}`}>{logo}
        <div className='text-[14px] font-bold'>georgia.young@example.com</div>
        <div className='text-[14px] font-bold'>gerorgia.young@ple.com</div>
        <div className='text-[16px] font-bold'>Get Support</div>
        {/* Add the logo here if needed */}
        
    </div>
  )
}

export default AddCard
