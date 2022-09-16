import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProducts,
  productSelectors,
  deleteProduct,
} from '../features/productSlice';
import { Link } from 'react-router-dom';

function ShowProduct() {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.selectAll);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className='card'>
      <div className='card-body'>
        <Link
          to='add'
          className='btn btn-success mb-3'
        >
          Add New
        </Link>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr
                  key={product.id}
                  className='overflow-auto'
                >
                  <td>{index + 1}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>
                    <Link
                      to={`edit/${product.id}`}
                      className='btn btn-primary mx-2'
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => dispatch(deleteProduct(product.id))}
                      className='btn btn-danger'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowProduct;
