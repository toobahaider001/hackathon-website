import React from 'react';
import ProductCard from '../shared/ProductCard';
import { client } from '@/sanity/lib/client';
import { productType } from '@/types/products';

const Cards = async () => {
  const query = `*[_type == "product"] {
    _id,
    title,
    description,
    productImage {
      asset-> {
        _id,
        url
      }
    },
    price,
    tags,
    discountPercentage,
    isNew
  }`;

  const data: productType[] = await client.fetch(query);

  return (
    <div className="grid grid-cols-4 items-center mt-8 px-4">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <ProductCard
              id={item._id}
              title={item.title}
              discountPercentage={item.dicountPercentage} // Fixed typo here
              isNew={item.isNew}
              price={item.price}
              productImage={item.productImage.asset.url} // Correct way to pass image URL
              tags={item.tags}
              description={item.description}
            />
          </div>
        );
      })}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <div className="flex items-center justify-center h-10 w-20 bg-[#F3F3F3] text-[14px] rounded-lg cursor-pointer">
          First
        </div>
        <div className="flex items-center justify-center h-10 w-10 text-[#23A6F0] border border-[#BDBDBD] rounded-lg cursor-pointer">
          1
        </div>
        <div className="flex items-center justify-center h-10 w-10 bg-[#23A6F0] text-white rounded-lg cursor-pointer">
          2
        </div>
        <div className="flex items-center justify-center h-10 w-10 text-[#23A6F0] border border-[#BDBDBD] rounded-lg cursor-pointer">
          3
        </div>
        <div className="flex items-center justify-center h-10 w-20 text-[#23A6F0] border border-[#BDBDBD] font-bold text-[14px] rounded-lg cursor-pointer">
          Next
        </div>
      </div>
    </div>
  );
};

export default Cards;
