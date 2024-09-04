import {useEffect,useState} from "react";
import axios from "axios";
import OrderCard from "./OrderCard";
import Navbar from "../Navbar";
function OrderHistory(){

    axios.defaults.withCredentials = true;
    const [orders,setorders] = useState([]);

    useEffect(()=>{
        axios.get("https://back.son7shop.com/order/userorder")
            .then(response => {
                setorders(response.data)
                console.log(response.data);
            });

    }, []);

    const list = orders.map(
        order =>
            <OrderCard
             orderId={order.orderId}
             address={order.address}
             state={order.state}
            />

    )

    return(
        <>
        <Navbar/>
        <div>
            <ul>{list}</ul>
        </div>
        </>
    )
}
export default OrderHistory