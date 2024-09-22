import React, {useEffect, useState} from "react";
import axios from "axios";
import Navbar from "../Navbar";
function Profile(){
    axios.defaults.withCredentials = true;
    const [username, setUsername] = useState("");
    const [address, setAddress] = useState("");

    const handleInputaddress = (e) =>{
        setAddress(e.target.value)
    }
    useEffect(()=>{
        axios.get("https://back.son7shop.com/users/username")
            .then(response => {
                setUsername(response.data)
            }).catch((error)=> {
            alert('Error fetching username')
        })
    }, []);

    const confirmAndSend = () => {
        axios.post("https://back.son7shop.com/address",{
         address:address
        }).then((response) => {
            if(response.status === 200){
                alert("등록 성공");
                window.location.href="https://son7shop.com/profile"}
        }).catch((error)=>{
            alert('등록 실패')
        });

    }
return(
    <><Navbar/>
        <div className="alignprofile">
        <h className={"undisplay"}>이름: {username}</h>
        <input value={address} placeholder="새 주소 입력" onChange={handleInputaddress} className="normalsize"/>
        <button onClick={confirmAndSend} className="normalsize">주소등록</button>
        </div>
    </>


)

}
export default Profile