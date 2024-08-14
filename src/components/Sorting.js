import React from "react";
import styles from './Sorting.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Sorting = () => {
    return (
        <div className={styles.sorting}>
            <button className={styles.price}>price
                <span className={"arrow fas fa-arrow-down"}></span>
            </button>
            <button className={styles.author}>author
                <span className={"arrow fas fa-arrow-down"}></span>
            </button>
            <button className={styles.date}>date
                            <span className={"arrow fas fa-arrow-down"}></span>

            </button>
            <br />
            <br/>

            <button className={styles.tags}>Tags
                    <span className={"chevron fa-solid fa-chevron-down"}></span>

            </button>
            <button className={styles.reset}>reset rules</button>
        </div>
    )
}

export default Sorting;