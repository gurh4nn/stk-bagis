import React, {useState, useEffect} from "react";
import cn from "classnames";
import axios from "axios";

function Index() {

  const [initialType, setinitialType] = useState([]);
  useEffect(() => {
      axios
        .get("https://6086462fd14a870017578fbc.mockapi.io/donate")
        .then((response) => setinitialType(response.data));
    }, []);
  // const donatePrice = [10, 20, 50, 100];

  // const initialType = [
  //   {
  //     donatePrice : [10, 20, 50, 100],
  //     selectedType: null,
  //     title: "Title Title 1",
  //     desc: "Test açıklama",
  //     img: "https://picsum.photos/200/200",
  //   },
  //   {
  //     donatePrice : [10, 20, 50, 100],
  //     selectedType: null,
  //     title: "Title Title 2",
  //     desc: "Test açıklama 2",
  //     img: "https://picsum.photos/200/201",
  //   },
  // ];

  // const [priceIndex, setPriceIndex] = useState(undefined);
  const [donateType, setDonateType] = useState([]);

  useEffect(()=>{
    setDonateType(initialType)
  },[initialType])
  function handleClick(key, index) {
    const newList = donateType.map((item, ind) => item ={
      
      ...item,
      selectedType : ind===index ? key : null } )
    setDonateType(newList)
  }

  
  console.log(initialType)

  return (
    <div className="donate-page">
      {donateType.map((type, index) => (
        // {initialType.map((type, index) => (
        <div className="donate-card">
          <div className="donate-content" key={index}>
            <div className="donate-img">
              <img src={type.img} alt="" />
            </div>
            <div className="donate-title">{type.title}</div>
            <div className="donate-description">{type.desc}</div>
          </div>

          <div className="donate-price">
            {type.donatePrice.map((price, value) => (
              <span className={cn("price-list", type.selectedType == value && "input-click")} onClick={() => handleClick(value, index)}>
                {price}
              </span>
            ))}
            <input type="number" min="0" name="price" id="price" placeholder="0₺" />

            <button type="submit">Bağış Yap</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Index;
