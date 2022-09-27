import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      title,
      content,
    });
    navigate('/');
  };
  return (
    <div className='container'>
      <h3>Create Post</h3>
      <form onSubmit={store} className='form-control'>
        <div className='mb-3'>
          <label className='form-label'>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type='text'
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
