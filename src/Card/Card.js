import styles from './Card.module.css'
import React, { useEffect, useState } from 'react';

const Card = ({title,price,id,imageUrl}) => {
    const[count,setCount] = useState(0);

    function addCount(){
        setCount(c => c+1);
    }

    function subtractCount(){
        if(count>0){
        setCount(c => c-1);}
    }

    const Add = () => {
        if(document.cookie.includes("Authorization")){
        if(localStorage.getItem(id+"%"+title)!=null){
        var current = parseInt(localStorage.getItem(id+"%"+title))}
        else{var current = 0}
        localStorage.setItem(id+"%"+title,current+count);
        window.location.reload()
        alert("장바구니에 추가 됐습니다")
        }
        else alert("로그인을 해주십시오")
    };
    return(
        <>
            <div className={styles.card}>`
                <h2 className={styles.cardTitle}>{title}</h2>
                <img src={imageUrl} alt={""} className={styles.cardImage}></img>
                <p>{price}원</p>
                <button  onClick={addCount}>+</button>
                <button  onClick={subtractCount}>-</button>
                <button className="navbutton" onClick={Add}>{count}&nbsp;Add</button>
            `</div>
        </>
    );
};

export default Card