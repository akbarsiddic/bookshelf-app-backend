const {
  addBooksHandler,
  getAllBooksHandler,
  getSingleBooksHandler,
  editBooksByIdHandler,
  deleteBooksByIdHandler,
  getQueryBooksHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getSingleBooksHandler,
  },
  {
    method: 'GET',
    path: '/books{query}',
    handler: getQueryBooksHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBooksByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooksByIdHandler,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: () => 'Halaman tidak ditemukan',
  },
];

module.exports = routes;
