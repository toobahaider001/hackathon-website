import Logos from '@/components/ui/Logos'
import Seller from '@/components/ui/Seller'
import { productType } from '@/types/products';
import React from 'react'

const page = async () => {
  let data: productType[] = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
    if (!res.ok) throw new Error('Failed to fetch products');
    data = await res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
  }
  return (
    <div>
      <Seller data={data} />
      <Logos />
    </div>
  )
}

export default page