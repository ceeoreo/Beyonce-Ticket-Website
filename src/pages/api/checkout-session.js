const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res){
  switch (req.method) {
    case "POST":
      try {
        const session = await stripe.checkout.sessions.create({
          ui_mode: "embedded",
          line_items: [
            {
              price: "price_1Ow4DzLcO1FmkluyDC8iFYDP",
              quantity: 1,
            },
          ],
          mode: "payment",
          return_url: `${req.headers.origin}/return?session_id={CHECKOUT_SESSION_ID}`
        });
        res.send({clientSecret: session.clientSecret});
      } catch(err) {
        res.status(err.statusCode || 500).json(err.message);
      }
      break;
    case "GET":
      try {
        const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

        res.send({
          status: session.status,
          customer_email: session.customer_details.email
        });
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
      break;
    default:
    res.setHeader('Allow', req.method);
    res.status(405).end('Method Not Allowed')
  }
}