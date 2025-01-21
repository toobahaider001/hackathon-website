'use client'
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      title,
      description,
      productImage,
      price,
      tags,
      discountPercentage,
      isNew,
    } = await request.json();

    if (!title || !description || !productImage || !price) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newOrder = {
      _type: "order",
      title,
      description,
      productImage: {
        _type: "image",
        asset: {
          _ref: productImage, 
        },
      },
      price,
      tags: tags || [], 
      discountPercentage: discountPercentage || 0, 
      isNew: isNew || false, 
    };

    
    const result = await client.create(newOrder);

    return NextResponse.json(
      { message: "Order created successfully", data: result },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating order:", error); 
    return NextResponse.json(
      { error: error.message || "Failed to create order" },
      { status: 500 }
    );
  }
}
