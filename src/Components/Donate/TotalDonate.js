import React, { useState, useEffect } from "react";
import axios from "axios";

function TotalDonate(pricing) {
  console.log("total pricing", pricing)
  const [totalDonateMap, setTotalDonateMap] = useState([]);

  const [donateAdd, setDonateAdd] = useState({
    price: "",
    donator: "",
  });

  useEffect(() => {
    axios
      .get("https://6086462fd14a870017578fbc.mockapi.io/totalDonate")
      .then((response) => setTotalDonateMap(response.data));
  }, []);

  useEffect(() => {
    if(totalDonateMap.length > 0) {

        localStorage.setItem('totalPrice', totalDonateMap[0].price);
        localStorage.setItem('totalDonator', totalDonateMap[0].donator);
    
    }
  }, [totalDonateMap])

  return (
    <div className="total-donate">
      {totalDonateMap.map((totalDonates, value) => (
        <div className="donate">
          <div className="donate-title">
            <h2>Toplam Bağış</h2>
          </div>
          <div className="donate-description">{totalDonates.total_desc}</div>
          <div className="donate-count">
            <div className="donate-price">
              Toplam Bağış Tutarı:
              <b>{totalDonates.price/100}</b>
            </div>
            <div className="hr"></div>
            <div className="donate-number">
              Toplam Bağışçı:
              <b>{totalDonates.donator}</b>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TotalDonate;
