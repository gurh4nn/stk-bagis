import React from 'react'

function Index() {
    return (
        <div className="donate-page">
            <div className="donate-card">
                <div className="donate-img">
                    <img src="via.placeholder.com/150" alt=""/>
                </div>
                <div className="donate-price">
                    <input type="number" name="price" id="price" placeholder="0₺"/>
                    <button type="submit">Bağış Yap</button>
                </div>
            </div>
        </div>
    )
}

export default Index
