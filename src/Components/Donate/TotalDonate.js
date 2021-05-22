import React, { useState, useEffect } from "react";
import axios from "axios";

function TotalDonate() {
    const [totalDonateMap, setTotalDonateMap] = useState([]);
    useEffect(() => {
        axios
          .get("https://6086462fd14a870017578fbc.mockapi.io/totalDonate")
          .then((response) => setTotalDonateMap(response.data));
      }, []);

    const totalDonate = {Donate: "1000₺", numberOFDonate: 20,}
    return (
        <div className="total-donate">
            <div className="donate">
                <div className="donate-title">
                    <h2>Toplam Bağış</h2>
                </div>
                {totalDonateMap.map((totalDonates, value) => (
                <div className="donate-description">
                   {totalDonates.total_desc}
                </div>
                      ))}
                <div className="donate-count">
                    <div className="donate-price">
                        Total Donate Price: 
                       <b>{totalDonate.Donate}</b>
                    </div>
                    <div className="hr"></div>
                    <div className="donate-number">
                        Total Donator:
                        <b>{totalDonate.numberOFDonate}</b>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TotalDonate
