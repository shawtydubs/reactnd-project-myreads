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
        this.setState({value: query}, this.queryAPI);
    }

    queryAPI = () => {
        this.state.value === ''
            ? this.resetSearchResults()
            : BooksAPI.search(this.state.value.trim())
                .then(searchResults => this.updateSearchResults(searchResults));
    }

    resetSearchResults = () => {
        this.setState({searchResults: []});
    }

    updateSearchResults = (searchResults) => {
        let updatedSearchResults = []

        if (searchResults && !("error" in searchResults)) {
            updatedSearchResults = searchResults.map(result => {
                const bookInState = _.find(this.props.books, {id: result.id});
                result.shelf = bookInState ? bookInState.shelf : 'none';
                return result;
            });
        } else {
            updatedSearchResults = searchResults;
        }

        this.setState({searchResults: updatedSearchResults});
    }

    render() {
        const {updateShelf} = this.props;
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
