import React, { useState } from "react";
import styles from './Sorting.module.css';
import Tag from './Tag.js';

const Sorting = ({ sortByPrice, sortByAuthor, sortByDate}) => {
    const [activeButton, setActiveButton] = useState(null);
    
    const handleSortClick = (event, sortFunction, buttonName) => {
        const arrow = event.currentTarget.querySelector('.arrow');
        const isActive = activeButton === buttonName;

        arrow.classList.toggle('rotate', !isActive);

        setActiveButton(isActive ? null : buttonName);
        if (sortFunction) sortFunction();
    }

    const resetRules = () => {
        console.log('lol');
    }

    const tags = ['Climate change', 'Health', 'History', 'Biochemistry', 'Technology', 'Sci-Fi', 'Science'];

    
    return (
        <div className={styles.sorting}>
            <button onClick={(event) => handleSortClick(event, sortByPrice, 'price')} className={`${activeButton === 'price' ? 'active' : ''}`}>price
                <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" fill="currentColor"/></svg>
            </button>
            <button onClick={(event) => handleSortClick(event, sortByAuthor, 'author')} className={`${activeButton === 'author' ? 'active' : ''}`}>author
                <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" fill="currentColor"/></svg>
            </button>
            <button onClick={(event) => handleSortClick(event, sortByDate, 'date')} className={styles.date}>date
                <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" fill="currentColor"/></svg>
            </button>
            &nbsp;&nbsp;
            <div className={styles.tagsContainer}>
                <button onClick={(event) => console.log(event)} className={styles.tags}>Tags
                    <svg className="caret" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" fill="currentColor"/></svg>
                </button>
                <div className={styles.showTags}>
                    {tags.map(tag => <Tag tag={tag} className={styles.tag}/>) }
                </div>
            </div>
            <button onClick={resetRules} className={styles.reset}>reset rules</button>
        </div>
    )
}

export default Sorting;