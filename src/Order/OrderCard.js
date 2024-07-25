import styles from './Order.module.css'
import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const OrderCard = ({orderId,address}) => {
    const [details, setdetails] = useState([]);

    const [isExpanded, setIsExpanded] = useState(false);
    let textSwitch = "상세정보" ;
    if(isExpanded){textSwitch ="숨기기"}
    else if(!isExpanded){
        textSwitch ="상세정보" ;
    }

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    const getDetails = () =>{
        axios.get("http://localhost:8080/order/" + orderId)
            .then(response => {
                setdetails(response.data)
                console.log(response.data);
            });
    }

    const list = details.map(
        detail => <li>{detail.productName}&emsp;{detail.quantity}</li>

    )
    const url = "/orderDetail/" + orderId
    return(

        <div className={`expandable-div ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
            <h2>{orderId}</h2>
            <p>{address}</p>
           <button onClick={getDetails}>{textSwitch}</button>
            {isExpanded && (
                <div className="expanded-content">
                    {list}
                </div>
            )}
        </div>

    )

}
export default OrderCard