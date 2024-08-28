import React, {useState, useEffect} from 'react';
import Book from './Book';
import Sorting from './Sorting';
import styles from './BookList.module.css';
const BookList = () => {
    const [books, setBooks] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');

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

    const sortBooksByPrice = () => {
        const sortedBooks = [...books];
        if (sortOrder === 'none' || sortOrder === 'asc') {
            sortedBooks.sort((a, b) => b.price - a.price);
            setSortOrder('desc');
        } else {
            sortedBooks.sort((a, b) => a.price - b.price);
            setSortOrder('asc');
        }
        setBooks(sortedBooks);
    }

    const sortBooksByAuthor = () => {
        const sortedBooks = [...books];
        if (sortOrder === 'none' || sortOrder === 'asc') {
            sortedBooks.sort((a, b) => a.author.localeCompare(b.author));
            setSortOrder('zyx');
        } else {
            sortedBooks.sort((a, b) => b.author.localeCompare(a.author));
            setSortOrder('abc');
        }
        setBooks(sortedBooks);
    }
    const sortBooksByDate = () => {
        const sortedBooks = [...books];
        sortedBooks.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return sortOrder === 'asc' ? dateB - dateA : dateA - dateB;
        });
        sortOrder === 'asc' ? setSortOrder('desc') : setSortOrder('asc');
        setBooks(sortedBooks);
        }

    const totalCost = (books) => {
        let sum = 0;
        books.map(book => sum += book.price);
        return sum;
    }

    return (<>
        <Sorting sortByPrice={sortBooksByPrice} sortByAuthor={sortBooksByAuthor} sortByDate={sortBooksByDate} />
        <div className={styles.bookListContainer}>
            <ul className={styles.bookList}>
                {books.map((book, index) => (
                <li key={index}>
                    <Book book={book} index={index + 1}/>
                </li>
                ))}
            </ul>
            <p className={styles.total}><b>TOTAL:</b> {totalCost(books)}$</p>
        </div></>
        
    );
};

export default BookList;