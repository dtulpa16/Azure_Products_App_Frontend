import React, { useState, useEffect } from 'react';
import { fetchReviewsByProductId } from '../Services/Api';

function ProductCard({ product }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviewsByProductId(product.Id).then(res => {
      setReviews(res.data);
    });
  }, [product.Id]);

  return (
    <div className="product-card">
      <h2>{product.Name}</h2>
      <p>Price: ${product.Price}</p>
      <div>
        <h3>Reviews:</h3>
        {reviews.map(review => (
          <div key={review.Id}>
            <p>{review.Text}</p>
            <p>Rating: {review.Rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;