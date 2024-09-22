import {Link} from "react-router-dom";
function Navbar() {

    const deleteCookie = (Authorization) => {
        document.cookie = `Authorization=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.son7shop.com;`;
        window.location.reload();
        window.location.href = "http://localhost:3000"
        localStorage.clear()
    };

    if (!document.cookie.includes("Authorization")) {
        return (
            <div>
                <div className="navbar">
                    <li className="title">SonShop</li>
                    <li><Link className="navli" to="/">홈</Link></li>
                    <li><Link className="navli" to="/login">로그인</Link></li>
                </div>
            </div>

        )
    } else if (document.cookie.includes("Authorization")) {
        return (
            <div>
                <div className="navbar">
                    <li className="title">SonShop</li>
                    <li><Link className="navli" to="/">홈</Link></li>
                    <li><Link className="navli" to="/cart">장바구니</Link></li>
                    <li><Link className="navli" to="/orderHistory">주문내역</Link></li>
                    <li><Link className="navli" to="/profile">프로필</Link></li>
                    <button className="navbutton" onClick={deleteCookie}>로그아웃</button>
                </div>
            </div>

        )

    }


}


export default Navbar