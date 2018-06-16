import React from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger';

const Book = (props) => {
    const {book, updateShelf} = props;
    const {authors, id, imageLinks, shelf, title} = book;
    const thumbnail = imageLinks ? imageLinks.thumbnail : null;

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                <BookshelfChanger bookId={id} shelf={shelf} updateShelf={updateShelf} />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors ? authors.join(', ') : null}</div>
        </div>
    )
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
};

export default Book;
