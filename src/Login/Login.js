import Navbar from "../Navbar";
import React,{useEffect,useState} from "react";
import axios from "axios";


function Login(){

    const[usernamef,setUsername] = useState("");
    const[passwordf,setPassword] = useState("");

    axios.defaults.withCredentials = true;


    const handleInputId = (e) =>{
        setUsername(e.target.value)

    }
    const handleInputPw = (e) =>{
        setPassword(e.target.value)

    }

    const confirmAndSend = () => {
        axios.post("http://localhost:8080/users/login",{
            email: usernamef,
            password: passwordf
        }).catch((error)=>{
              console.log(error.value)
        });

    }

    return(
        <><Navbar/>
            <div className="login-wrapper">
                <h2>Login</h2>
                <input type="text" value={usernamef} placeholder="Username" onChange={handleInputId}/>
                <input type="password" value={passwordf} placeholder="Password" onChange={handleInputPw}/>
                <button onClick={confirmAndSend}>로그인</button>
            </div>
        </>
    )


}

export default Login