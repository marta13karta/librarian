import React, {useState, useEffect} from 'react';
import Book from './Book';
import styles from './BookList.module.css';
const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('./books.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <div className={styles.bookListContainer}>
            <ul className={styles.bookList}>
                {books.map((book, index) => (
                <li key={index}>
                    <Book book={book} index={index + 1}/>
                </li>
                ))}
            </ul>
            <p className={styles.total}>TOTAL: {books.length} $</p>
        </div>
    );
};

export default BookList;