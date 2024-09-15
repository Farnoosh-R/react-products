import React from "react";

const Button = ({data, handleClick = () => {}}) => {
    return(
        <button onClick={handleClick} className="btn btn-outline-primary">{data}</button>
    )
}
export default Button;