import {useEffect, useState} from "react";
import axios from "axios";
function AddressDropmenu() {

    const [address,setaddress] = useState([]);
    const [select,setselect] = useState([]);
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

// Close the dropdown menu if the user clicks outside of it
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

    return (
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
            <h>{select}</h>
        </div>
    );

}
export default AddressDropmenu