import React, {useState} from 'react'
import axios from "axios"


function AddCorporationIban() {

    const [corpotationAdd, setCorpotationAdd] = useState({
        banka_adi: "",
        banka_logo: "",
        banka_iban: "",
        banka_hesap_no: "",
    })

    const handleSubmit = (e) => {
        // if(corpotationAdd.corporate_page !== "" && corpotationAdd.content !== "" && corpotationAdd.img !== "") {

            axios
            .put("https://6086462fd14a870017578fbc.mockapi.io/corporation/1", corpotationAdd )
            .then((response) => {
                console.log(response)
            });
        // }else {
        //     alert("Lütfen gerekli alanları doldurunuz.")
        // }
    }

    const handleChange = (e) => {
        setCorpotationAdd({...corpotationAdd, [e.target.name] : e.target.value  })
    }


    return (
        <div className="add-donate">
            
        <form action="" onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(corpotationAdd);
        } }  >
           {/* <select name="corporate_page" id="corporate_page" onChange={handleChange}>
               <option value="hakkimizda">Hakkımızda</option>
               <option value="tarihce">Tarihçe</option>
               <option value="vergi">Vergi Muafiyeti</option>
           </select> */}
           <label>Hesap Numarası Bilgileri</label>
           <input type="text" name="banka_adi" id="desc" placeholder="Banka Adı" value={corpotationAdd.banka_adi}  onChange={handleChange} />
           <input type="text" name="banka_logo" id="image" placeholder="Banka Logo" value={corpotationAdd.banka_logo}  onChange={handleChange} />
           <input type="text" name="banka_iban" id="desc" placeholder="İban Numarası" value={corpotationAdd.banka_iban}  onChange={handleChange} />
           <input type="text" name="banka_hesap_no" id="image" placeholder="Hesap Numarası" value={corpotationAdd.banka_hesap_no}  onChange={handleChange} />
           <button type="submit">Gönder</button>
        </form>
    </div>
    )
}

export default AddCorporationIban
