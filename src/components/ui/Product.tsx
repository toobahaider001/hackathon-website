import React from 'react';
import ProductCard from '../shared/ProductCard';

const Product = () => {
  return (
    <div className="flex flex-col gap-[80px] mt-40 px-4">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center">
        <div className="text-[20px] text-[#737373] font-semibold">Featured Products</div>
        <div className="text-[24px] text-[#252B42] font-bold">BESTSELLER PRODUCTS</div>
        <div className="text-[#737373] text-[14px] font-medium">
          Products trying to solve the conflict between
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="flex flex-col gap-[30px]">
        {/* First Row of Products */}
        <div className="flex flex-wrap justify-center gap-[16px] md:gap-[30px]">
          <ProductCard src="/height1.png" />
          <ProductCard src="/height2.png" />
          <ProductCard src="/height3.png" />
          <ProductCard src="/height4.png" />
        </div>

        {/* Second Row of Products */}
        <div className="flex flex-wrap justify-center gap-[16px] md:gap-[30px]">
          <ProductCard src="/height5.png" />
          <ProductCard src="/height6.png" />
          <ProductCard src="/height7.png" />
          <ProductCard src="/height8.png" />
        </div>
      </div>
    </div>
  );
};

export default Product;
