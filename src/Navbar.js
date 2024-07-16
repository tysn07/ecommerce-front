import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <div>

            <div className="ul">
                <li className="title">SonShop</li>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/login">로그인</Link></li>
            </div>
        </div>


    )
}
export default Navbar