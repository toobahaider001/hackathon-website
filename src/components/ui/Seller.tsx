import React from 'react';
import ProductCard from '../shared/ProductCard';

const Seller = () => {
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
        <ProductCard src="/cut1.png" primary />
        <ProductCard src="/cut2.png" primary />
        <ProductCard src="/cut3.png" primary />
        <ProductCard src="/cut4.png" primary />
        <ProductCard src="/cut5.png" primary />
        <ProductCard src="/cut6.png" primary />
        <ProductCard src="/cut7.png" primary />
        <ProductCard src="/cut8.png" primary />
      </div>
    </div>
  );
};

export default Seller;
