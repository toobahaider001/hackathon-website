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
        <div className='bg-white shadow-lg rounded-lg w-full overflow-hidden transition-transform transform hover:scale-105'>
            <Link href={`/products/${id}`}>
                <div className='relative h-[400px] w-full'>
                    <Image 
                        src={productImage} 
                        alt={title || 'Product Image'} 
                        width={400} 
                        height={400} 
                        className='object-cover w-full h-full' 
                    />
                    {isNew && (
                        <span className="absolute top-2 left-2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            New
                        </span>
                    )}
                </div>
            </Link>
            <div className='p-4'>
                <h2 className='text-xl font-semibold text-gray-800'>{title}</h2>
                <p className='text-sm text-gray-500 mt-2'>{description?.slice(0, 150)}...</p>
                <div className='mt-4 flex items-center justify-between'>
                    <span className='text-lg font-bold text-green-600'>
                        ${price.toFixed(2)}
                    </span>
                    {discountPercentage > 0 && (
                        <span className='bg-red-100 text-red-600 text-sm font-medium px-2 py-1 rounded'>
                            {discountPercentage}% Off
                        </span>
                    )}
                </div>
                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag, index) => (
                        <span 
                            key={index} 
                            className='bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full'
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className='p-4'>
                <Button 
                    label='Add to Cart' 
                    secondary 
                    onClick={() => addToCart(data)} 
                />
            </div>
        </div>
    );
}

export default ProductCard;
