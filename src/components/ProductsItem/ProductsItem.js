import {React, useContext, useReducer, useState } from "react";
import Button from "../Button/Button";
import Images from "../Images/Images";
import ThemeContext from "../Context/ThemeContext";
import { MdOutlineRemoveShoppingCart, MdShoppingCart } from "react-icons/md";
import ProductsItemReducer from "./ProductsItemReducer";



const ProductsItem = ({data}) => {

const themeValue = useContext(ThemeContext);
console.log(themeValue);
const [added, setAdded] = useState();
const [state, dispatch] = useReducer(ProductsItemReducer, {added: false})

const handleAdded = () => {
  setAdded(!added);
}

const handleAddedByReducer = () => {

  if (state.added){
    dispatch({
      type: 'REMOVE_FROM_CARD'
    })
  }
  else {
    dispatch({
      type: 'ADD_TO_CARD'
    })
  }
console.log(state.added)
}

    return(
        <li>
          <h3>{data.title}</h3>
          <Images imgSrc={data.images} />
          <span>Price: {data.price}</span>
          <Button handleClick={handleAdded} style={{background: themeValue.theme.color, border: themeValue.theme.color}} data={added ? <div><MdOutlineRemoveShoppingCart /><div>Remove from basket</div></div> : <div><MdShoppingCart /><div>Add to card</div></div>}/>
          <Button handleClick={handleAddedByReducer} style={{background: themeValue.theme.color, border: themeValue.theme.color, marginTop: 10}} data={state.added ? <div><MdOutlineRemoveShoppingCart /><div>Remove from basket</div></div> : <div><MdShoppingCart /><div>Add to card</div></div>}/>

          
        </li>
    )
}
export default ProductsItem;