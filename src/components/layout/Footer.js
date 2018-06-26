import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
    render() {
        return (
            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright © 2018 Trung Tran</p>
                </div>
            </footer>
        );
    }
}
export default connect()(Footer);