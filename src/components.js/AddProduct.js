import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../features/productSlice';

function AddProduct() {
  const [fields, setFields] = useState({ title: '', price: '' });
  const dispatch = useDispatch();

  const fieldHandler = (e) => {
    const name = e.target.name;
    setFields({
      ...fields,
      [name]: e.target.value,
    });
  };

  const updateProduct = (e) => {
    e.preventDefault();
    dispatch(update(fields));
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <form onSubmit={updateProduct}>
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
