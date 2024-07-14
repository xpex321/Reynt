import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { search } = req.query;

  try {
    let tasks;
    if (search) {
      tasks = await prisma.task.findMany({
        where: {
          OR: [
            {
              title: {
                contains: search as string,
                mode: 'insensitive',
              },
            },
            {
              description: {
                contains: search as string,
                mode: 'insensitive',
              },
            },
          ],
        },
      });
    } else {
      tasks = await prisma.task.findMany();
    }

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load tasks' });
  }
}
