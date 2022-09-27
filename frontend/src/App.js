import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ShowBlogs from './blog/ShowBlogs';
import CreateBlog from './blog/CreateBlog';
import EditBlog from './blog/EditBlog';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowBlogs />} />
          <Route path='/create' element={<CreateBlog />} />
          <Route path='/edit/:id' element={<EditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
