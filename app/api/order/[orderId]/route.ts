import { NextResponse } from "next/server";
import { databases } from "@/lib/appwrite-server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    const { orderId } = await params;

    const order = await databases.getDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_ORDERS_COLLECTION_ID!,
      orderId
    );

    return NextResponse.json({
      success: true,
      order: {
        ...order,
        items: JSON.parse(order.items),
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 404 });
  }
}