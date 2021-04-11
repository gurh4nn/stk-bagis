import React from "react";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-form">
        <div className="contact-item">
        <div className="info">
          <label htmlFor="">İsim - Soyisim</label>
          <input type="text" name="" id="name-surname" />
          <label htmlFor="">Mail Adresi</label>
          <input type="email" name="" id="mail-adress" />
          <label htmlFor="">Telefon Numarası</label>
          <input type="tel" name="" id="telephone" />
          <label htmlFor="">Konu</label>
          <select name="" id="subject">
            <option value="" selected>Lütfen Konu Seçiniz</option>
            <option value="donate">Bağış Hakkında</option>
            <option value="problem">Bağış Sorunları</option>
            <option value="offer">Öneri/Tavsiye</option>
          </select>
        </div>
        <div className="message">
          <label htmlFor="">Mesajınız</label>
          <input type="text" name="" id="message" />
          <input type="submit" id="submit" value="Mesajı Gönder!"/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
