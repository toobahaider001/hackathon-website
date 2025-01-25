import { productType } from "@/types/products";

export const addToCart = async (data:productType[]) => {
  console.log('Data being sent to /api/order:', data); // Debug log

  try {
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error('Failed to add product to cart:', error.error);
      throw new Error(error.error || 'Failed to add to cart');
    }

    const result = await res.json();
    console.log('Product added to cart successfully:', result);
    return result;
  } catch (err) {
    console.error('Error in addToCart:', err);
    throw err;
  }
};
