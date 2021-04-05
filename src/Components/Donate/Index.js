import React, {useState} from "react";
import cn from "classnames";

function Index() {
  const donatePrice = [10, 20, 50, 100];

  const donateType = [
    {
      title: "Title Title 1",
      desc: "Test açıklama",
      img: "https://picsum.photos/200/200",
    },
    {
      title: "Title Title 2",
      desc: "Test açıklama 2",
      img: "https://picsum.photos/200/201",
    },
  ];

  const [priceIndex, setPriceIndex] = useState(undefined)

  function handleClick(index) {
    setPriceIndex(index)
  }
  return (
    <div className="donate-page">
      {donateType.map((type, index) => (
        <div className="donate-card">
          <div className="donate-content" key={index}>
            <div className="donate-img">
              <img src={type.img} alt="" />
            </div>
            <div className="donate-title">{type.title}</div>
            <div className="donate-description">{type.desc}</div>
          </div>

          <div className="donate-price">
            {donatePrice.map((price, index) => (
              <span className={cn("price-list", priceIndex == index && "input-click")} onClick={() => handleClick(index)}>
                {price}
              </span>
            ))}
            <input type="number" name="price" id="price" placeholder="0₺" />

            <button type="submit">Bağış Yap</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Index;
