export const deleteCart = async (id: string) => {
    try {
      const res = await fetch('/api/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
  
      if (!res.ok) {
        const error = await res.json();
        console.error('Failed to delete cart item:', error.error);
        throw new Error(error.error || 'Failed to delete cart item');
      }
  
      const result = await res.json();
      console.log('Product deleted from cart successfully:', result);
      return result;
    } catch (err) {
      console.error('Error in deleteCart:', err);
      throw err;
    }
  };
  