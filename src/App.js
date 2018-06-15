import React from 'react';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import {Route} from 'react-router-dom';
import SearchBooks from './SearchBooks';
import './App.css';

class BooksApp extends React.Component {
    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll().then(books => this.setState({books}));
    };

    // TODO: make this update the state
    updateShelf = (bookId, shelf) => {
        BooksAPI.update(bookId, shelf).then(data => console.log(data));
    };

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <ListBooks books={this.state.books} updateShelf={this.updateShelf} />
                )} />
                <Route path="/search" render={() => (
                    <SearchBooks books={this.state.books} updateShelf={this.updateShelf} />
                )} />
            </div>
        )
    };
};

export default BooksApp
