import React from 'react';

const BookForm = (props) => {
  let titleInput, authorInput, priceInput, yearInput, imageInput, excerptInput;

  return (
    <form onSubmit={e => {
      e.preventDefault();

      const book = {
        title: titleInput.value,
        author: authorInput.value,
        excerpt: excerptInput.value,
        price: priceInput.value,
        year: yearInput.value,
        imageUrl: imageInput.value
      };

      props.submitBook(book);

      e.target.reset();
    }} >
      <div className="form-group">
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" ref={node => titleInput = node} className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="author">Author: </label>
        <input type="text" name="author" ref={node => authorInput = node} className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="author">Excerpt: </label>
        <textarea type="text" name="excerpt" ref={node => excerptInput = node} className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="price">Price: </label>
        <input type="number" name="price" ref={node => priceInput = node} className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="year">Year: </label>
        <input type="text" name="year" ref={node => yearInput = node} className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image URL: </label>
        <input type="url" name="image" ref={node => imageInput = node} className="form-control" />
      </div>

      <div className="form-group">
        <input type="submit" className="btn btn-primary" value="Save" />
      </div>
    </form>
  );
};

export default BookForm;
