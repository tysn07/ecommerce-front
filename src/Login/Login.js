import Navbar from "../Navbar";
import React,{useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";



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
        axios.post("http://43.200.67.22:8080/users/login",{
            email: usernamef,
            password: passwordf
        }).then((response) => {
            if(response.status === 200){
            alert("로그인 성공");
            window.location.href="https://son7shop.com"}
        }).catch((error)=>{
            alert('로그인 실패')
        });

    }

    return(
        <><Navbar/>
            <div className="login-wrapper">
                <h2>Login</h2>
                <input type="text" value={usernamef} placeholder="Username" onChange={handleInputId}/>
                <input type="password" value={passwordf} placeholder="Password" onChange={handleInputPw}/>
                <button onClick={confirmAndSend}>로그인</button>
                <li className="signup"><Link to="/signup">회원가입</Link></li>
            </div>
        </>
    )


}

export default Login