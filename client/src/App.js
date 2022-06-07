import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import NavBar from './components/common/NavBar';
import CreateBook from './components/CreateBook';
import UpdateBook from './components/UpdateBook';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/create-book/:id" element={<CreateBook />} />
        <Route path="/update-book/:id" element={<UpdateBook />} />
        <Route path="/" element={<BookList />} />
      </Routes>
    </>
  );
}

export default App;
