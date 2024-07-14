import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getAuth } from '@clerk/nextjs/server';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const tasks = await prisma.task.findMany();
    console.log('Fetched tasks:', tasks);
    return NextResponse.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return NextResponse.json({ error: 'Error fetching tasks' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { title, description, imageUrl, categoryId, location } = await req.json();

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (user && user.role === 'SUPERUSER') {
      const task = await prisma.task.create({
        data: {
          title,
          description,
          imageUrl,
          categoryId,
          location,
          userId,
        },
      });
      return NextResponse.json(task);
    } else {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
  } catch (error) {
    console.error('Error creating task:', error);
    return NextResponse.json({ error: 'Error creating task' }, { status: 500 });
  }
}
