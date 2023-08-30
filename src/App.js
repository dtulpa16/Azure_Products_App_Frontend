import React, { useState, useEffect } from 'react';
import { fetchProducts } from './Services/Api';
import ProductCard from './Components/ProductCard';
import AddProduct from './Components/AddProduct';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(res => {
      setProducts(res.data);
    });
  }, []);

  return products && (
    <div className="app">
      <h1>Products</h1>
      <AddProduct />
      {products.map(product => (
        <ProductCard key={product.Id} product={product} />
      ))}
    </div>
  );
}

export default App;