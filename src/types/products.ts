export interface productType {
  isNew: boolean;
  _id: string;
  title: string;
  description: string;
  productImage: {
    asset: {
        url: string
    }
  };
  price: number;
  tags: string[];
  dicountPercentage: number;
}
