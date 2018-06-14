import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBooks extends Component {
    state = {
        value: '',
        searchResults: []
    }

    searchBooks = query => {
        this.setState({value: query.trim()}, this.updateResults);
    }

    updateResults = () => {
        this.state.value === ''
            ? this.resetSearchResults()
            : BooksAPI.search(this.state.value)
                .then(searchResults => this.setState({searchResults}, this.updateResultsShelves));
    }

    resetSearchResults = () => {
        this.setState({searchResults: []});
    }

    updateResultsShelves = () => {
        // TODO: update shelves on search results
    }

    render() {
        const {books, updateShelf} = this.props;
        const {searchResults, value} = this.state;

        const noSearchResults = searchResults => (_.isEmpty(searchResults) || "error" in searchResults);

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            value={value}
                            placeholder="Search by title or author"
                            onChange={(event) => this.searchBooks(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {"error" in searchResults &&
                        <p>No search results</p>
                    }

                    <ol className="books-grid">
                        {!noSearchResults(searchResults) && searchResults.map(book => (
                            <li key={book.id}><Book book={book} updateShelf={updateShelf} /></li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    };
};

SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
};

export default SearchBooks;
