'use client'

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import { addToCart } from '@/app/actions/addToCart';

interface ProductProps {
    id?: string;
    title?: string;
    description?: string;
    productImage: string;
    price: number;
    tags: string[];
    discountPercentage: number;
    isNew: boolean;
}

const ProductCard: React.FC<ProductProps> = (
    {
        id,
        title,
        productImage,
        price,
        tags,
        discountPercentage,
        isNew,
        description
    }
) => {
    const data = {
        title,
        description,
        productImage,
        price,
        tags,
        discountPercentage,
        isNew,
    };

    return (
        <div className=''>
            <Link href={`/products/${id}`}>
                <div className='h-[600px] w-[238px] flex flex-col justify-between'>
                    <Image src={productImage} alt={title || 'Product Image'} width={239} height={427} />
                    <div className='flex flex-col items-center gap-[10px] mt-[25px]'>
                        <div className='text-[16px] font-bold'>{title}</div>
                        <div className='text-[#737373] text-[14px]'>{description?.slice(0, 150)}</div>
                        <div className='flex gap-[10px]'>
                            {/* <div className='text-[#BDBDBD] font-bold'>${price1}</div> */}
                            {/* <div className='text-[#23856D] font-bold'>${price2}</div> */}
                        </div>
                        <div className='flex gap-[6.08px]'>
                            <div className='w-[16px] h-[16px] rounded-full bg-[#23A6F0]'></div>
                            <div className='w-[16px] h-[16px] rounded-full bg-[#23856D]'></div>
                            <div className='w-[16px] h-[16px] rounded-full bg-[#E77C40]'></div>
                            <div className='w-[16px] h-[16px] rounded-full bg-[#252B42]'></div>
                        </div>
                    </div>
                </div>
            </Link>
            <div>
                <Button label='AddToCart' secondary onClick={() => addToCart(data)} />
            </div>
        </div>
    );
}

export default ProductCard;
