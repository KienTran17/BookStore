import React, { ProtoTypes } from 'react';

const BookDetails = ({ book, addToCart }) => (
  <div className="media">
    <div className="media-left">
      <img className="media-object" src={book.imageUrl} alt={book.title}/>
    </div>
    <div className="media-body">
      <h4 className="media-heading">{book.title}</h4>
      <ul>
        <li><strong>Author:</strong> {book.author}</li>
        <li><strong>Price:</strong> ${book.price}</li>
        <li><strong>Year:</strong> {book.year}</li>
      </ul>
      <button
        className="btn btn-primary"
        onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  </div>
);

export default BookDetails;
