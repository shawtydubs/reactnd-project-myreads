import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import Bookshelf from './Bookshelf';

const ListBooks = (props) => {
    const {books, updateShelf} = props;

    const currentlyReadingList = _.filter(books, {shelf: 'currentlyReading'});
    const readList = _.filter(books, {shelf: 'read'});
    const wantToReadList = _.filter(books, {shelf: 'wantToRead'});

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Bookshelf title="Currently Reading" books={currentlyReadingList} updateShelf={updateShelf} />
                    <Bookshelf title="Want to Read" books={wantToReadList} updateShelf={updateShelf} />
                    <Bookshelf title="Read" books={readList} updateShelf={updateShelf} />
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
