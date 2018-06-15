import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Bookshelf = (props) => {
    const {books, title, updateShelf} = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (
                        <li key={book.id}><Book book={book} updateShelf={updateShelf} /></li>
                    ))}
                </ol>
            </div>
        </div>
    )
};

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired
};

export default Bookshelf;
