import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TotalDonate from "./TotalDonate";

export const CheckoutForm = ({price}) => {
  console.log("fiyat", price)

  const [billingDetails, setBillingDetails] = useState({
    email: "",
    name: "",
  });

  console.log(billingDetails.email)

  // console.log(billingDetails)

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const {id} = paymentMethod;
        const response = await axios.post(
          "http://localhost:8080/stripe/charge",
          {
            amount: price,
            id: id,
            description: `mail: ${billingDetails.email} isim: ${billingDetails.name} `
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          notify("Ödeme işlemi başarıyla gerçekleştirildi. Yarınlara umut olduğunuz için teşekkür ederiz!"
          );
          submitDonate();
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
        notify("Ödeme işlemi gerçekleştirilemedi. Lütfen tekrar deneyiniz!"
        );
      }
    } else {
      console.log(error.message);
      notify("Ödeme işlemi gerçekleştirilemedi. Lütfen tekrar deneyiniz!"
      );
    }
  };
  const notify = (message) =>
    toast.info(message, {
      position: "bottom-right",
      // autoClose: 5000,
      // hideProgressBar: false,
      // closeOnClick: true,
      // pauseOnHover: true,
      // draggable: true,
      // progress: undefined,
    });

    let localPrice = Number(localStorage.getItem('totalPrice'))
    let localDonator = Number(localStorage.getItem('totalDonator'))

    const [donateAdd, setDonateAdd] = useState({
      price: localPrice + price,
      donator: localDonator+1
  })

    const submitDonate = (e) => {
          axios
          .put("https://6086462fd14a870017578fbc.mockapi.io/totalDonate/1", donateAdd )
          .then((response) => {
              console.log(response)
          });
  }
  
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <input
        label="Name"
        id="name"
        type="text"
        placeholder="İsim Soyisim"
        required
        autoComplete="name"
        value={billingDetails.name}
        onChange={(e) => {
          setBillingDetails({ ...billingDetails, name: e.target.value });
        }}
        style={{ fontSize: "14px", height: "36px" }}
      />
      <input
        label="Email"
        id="email"
        type="email"
        placeholder="Mail Adresi"
        required
        autoComplete="email"
        value={billingDetails.email}
        onChange={(e) => {
          setBillingDetails({ ...billingDetails, email: e.target.value });
        }}
        style={{ fontSize: "14px", height: "36px" }}
      />
      <CardElement />
      <button>Öde</button>
      <ToastContainer />
    </form>
  );
};
