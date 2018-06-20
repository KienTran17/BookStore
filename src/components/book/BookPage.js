import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as bookActions from '../../actions/bookActions';
import BookForm from './BookForm';

class BookPage extends Component {
  constructor(props) {
    super(props);
  }

  submitBook(input) {
    this.props.createBook(input);
  }

  deleteBook(id) {
    this.props.deleteBook(id);
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-8">
          <h3>Books</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <td>#</td>
                <td>Title</td>
                <td>Author</td>
                <td>Price</td>
                <td>Year</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {this.props.books.map((book, i) =>
                <tr key={book.id}>
                  <td>{i + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.price}</td>
                  <td>{book.year}</td>
                  <td>
                    <Link to={`/books/${book.id}`}>View</Link>
                    <button onClick={() => {
                      if (confirm(`Delete ${book.title}?`)) {
                        this.deleteBook(book.id);
                      }
                    }} className="btn btn-xs btn-danger">Delete</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="col-sm-4">
          <h3>Books Form</h3>
          <BookForm submitBook={this.submitBook.bind(this)} />
        </div>
      </div>
    );
  }
}

// Map state from store to props
const mapStateToProps = (state) => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: (book) => dispatch(bookActions.createBook(book)),
    deleteBook: (id) => dispatch(bookActions.deleteBook(id))
  };
};

//
export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
