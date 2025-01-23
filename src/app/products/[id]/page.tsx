import Button from '@/components/shared/Button';
import { client } from '@/sanity/lib/client';
import { productType } from '@/types/products';
import Image from 'next/image';
import React from 'react';


const ProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params;

  // GROQ query to fetch a specific product by ID
  const query = `*[_type == "product" && _id == $id][0]{
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
  }`;

  // Fetch data from Sanity
  const foundProduct: productType | null = await client.fetch(query, { id });

  // Handle case where the product isn't found
  if (!foundProduct) {
    return (
      <div className="flex justify-center mt-9">
        <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-9 border-[2px] border-zinc-500 ">
      <div className="md:h-[700px] w-full justify-center flex gap-8 border-[]">
        <div className="flex justify-center mt-[50px]">
          <Image
            src={foundProduct.productImage.asset.url}
            alt={foundProduct.title || 'Product Image'}
            width={500}
            height={500}
            className="rounded"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[30px] font-bold">{foundProduct.title}</div>
          <div className="text-zinc-500 w-[700px] mt-7">{foundProduct.description}</div>
          <div className="flex gap-[200px] mt-10">
            <div className="text-black font-bold">Price: ${foundProduct.price}</div>
            <div className="flex items-center gap-5">
              {foundProduct.tags.map((tag, i) => (
                <div key={i} className="px-2 py-1 bg-gray-200 rounded">
                  {tag}
                </div>
              ))}
            </div>
            <div>{foundProduct.dicountPercentage}%</div>
          </div>
          <div className="mt-9">
            <Button label="Shop Now" secondary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
