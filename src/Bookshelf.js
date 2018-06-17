import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Book from './Book';

const Bookshelf = (props) => {
    const {books, shelf, updateShelf} = props;
    const bookList = _.filter(books, {'shelf': shelf.status});

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookList.map(book => (
                        <li key={book.id}><Book book={book} updateShelf={updateShelf} /></li>
                    ))}
                </ol>
            </div>
        </div>
    )
};

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
};

export default Bookshelf;
