'use server';

import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { updateOrderById } from '@/app/actions/orders';
import { redirect } from 'next/navigation';
const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const res = JSON.parse(payload);

  const sig = req.headers.get('Stripe-Signature');

  try {
    let event = stripe.webhooks.constructEvent(payload, sig!, process.env.NEXT_STRIPE_WEBHOOK_SECRET!);
    console.log('Event', event.type);

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const { userId, orderId }: any = res.data.object.metadata;
        if (userId && orderId) {
          const result = await updateOrderById(orderId, {
            orderStatus: 'completed',
          });
          console.log(result);
          redirect(`${process.env.NEXT_UI_URL}/profile`);
        }
        break;

      default:
    }

    return NextResponse.json({ message: event.type }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: `Webhook Error: ${error.message}` }, { status: 200 });
  }
}
