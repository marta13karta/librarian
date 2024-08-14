import React from "react";
import styles from './Librarian.module.css';
import BookList from './BookList';
import Sorting from "./Sorting";

const Librarian = () => {
    return (
        <div className={styles.app}>
            <header>
                <h1>Librarian</h1>
            </header>
            <Sorting/>

            <BookList/>
        </div>
    )
}

export default Librarian;