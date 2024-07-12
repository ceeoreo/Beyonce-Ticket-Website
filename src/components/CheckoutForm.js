import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutForm() {
  const fetchClientSecret = useCallback(() => {
    return fetch("/api/checkout-session", {
      method: "POST",
    })
    .then((res) => res.json())
    .then((data) => data.clientSecret);
  }, []);

  const options = {fetchClientSecret};

  return (
    <div>
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}