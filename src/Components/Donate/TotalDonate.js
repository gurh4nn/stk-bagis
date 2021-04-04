import React from 'react'

function TotalDonate() {
    const totalDonate = {Donate: "1000₺", numberOFDonate: 20,}
    return (
        <div className="total-donate">
            <div className="donate">
                <div className="donate-title">
                    <h2>Toplam Bağış</h2>
                </div>
                <div className="donate-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam corrupti nobis dolore eaque vero sit voluptates ullam iure incidunt. Fuga at voluptas provident doloribus optio, dignissimos voluptatibus laboriosam reprehenderit aut.
                    Laboriosam tempore debitis quo ipsa eaque facilis quasi dolores deserunt nam, harum dolorum atque nihil reiciendis in inventore consequatur, esse ab officiis doloribus dolore tenetur animi. Veniam rem excepturi perspiciatis.
                </div>
                <div className="donate-count">
                    <div className="donate-price">
                        Total Donate Price: 
                       <b>{totalDonate.Donate}</b>
                    </div>
                    <div className="hr"></div>
                    <div className="donate-number">
                        Total Donator:
                        <b>{totalDonate.numberOFDonate}</b>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default TotalDonate
