## Aim of project

This is an online shop created with NextJs that uses three payment processors: Stripe, Braintree and Paypal.

## Start on local

1. Clone the repo

2. Make sure to use the node version stipulated in `.nvmrc`

3. Install packages:

```bash
   npm i

```

3. Add the following env variables to your `.env.development` file

```bash
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  STRIPE_SECRET_KEY
  STRIPE_SIGNING_SECRET
  PAYPAL_CLIENT_ID
  PAYPAL_CLIENT_SECRET
  BRAINTREE_CLIENT_ID
```

4. Start project on local machine:

```bash
   npm run dev

```
