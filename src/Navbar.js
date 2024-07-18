import {Link} from "react-router-dom";
import React, { useEffect, useState } from 'react';
function Navbar(){
    const deleteCookie = (Authorization) => {
        document.cookie = `Authorization=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
        window.location.reload();
    };
   if(!document.cookie.includes("Authorization")){
    return(
        <div>
            <div className="ul">
                <li className="title">SonShop</li>
                <li><Link className="navli" to="/">홈</Link></li>
                <li><Link className="navli" to="/login">로그인</Link></li>
            </div>
        </div>
        
    )}else if(document.cookie.includes("Authorization")) {return(
       <div>
           <div className="ul">
               <li className="title">SonShop</li>
               <li><Link className="navli" to="/">홈</Link></li>
               <button className="navbutton" onClick={deleteCookie}>로그아웃</button>
           </div>
       </div>

   )
   }
}
export default Navbar