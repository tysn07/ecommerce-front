import axios from "axios";
import Navbar from "../Navbar";
import {useState,useEffect} from "react";

function ShoppingCart(){

    axios.defaults.withCredentials = true;
    const basket = new Map;
    const displayBasket = new Map;
    const address = 1;
    const length = localStorage.length;

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
        axios.post("http://localhost:8080/order",{
            basket:Object.fromEntries(basket),
            addressId:address,

        }).catch((error)=>{
            alert('주문 실패')
        }) .then(response => console.log(response))
        localStorage.clear()
        alert('주문 성공');
        window.location.reload();
    }

    return(
        <>
           <Navbar/>
            <ul>
                {arr.map((arr, index) => <li className="basket" key={index}>상품:&nbsp;{arr.at(0)}&emsp;&emsp;&emsp;&emsp;수량:&nbsp;{arr.at(1)}개</li>)}
                <button onClick={pushItem}>결제하기</button>
            </ul>

        </>
    )
}
export default ShoppingCart