import React, { useState, useEffect } from "react";
import { fetchReviewsByProductId } from "../Services/Api";
import AddReview from "./AddReview";
function ProductCard({ product }) {
  const [reviews, setReviews] = useState([]);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    fetchReviewsByProductId(product.id).then((res) => {
      setReviews(res.data);
    });
  }, [product.id,toggle]);

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <div>
        <h3>Reviews:</h3>
        {reviews.map((review) => (
          <div key={review.Id}>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
          </div>
        ))}
      </div>
      <AddReview productId={product.id} setToggle={setToggle} toggle={toggle}/>
    </div>
  );
}

export default ProductCard;
