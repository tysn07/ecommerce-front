import axios from "axios";
import Navbar from "./Navbar";
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
        basket.set(productId,quantity);
        displayBasket.set(productName,quantity)
    }
    console.log(basket);
    const arr = Array.from(displayBasket).map(([productName,quantity])=>([productName,quantity]))

    const pushItem = () => {
        axios.post("http://localhost:8080/order",{
            basket:basket,
            addressId:address,
            credentials: 'include',
        }).catch((error)=>{
            alert('주문 실패')
        })
        console.log(basket)
    }

    return(
        <>
           <Navbar/>
            <ul>
                {arr.map((arr, index) => <li className="basket" key={index}>{arr.at(0)} {arr.at(1)}</li>)}
                <button onClick={pushItem}>결제하기</button>
            </ul>

        </>
    )
}

export default ShoppingCart