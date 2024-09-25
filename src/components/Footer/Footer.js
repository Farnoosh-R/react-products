import React, { useContext } from "react";
import style from "./../Footer/style.css"
import ThemeContext from "../Context/ThemeContext";

const Footer = () => {
    const themeValue = useContext(ThemeContext);
    return(
        <div className="footer mt-5">
        <p>Development by Farnoosh</p>
        <button onClick={() => themeValue.setActiveTheme('green')} className="btn btn-success">green</button>
        <button onClick={() => themeValue.setActiveTheme('blue')} className="btn btn-primary ml-3">blue</button>
        </div>
    )
}
export default Footer;