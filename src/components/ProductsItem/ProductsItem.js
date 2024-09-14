import React from "react";
import Button from "../Button/Button";
import Images from "../Images/Images";


const ProductsItem = ({data}) => {
    return(
        <li>
          <h3>{data.title}</h3>
          <Images imgSrc={data.images} />
          <span>Price: {data.price}</span>
          <Button data={"Add to Card"}/>
        </li>
    )
}
export default ProductsItem;