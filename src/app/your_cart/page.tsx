'use client'
import { client } from '@/sanity/lib/client';
import { productType } from '@/types/products';
import React, { useEffect, useState } from 'react';
import { deleteCart } from '../actions/deleteCart';
import { getCart } from '../actions/query';
import Image from 'next/image';

const page = () => {
  const [data, setData] = useState<productType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCartData = async () => {
      const res = await getCart();
      setData(res);
    }
    fetchCartData();
  }, []);

  useEffect(() => {
    const total = data.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  }, [data]);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Image
              src={item.productImage.asset.url}
              alt={item.title}
              className="w-full h-48 object-cover"
              height={400}
              width={200}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-bold text-green-600">
                  ${item.price.toFixed(2)}
                </span>
                {item.dicountPercentage && (
                  <span className="bg-red-100 text-red-600 text-sm font-medium px-2 py-1 rounded">
                    {item.dicountPercentage}% Off
                  </span>
                )}
              </div>
              {item.isNew && (
                <span className="text-sm text-white bg-blue-500 px-2 py-1 rounded mt-2 inline-block">
                  New
                </span>
              )}
              {item.tags && item.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <button
                onClick={async () => {
                  await deleteCart(item._id);
                  const updatedData = data.filter((product) => product._id !== item._id);
                  setData(updatedData);
                }}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-9 p-9 border-2  rounded-2xl border-zinc-400 flex flex-col gap-9 md:h-[400px] md:w-[400px] h-[200px] w-[300px] ">
        <div className='text-xl font-bold'> Total Items:{data.length}</div>
        <div className="text-xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default page;
