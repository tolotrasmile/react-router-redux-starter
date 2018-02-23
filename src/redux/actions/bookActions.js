import books from '../../books'

export const fetchBooks = () => ({
  type: 'FETCH_BOOKS',
  payload: new Promise((resolve, reject) => {
    setTimeout(() => resolve(books), 3000)
  })
})

export const fetchBookById = (id) => ({
  type: 'FETCH_BOOK_BY_ID',
  payload: new Promise((resolve, reject) => {
    setTimeout(() => {
      const book = books.find(book => book.id === Number(id))
      if (book) {
        resolve(book)
      } else {
        reject('Book not found')
      }
      resolve(book)
    }, 3000)
  })
})
