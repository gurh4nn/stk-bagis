import React, { useState, useEffect } from "react";
import axios from "axios";


function BankAccounts() {
    const [bankAccount, setBankAccount] = useState([]);
    useEffect(() => {
      axios
        .get("https://6086462fd14a870017578fbc.mockapi.io/corporation/1")
        .then((response) => setBankAccount(response.data));
    }, []);
    return (
        <div className="bank-account">
            <div className="account-number">
                <img src={bankAccount.banka_logo} alt="" />
                <h1>{bankAccount.banka_adi} Hesap Numarası</h1>
                <p>İban: {bankAccount.banka_iban}</p>
                <p>Hesap Numarası: {bankAccount.banka_hesap_no}</p> 
            </div>
        </div>
    )
}

export default BankAccounts
