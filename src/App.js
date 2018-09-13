import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksPage from './BooksPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  
  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
      BooksAPI.getAll().then( (books) => {
        this.setState({books});
        console.log(this.state.books);
      })
      
  }


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ?  
          <SearchPage /> : 
          <BooksPage books={this.state.books}/>  
        }
      </div>
    )
  }
}

export default BooksApp
