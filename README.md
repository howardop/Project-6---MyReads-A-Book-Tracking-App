# MyReads Project
## Inroduction

The MyReads application provides two components for the reader:
1. A bookshelf tht allows readers to select and categorize books they are currently reading, want to read, or have already read.  
2. A search capability that allows readers to search the library for books using the terms defined in **SEARCH_TERMS.md**. 

## Installing and Starting MyReads
1. Clone https://github.com/howardop/Project-6---MyReads-A-Book-Tracking-App.git
2. Cd to Project-6---MyReads-A-Book-Tracking-App
3. Execute `npm install`
3. Execute `npm start`
4. The home page will open in a tab with the title `MyReads`.  

## Using MyReads
### The Home Page
1. This home page has 3 shelves of book:
    - The top shelf displays the books that you are **Currently Reading**
    - The middle shelf displays the books you **Want to Read**
    - The bottom shelf displays the books you have already **Read**
2. Each book has a green circle with a down arrow at its bottom right corner.  Clicking on the circle will display a dropdown list that allows the reader to move the book to another shelf.  Simply click on the shelf to which the particular book should be moved.  The book will automatically be moved to that shelf.  If the book does not move, simply refresh the screen and you will see the book in the correct list.
3. MyApp remembers the shelf for each book across browser refreshes and application restarts.
4. At the bottom right of the browser screen is a green circle with a + sign.  Clicking on that circle will cause the **Search** page to open.
### The Search Page
1. The top bar of the Shows page displays `Search by title or author`.  Enter any of the terms found in **SEARCH_TERMS.md**.  The appropriate books are displayed immediately.
2. The search is performed incrementally, meaning that as the user types each character in the search field, MyApp removes those books with no longer match the search string. This immediate feedback often allows the user to stop short of typing the entire word or phrase they were looking for.
3. Each book found will have a green circle on its bottom right corner just as on the home page
    1. Clicking on the circle will display the drop down list.
    2. If the book is on one of shelves on the home page, that shelf will be highlighted in the list.  If the book is not on any shelf, `None` will be highlighted.
    3. If the user clicks on any of the non-highlighted entries, the entry will be highlighted and the user will see that the book has been moved to the appropriate shelf on the main page.
    If that book's shelf is
4. The user may return to the home page at any time by clicking on the left pointing arrow in the upper left corner of the Search page.
