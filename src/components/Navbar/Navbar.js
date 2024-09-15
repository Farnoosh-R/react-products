import React from "react";
import style from "./../../components/Navbar/style.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
       <div className="my-navbar">
        <Link to="/shop">shop</Link>
        <a href="/aboutus">about us</a>
        <a href="/">home</a>
       </div>
    )
}
export default Navbar;