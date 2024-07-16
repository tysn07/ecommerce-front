import styles from './Card.module.css'
const Card = ({title,price}) => {
    return(
        <>
            <div className={styles.card}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p>{price}</p>
            </div>
        </>
    );


};

export default Card