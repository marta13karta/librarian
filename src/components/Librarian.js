import React from "react";
import styles from './Librarian.module.css';
import BookList from './BookList';

const Librarian = () => {
    return (
        <div className={styles.librarian}>
            <header>
                <h1>l i b r a r i a n</h1>
            </header>
            <BookList/>
        </div>
    )
}

export default Librarian;