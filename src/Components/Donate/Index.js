import React, { useState, useEffect } from "react";
import cn from "classnames";
import axios from "axios";
import Stripe from "./Stripe";

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
          selectedPrice: ind === index ? key == 0 ? 1000 : key == 1 ? 2000 : key == 2 ? 5000 : 10000 : null,
        })
    );
    setDonateType(newList);
    let priceValue =
      key == 0 ? 1000 : key == 1 ? 2000 : key == 2 ? 5000 : 10000;
    setInputPrice(priceValue);
  }

  function scrollPayment() {
    setShowItem(true);
    setTimeout(function(){
      document.getElementById("pay-form").scrollIntoView({behavior: "smooth", block: "end", inline: "end"});
     }, 500);
  }

  return (
    <div className="donate-page">
      {donateType.map((type, index) => (
        // {initialType.map((type, index) => (
        <div className="donate-card">
          <div className="donate-content" key={index}>
            <div className="donate-img">
              <img src={type.img} alt="" />
            </div>
            <div className="donate-title">{type.title}</div>
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
              value={type.selectedPrice}
              pattern="^([0-9]$"
              placeholder="0₺"
              onChange={(e) => {
                setInputPrice(e.target.value);
              }}
            />

            <button type="submit" onClick={scrollPayment}>
              Bağış Yap
            </button>
          </div>
        </div>
      ))}
      {showItem ? <Stripe price={inputPrice} /> : ""}
    </div>
  );
}

export default Index;
