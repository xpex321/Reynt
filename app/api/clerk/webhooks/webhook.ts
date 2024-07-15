import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
import { WebhookEvent } from '@clerk/nextjs/server';

const prisma = new PrismaClient();

const verifySignature = (payload: string, signature: string, secret: string): boolean => {
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload, 'utf8');
  const digest = hmac.digest('base64');
  return signature === digest;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const signature = req.headers['clerk-signature'] as string;
  const payload = JSON.stringify(req.body);
  const secret = process.env.CLERK_WEBHOOK_SECRET;

  if (!secret) {
    console.error('CLERK_WEBHOOK_SECRET is not defined');
    return res.status(500).json({ error: 'Internal Server Error' });
  }

  if (!verifySignature(payload, signature, secret)) {
    return res.status(400).json({ error: 'Invalid signature' });
  }

  const event = req.body as WebhookEvent;

  if (event.type === 'user.created') {
    const { id, email_addresses, first_name, last_name } = event.data;

    // Extract the primary email address
    const email = email_addresses?.[0]?.email_address;

    try {
      // Create user in the database
      await prisma.user.create({
        data: {
          id,
          email,
          name: `${first_name} ${last_name}`,
        },
      });

      res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(200).json({ message: 'Event not processed' });
  }
}
