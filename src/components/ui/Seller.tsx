import React from 'react';
import ProductCard from '../shared/ProductCard';
import { client } from '@/sanity/lib/client';
import { productType } from '@/types/products';
import { it } from 'node:test';

const Seller = async () => {
  const query = `*[_type == "product" && isNew == true] {
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
  }`

  const data: productType[] = await client.fetch(query);
  console.log(data)
  return (
    <div className="flex flex-col mt-10 bg-[#FAFAFA]">
      {/* Title */}
      <div className="font-bold text-[18px] lg:text-[24px] px-6 lg:px-[180px] mt-8 text-center lg:text-left">
        BESTSELLER PRODUCTS
      </div>

      {/* Divider */}
      <div className="border-t border-[#ECECEC] mt-5 mx-auto w-full max-w-[1024px]"></div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-4 lg:gap-[30px] mt-8 px-6 lg:px-[180px]">
        {
          data.map((item, index) => {
            return (
              <div key={index}>
                <ProductCard
                  id={item._id}
                  title={item.title}
                  discountPercentage={item.dicountPercentage}
                  isNew={item.isNew}
                  price={item.price}
                  productImage={item.productImage.asset.url}
                  tags={item.tags}
                  description={item.description}
                />
              </div>
            )
          })
        }

      </div>
    </div>
  );
};

export default Seller;
