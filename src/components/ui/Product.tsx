import ProductCard from '../shared/ProductCard';
import { productType } from '@/types/products';

export const getServerSideProps = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
    if (!res.ok) throw new Error('Failed to fetch products');
    const data: productType[] = await res.json();

    return {
      props: { products: data },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { products: [] },
    };
  }
};

const Product = ({ products }: { products: productType[] }) => {
  if (!products.length) {
    return <div>Error loading products. Please try again later.</div>;
  }

  return (
    <div className="flex flex-col gap-[80px] mt-40 px-4 items-center">
      <div className="flex flex-col items-center text-center">
        <div className="text-[20px] text-[#737373] font-semibold">Featured Products</div>
        <div className="text-[24px] text-[#252B42] font-bold">BESTSELLER PRODUCTS</div>
        <div className="text-[#737373] text-[14px] font-medium">
          Products trying to solve the conflict between
        </div>
      </div>
      <div className="grid md:grid-cols-4 items-center gap-[50px]">
        {products.map((item: productType) => (
          <ProductCard
            id={item._id}
            key={item._id}
            title={item.title}
            description={item.description.slice(0, 150)}
            price={item.price}
            discountPercentage={item.dicountPercentage}
            isNew={item.isNew}
            productImage={item.productImage.asset.url}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
