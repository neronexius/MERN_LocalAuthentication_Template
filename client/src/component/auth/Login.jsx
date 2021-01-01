import React, { useState } from "react";
import axios from "axios";
import {decode} from "jsonwebtoken"
import { useHistory } from "react-router-dom";
function Login() {
    let history = useHistory()
    const [inputField, setInputField]=useState({})

    function inputHandler(e){
        setInputField((input)=>({...input, [e.target.name]: e.target.value}))
    }

    async function login() {
        try {
          let profile = await axios.post(
            "http://localhost:80/auth/login",
            inputField
          );
          localStorage.setItem("token", profile.data.token);
          // let decoded_user = await decode(profile.data.token);
        //   let resData = await axios.get(`http://localhost:80/user/loginUser`, {
        //     headers: {
        //       Authorization: `Bearer ${profile.data.token}`,
        //     },
        //   });
          console.log("logged in")
          history.push(`/home`);
        } catch (err) {
          console.log(err);
        }
      }
    return (
        <div>
            <h1>Log In page</h1>
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
            <button className="login_button" onClick={login}>
                  Sign In
              </button> 
        </div>
    )
}

export default Login
