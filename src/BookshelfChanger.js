import React from 'react';
import PropTypes from 'prop-types';

const BookshelfChanger = (props) => {
    const {bookId, shelf, updateShelf} = props;

    const statusValues = [
        {
            shelf: 'move',
            name: 'Move to...'
        },
        {
            shelf: 'currentlyReading',
            name: 'Currently Reading'
        },
        {
            shelf: 'wantToRead',
            name: 'Want to Read'
        },
        {
            shelf: 'read',
            name: 'Read'
        },
        {
            shelf: 'none',
            name: 'None'
        }
    ];

    const isDisabled = (status) => status === 'move';

    return (
        <div className="book-shelf-changer">
            <select value={shelf} onChange={(event) => updateShelf(bookId, event.target.value)}>
                {statusValues.map(status => (
                    <option
                        key={status.shelf}
                        value={status.shelf}
                        disabled={isDisabled(status.shelf)}
                    >
                        {status.name}
                    </option>
                ))};
            </select>
        </div>
    );
};

BookshelfChanger.propTypes = {
    bookId: PropTypes.string,
    shelf: PropTypes.string.isRequired,
    updateShelf: PropTypes.func.isRequired
};

export default BookshelfChanger;
