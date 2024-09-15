
import React from "react";
import Button from "../Button/Button";

const Contactus = () => {

    const handleChangeEmail = (event) => {
        console.log(event.target.value)
    }

    const handleChangeTextArea = (event) => {
        console.log(event.target.value)
    }

    const handleClick = () => {
        console.log('submit')
    }

    return(
        <div className="contactus w-25">
        <input onChange={(event) => {
            console.log(event.target.value)
        }} className="form-control"  placeholder="name"/>
        <input onChange={handleChangeEmail} className="form-control my-4"  placeholder="email"/>
        <textarea onChange={handleChangeTextArea} className="form-control mb-3" placeholder="write here..."></textarea>
        <Button data={"Submit"} handleClick={handleClick}></Button>
        </div>
    )
}
export default Contactus;