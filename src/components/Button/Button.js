import React from "react";

const Button = ({data, handleClick = () => {}, ...props}) => {
    return(
        <button onClick={handleClick} className="btn btn-outline-primary" {...props}>{data}</button>
    )
}
export default Button;