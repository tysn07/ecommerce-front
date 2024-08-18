import axios from "axios";
import React,{useEffect,useState} from "react";
import Card from "./Card/Card";

function GetProducts(){

    const [products, setproducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/products/all")
            .then(response => {
                setproducts(response.data)
                console.log(response.data);
            });


    }, []);

const arrayDataProduct = products.map(
    product =>
            <Card
            title={product.name}
            price={product.price}
            id={product.id}
            />
)


    return (
        <div>
      <ul>{arrayDataProduct}</ul>
       </div>

   )
}

export default GetProducts