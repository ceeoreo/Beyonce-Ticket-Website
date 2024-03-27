import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import NavBar from '../components/NavBar';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
export default function Cart () {
  return (
    <div>
      <NavBar />
      <h1>Cart</h1>
      <form action="/api/checkout-session" method="POST">
        <section>
          <button type="submit" role="link">
            Checkout
          </button>
        </section>
      </form>
    </div>
  );
};