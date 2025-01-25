import Classic from "@/components/ui/Classic";
import Featured from "@/components/ui/Featured";
import Hero from "@/components/ui/Hero";
import Pick from "@/components/ui/Pick";
import Product from "@/components/ui/Product";
import { productType } from "@/types/products";
export default async function Home() {
  let data: productType[] = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
    if (!res.ok) throw new Error('Failed to fetch products');
    data = await res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <>
      <Hero />
      <Pick />
      <Product products={data} />
      <Classic />
      <Featured />
    </>
  );
}
