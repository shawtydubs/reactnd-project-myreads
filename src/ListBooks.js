import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Bookshelf from './Bookshelf';

const ListBooks = (props) => {
    const {books, updateShelf} = props;
    const shelfList = [
        {
            status: 'currentlyReading',
            name: 'Currently Reading'
        },
        {
            status: 'wantToRead',
            name: 'Want to Read'
        },
        {
            status: 'read',
            name: 'Read'
        }
    ];

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {shelfList.map(shelf => (
                        <Bookshelf key={shelf.status} shelf={shelf} books={books} updateShelf={updateShelf} />
                    ))}
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
};

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
};

export default ListBooks;
