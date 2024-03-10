'use server';

import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { updateOrderById } from '@/app/actions/orders';
import { redirect } from 'next/navigation';
const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest, res: NextResponse) {
  const payload = await req.text();
  const sig = req.headers.get('stripe-signature');

  try {
    let event = stripe.webhooks.constructEvent(payload, sig!, process.env.NEXT_STRIPE_WEBHOOK_SECRET!);
    console.log('Event', event.type);
    // charge.succeeded
    // payment_intent.succeeded
    // payment_intent.created

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const { userId, orderId }: any = event.data.object.metadata;
        const result = await updateOrderById(orderId, {
          orderStatus: 'completed',
        });
        console.log(result);
        redirect(`${process.env.NEXT_UI_URL}/profile`);
        break;

      default:
    }

    return NextResponse.json({ message: event.type }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: `Webhook Error: ${error.message}` }, { status: 400 });
  }
}
