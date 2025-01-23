import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
import fetch from "node-fetch"; // Ensure you have 'node-fetch' installed
import { Buffer } from "buffer"; // For buffering the image

export async function POST(request: Request) {
  try {
    const {
      title,
      description,
      productImage, // This should be the URL of the image
      price,
      tags,
      discountPercentage,
      isNew,
    } = await request.json();

    // Validate required fields
    if (!title || !description || !productImage || !price) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Fetch and buffer the image
    const imageBuffer = await fetchImageBuffer(productImage);
    if (!imageBuffer) {
      return NextResponse.json(
        { error: "Failed to fetch and buffer the image" },
        { status: 400 }
      );
    }

    // Upload the image to Sanity
    const uploadedImage = await client.assets.upload('image', imageBuffer, {
      filename: 'product-image.jpg', // You can name the image as needed
    });

    // Structure the new order data, now with the image reference ID
    const newOrder = {
      _type: "order",
      title,
      description,
      productImage: {
        _type: "image",
        asset: {
          _ref: uploadedImage._id, // Use the uploaded image's asset ID
        },
      },
      price,
      tags: tags || [], // Optional tags array
      discountPercentage: discountPercentage || 0, // Default discount if not provided
      isNew: isNew || false, // Default "isNew" if not provided
    };

    // Create the new order in Sanity CMS
    const result = await client.create(newOrder);

    // Return a success response
    return NextResponse.json(
      { message: "Order created successfully", data: result },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating order:", error.message, error.stack); // Log the error for debugging

 
    return NextResponse.json(
      { error: error.message || "Failed to create order" },
      { status: 500 }
    );
  }
}

// Function to fetch the image from the URL and return it as a buffer
async function fetchImageBuffer(imageUrl: string): Promise<Buffer | null> {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      console.error("Failed to fetch image from URL:", response.statusText);
      return null;
    }
    const buffer = await response.buffer(); // Buffer the image
    return buffer;
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
}
