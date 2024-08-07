const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {

  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price: 'price_1Ow4DzLcO1FmkluyDC8iFYDP',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: '/success',
        cancel_url: '/cancel',
    });
    res.redirect(303, session.url);
    }
    catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow','POST');
    res.status(405).end('Method Not Allowed');
  }
}