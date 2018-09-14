import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends React.Component {
    constructor() {
        super();
        // Need the next line because React doesn't automatically bind functions to the current object
        // In this program changeShelf is passed to BooksPage, and then Book where it is actually called
        // Without autobinding, changeShelf is associated with Book and not BooksApp.  
        // Thus when used, React geneates an error saying 
        // "Unhandled Rejection (TypeError): _this3.setState is not a function"
        // Using the bind function, guarantees that changeShelf is associated with BooksApp regardless of 
        // where its called from and corrects the error
        this.changeShelf = this.changeShelf.bind(this);
      }
    
    state = {
        query: '',
        booksFound: []
    }

    changeShelf = (book, newShelf) => {
        console.log(`SearchPage changeShelf: newShelf=${newShelf}`)
        BooksAPI.update(book, newShelf)
        
        BooksAPI.search(this.state.query).then((booksFound) =>             
                this.setState({ booksFound: booksFound }))
                
      }

    updateQuery = (query) => {
        this.setState({ query: query })
        this.searchBooks(query);
    }

    searchBooks = (query) => {
        if (query) {
            BooksAPI.search(query).then((booksFound) => {
                if (booksFound.length > 0) {
                    this.setState({ booksFound: booksFound })
                } else {
                    this.setState({booksFound: []});
                }
            })
        } else {
            this.setState({booksFound: []});
        }
    }

    render() {
         return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                    <div className="search-books-input-wrapper">
                        {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                */}
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
                            this.state.booksFound.map(book => (
                                <li key={book.id}>
                                    <Book book={book} changeShelf={this.changeShelf}/>
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchPage        