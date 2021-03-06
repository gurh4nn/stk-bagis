import React, { useState, useEffect } from "react";
import cn from "classnames";
import axios from "axios";
import Stripe from "./Stripe";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Index() {
  const [inputPrice, setInputPrice] = useState({
    // price: "",
  });

  const [initialType, setinitialType] = useState([]);
  useEffect(() => {
    axios
      .get("https://6086462fd14a870017578fbc.mockapi.io/donate")
      .then((response) => setinitialType(response.data));
  }, []);
  // const [priceIndex, setPriceIndex] = useState(undefined);
  const [donateType, setDonateType] = useState([]);
  const [showItem, setShowItem] = useState(false);

  useEffect(() => {
    setDonateType(initialType);
  }, [initialType]);
  function handleClick(key, index) {
    const newList = donateType.map(
      (item, ind) =>
        (item = {
          ...item,
          selectedType: ind === index ? key : null,
          selectedPrice:
            ind === index
              ? key == 0
                ? 10
                : key == 1
                ? 20
                : key == 2
                ? 50
                : 100
              : null,
            formPrice: inputPrice,
        })
    );
    setDonateType(newList);
    let priceValue =
      key == 0 ? 10 : key == 1 ? 20 : key == 2 ? 50 : 100;
    setInputPrice(priceValue);
  }

  function scrollPayment() {
    if (inputPrice < 0) {
      const notify = () => toast.warn("Lütfen Geçerli Bir Tutar Giriniz!");
      notify();
    } else {
      setShowItem(true);
      setTimeout(function () {
        document
          .getElementById("pay-form")
          .scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
      }, 500);
    }
  }
  console.log(inputPrice)
  return (
    <div className="donate-page">
      {donateType.map((type, index) => (
        // {initialType.map((type, index) => (
        <div className="donate-card">
          <div className="donate-content" key={index}>
            <div className="donate-img">
              <img src={type.img} alt="" />
            </div>
            <div className="donate-title" id="donate-card-title">
              {type.title}
            </div>
            <div className="donate-description">{type.desc}</div>
          </div>

          <div className="donate-price">
            {type.donatePrice.map((price, value) => (
              <span
                className={cn(
                  "price-list",
                  type.selectedType == value && "input-click"
                )}
                onClick={() => handleClick(value, index)}
              >
                {price}
              </span>
            ))}
            <input
              type="number"
              // min="0"
              name="price"
              id="price"
              defaultValue={type.selectedPrice}
              pattern="^([0-9]$"
              placeholder="0₺"
              onChange={(e) => {
                setInputPrice(e.target.value);
              }}
            />

            {/* <label style={{display:"block"}}>Ödenecek Tutar: {inputPrice.length >= 1 || type.selectedPrice ? inputPrice/100 : "0"} ₺</label> */}

            <button type="submit" onClick={scrollPayment}>
              Bağış Yap
            </button>
          </div>
        </div>
      ))}
      {showItem ? <Stripe price={inputPrice*100} /> : ""}
      <ToastContainer />
    </div>
  );
}

export default Index;
