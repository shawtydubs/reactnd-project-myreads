import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BookshelfChanger extends Component {
    render() {
        const {shelf} = this.props;

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
                <select value={shelf}>
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
};

BookshelfChanger.propTypes = {
    shelf: PropTypes.string.isRequired
}

export default BookshelfChanger;
