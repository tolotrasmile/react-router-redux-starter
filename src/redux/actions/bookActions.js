import 'whatwg-fetch'
import books from '../../books'

export const fetchBooks = () => ({
  type: 'FETCH_BOOKS',
  payload: new Promise((resolve, reject) => {
    setTimeout(() => resolve(books), 3000)
  })
  // fetch('http://it-ebooks-api.info/v1/search/php').then(books => books.json())
})

export const fetchBookById = (id) => ({
  type: 'FETCH_BOOK_BY_ID',
  payload: new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = books.find(book => book.id === Number(id))
      found ? resolve(found) : reject('Book not found')
    }, 3000)
  })
  // fetch('http://it-ebooks-api.info/v1/book/' + id).then(book => book.json())
})
