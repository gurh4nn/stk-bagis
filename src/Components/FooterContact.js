import React, { useState, useEffect } from "react";
import axios from "axios";

function FooterContact() {
  const [footerContact, setFooterContact] = useState([]);
  useEffect(() => {
    axios
      .get("https://6086462fd14a870017578fbc.mockapi.io/contact")
      .then((response) => setFooterContact(response.data));
  }, []);
  return (
    <div className="footer-contact">
     {footerContact.map((footer, value) => (
       <>
      <div className="contact-number">
          <h3>İletişim Numaraları</h3>
          <p><b>Sabit:</b> {footer.sabit} </p>
          <p><b>Cep:</b> {footer.cep} </p>
      </div>
      <div className="contact-mail">
      <h3>Mail Adresi</h3>
      <p> {footer.mail} </p>
      </div>
      <div className="sss">
          <h3>Sıkça Sorulan Sorular</h3>
      </div>
      </>
       ))}
    </div>
  );
}

export default FooterContact;
