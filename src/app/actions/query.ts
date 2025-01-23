import { client } from "@/sanity/lib/client";
import { productType } from "@/types/products";

export  const getCart = async ()=>{
  const query = `
  *[_type == "order"]{
    _id,
    title,
    description,
    productImage{
      asset->{
        _id,
        url
      }
    },
    price,
    tags,
    discountPercentage,
    isNew
  }
`;
const data:productType[] =await client.fetch(query);
return data
}