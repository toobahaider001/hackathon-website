import React from 'react';
import ProductCard from '../shared/ProductCard';

const Cards = () => {
  return (
    <div className="flex flex-col justify-center mt-8 px-4">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -pt-9  sm:gap-4 lg:gap-4 justify-items-center">
        <ProductCard src="/man.png" primary />
        <ProductCard src="/woman.png" primary />
        <ProductCard src="/product7.png" primary />
        <ProductCard src="/kids.png" primary />
        <ProductCard src="/height5.png" primary />
        <ProductCard src="/product1.png" primary />
        <ProductCard src="/product2.png" primary />
        <ProductCard src="/product8.png" primary />
        <ProductCard src="/product3.png" primary />
        <ProductCard src="/product4.png" primary />
        <ProductCard src="/product5.png" primary />
        <ProductCard src="/product6.png" primary />
      </div>

      {/* Pagination */}
      <div className="flex   justify-center items-center gap-2 mt-8">
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
