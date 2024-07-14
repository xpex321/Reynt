import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const categories = await prisma.category.findMany();
    console.log('Fetched categories from database:', categories); // Debugging line
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error); // Debugging line
    return NextResponse.json({ error: 'Error fetching categories' }, { status: 500 });
  }
}
