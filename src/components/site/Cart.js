import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty, reduce } from 'lodash/fp';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        const {
            cart = [],
        } = this.props.user;
        const totalCart = cart.length > 0 ? reduce(cart || [], (sum, o) => sum + (o.quantity * o.prices), 0) : 0;
        let total = 0;
        cart.map(o => {
            total = total + o.quantity * o.prices;
        })
        return (
            <div className="w3-main">
                <div className="w3-row w3-grayscale">
                    <div className="row">
                        <div className="col-60">
                            <div className="container">
                                <form action="/action_page.php">
                                    <div className="row">
                                        <div className="col-50">
                                            <h3>Payment</h3>
                                            {/* <label htmlFor="fname">Accepted Cards</label>
                                            <div className="icon-container">
                                                <i className="fa fa-cc-visa" style={{ color: 'navy' }} />
                                                <i className="fa fa-cc-amex" style={{ color: 'blue' }} />
                                                <i className="fa fa-cc-mastercard" style={{ color: 'red' }} />
                                                <i className="fa fa-cc-discover" style={{ color: 'orange' }} />
                                            </div> */}
                                            <label htmlFor="cname">Name on Card</label>
                                            <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                                            <label htmlFor="ccnum">Credit card number</label>
                                            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                                            <label htmlFor="expmonth">Exp Month</label>
                                            <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                                            <div className="row">
                                                <div className="col-50">
                                                    <label htmlFor="expyear">Exp Year</label>
                                                    <input type="text" id="expyear" name="expyear" placeholder={2018} />
                                                </div>
                                                <div className="col-50">
                                                    <label htmlFor="cvv">CVV</label>
                                                    <input type="text" id="cvv" name="cvv" placeholder={352} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <label>
                                        <input type="checkbox" defaultChecked="checked" name="sameadr" /> Shipping address same as billing
              </label>
                                    <input type="submit" defaultValue="Check out" className="btn" />
                                </form>
                            </div>
                        </div>
                        <div className="col-40">
                            <div className="container">
                                <h4>Cart</h4>
                                {
                                    !isEmpty(cart) &&
                                    cart.map((o) => [
                                        <p>{o.name}<span className="price">$ {o.prices}</span> x {o.quantity}</p>,
                                        <hr/>,
                                    ])
                                }
                                <p>Total <span className="price" style={{ color: 'black' }}><b>$ {total}</b></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        book: state.book,
        user: state.user,
    }
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)