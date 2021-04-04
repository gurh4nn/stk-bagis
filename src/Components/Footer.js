import React from 'react'
import FooterContact from "./FooterContact"
function Footer() {
    return (
        <div className="footer">
            
    <FooterContact />
            <div className="footer-content">
                <div className="footer-corporate">
                    Sivil Toplum Kuruluşu 2021
                </div>
                <div className="footer-nav">
                    <ul>
                        <li>Footer Nav 1</li>
                        <li>Footer Nav 2</li>
                        <li>Footer Nav 3</li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer
