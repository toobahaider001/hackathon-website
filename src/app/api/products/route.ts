import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const query = `*[_type == "product"]{
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
    }`;
    const data = await client.fetch(query);

    // Return a JSON response
    return NextResponse.json(data);
  } catch (error: any) {
    console.error(error); // Log the error
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
