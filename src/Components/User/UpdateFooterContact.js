import React, {useState} from 'react'
import axios from "axios"

function FooterContact() {
    const [contactUpdate, setContactUpdate] = useState({
        footer_sabit: "",
        footer_cep: "",
        footer_mail: ""
    })

    const handleSubmit = (e) => {
        if(contactUpdate.footer_sabit !== "" && contactUpdate.footer_cep !== "" && contactUpdate.footer_mail !== "") {

            axios
            .put("https://6086462fd14a870017578fbc.mockapi.io/corporation/1", contactUpdate )
            .then((response) => {
                console.log(response)
            });
        }else {
            alert("Lütfen gerekli alanları doldurunuz.")
        }
    }

    const handleChange = (e) => {
        setContactUpdate({...contactUpdate, [e.target.name] : e.target.value  })
    }
    return (
            <div className="add-donate">
            <form action="" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(contactUpdate);
            } }  >
               <input type="tel" name="footer_sabit" id="sabit" placeholder="Sabit Hat Numarası Giriniz" value={contactUpdate.footer_sabit} onChange={handleChange} />
               <input type="tel" name="footer_cep" id="cep" placeholder="Cep Telefon Numarası Giriniz" value={contactUpdate.footer_cep}  onChange={handleChange} />
               <input type="email" name="footer_mail" id="mail" placeholder="Mail Adresi Giriniz" value={contactUpdate.footer_mail}  onChange={handleChange} />
               <button type="submit">Gönder</button>
            </form>
        </div>
    )
}

export default FooterContact
