
import React, { useState } from "react";
import Button from "../Button/Button";

const Contactus = () => {

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const handleChangeEmail = (event) => {
        
        if (validateEmail(event.target.value)){
            setEmail(event.target.value)
            console.log(email);
            setErrors('');

        } else {
            setErrors({
                ...errors,
                email: 'Email is not valid'
            })
            
        }
    }

    const handleChangeTextArea = (event) => {
        console.log(event.target.value)
    }

    const handleClick = () => {
        console.log('submit')
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    return(
        <div className="contactus w-25">
        <input onChange={(event) => {
            console.log(event.target.value)
        }} className="form-control"  placeholder="name"/>
        <input onChange={handleChangeEmail} className="form-control my-4"  placeholder="email"/>
        {errors.email && <span>{errors.email}</span>}
        <textarea onChange={handleChangeTextArea} className="form-control mb-3" placeholder="write here..."></textarea>
        <Button data={"Submit"} handleClick={handleClick}></Button>
        </div>
    )
}
export default Contactus;