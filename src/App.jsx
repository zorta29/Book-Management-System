
import './App.css'
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <>
      <Container className="  mt-4">
      <h1 className='d-flex justify-content-center bg-dark text-info fw-bolder p-3 mb-4'>Book Management System</h1>
      <BookForm />
      <BookList />
    </Container>
    </>
  )
}

export default App
