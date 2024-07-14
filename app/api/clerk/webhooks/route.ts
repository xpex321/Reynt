import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { user } = await req.json();

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email_addresses[0].email_address },
    });

    if (!existingUser) {
      await prisma.user.create({
        data: {
          id: user.id,
          email: user.email_addresses[0].email_address,
          name: user.first_name + ' ' + user.last_name,
          role: 'USER',
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error handling webhook:', error);
    return NextResponse.json({ error: 'Error handling webhook' }, { status: 500 });
  }
}
