import React, {useEffect, useState} from 'react'
import axios from "axios"

function AddDonate() {

    // const donateAdd = donateBody => {
    //     axios.post("https://6086462fd14a870017578fbc.mockapi.io/donate", {
    //         addDonate, body
    //     })
    // }

    const [donateAdd, setDonateAdd] = useState({
        donatePrice: [10,20,50,100], 
        title: "",
        selectedType: null,
        selectedPrice: null,
        desc: "",
        img: ""
    })

    const handleSubmit = (e) => {
        if(donateAdd.title !== "" && donateAdd.desc !== "" && donateAdd.img !== "") {

            axios
            .post("https://6086462fd14a870017578fbc.mockapi.io/donate", donateAdd )
            .then((response) => {
                console.log(response)
            });
        }else {
            alert("Lütfen gerekli alanları doldurunuz.")
        }
    }

    // const [blogList, setBlogList] = useState([]);
    // const [updateblogList, setUpdateBlogList] = useState([]);
    // useEffect(() => {
    //   axios
    //     .all([
    //         axios.get("https://6086462fd14a870017578fbc.mockapi.io/donate"),
    //         axios.put("https://6086462fd14a870017578fbc.mockapi.io/donate")
    //     ])
    //     .then((responses) => {
    //         setBlogList(responses[0].data);
    //         setUpdateBlogList(responses[1].data);
    //     });
    // }, []);

    const handleChange = (e) => {
        setDonateAdd({...donateAdd, [e.target.name] : e.target.value  })
    }

    return (
        <div className="add-donate">
            <form action="" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(donateAdd);
            } }  >
               {/* <select name="" id="">
                   <option value="10">10</option>
                   <option value="20">20</option>
                   <option value="50">50</option>
                   <option value="100">100</option>
               </select> */}
               <input type="text" name="title" id="title" placeholder="Title Giriniz" value={donateAdd.title} onChange={handleChange} />
               <input type="text" name="desc" id="desc" placeholder="Description Giriniz" value={donateAdd.desc}  onChange={handleChange} />
               <input type="text" name="img" id="image" placeholder="Görsel Adresini Giriniz" value={donateAdd.img}  onChange={handleChange} />
               <button type="submit">Gönder</button>
            </form>
        </div>
    )
}

export default AddDonate
