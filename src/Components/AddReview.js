import React, { useState } from 'react';
import { postReview } from '../Services/Api';

function AddReview({ productId,setToggle,toggle }) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault()
    postReview({
      Text: text,
      Rating: parseInt(rating),
      ProductId: productId
    }).then(res => {
      
      setToggle(!toggle)
    });
  }

  return (
    <form onSubmit={handleSubmit} className="add-review">
      <h2>Add Review</h2>
      <textarea value={text} required onChange={e => setText(e.target.value)} placeholder="Review Text"></textarea>
      <input type="number" value={rating} onChange={e => setRating(e.target.value)} min="1" max="5" placeholder="Rating (1-5)" />
      <button type='submit'>Add Review</button>
    </form>
  );
}

export default AddReview;
