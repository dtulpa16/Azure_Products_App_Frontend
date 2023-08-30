import React, { useState } from 'react';
import { postProduct } from '../Services/Api';

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = () => {
    postProduct({
      Name: productName,
      Price: parseFloat(productPrice)
    }).then(res => {
      console.log(res.data);
      alert('Product added successfully!');
    });
  }

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <input value={productName} onChange={e => setProductName(e.target.value)} placeholder="Product Name" />
      <input type="number" value={productPrice} onChange={e => setProductPrice(e.target.value)} placeholder="Product Price" />
      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
}

export default AddProduct;
