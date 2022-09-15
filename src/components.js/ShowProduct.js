import React from 'react';
import { useSelector } from 'react-redux';

function ShowProduct() {
  const { title, price } = useSelector((state) => state.product);

  return (
    <div className='card'>
      <div className='card-body'>
        <div className='row'>
          <div className='col'>
            <p className='lead font-weight-bold'>Title: {title}</p>
            <p className='lead font-weight-bold'>Price: {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProduct;
