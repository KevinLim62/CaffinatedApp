import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/nextAuth';
import { getOrderByUserId, updateOrderById } from '@/app/actions/orders';

const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest, res: NextResponse) {
  const payload = await req.text();
  const sig = req.headers.get('stripe-signature');
  const session = await getServerSession(authOptions);

  try {
    let event = stripe.webhooks.constructEvent(payload, sig!, process.env.NEXT_STRIPE_WEBHOOK_SECRET!);
    console.log('Event', event.type);
    // charge.succeeded
    // payment_intent.succeeded
    // payment_intent.created

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const userOrder = await getOrderByUserId('1');
        // const paymentAmount = event.data.object.amount;
        const orderId = userOrder[userOrder.length - 1].id;
        const result = await updateOrderById(orderId, {
          orderStatus: 'completed',
        });
        console.log(result);

        break;

      default:
      //console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ message: event.type }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: `Webhook Error: ${error.message}` }, { status: 400 });
  }
}
