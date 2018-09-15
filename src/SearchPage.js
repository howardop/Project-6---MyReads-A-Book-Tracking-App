import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends React.Component {

    state = {
        query: '',
        booksFound: []
    }

    // Called each time a character is added to or deleted from the seach field.
    updateQuery = (query) => {
        this.setState({ query: query })
        // Search the library on each change
        this.searchBooks(query);
    }

    searchBooks = (query) => {
        if (query) {
            BooksAPI.search(query).then((booksFound) => {
                if (booksFound.length > 0) {
                    this.setState({ booksFound: booksFound })
                } else {
                    this.setState({ booksFound: [] });
                }
            })
        } else {
            this.setState({ booksFound: [] });
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search" >
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)
                            }

                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.booksFound.map(bookFound => {
                                let shelf = "none";

                                // Make sure that each book returned by the search function displays the correct shelf
                                this.props.books.map(function (book) {
                                    if (book.id === bookFound.id) {
                                        shelf = book.shelf;
                                    }
                                    //ESLint expects return value if use { } instead of (), otherwise get warning message
                                    return 0

                                })

                                return (
                                    <li key={bookFound.id}>
                                        <Book book={bookFound}
                                            changeShelf={this.props.changeShelf}
                                            currentShelf={shelf}
                                        />
                                    </li>
                                );
                            })
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchPage        