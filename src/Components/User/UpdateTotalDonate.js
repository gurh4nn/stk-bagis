import React, {useState} from 'react'
import axios from "axios"

function UpdateTotalDonate() {

    const [totalDonateUpdate, setTotalDonateUpdate] = useState({
        total_desc: "",
    })

    const handleSubmit = (e) => {
        if(totalDonateUpdate.total_desc !== "") {

            axios
            .put("https://6086462fd14a870017578fbc.mockapi.io/totalDonate/1", totalDonateUpdate )
            .then((response) => {
                console.log(response)
            });
        }else {
            alert("Lütfen gerekli alanları doldurunuz.")
        }
    }

    const handleChange = (e) => {
        setTotalDonateUpdate({...totalDonateUpdate, [e.target.name] : e.target.value  })
    }

    return (
        <div className="add-donate">
            <form action="" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(totalDonateUpdate);
            } }  >
               <textarea style={{height: 50, marginBottom: '10px'}}  type="text" name="total_desc" id="total_desc" placeholder="Toplam Bağış Açıklamasını Giriniz" value={totalDonateUpdate.sabit} onChange={handleChange} />
               <button type="submit">Gönder</button>
            </form>
        </div>
    )
}

export default UpdateTotalDonate
