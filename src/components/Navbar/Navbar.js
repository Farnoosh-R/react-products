import React from "react";
import style from "./../../components/Navbar/style.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
       <div className="my-navbar">
       <Link href="/">home</Link>
        <Link to="/shop">shop</Link>
        <Link to="/aboutus">about us</Link>
        <Link to="/contactus">contact us</Link>
        
       </div>
    )
}
export default Navbar;