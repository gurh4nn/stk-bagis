import React from 'react'
import "../sass/Navbar.scss"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div>
           <div className="navbar">
               <ul>
                   <Link to=""> <li>Destek</li></Link>
                   <Link to=""> <li>Neler Yaptık</li></Link>
                   <Link to=""> <li>Hesap Numaralarımız</li></Link>
                   <Link to=""> <li>İletişim</li></Link>
               </ul>
           </div>
        </div>
    )
}

export default Navbar
