import React, {useState} from 'react'
import axios from "axios"

function FooterContact() {
    const [contactUpdate, setContactUpdate] = useState({
        sabit: "",
        cep: "",
        mail: ""
    })

    const handleSubmit = (e) => {
        if(contactUpdate.sabit !== "" && contactUpdate.cep !== "" && contactUpdate.mail !== "") {

            axios
            .put("https://6086462fd14a870017578fbc.mockapi.io/contact/1", contactUpdate )
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
               <input type="tel" name="sabit" id="sabit" placeholder="Sabit Hat Numarası Giriniz" value={contactUpdate.sabit} onChange={handleChange} />
               <input type="tel" name="cep" id="cep" placeholder="Cep Telefon Numarası Giriniz" value={contactUpdate.cep}  onChange={handleChange} />
               <input type="email" name="mail" id="mail" placeholder="Mail Adresi Giriniz" value={contactUpdate.mail}  onChange={handleChange} />
               <button type="submit">Gönder</button>
            </form>
        </div>
    )
}

export default FooterContact
