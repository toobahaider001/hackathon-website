import { client } from '@/sanity/lib/client';
import { productType } from '@/types/products';
import React from 'react'

const page = async() => {
  const query = `
  *[_type == "order"]{
    _id,
    title,
    description,
    productImage{
      asset->{
        _id,
        url
      }
    },
    price,
    tags,
    discountPercentage,
    isNew
  }
`;
const data:productType[] = await client.fetch(query)
console.log(data)
  return (
    <div>
      {
        data.map((item,index)=>(
          <div key={index}>
            <div>{item.productImage.asset.url}</div>
            <div>{item.title}</div>
            <div>{item.description}</div>
            <div>{item.price}</div>
          </div>
        ))
      }
    </div>
  )
}

export default page