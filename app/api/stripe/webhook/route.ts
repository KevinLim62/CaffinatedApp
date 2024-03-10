'use server';

import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { updateOrderById } from '@/app/actions/orders';
import { redirect } from 'next/navigation';
const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const payload = await req.text();
  const sig = req.headers.get('stripe-signature') as string;
  const webhookSecret = process.env.NEXT_STRIPE_WEBHOOK_SECRET;
  let event: Stripe.Event;

  try {
    if (!sig || !webhookSecret) return new Response('Webhook secret not found.', { status: 400 });
    event = stripe.webhooks.constructEvent(payload, sig, webhookSecret);
    console.log(`🔔  Webhook received: ${event.type}`);
  } catch (err: any) {
    console.log(`❌ Error message: ${err.message}`);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  try {
    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const { userId, orderId }: any = event.data.object.metadata;
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
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: `Webhook Error: ${error.message}` }, { status: 200 });
  }

  return NextResponse.json({ received: true });
}
