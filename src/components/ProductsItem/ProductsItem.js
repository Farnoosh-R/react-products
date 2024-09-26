import {React, useContext, useState } from "react";
import Button from "../Button/Button";
import Images from "../Images/Images";
import ThemeContext from "../Context/ThemeContext";
import { MdOutlineRemoveShoppingCart, MdShoppingCart } from "react-icons/md";



const ProductsItem = ({data}) => {

const themeValue = useContext(ThemeContext);
console.log(themeValue);
const [added, setAdded] = useState();

const handleAdded = () => {
  setAdded(!added);
}

    return(
        <li>
          <h3>{data.title}</h3>
          <Images imgSrc={data.images} />
          <span>Price: {data.price}</span>
          <Button onClick={handleAdded} style={{background: themeValue.theme.color, border: themeValue.theme.color}} data={added ? <div><MdOutlineRemoveShoppingCart /><div>Remove from basket</div></div> : <div><MdShoppingCart /><div>Add to card</div></div>}/>
          

          
        </li>
    )
}
export default ProductsItem;