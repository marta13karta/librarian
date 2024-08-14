import React from 'react';
import styles from './Book.module.css';
import Tag from './Tag.js';
const Book = ({ book, index }) => {
    return (
        <div className={styles.book}>
                <h2 className={styles.title}>
                    <span className={styles.number}>{index}</span>
                    {book.title}
                </h2>
            <div className={styles.info}>
                <p className={styles.author}>by { book.author }</p>
                <p className={styles.date}>{ book.date}</p>
                <p className={styles.price}>{book.price}$</p>
            </div>
            <hr/>
            <div className={styles.tags}>
                {book.tags.map(tag => <Tag tag={tag}/>) }
            </div>
        </div>
    )
}

export default Book;