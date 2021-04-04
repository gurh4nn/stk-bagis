import React from 'react'
import "../sass/Navbar.scss"
import {Link} from "react-router-dom"
import { GrSupport, GrCatalog, GrPhone, GrOrganization } from "react-icons/gr";

function Navbar() {
    return (
           <div className="navbar">
               <ul>
                   <Link to=""> <GrSupport />  <li>Destek</li></Link>
                   <Link to=""> <GrCatalog /> <li>Neler Yaptık</li></Link>
                   <Link to=""> <GrOrganization /> <li>Hesap Numaralarımız</li></Link>
                   <Link to=""> <GrPhone /> <li>İletişim</li></Link>
               </ul>
           </div>
    )
}

export default Navbar
