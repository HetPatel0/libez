import { PrismaClient } from "@/app/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const itemId = parseInt(params.id);
    const { patronId } = await request.json();

    // Check if item exists and is available
    const item = await prisma.item.findUnique({
      where: { ItemID: itemId },
      include: {
        itemtransaction: {
          orderBy: {
            ItemTranID: 'desc'
          },
          take: 1
        }
      }
    });

    if (!item) {
      return NextResponse.json(
        { error: "Item not found" },
        { status: 404 }
      );
    }

    // Check if item is available
    const currentTransaction = item.itemtransaction[0];
    const isAvailable = currentTransaction?.IsAvailable ?? true;

    if (!isAvailable) {
      return NextResponse.json(
        { error: "Item is not available for rental" },
        { status: 400 }
      );
    }

    // Check if patron exists
    const patron = await prisma.patron.findUnique({
      where: { PatronID: patronId }
    });

    if (!patron) {
      return NextResponse.json(
        { error: "Patron not found" },
        { status: 404 }
      );
    }

    // Create new transaction (checkout)
    const newTransaction = await prisma.itemtransaction.create({
      data: {
        ItemID: itemId,
        IsAvailable: false,
        ItemAssignedTo: patronId,
        IsVisible: true
      }
    });

    return NextResponse.json({
      success: true,
      message: "Item successfully rented",
      transaction: newTransaction
    });

  } catch (error) {
    console.error('Error renting item:', error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const itemId = parseInt(params.id);
    const { patronId } = await request.json();

    // Find the current transaction for this item
    const currentTransaction = await prisma.itemtransaction.findFirst({
      where: {
        ItemID: itemId,
        IsAvailable: false,
        ItemAssignedTo: patronId
      },
      orderBy: {
        ItemTranID: 'desc'
      }
    });

    if (!currentTransaction) {
      return NextResponse.json(
        { error: "No active rental found for this item and patron" },
        { status: 404 }
      );
    }

    // Create return transaction
    const returnTransaction = await prisma.itemtransaction.create({
      data: {
        ItemID: itemId,
        IsAvailable: true,
        ItemAssignedTo: null,
        IsVisible: true
      }
    });

    return NextResponse.json({
      success: true,
      message: "Item successfully returned",
      transaction: returnTransaction
    });

  } catch (error) {
    console.error('Error returning item:', error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 