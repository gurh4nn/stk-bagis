import React from "react";
import emailjs , { init } from "emailjs-com";
init("user_T2GROrUg79VnXpiyEATsS");

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("user_T2GROrUg79VnXpiyEATsS", "template_spydwqf", e.target, "service_9pf4vsq")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact-page">
      <div className="contact-form">
        <form className="contact-item">
          <div className="info">
            <label htmlFor="">İsim - Soyisim</label>
            <input type="text" name="" id="name-surname" />
            <label htmlFor="">Mail Adresi</label>
            <input type="email" name="" id="mail-adress" />
            <label htmlFor="">Telefon Numarası</label>
            <input type="tel" name="" id="telephone" />
            <label htmlFor="">Konu</label>
            <select name="" id="subject">
              <option value="" selected>
                Lütfen Konu Seçiniz
              </option>
              <option value="donate">Bağış Hakkında</option>
              <option value="problem">Bağış Sorunları</option>
              <option value="offer">Öneri/Tavsiye</option>
            </select>
          </div>
          <div className="message">
            <label htmlFor="">Mesajınız</label>
            <input type="text" name="" id="message" />
            <input type="submit" id="submit" value="Mesajı Gönder!" onSubmit={sendEmail}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
