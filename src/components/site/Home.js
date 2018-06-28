import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash/fp';

import { getAllBook } from '../../action/book';
import { addToCart } from '../../action/user';
import Rating from '../../components/Rating';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    componentDidMount() {
        this.props.getAllBook();
    }

    _addToCart(oneBook) {
        this.props.addToCart(oneBook);
    }

    _renderAllBook () {
        const {
            list = {},
        } = this.props.book;
        return (
            !isEmpty(list) &&
            list.map((o, i) => (
                <div key={i} className="w3-col l2 s6 main">
                    <div className="w3-container">
                        <div className="w3-display-container" style={{display: 'flex'}}>
                        <img src={o.image} style={{width: 'auto', height: '100%', margin: 'auto', maxHeight: '273px'}} />
                        <span className="w3-tag w3-display-topleft">{o.type}</span>
                        <div className="w3-display-middle w3-display-hover">
                            <button onClick={() => this._addToCart(o)} className="w3-button w3-black">Buy now <i className="fa fa-shopping-cart" /></button>
                        </div>
                        </div>
                        <p style={{ textAlign: 'center' }}>{o.name}<br />
                        <b>${o.prices}</b> <br />
                        <Rating rate={o.rate} />
                        </p>
                    </div>
                </div>
            ))
        )
    }


    render() {
        return (
            <div className="w3-main">
                <div className="w3-row w3-grayscale container">
                    {
                        this._renderAllBook()
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        book: state.book
    }
};

const mapDispatchToProps = dispatch => ({
    getAllBook: () =>
        dispatch(getAllBook()),
    addToCart: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)