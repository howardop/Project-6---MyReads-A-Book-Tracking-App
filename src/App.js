import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {

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
    showSearchPage: false,
    books: []
  }

  // Load the books onto the shelves after the page is first constructed and rendered  
  componentDidMount() {
      BooksAPI.getAll().then( (books) => {
        this.setState({books: books})
      })
  }

  
  changeShelf(book, newShelf){
    console.log(`app changeShelf: new shelf is ${newShelf}`)
    BooksAPI.update(book, newShelf)
    
    BooksAPI.getAll().then( (books) => {
      this.setState({books: books})
    })

  }


  render() {
    return (
      <div className="app">

        {/* Display Main page when path is '/' */}
        <Route exact path="/" render={() => (
            <MainPage 
              books={this.state.books} 
              changeShelf={this.changeShelf}
            />  
        )} />

        {/*} Display Search page when path is '/search' */}
        <Route  path="/search" render={() => (
          <SearchPage books={this.state.books} changeShelf={this.changeShelf}/>  
        )} />

      </div>
    )
  }

}

export default BooksApp
