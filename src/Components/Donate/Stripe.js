import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./App.scss";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY =
  "pk_test_51ItK3ZFMhdVLyaNG2YWJSjejH20JXcgjJ3cJ429zzipECCP7CGOAK4FdjJHUlBI7QSwOqxDX6lyKA7OG3ebTVtXd00dPnVv3LX";

const stripeTestPromise = loadStripe(PUBLIC_KEY);
const Stripe = ({price}) => {
  console.log("stripe",price)
  return (
    <div className="payment-form" id="pay-form">
      <Elements stripe={stripeTestPromise}>
        <CheckoutForm price= {price} />
      </Elements>
    </div>
  );
};

export default Stripe;
