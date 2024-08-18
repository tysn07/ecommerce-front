import Navbar from "../Navbar";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
function SignUp(){
    const[email,setEmail] = useState("");
    const[usernamef,setUsername] = useState("");
    const[passwordf,setPassword] = useState("");
    const[adminToken,setadminToken] = useState("");

    const handleInputEmail = (e) =>{
        setEmail(e.target.value)

    }
    const handleInputId = (e) =>{
        setUsername(e.target.value)

    }
    const handleInputPw = (e) =>{
        setPassword(e.target.value)

    }

    const handleInputToken = (e) =>{
        setadminToken(e.target.value)
    }

    const confirmAndSend = () => {
        axios.post("http://localhost:8080/users/signup",{
            email: email,
            username: usernamef,
            password: passwordf,
            adminToken: adminToken
        }).then((response) => {
            if(response.status === 200){
                alert("회원가입 성공");}
        }).catch((error)=>{
            alert('회원가입 실패')
        });

    }

return(
    <><Navbar/>
        <h2>Sign Up</h2>
        <div className="style2">

            <input className="inputstyle" type="text" value={email} placeholder="Email" onChange={handleInputEmail}/>
            <input className="inputstyle" type="text" value={usernamef} placeholder="Username" onChange={handleInputId}/>
            <input className="inputstyle" type="password" value={passwordf} placeholder="Password" onChange={handleInputPw}/>
            <button onClick={confirmAndSend}>회원가입</button>
            <input className="inputstyle" value={adminToken} placeholder="admin token" onChange={handleInputToken}/>
        </div>
    </>

)
}

export default SignUp