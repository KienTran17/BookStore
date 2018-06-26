import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    componentDidMount() {

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
                    {/* book 1 ----------------------------------------------------------------------------------------------------*/}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="images/book1.jpg" alt /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                            <a href="#">Name of book</a>
                            </h4>
                            <h5 style={{color: '#f47442'}}>{/*?= $price ?*/}</h5>
                            <p className="card-text">{/*?= $description?*/}</p>
                            <small className="text-muted">★★★★☆</small>
                        </div>
                        <div className="card-footer">
                            <form method="post" action="#">
                            <button type="submit" className="btn btn-primary">Mua</button>
                            </form>
                        </div>
                        </div>
                    </div>
                    {/* book 2 ----------------------------------------------------------------------------------------------------*/}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="images/book2.jpg" alt /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                            <a href="#">Name of book</a>
                            </h4>
                            <h5 style={{color: '#f47442'}}>{/*?= $price ?*/}</h5>
                            <p className="card-text">{/*?= $description?*/}</p>
                            <small className="text-muted">★★★★☆</small>
                        </div>
                        <div className="card-footer">
                            <form method="post" action="#">
                            <button type="submit" className="btn btn-primary">Mua</button>
                            </form>
                        </div>
                        </div>
                    </div>
                    {/* book 3 ----------------------------------------------------------------------------------------------------*/}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="images/book3.jpg" alt /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                            <a href="#">Name of book/a&gt;
                            </a></h4><a href="#">
                            <h5 style={{color: '#f47442'}}>{/*?= $price ?*/}</h5>
                            <p className="card-text">{/*?= $description?*/}</p>
                            <small className="text-muted">★★★★☆</small>
                            </a></div><a href="#">
                            <div className="card-footer">
                            <form method="post" action="#">
                                <button type="submit" className="btn btn-primary">Mua</button>
                            </form>
                            </div>
                        </a></div><a href="#">
                        </a></div><a href="#">
                        {/* book 4 ----------------------------------------------------------------------------------------------------*/}
                    </a><div className="col-lg-4 col-md-6 mb-4"><a href="#">
                        </a><div className="card h-100"><a href="#">
                        </a><a href="#"><img className="card-img-top" src="images/book4.jpg" alt /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                            <a href="#">Name of book</a>
                            </h4>
                            <h5 style={{color: '#f47442'}}>{/*?= $price ?*/}</h5>
                            <p className="card-text">{/*?= $description?*/}</p>
                            <small className="text-muted">★★★★☆</small>
                        </div>
                        <div className="card-footer">
                            <form method="post" action="#">
                            <button type="submit" className="btn btn-primary">Mua</button>
                            </form>
                        </div>
                        </div>
                    </div>
                    {/* book 5 ----------------------------------------------------------------------------------------------------*/}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                        <a href="#"><img className="card-img-top" src="images/book5.jpg" alt /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                            <a href="#">Name of book</a>
                            </h4>
                            <h5 style={{color: '#f47442'}}>{/*?= $price ?*/}</h5>
                            <p className="card-text">{/*?= $description?*/}</p>
                            <small className="text-muted">★★★★☆</small>
                        </div>
                        <div className="card-footer">
                            <form method="post" action="#">
                            <button type="submit" className="btn btn-primary">Mua</button>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
export default connect()(Home)