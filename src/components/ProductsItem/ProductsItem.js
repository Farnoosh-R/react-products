import {React, useContext } from "react";
import Button from "../Button/Button";
import Images from "../Images/Images";
import ThemeContext from "../Context/ThemeContext";




const ProductsItem = ({data}) => {
const themeValue = useContext(ThemeContext);
console.log(themeValue);
    return(
        <li>
          <h3>{data.title}</h3>
          <Images imgSrc={data.images} />
          <span>Price: {data.price}</span>
          <Button style={{background: themeValue.theme.color, border: themeValue.theme.color}} data={"Add to Card"}/>
        </li>
    )
}
export default ProductsItem;