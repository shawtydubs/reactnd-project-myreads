import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger';

class Book extends Component {
    render() {
        const {book, updateShelf} = this.props;
        const {authors, id, imageLinks: {thumbnail}, shelf, title} = book;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                    <BookshelfChanger bookId={id} shelf={shelf} updateShelf={updateShelf} />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors.join(', ')}</div>
            </div>
        );
    };
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
};

export default Book;
