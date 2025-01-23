import Classic from "@/components/ui/Classic";
import Featured from "@/components/ui/Featured";
import Hero from "@/components/ui/Hero";
import Pick from "@/components/ui/Pick";
import Product from "@/components/ui/Product";
import { productType } from "@/types/products";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  const data: productType[] = await res.json();
  return (
    <><Hero />
      <Pick />
      <Product products={data} />
      <Classic />
      <Featured />

    </>
  );
}
