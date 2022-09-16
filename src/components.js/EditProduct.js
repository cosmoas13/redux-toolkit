import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProducts,
  productSelectors,
  updateProduct,
} from '../features/productSlice';
import { useParams, useNavigate } from 'react-router-dom';
function EditProduct() {
  const [fields, setFields] = useState({ title: '', price: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const product = useSelector((state) =>
    productSelectors.selectById(state, id)
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (product) {
      setFields(product);
    }
  }, [product]);

  const fieldHandler = (e) => {
    const name = e.target.name;
    setFields({
      ...fields,
      [name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id, ...fields }));
    navigate('/');
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <form onSubmit={handleUpdate}>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
