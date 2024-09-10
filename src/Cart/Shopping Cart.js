import axios from "axios";
import Navbar from "../Navbar";
import {useState,useEffect} from "react";

function ShoppingCart(){
    axios.defaults.withCredentials = true;
    const basket = new Map;
    const displayBasket = new Map;
    const length = localStorage.length;

    const [address,setaddress] = useState([]);
    const [select,setselect] = useState([]);

    for (let i = 0; i < length; i++) {
        const prepkey = localStorage.key(i);
        const split = prepkey.split("%");
        const productId = split[0];
        const productName = split[1];
        const quantity = localStorage.getItem(prepkey);
              basket.set(productId, quantity);
              displayBasket.set(productName, quantity)
    }

    const arr = Array.from(displayBasket).map(([productName,quantity])=>([productName,quantity]))

    const pushItem = () => {
        axios.post("https://back.son7shop.com/order",{
            basket:Object.fromEntries(basket),
            addressId:address,

        }).catch((error)=>{
            alert('주문 실패')
        }) .then(response => console.log(response))
        localStorage.clear()
        alert('주문 성공');
        window.location.reload();
    }

    useEffect(()=>{
        axios.get("https://back.son7shop.com/users/address/list")
            .then(response => {
                setaddress(response.data)
                console.log(response.data);
            });

    }, []);

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    const addressSelect = (a) =>{
        setselect(a);
    }

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    return(
        <>
           <Navbar/>
            <ul>
                {arr.map((arr, index) => <li className="basket" key={index}>상품:&nbsp;{arr.at(0)}&emsp;&emsp;&emsp;&emsp;수량:&nbsp;{arr.at(1)}개</li>)}
                <div className="aligncart">
                    <div className="dropdown">
                        <button onClick={myFunction} className="dropbtn">주소</button>
                        <div id="myDropdown" className="dropdown-content">
                            {address.map((item, index) => (
                                // Render a div for each item in the array
                                <div onClick={() => addressSelect(item)} key={index}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <h>{select}</h>
                </div>
                <button className="paybutton" onClick={pushItem}>주문하기</button>
            </ul>

        </>
    )
}

export default ShoppingCart