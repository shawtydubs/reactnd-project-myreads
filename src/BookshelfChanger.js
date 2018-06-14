import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BookshelfChanger extends Component {
    render() {
        const {shelf} = this.props;

        const statusValues = [
            ['move', 'Move to...'],
            ['currentlyReading', 'Currently Reading'],
            ['wantToRead', 'Want to Read'],
            ['read', 'Read'],
            ['none', 'None']
        ];

        const isDisabled = (status) => status === 'move';

        return (
            <div className="book-shelf-changer">
                <select value={shelf}>
                    {statusValues.map(status => (
                        <option
                            key={status[0]}
                            value={status[0]}
                            disabled={isDisabled(status[0])}
                        >
                            {status[1]}
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
