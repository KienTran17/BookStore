import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash/fp';

import { getAllBook } from '../../action/book';
import Rating from '../../components/Rating';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    componentDidMount() {
        this.props.getAllBook();
    }

    _renderAllBook () {
        const {
            list = {},
        } = this.props.book;
        return (
            !isEmpty(list) &&
            list.map((o, i) => (
                <div key={i} className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src={o.image} alt /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href="#">{o.name}</a>
                            </h4>
                            <h5 style={{ color: '#f47442' }}>{/*?= $price ?*/}</h5>
                            <p className="card-text">{/*?= $description?*/}</p>
                            <Rating rate={o.rate} />
                        </div>
                        <div className="card-footer">
                            <form method="post" action="#">
                                <button type="submit" className="btn btn-primary">Mua</button>
                            </form>
                        </div>
                    </div>
                </div>
            ))
        )
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h1 className="my-4">Danh mục</h1>
                        <div className="list-group">
                            <a href="#" className="list-group-item link-dnt">Khoa học</a>
                            <a href="#" className="list-group-item link-dnt">Kinh tế</a>
                            <a href="#" className="list-group-item link-dnt">Giáo dục</a>
                            <a href="index.jsp" className="list-group-item">Tất cả</a>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            {
                                this._renderAllBook()
                            }
                        </div>
                    </div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)