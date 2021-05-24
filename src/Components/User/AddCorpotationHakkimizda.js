import React, {useState} from 'react'
import axios from "axios"


function AddCorpotationHakkimizda() {

    const [corpotationAdd, setCorpotationAdd] = useState({
        hakkimizda_content: "",
        hakkimizda_img: ""
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
           <label>Hakkımızda Sayfası</label>
           <textarea style={{height: "80px"}} type="text" name="hakkimizda_content" id="desc" placeholder="Description Giriniz" value={corpotationAdd.hakkimizda_content}  onChange={handleChange} />
           <input type="text" name="hakkimizda_img" id="image" placeholder="Görsel Adresini Giriniz" value={corpotationAdd.hakkimizda_img}  onChange={handleChange} />
           <button type="submit">Gönder</button>
        </form>
    </div>
    )
}

export default AddCorpotationHakkimizda
