import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DebounceInput} from 'react-debounce-input';
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
        const {value} = this.state;

        this.queryIsNotValid(value) || value === ''
            ? this.resetSearchResults()
            : BooksAPI.search(value.trim())
                .then(searchResults => this.updateSearchResults(searchResults));
    }

    resetSearchResults = () => {
        this.setState({searchResults: []});
    }

    updateSearchResults = (searchResults) => {
        let updatedSearchResults = []

        if (this.searchResultsExist(searchResults)) {
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

    searchResultsExist = searchResults => searchResults && !("error" in searchResults)

    queryIsNotValid = query => !/\S/.test(query)

    render() {
        const {updateShelf} = this.props;
        const {searchResults, value} = this.state;

        const noSearchResults = searchResults => (_.isEmpty(searchResults) || "error" in searchResults);

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <DebounceInput
                            minLength={2}
                            debounceTimeout={700}
                            value={value}
                            placeholder="Search by title or author"
                            onChange={(event) => this.searchBooks(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {(  "error" in searchResults) &&
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
    }
};

SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
};

export default SearchBooks;
