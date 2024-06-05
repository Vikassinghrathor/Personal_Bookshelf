import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import BookSearch from './pages/BookSearch';
import BookShelf from './pages/BookShelf';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' exact element={<BookSearch/>}></Route>
    <Route path='/bookshelf' element={<BookShelf/>}></Route>
    </Routes>
    </BrowserRouter>  
    </>
  );
}

export default App;
