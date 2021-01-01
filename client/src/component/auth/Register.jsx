
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Register() {
    const [inputField, setInputField]=useState({})
    let history = useHistory()
    function inputHandler(e){
        setInputField((input)=>({...input, [e.target.name]: e.target.value}))
    }

    async function register(){
        try {
            let result = await axios.post("http://localhost:80/auth/register", inputField)
            history.push('/login')
        } catch (error) {
            console.log(error)
        }    
    }
    return (
        <div>
            <h1>Registeration page</h1>
            <input
                name="username"
                onChange={inputHandler}
                type="text"
                autocomplete="off"
                required
              />
               <input
                name="password"
                onChange={inputHandler}
                type="password"
                autocomplete="off"
                required
              />
               <button className="login_button" onClick={register}>
                Register
            </button>
        </div>
    )
}

export default Register
