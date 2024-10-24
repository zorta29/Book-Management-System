import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBook } from '../redux/bookSlice';
import { Button, Form } from 'react-bootstrap';

function EditBook({ book, onClose }) {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = {
      id: book.id,
      title,
      author,
    };
    dispatch(editBook(updatedBook));
    onClose();
  };

  return (
    <div className="edit-book ms-5 w-50">
      <h2 className='d-flex justify-content-center text-primary fw-bolder bg-dark mt-4'>Edit Book</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEditBookTitle">
          <Form.Label className='d-flex justify-content-center text-primary fw-bolder' >Book Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEditBookAuthor">
          <Form.Label className='d-flex justify-content-center text-primary fw-bolder'>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </Form.Group>
        <Button className='mt-3 btn btn-info fw-bolder' type="submit">Update Book</Button>
        <Button className='mt-3 ms-3 btn btn-secondary fw-bolder' onClick={onClose}>Cancel</Button>
      </Form>
    </div>
  );
}

export default EditBook;
