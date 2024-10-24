// src/components/BookList.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/bookSlice';
import EditBook from './EditBook';
import { Button } from 'react-bootstrap';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [editingBook, setEditingBook] = useState(null);

  const handleEditClick = (book) => {
    setEditingBook(book);
  };

  const handleCloseEdit = () => {
    setEditingBook(null);
  };

  return (
    <div className="book-list">
      <h2 className='d-flex justify-content-center bg-dark text-primary fw-bolder'>Books Collection</h2>
      {books.length === 0 ? (
        <p className='text-danger fw-bold'>No books added ....</p>
      ) : (
        <ul className="list-group">
          {books.map((book) => (
            <li key={book.id} className="list-group-item d-flex justify-content-between align-items-center">
              {book.title} by {book.author}
              <div>
                <Button variant="warning" onClick={() => handleEditClick(book)} className="me-2">Edit</Button>
                <Button variant="light" onClick={() => dispatch(deleteBook(book.id))}><i className='fa-solid fa-trash-can fa-2x' style={{color:'red'}}></i></Button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {editingBook && (
        <EditBook book={editingBook} onClose={handleCloseEdit} />
      )}
    </div>
  );
}

export default BookList;
