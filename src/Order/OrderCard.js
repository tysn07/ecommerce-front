import styles from './Order.module.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const OrderCard = ({orderId,address,state}) => {

    axios.defaults.withCredentials = true;
    const [details, setdetails] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [payed,setpayed] = useState(false);
    let textSwitch = "상세정보";


    if(isExpanded){textSwitch ="숨기기"}
        else if(!isExpanded){
            textSwitch ="상세정보";
          }

        useEffect( () => {
            if(state === "PREPARING"){
                setpayed(true);
            }
            }

        )

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    const getDetails = () =>{
        axios.get("http://localhost:8080/order/" + orderId)
            .then(response => {
                setdetails(response.data)
                setIsExpanded(!isExpanded);
                console.log(response.data);
            });
    }

    const list = details.map(
        detail => <li>{detail.productName}&emsp;{detail.quantity}</li>

    )
    const pay = () => {
        axios.get("http://localhost:8080/payment/ready/"+orderId)
            .then(response => {
                window.location.href = response.data.next_redirect_pc_url
            });
    }

    return(
        <div className={`expandable-div ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
            <h2>{orderId}</h2>
            <p>{address}</p>
            <p>{state}</p>
           <button className="detail" onClick={getDetails}>{textSwitch}</button>
            <button disabled={payed} onClick={pay}>결제</button>
            {isExpanded && (
                <div className="expanded-content">
                    {list}
                </div>
            )}
        </div>

    )

}
export default OrderCard