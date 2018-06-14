import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger';

class Book extends Component {
    render() {
        const {authors, imageLinks: {thumbnail}, title} = this.props.book;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                    <BookshelfChanger />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors.join(', ')}</div>
            </div>
        );
    };
};

Book.propTypes = {
    book: PropTypes.array.isRequired
};

export default Book;
