import React, { useState } from 'react';
import { postReview } from '../Services/Api';

function AddReview({ productId }) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = () => {
    postReview({
      Text: text,
      Rating: parseInt(rating),
      ProductId: productId
    }).then(res => {
      console.log(res.data);
      alert('Review added successfully!');
    });
  }

  return (
    <div className="add-review">
      <h2>Add Review</h2>
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Review Text"></textarea>
      <input type="number" value={rating} onChange={e => setRating(e.target.value)} min="1" max="5" placeholder="Rating (1-5)" />
      <button onClick={handleSubmit}>Add Review</button>
    </div>
  );
}

export default AddReview;
