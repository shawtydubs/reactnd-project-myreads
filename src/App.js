import React from 'react';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import {Route} from 'react-router-dom';
import SearchBooks from './SearchBooks';
import './App.css';

class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => this.setState({books}));
    }

    updateShelf = (bookId, shelf) => {
        BooksAPI.update(bookId, shelf)
            .then(() => BooksAPI.getAll()
            .then(books => this.setState({books})));
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <ListBooks books={this.state.books} updateShelf={this.updateShelf} />
                )} />
                <Route path="/search" render={({history}) => (
                    <SearchBooks books={this.state.books} updateShelf={(bookId, shelf) => {
                        this.updateShelf(bookId, shelf);
                        history.push('/');
                    }} />
                )} />
            </div>
        )
    };
};

export default BooksApp
