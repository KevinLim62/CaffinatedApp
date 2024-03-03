import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest, res: NextResponse) {
  const payload = await req.text();
  const response = JSON.parse(payload);

  const sig = req.headers.get('stripe-signature');

  const dateTime = new Date(response?.created * 1000).toLocaleDateString();
  const timeString = new Date(response?.created * 1000).toLocaleDateString();

  try {
    let event = stripe.webhooks.constructEvent(payload, sig!, process.env.NEXT_STRIPE_WEBHOOK_SECRET!);
    console.log('Event', event.type);
    // charge.succeeded
    // payment_intent.succeeded
    // payment_intent.created
    return NextResponse.json({ status: 'Success', event: event.type });
  } catch (error) {
    return NextResponse.json({ status: 'Failed', error });
  }
}
