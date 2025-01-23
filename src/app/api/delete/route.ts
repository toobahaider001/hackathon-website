import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  try {
    // Parse the request body to extract the product ID
    const { id }: { id: string } = await request.json();

    // Validate that the ID is provided
    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required for deletion" },
        { status: 400 }
      );
    }

    // Delete the product document from Sanity CMS
    const result = await client.delete(id);

    return NextResponse.json(
      { message: "Product deleted successfully", data: result },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting product:", error.message);

    return NextResponse.json(
      { error: error.message || "Failed to delete product" },
      { status: 500 }
    );
  }
}
