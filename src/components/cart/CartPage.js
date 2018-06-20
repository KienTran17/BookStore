import React, { Component, ProtoTypes } from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class CartPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchCart();
  }

  removeItem(id) {
    this.props.removeItem(id);
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-6">
          <h1>Cart Page</h1>
          <table className="table">
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th />
            </tr>
            {this.props.items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <button className="btn btn-xs btn-danger"
                      onClick={() => {
                        if (confirm(`Remove ${item.title}?`)) {
                          this.removeItem(item.id)
                        }
                      }}>Remove</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

// Map state from store to props
const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(bookActions.fetchCart()),
    removeItem: (id) => dispatch(bookActions.removeItem(id))
  };
};

//
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
