import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
    render() {
        return (
            <div className="w3-black w3-center w3-padding-24">Powered by 
                <a href="https://www.w3schools.com/w3css/default.asp"
                    title="W3.CSS" target="_blank" className="w3-hover-opacity">
                    w3.css
                </a>
            </div>
        );
    }
}
export default connect()(Footer);