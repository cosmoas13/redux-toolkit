import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveProduct } from '../features/productSlice';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const [fields, setFields] = useState({ title: '', price: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fieldHandler = (e) => {
    const name = e.target.name;
    setFields({
      ...fields,
      [name]: e.target.value,
    });
    console.log(fields);
  };

  const createProduct = async (e) => {
    e.preventDefault();
    await dispatch(saveProduct(fields));
    navigate('/');
    console.log(fields.title, fields.price);
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <form onSubmit={createProduct}>
          <div className='form-group'>
            <label>Title</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter your title'
              value={fields.title}
              onChange={fieldHandler}
              name='title'
            />
            <small className='form-text text-muted'>Put your title</small>
          </div>
          <div className='form-group'>
            <label>Price</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter your price'
              value={fields.price}
              onChange={fieldHandler}
              name='price'
            />
          </div>
          <div className='form-group'>
            <button
              type='submit'
              className='btn btn-success'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
