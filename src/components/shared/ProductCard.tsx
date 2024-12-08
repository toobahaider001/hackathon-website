import Image from 'next/image'
import React from 'react'
interface ProductProps{
    src:any
    primary?:boolean
}
const ProductCard:React.FC<ProductProps> = (
    {
        src,
        primary
    }
) => {
  return (
    <div className='h-[615px] w-[238px]'>
        <Image src={src} alt='' width={239} height={427} className={`${primary? "h-[300px]":""} ${primary? "w-[239px]":""}h-[427px] w-[239px]`} />
        <div className='flex flex-col items-center gap-[10px] mt-[25px]'>
            <div className='text-[16px] font-bold '>Graphic Design</div>
            <div className='text-[#737373] text-[14px] '>English Department</div>
            <div className='flex gap-[5px]'>
                <div className='text-[#BDBDBD] font-bold'>$16.48</div>
                <div className='text-[#23856D] font-bold'>$6.48</div>
            </div>
            <div className='flex gap-[6.08px]'>
                <div className='w-[16px] h-[16px] rounded-full bg-[#23A6F0]'></div>
                <div className='w-[16px] h-[16px] rounded-full bg-[#23856D]'></div>
                <div className='w-[16px] h-[16px] rounded-full bg-[#E77C40]'></div>
                <div className='w-[16px] h-[16px] rounded-full bg-[#252B42]'></div>
            </div>
        </div>

    </div>
  )
}

export default ProductCard